import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { db } from "@/lib/firebase-admin"
import Stripe from "stripe"

// Disable body parsing — we need the raw body for webhook signature verification
export const dynamic = "force-dynamic"

async function upsertSubscription(
  email: string,
  subscription: Stripe.Subscription,
  plan: string
) {
  const docRef = db.collection("subscriptions").doc(email.toLowerCase())

  const currentPeriodEnd = new Date(
    subscription.items.data[0].current_period_end * 1000
  )

  await docRef.set(
    {
      email: email.toLowerCase(),
      plan,
      status: subscription.status,
      stripeCustomerId:
        typeof subscription.customer === "string"
          ? subscription.customer
          : subscription.customer.id,
      stripeSubscriptionId: subscription.id,
      currentPeriodEnd,
      source: "stripe_web",
      updatedAt: new Date(),
    },
    { merge: true }
  )

  console.log(
    `[Webhook] Subscription upserted for ${email}: ${plan}, status=${subscription.status}, expires=${currentPeriodEnd.toISOString()}`
  )
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const email =
    session.metadata?.email ||
    session.customer_email ||
    session.customer_details?.email

  if (!email) {
    console.error("[Webhook] No email found in checkout session:", session.id)
    return
  }

  const plan = session.metadata?.plan || "monthly"

  // Retrieve the subscription
  if (!session.subscription) {
    console.error("[Webhook] No subscription in session:", session.id)
    return
  }

  const subscriptionId =
    typeof session.subscription === "string"
      ? session.subscription
      : session.subscription.id

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  await upsertSubscription(email, subscription, plan)
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const plan = subscription.metadata?.plan || "monthly"

  // Get customer email
  let email = subscription.metadata?.email

  if (!email) {
    const customer = await stripe.customers.retrieve(
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer.id
    )
    if ("email" in customer && customer.email) {
      email = customer.email
    }
  }

  if (!email) {
    console.error(
      "[Webhook] No email found for subscription:",
      subscription.id
    )
    return
  }

  await upsertSubscription(email, subscription, plan)
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  let email = subscription.metadata?.email

  if (!email) {
    const customer = await stripe.customers.retrieve(
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer.id
    )
    if ("email" in customer && customer.email) {
      email = customer.email
    }
  }

  if (!email) {
    console.error(
      "[Webhook] No email for deleted subscription:",
      subscription.id
    )
    return
  }

  const docRef = db.collection("subscriptions").doc(email.toLowerCase())

  await docRef.set(
    {
      status: "canceled",
      updatedAt: new Date(),
    },
    { merge: true }
  )

  console.log(`[Webhook] Subscription canceled for ${email}`)
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error("[Webhook] STRIPE_WEBHOOK_SECRET is not set")
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    )
  }

  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")

    if (!signature) {
      console.error("[Webhook] Missing stripe-signature header")
      return NextResponse.json(
        { error: "Bad request" },
        { status: 400 }
      )
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      console.error("[Webhook] Signature verification failed:", message)
      return NextResponse.json(
        { error: "Bad request" },
        { status: 400 }
      )
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(
          event.data.object as Stripe.Checkout.Session
        )
        break

      case "customer.subscription.updated":
        await handleSubscriptionUpdated(
          event.data.object as Stripe.Subscription
        )
        break

      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(
          event.data.object as Stripe.Subscription
        )
        break

      case "invoice.payment_succeeded": {
        // Renewal payments — update the period end
        const invoice = event.data.object as Stripe.Invoice
        if (invoice.subscription) {
          const subId =
            typeof invoice.subscription === "string"
              ? invoice.subscription
              : invoice.subscription.id
          const subscription = await stripe.subscriptions.retrieve(subId)
          const plan = subscription.metadata?.plan || "monthly"
          await handleSubscriptionUpdated(subscription)
        }
        break
      }

      case "invoice.payment_failed": {
        // Payment failure — mark as past_due
        const failedInvoice = event.data.object as Stripe.Invoice
        if (failedInvoice.subscription) {
          const subId =
            typeof failedInvoice.subscription === "string"
              ? failedInvoice.subscription
              : failedInvoice.subscription.id
          const subscription = await stripe.subscriptions.retrieve(subId)
          await handleSubscriptionUpdated(subscription)
        }
        break
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[Webhook] Error processing webhook:", error)
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    )
  }
}
