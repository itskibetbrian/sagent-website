import type { Metadata } from "next"
import { ContactPageContent, MarketingPageShell } from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/contact")!

export const metadata: Metadata = createPageMetadata(route)

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <ContactPageContent />
    </MarketingPageShell>
  )
}
