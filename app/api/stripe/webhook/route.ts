import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { db } from "@/lib/firebase-admin"
import Stripe from "stripe"

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get("stripe-signature")

  let event: Stripe.Event

  try {
    if (!sig) throw new Error("Missing stripe signature")
    if (!process.env.STRIPE_WEBHOOK_SECRET) throw new Error("Missing stripe webhook secret")
    
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err: any) {
    console.error("[Stripe Webhook] Error verifying signature:", err.message)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        const email = session.customer_details?.email || session.customer_email
        const stripeCustomerId = session.customer as string

        if (email && stripeCustomerId) {
          await db.collection("subscriptions").doc(email.toLowerCase()).set({
            stripeCustomerId: stripeCustomerId,
            subscriptionId: session.subscription,
            status: "active",
            plan: session.metadata?.plan || "unknown",
            updatedAt: new Date().toISOString()
          }, { merge: true })
        }
        break
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        
        const customersSnapshot = await db.collection("subscriptions")
          .where("stripeCustomerId", "==", subscription.customer)
          .get()
          
        if (!customersSnapshot.empty) {
          const doc = customersSnapshot.docs[0]
          await doc.ref.set({
            status: "canceled",
            updatedAt: new Date().toISOString()
          }, { merge: true })
        }
        break
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        
        const customersSnapshot = await db.collection("subscriptions")
          .where("stripeCustomerId", "==", subscription.customer)
          .get()
          
        if (!customersSnapshot.empty) {
          const doc = customersSnapshot.docs[0]
          await doc.ref.set({
            status: subscription.status,
            updatedAt: new Date().toISOString()
          }, { merge: true })
        }
        break
      }
      default:
        console.log(`[Stripe Webhook] Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[Stripe Webhook] Error processing event:", error)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    )
  }
}
