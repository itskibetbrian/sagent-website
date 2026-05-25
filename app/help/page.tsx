import type { Metadata } from "next"
import { MarketingPageShell } from "@/components/sagent-marketing-sections"
import { HelpCenter } from "@/components/help-center"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Sagent Help Center | Getting Started & FAQ",
  description: "Find answers to common questions about using Sagent. Learn how to create templates, send messages, and more.",
  path: "/help",
})

export default function HelpPage() {
  return (
    <MarketingPageShell>
      <HelpCenter />
    </MarketingPageShell>
  )
}
