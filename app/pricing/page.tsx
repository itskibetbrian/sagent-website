import type { Metadata } from "next"
import { MarketingPageShell, SagentFAQ, SagentHero } from "@/components/sagent-marketing-sections"
import WebPricing from "@/components/web-pricing"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/pricing")!

export const metadata: Metadata = createPageMetadata(route)

export default function PricingPage() {
  return (
    <MarketingPageShell>
      <SagentHero title="Save more on the web." subtitle="Subscribe here and save vs in-app pricing. Your Pro access syncs automatically to the Sagent app." />
      <WebPricing />
      <SagentFAQ />
    </MarketingPageShell>
  )
}
