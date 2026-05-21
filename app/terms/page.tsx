import { LegalPage, MarketingPageShell } from "@/components/sagent-marketing-sections"

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using Sagent, you agree to these Terms & Conditions. If you do not agree, please do not use the app.",
  },
  {
    title: "Use of the App",
    body: "Sagent is provided to help you save, organise, and send reusable messages. You are responsible for the content you create and share.",
  },
  {
    title: "Free and Premium Plans",
    body: "Sagent may offer free and premium plans with different limits and features. Plan details, pricing, and availability may change over time.",
  },
  {
    title: "Intellectual Property",
    body: "The app, brand, interface, and related materials belong to Nogeybix Labs. Your saved messages remain your own content.",
  },
  {
    title: "Disclaimer of Warranties",
    body: "Sagent is provided as is, without warranties of any kind. We do not guarantee uninterrupted or error-free operation.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Nogeybix Labs is not liable for indirect, incidental, or consequential damages from use of the app.",
  },
  {
    title: "Changes to Terms",
    body: "We may update these terms from time to time. Continued use of Sagent after updates means you accept the revised terms.",
  },
  {
    title: "Contact Us",
    body: "For legal questions, contact legal@gosagent.com.",
  },
]

export default function TermsPage() {
  return (
    <MarketingPageShell>
      <LegalPage title="Terms & Conditions" subtitle="Last updated: January 2025" sections={sections} />
    </MarketingPageShell>
  )
}
