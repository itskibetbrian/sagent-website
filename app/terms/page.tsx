import type { Metadata } from "next"
import { LegalPage, MarketingPageShell } from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/terms")!

export const metadata: Metadata = createPageMetadata(route)

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By downloading, installing, or using Sagent (the 'App'), you agree to be bound by these Terms & Conditions ('Terms'). If you do not agree to these Terms, do not use the App. Sagent Inc ('Company,' 'We,' 'Us') reserves the right to modify these Terms at any time.",
  },
  {
    title: "2. Description of Service",
    body: "Sagent is a messaging productivity app that allows users to save message templates, organize them into folders, and quickly send them through various messaging platforms. The App operates primarily offline with local data storage. We offer both free and premium plans with different features and send limits.",
  },
  {
    title: "3. Use License",
    body: "We grant you a limited, non-exclusive, revocable license to use the App for personal use only. Prohibited uses include: reverse engineering, distributing copies, using the App for commercial purposes without permission, modifying or creating derivative works, using automated tools to extract data, or using the App to send spam or unlawful content.",
  },
  {
    title: "4. Free and Premium Plans",
    body: "Sagent offers a Free plan with 50 sends per month and a Pro Closer plan with unlimited sends. Plan limits, features, and pricing may change with notice. Unused sends do not carry over to the next month. Premium plans may include additional features subject to these Terms.",
  },
  {
    title: "5. User Content & Responsibility",
    body: "You retain ownership of all message templates and content you create. You are entirely responsible for all content you create and send through Sagent. You agree not to create or send content that is unlawful, harassing, defamatory, obscene, or violates third-party rights. Sagent Inc is not responsible for content you transmit.",
  },
  {
    title: "6. Intellectual Property Rights",
    body: "The App, including its design, interface, code, logos, and all related materials, are owned by or licensed to Sagent Inc. All rights are reserved. Your use of the App does not grant you ownership rights. Third-party libraries and services retain their own intellectual property rights as specified in their licenses.",
  },
  {
    title: "7. Data Storage & Privacy",
    body: "All message templates and personal data you create are stored locally on your device only. Sagent Inc does not store, access, or transmit your message content to servers. You are responsible for maintaining device security. If you uninstall the App without exporting data, all local data will be deleted. For more details, see our Privacy Policy.",
  },
  {
    title: "8. Third-Party Integrations",
    body: "Sagent integrates with messaging apps (WhatsApp, Gmail, SMS, LinkedIn, etc.) through your device. These third-party services are not controlled by Sagent Inc. Your use of third-party apps is governed by their terms. Sagent Inc is not responsible for those services' functionality or privacy practices.",
  },
  {
    title: "9. Warranty Disclaimer",
    body: "THE APP IS PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND. SAGENT INC DISCLAIMS ALL EXPRESS AND IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that the App will be uninterrupted, error-free, or secure.",
  },
  {
    title: "10. Limitation of Liability",
    body: "TO THE FULLEST EXTENT PERMITTED BY LAW, SAGENT INC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP. THIS LIMITATION APPLIES EVEN IF SAGENT INC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
  },
  {
    title: "11. Indemnification",
    body: "You agree to indemnify and hold harmless Sagent Inc from any claims, damages, losses, or expenses arising from: your use of the App, your content, your breach of these Terms, or your violation of applicable laws. This includes attorney fees and court costs.",
  },
  {
    title: "12. Termination",
    body: "These Terms are effective until terminated. Sagent Inc may terminate your access to the App if you violate these Terms. Grounds for termination include sending spam or harassing content, reverse engineering, or unauthorized commercial use. Upon termination, your right to use the App ceases immediately.",
  },
  {
    title: "13. Governing Law",
    body: "These Terms are governed by the laws of the United States, without regard to conflicts of law principles. Any legal action or proceeding shall be brought exclusively in the federal or state courts located in the United States.",
  },
  {
    title: "14. Dispute Resolution",
    body: "Before pursuing legal action, you agree to contact legal@gosagent.com to attempt to resolve disputes informally. If informal resolution fails, disputes shall be resolved through binding arbitration or in court, as permitted by law.",
  },
  {
    title: "15. Entire Agreement",
    body: "These Terms, along with the Privacy Policy, constitute the entire agreement between you and Sagent Inc regarding the App. If any provision is found invalid, the remaining provisions shall continue in effect.",
  },
  {
    title: "16. Contact Information",
    body: "For questions about these Terms, contact legal@gosagent.com. We aim to respond to legal inquiries within 14 business days. For support issues, contact support@gosagent.com.",
  },
]

export default function TermsPage() {
  return (
    <MarketingPageShell>
      <LegalPage title="Terms & Conditions" subtitle="Last updated: May 2026. Effective Date: May 1, 2026" sections={sections} />
    </MarketingPageShell>
  )
}
