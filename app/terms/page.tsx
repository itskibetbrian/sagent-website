import type { Metadata } from "next"
import { LegalPage, MarketingPageShell } from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/terms")!

export const metadata: Metadata = createPageMetadata(route)

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By downloading, installing, accessing, or using the Sagent mobile application (the 'App'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, do not use the App. Sagent Inc ('Company,' 'We,' 'Us,' 'Our') reserves the right to modify these Terms at any time. Your continued use of the App after modifications constitutes acceptance of the revised Terms.",
  },
  {
    title: "2. Description of Service",
    body: "Sagent is a messaging productivity application that enables users to create, save, organize, and share message templates across multiple messaging platforms. The App operates primarily offline with local data storage on your device. Features may include message templates, folder organization, variable customization, and integration with third-party messaging services. Sagent Inc offers both Free and Premium plans with different feature sets, send limits, and pricing.",
  },
  {
    title: "3. Use License & Restrictions",
    body: "We grant you a limited, non-exclusive, revocable, non-transferable license to use the App for personal, non-commercial purposes only. Prohibited uses include: reverse engineering or decompiling the App, distributing copies without authorization, modifying or creating derivative works, using automated tools to extract data or bypass restrictions, using the App to send spam or unlawful content, harassing or threatening other users, violating third-party intellectual property rights, or accessing the App through unauthorized means.",
  },
  {
    title: "4. Free and Premium Plans",
    body: "Sagent offers a Free plan with 50 sends per month and a Pro Closer plan with unlimited sends. Plan features, limits, and pricing may change with notice. Unused sends do not carry over to the next billing month. Premium plans are non-refundable after purchase except as required by law. Subscription renewals will occur automatically unless canceled before the renewal date. You can cancel your subscription at any time through App settings.",
  },
  {
    title: "5. User Content & Responsibility",
    body: "You retain full ownership of all message templates and content you create within Sagent. You are entirely responsible for all content you create and send through the App. You agree not to create, upload, or send content that is unlawful, harassing, defamatory, obscene, infringes third-party rights, violates export control laws, contains malware, or otherwise violates these Terms. Sagent Inc is not responsible for any content you transmit or the consequences thereof.",
  },
  {
    title: "6. Intellectual Property Rights",
    body: "The App, including its design, interface, code, logos, trademarks, graphics, and all related materials, are owned by or licensed to Sagent Inc. All rights are reserved worldwide. Your use of the App does not grant you ownership, copyright, or intellectual property rights. Third-party libraries, fonts, and services included in the App retain their own intellectual property rights as specified in their respective licenses and attributions.",
  },
  {
    title: "7. Data Storage & Offline Functionality",
    body: "All message templates, folders, variables, and personal data you create are stored exclusively on your device using local storage. Sagent Inc does not store, access, transmit, or maintain copies of your data on company servers or cloud services. You are responsible for maintaining device security and protecting your data. If you uninstall the App without exporting data, all local data will be permanently deleted. See our Privacy Policy for data protection details.",
  },
  {
    title: "8. Third-Party Integrations & Services",
    body: "Sagent integrates with third-party messaging services (WhatsApp, Gmail, SMS, LinkedIn, etc.) through your device's native sharing capabilities. These third-party services are not controlled by Sagent Inc and are subject to their own terms and privacy policies. Your use of third-party services is governed by their terms. Sagent Inc is not responsible for those services' functionality, availability, privacy practices, or security. Links to third-party sites are provided for convenience only.",
  },
  {
    title: "9. Disclaimer of Warranties",
    body: "THE APP IS PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED. SAGENT INC DISCLAIMS ALL EXPRESS AND IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES. SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF IMPLIED WARRANTIES, SO THIS DISCLAIMER MAY NOT APPLY TO YOU.",
  },
  {
    title: "10. Limitation of Liability",
    body: "TO THE FULLEST EXTENT PERMITTED BY LAW, SAGENT INC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF REVENUE, LOSS OF PROFITS, BUSINESS INTERRUPTION, OR COST OF SUBSTITUTE SERVICES. THIS LIMITATION APPLIES EVEN IF SAGENT INC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
  },
  {
    title: "11. Indemnification",
    body: "You agree to indemnify, defend, and hold harmless Sagent Inc and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including attorney fees) arising from: your use of the App, your content or data, your breach of these Terms, your violation of applicable laws, your violation of third-party rights, or any disputes with other users.",
  },
  {
    title: "12. Termination",
    body: "These Terms are effective upon your acceptance and continue until terminated. Sagent Inc may terminate your access to the App immediately and without notice if you violate these Terms. Grounds for termination include sending spam, harassing other users, reverse engineering the App, or unauthorized commercial use. Your rights under these Terms cease immediately upon termination. Upon termination, you must cease all use of the App.",
  },
  {
    title: "13. Governing Law & Jurisdiction",
    body: "These Terms are governed by the laws of the United States, without regard to conflicts of law principles or your state or country of residence. You consent to the exclusive jurisdiction of the federal and state courts located within the United States for resolution of any legal proceedings. Some countries may not allow jurisdiction clauses, so this may not apply to all users.",
  },
  {
    title: "14. Dispute Resolution & Arbitration",
    body: "Before pursuing legal action, you agree to attempt to resolve disputes informally by contacting legal@gosagent.com. If the dispute cannot be resolved informally within 30 days, either party may pursue binding arbitration or litigation as permitted by applicable law. Arbitration shall be conducted on an individual basis, not as a class action.",
  },
  {
    title: "15. Entire Agreement",
    body: "These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Sagent Inc regarding the App. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. Sagent Inc's failure to enforce any provision shall not constitute a waiver of that provision.",
  },
  {
    title: "16. Severability & Waiver",
    body: "If any provision of these Terms is held invalid or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, or if not possible, severed. The invalidity of one provision does not affect the validity of other provisions. No waiver of any provision shall be effective unless in writing and signed by both parties.",
  },
  {
    title: "17. Contact & Legal Inquiries",
    body: "For questions about these Terms, legal concerns, or to report violations, contact legal@gosagent.com. For customer support issues, contact support@gosagent.com. For general inquiries, use our contact form at sagent.io/contact. We aim to respond to legal inquiries within 14 business days. Please include relevant details and 'Legal Inquiry' in your subject line.",
  },
]

export default function TermsPage() {
  return (
    <MarketingPageShell>
      <LegalPage title="Terms & Conditions" subtitle="Last updated: May 2026. Effective Date: May 1, 2026" sections={sections} />
    </MarketingPageShell>
  )
}
