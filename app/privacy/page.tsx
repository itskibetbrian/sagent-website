import { LegalPage, MarketingPageShell } from "@/components/sagent-marketing-sections"

const sections = [
  {
    title: "Information We Collect",
    body: "Sagent is designed to collect as little information as possible. Any information you choose to enter into the app is used to provide the app experience.",
  },
  {
    title: "How We Use Your Information",
    body: "We use information only to operate, maintain, and improve Sagent, respond to support requests, and provide plan-related functionality.",
  },
  {
    title: "Data Storage",
    body: "All message data is stored locally on your device only. We do not upload, transmit, or store your messages on any external server.",
  },
  {
    title: "Third-Party Services",
    body: "Sagent may link to or interact with third-party services such as app stores or apps you choose from your device share sheet.",
  },
  {
    title: "Children's Privacy",
    body: "Sagent is not intended for children. We do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Updates will be reflected by the last updated date on this page.",
  },
  {
    title: "Contact Us",
    body: "For privacy questions, contact legal@gosagent.com.",
  },
]

export default function PrivacyPage() {
  return (
    <MarketingPageShell>
      <LegalPage title="Privacy Policy" subtitle="Last updated: January 2025" sections={sections} />
    </MarketingPageShell>
  )
}
