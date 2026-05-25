import type { Metadata } from "next"
import {
  HowItWorksSteps,
  MarketingPageShell,
  SagentFAQ,
  SagentHero,
} from "@/components/sagent-marketing-sections"
import { createPageMetadata, seoRoutes } from "@/lib/seo"

const route = seoRoutes.find((item) => item.path === "/how-it-works")!

export const metadata: Metadata = createPageMetadata(route)

export default function HowItWorksPage() {
  return (
    <MarketingPageShell>
      <SagentHero
        title="Up and running in 60 seconds"
        subtitle="No account. No permissions. Just download and start sending."
      />
      <HowItWorksSteps />
      <SagentFAQ />
    </MarketingPageShell>
  )
}
