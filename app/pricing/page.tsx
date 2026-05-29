import type { Metadata } from "next"
import { MarketingPageShell, SagentFAQ, SagentHero, SagentPricing } from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/pricing")!

export const metadata: Metadata = createPageMetadata(route)

export default function PricingPage() {
  return (
    <MarketingPageShell>
      <SagentHero title="Simple pricing" subtitle="Start free. Upgrade when you're ready." />
      <SagentPricing />
      <SagentFAQ />
    </MarketingPageShell>
  )
}
