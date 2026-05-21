import { MarketingPageShell, SagentFAQ, SagentHero, SagentPricing } from "@/components/sagent-marketing-sections"

export default function PricingPage() {
  return (
    <MarketingPageShell>
      <SagentHero title="Simple pricing" subtitle="Start free. Upgrade when you're ready." />
      <SagentPricing />
      <SagentFAQ />
    </MarketingPageShell>
  )
}
