import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json(
        { error: "session_id is required" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    const email =
      session.metadata?.email ||
      session.customer_email ||
      session.customer_details?.email

    return NextResponse.json({
      email,
      plan: session.metadata?.plan || "monthly",
      status: session.payment_status,
      customerName: session.customer_details?.name || null,
    })
  } catch (error) {
    console.error("[Stripe] Verify session error:", error)
    return NextResponse.json(
      { error: "We're unable to verify your session at this moment. Please try again shortly." },
      { status: 500 }
    )
  }
}
