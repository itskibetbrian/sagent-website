import { NextRequest, NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { email, recaptchaToken } = formData

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken || "",
      "newsletter"
    )
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { error: recaptchaResult.error || "Spam protection check failed" },
        { status: 403 }
      )
    }

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID
    
    if (audienceId) {
      const { data, error } = await resend.contacts.create({
        email: email,
        audienceId: audienceId,
      })

      if (error) {
        console.error("[Resend] Newsletter subscription error:", error)
        return NextResponse.json({ error: "We're unable to process your subscription right now. Please try again shortly." }, { status: 500 })
      }
    } else {
      console.warn("[Resend] RESEND_AUDIENCE_ID is not set. Cannot add subscriber:", email)
    }

    return NextResponse.json(
      { success: true, message: "Thanks for subscribing! Check your email for confirmation." },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json({ error: "We're unable to process your subscription right now. Please try again shortly." }, { status: 500 })
  }
}
