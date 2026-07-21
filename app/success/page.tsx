import type { Metadata } from "next"
import { createPageMetadata, seoRoutes } from "@/lib/seo"
import SuccessPageClient from "./success-content"

const route = seoRoutes.find((item) => item.path === "/success")!

export const metadata: Metadata = createPageMetadata(route)

export default function SuccessPage() {
  return <SuccessPageClient />
}
