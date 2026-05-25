import type { Metadata } from "next"
import { LegalPage, MarketingPageShell } from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/privacy")!

export const metadata: Metadata = createPageMetadata(route)

const sections = [
  {
    title: "1. Introduction",
    body: "Sagent Inc ('we,' 'us,' 'our,' or 'Company') operates the Sagent mobile application ('App'). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our App. By accessing and using Sagent, you acknowledge that you have read and understood this Privacy Policy.",
  },
  {
    title: "2. Information We Collect",
    body: "Sagent is designed to collect minimal information. The app operates primarily offline, storing all message templates and content locally on your device. We do not collect personal data unless you voluntarily provide it through: (a) Contact forms or support requests, (b) Email communications with our support team, (c) Account registration (if applicable), (d) Anonymized app usage analytics to improve features and performance. We do not collect, access, or transmit your actual message content.",
  },
  {
    title: "3. How We Use Your Information",
    body: "We use collected information solely for the following purposes: (a) Operating, maintaining, and improving Sagent, (b) Responding to support requests and customer service inquiries, (c) Providing plan-related functionality and billing, (d) Fixing bugs and resolving technical issues, (e) Analyzing anonymized usage patterns to understand feature adoption, (f) Complying with legal obligations. Your data is never sold, shared for marketing purposes, or used for any purpose other than those stated herein.",
  },
  {
    title: "4. Local Data Storage",
    body: "All message templates, saved content, folder organization, and user-created data are stored exclusively on your device using your phone's local storage. Sagent Inc does not upload, transmit, store, cache, or access your messages on any Sagent servers, cloud services, or external platforms. Your device has complete control over all data. If you uninstall the App without exporting your data, all local data will be permanently deleted.",
  },
  {
    title: "5. Third-Party Services & Integrations",
    body: "Sagent integrates with messaging apps on your device (WhatsApp, Gmail, SMS, LinkedIn, etc.) through your device's native share sheet. When you share a message using these third-party apps, you are subject to those services' privacy policies and terms. Sagent Inc does not collect data about messages you send through third-party services. The App uses Google Analytics for anonymized usage analytics. Third-party service providers may have access to limited information for service delivery only.",
  },
  {
    title: "6. Data Security",
    body: "Your data remains secure on your device under your phone's built-in security protocols. We recommend using a password, PIN, or biometric lock on your device for additional security. Sagent Inc does not implement server-side encryption because we do not store data on servers. For any contact or support data transmitted to us, we use HTTPS encryption in transit. While we implement reasonable security measures, no system is completely secure, and we cannot guarantee absolute security of your information.",
  },
  {
    title: "7. Your Rights & Data Access",
    body: "You have the right to access, modify, or delete any data you have created within Sagent. Since all data is stored locally on your device, you have complete control. You can export your message templates at any time through the App settings. You can request deletion of any support correspondence by contacting us at legal@gosagent.com. You may request information about what personal data we have collected from you.",
  },
  {
    title: "8. Children's Privacy",
    body: "Sagent is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information and terminate the child's account. Parents or guardians who believe their child has provided information to Sagent should contact us immediately at legal@gosagent.com.",
  },
  {
    title: "9. GDPR & International Data Protection",
    body: "For users in the European Union: Your personal data remains under your control on your device. If you request information about personal data we have collected from you, we will provide it within 30 days as required by the General Data Protection Regulation (GDPR). You can request deletion of personal data by contacting legal@gosagent.com. Sagent complies with GDPR and respects your rights to access, rectification, erasure, and data portability.",
  },
  {
    title: "10. California Privacy Rights",
    body: "California residents have the right to know what personal information is collected, used, shared, or sold. Sagent does not sell personal information. You have the right to delete personal information collected from you. You have the right to opt-out of any future collection of personal information. To exercise these rights, contact legal@gosagent.com with 'California Privacy Request' in the subject line.",
  },
  {
    title: "11. Policy Changes & Updates",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy in the App and updating the 'Last Updated' date. Your continued use of Sagent after any updates constitutes your acceptance of the revised Privacy Policy. We encourage you to review this policy regularly to stay informed.",
  },
  {
    title: "12. Contact & Questions",
    body: "For questions, concerns, or requests related to this Privacy Policy or our privacy practices, please contact us at legal@gosagent.com. You can also reach out through our contact form at sagent.io/contact. We aim to respond to privacy inquiries within 14 business days. For urgent privacy concerns, please include 'Privacy Urgent' in your subject line.",
  },
]

export default function PrivacyPage() {
  return (
    <MarketingPageShell>
      <LegalPage title="Privacy Policy" subtitle="Last updated: May 2026. Effective Date: May 1, 2026" sections={sections} />
    </MarketingPageShell>
  )
}
