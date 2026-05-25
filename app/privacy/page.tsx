import type { Metadata } from "next"
import { LegalPage, MarketingPageShell } from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/privacy")!

export const metadata: Metadata = createPageMetadata(route)

const sections = [
  {
    title: "Information We Collect",
    body: "Sagent is designed to collect minimal information. The app operates primarily offline, storing all content locally on your device. We do not collect or transmit personal data unless you voluntarily provide it through contact forms or support channels. We may collect app usage analytics to improve features and performance.",
  },
  {
    title: "How We Use Your Information",
    body: "We use collected information solely to operate, maintain, and improve Sagent, respond to support requests, provide plan-related functionality, and fix bugs. We analyze anonymized usage patterns to understand feature adoption and user behavior. Your data is never sold, shared, or used for marketing purposes.",
  },
  {
    title: "Local Data Storage",
    body: "All message templates, saved content, and user-created data are stored exclusively on your device. We do not upload, transmit, store, or access your messages on any Sagent servers or external services. Your device controls all data - if you uninstall the app, all local data is deleted unless you've exported it.",
  },
  {
    title: "Third-Party Services & Integrations",
    body: "Sagent integrates with messaging apps on your device (WhatsApp, Gmail, SMS, etc.) through your device's share sheet. When you share a message using these apps, you are subject to those apps' privacy policies. We do not collect data about messages you send through third-party services. Analytics may use services like Google Analytics, which has its own privacy policy.",
  },
  {
    title: "Data Security",
    body: "Your data remains secure on your device under your phone's security protocols. We recommend using a password or biometric lock on your device. We do not encrypt data server-side because we don't store it on servers. For contact/support data sent to us, we use HTTPS encryption in transit.",
  },
  {
    title: "User Rights & Data Access",
    body: "You have the right to access, modify, or delete any data you've created in Sagent. Since data is local, you have complete control. You can export your message templates anytime. If you contact us, you can request deletion of any support correspondence.",
  },
  {
    title: "Children's Privacy",
    body: "Sagent is not intended for children under 13. We do not knowingly collect personal information from children. Parents concerned about their child's use should contact legal@gosagent.com.",
  },
  {
    title: "GDPR & Data Protection",
    body: "For users in the EU: Your data remains under your control on your device. If you request data about your support interactions, we will provide it within 30 days. You can request deletion of personal data by contacting legal@gosagent.com.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy to reflect changes in our practices or legal requirements. Significant changes will be announced via the app. Continued use after updates constitutes acceptance of the revised policy.",
  },
  {
    title: "Contact & Questions",
    body: "For privacy concerns or questions about how we handle your information, contact legal@gosagent.com. We aim to respond to privacy inquiries within 14 business days.",
  },
]

export default function PrivacyPage() {
  return (
    <MarketingPageShell>
      <LegalPage title="Privacy Policy" subtitle="Last updated: May 2026. Effective Date: May 1, 2026" sections={sections} />
    </MarketingPageShell>
  )
}
