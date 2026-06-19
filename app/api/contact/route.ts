import { NextRequest, NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { name, email, subject, message, recaptchaToken } = formData

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken || "",
      "contact"
    )
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { error: recaptchaResult.error || "Spam protection check failed" },
        { status: 403 }
      )
    }

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Here you would integrate with an email service like SendGrid, Resend, or similar
    // For now, we'll log the message and return success
    console.log("[v0] Contact form submission:", { name, email, subject, message })

    // TODO: Replace with actual email sending service
    // const response = await sendEmail({
    //   to: "hello@gosagent.com",
    //   replyTo: email,
    //   subject: `[Sagent Contact] ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, "<br/>")}</p>
    //   `
    // })

    return NextResponse.json(
      { success: true, message: "Thank you! We received your message and will get back to you soon." },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}
