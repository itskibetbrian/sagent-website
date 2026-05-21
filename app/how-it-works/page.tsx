import {
  HowItWorksSteps,
  MarketingPageShell,
  SagentFAQ,
  SagentHero,
} from "@/components/sagent-marketing-sections"

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
