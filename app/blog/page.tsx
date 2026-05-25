import type { Metadata } from "next"
import { MarketingPageShell } from "@/components/sagent-marketing-sections"
import { BlogIndex } from "@/components/blog-section"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Sagent Blog | Sales & Recruiting Tips",
  description: "Read articles about sales messaging, recruiting strategies, and productivity tips from the Sagent blog.",
  path: "/blog",
})

export default function BlogPage() {
  return (
    <MarketingPageShell>
      <BlogIndex />
    </MarketingPageShell>
  )
}
