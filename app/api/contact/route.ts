import { NextRequest, NextResponse } from "next/server"
import { verifyRecaptcha } from "@/lib/recaptcha"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const contactEmail = process.env.CONTACT_EMAIL || "hello@gosagent.com"

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

    const { data, error } = await resend.emails.send({
      from: "Sagent Contact Form <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `[Sagent Contact] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `
    })

    if (error) {
      console.error("[Resend] Contact form error:", error)
      return NextResponse.json({ error: "We're unable to send your message right now. Please try again shortly." }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, message: "Thank you! We received your message and will get back to you soon." },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "We're unable to send your message right now. Please try again shortly." }, { status: 500 })
  }
}
