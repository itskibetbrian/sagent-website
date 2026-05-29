import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { email } = formData

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // TODO: Integrate with email service (Mailchimp, ConvertKit, Substack, etc.)
    console.log("[v0] Newsletter subscription:", { email, timestamp: new Date().toISOString() })

    return NextResponse.json(
      { success: true, message: "Thanks for subscribing! Check your email for confirmation." },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}
