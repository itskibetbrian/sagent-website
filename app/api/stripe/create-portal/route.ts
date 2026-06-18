import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { db } from "@/lib/firebase-admin"

export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as { email?: string }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Look up customer ID from Firestore
    const docRef = db
      .collection("subscriptions")
      .doc(email.toLowerCase())
    const doc = await docRef.get()

    if (!doc.exists || !doc.data()?.stripeCustomerId) {
      return NextResponse.json(
        { error: "No subscription found for this email" },
        { status: 404 }
      )
    }

    const stripeCustomerId = doc.data()!.stripeCustomerId

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `${appUrl}/pricing`,
    })

    return NextResponse.json({ url: portalSession.url })
  } catch (error) {
    console.error("[Stripe] Portal session error:", error)
    return NextResponse.json(
      { error: "Failed to create portal session" },
      { status: 500 }
    )
  }
}
