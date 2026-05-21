import type { Metadata } from "next"
import LandingPage from "@/components/landing-page"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Sagent — Send faster. Close more.",
  description:
    "Save your best messages once. Share them anywhere in under 10 seconds. Built for sellers, recruiters, and support agents who send the same messages every day.",
  path: "/",
})

export default function HomePage() {
  return <LandingPage />
}
