import { NextRequest, NextResponse } from "next/server"
import { stripe, PLANS, type PlanKey } from "@/lib/stripe"
import { verifyRecaptcha } from "@/lib/recaptcha"

export async function POST(request: NextRequest) {
  try {
    const { email, plan, recaptchaToken } = (await request.json()) as {
      email?: string
      plan?: string
      recaptchaToken?: string
    }

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken || "",
      "checkout"
    )
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { error: recaptchaResult.error || "Spam protection check failed" },
        { status: 403 }
      )
    }

    // Validate
    if (!email || !plan) {
      return NextResponse.json(
        { error: "Email and plan are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    if (plan !== "monthly" && plan !== "yearly") {
      return NextResponse.json(
        { error: "Plan must be 'monthly' or 'yearly'" },
        { status: 400 }
      )
    }

    const selectedPlan = PLANS[plan as PlanKey]

    if (!selectedPlan.priceId) {
      console.error(`[Stripe] Configuration Error: Price ID missing for plan '${plan}'`)
      return NextResponse.json(
        { error: "We're unable to process subscriptions right now. Please try again shortly." },
        { status: 500 }
      )
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

    // Check if customer already exists in Stripe
    const existingCustomers = await stripe.customers.list({
      email: email.toLowerCase(),
      limit: 1,
    })

    let customerId: string | undefined
    if (existingCustomers.data.length > 0) {
      customerId = existingCustomers.data[0].id
    }

    const sessionParams: Record<string, unknown> = {
      mode: "subscription" as const,
      payment_method_types: ["card"],
      line_items: [
        {
          price: selectedPlan.priceId,
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/pricing`,
      metadata: {
        plan,
        email: email.toLowerCase(),
      },
      subscription_data: {
        metadata: {
          plan,
          email: email.toLowerCase(),
          source: "stripe_web",
        },
      },
      allow_promotion_codes: true,
    }

    // If customer exists, use their ID; otherwise pre-fill email
    if (customerId) {
      sessionParams.customer = customerId
    } else {
      sessionParams.customer_email = email.toLowerCase()
    }

    const session = await stripe.checkout.sessions.create(
      sessionParams as Parameters<typeof stripe.checkout.sessions.create>[0]
    )

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[Stripe] Checkout session error:", error)
    return NextResponse.json(
      { error: "We're unable to process subscriptions right now. Please try again shortly." },
      { status: 500 }
    )
  }
}
