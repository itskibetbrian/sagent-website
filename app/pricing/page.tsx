import type { Metadata } from "next"
import { MarketingPageShell, SagentFAQ, SagentHero, SagentPricing } from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/pricing")!

export const metadata: Metadata = createPageMetadata(route)

export default function PricingPage() {
  return (
    <MarketingPageShell>
      <SagentHero title="Use it for free now." subtitle="Try Pro later if you are a power user." />
      <SagentPricing />
      <SagentFAQ />
    </MarketingPageShell>
  )
}
