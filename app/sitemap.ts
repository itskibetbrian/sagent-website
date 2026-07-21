import type { MetadataRoute } from "next"
import { absoluteUrl, seoRoutes } from "@/lib/seo"
import { blogPosts } from "@/lib/blog-data"
import { helpArticles } from "@/lib/help-data"

function parseDate(dateStr: string): Date {
  const parsed = new Date(dateStr)
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes = seoRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.path === "/" ? lastModified : new Date(),
    changeFrequency: route.path === "/" ? "weekly" : "monthly" as const,
    priority: route.priority,
  }))

  const blogEntries = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: parseDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  const helpEntries = helpArticles.map((article) => ({
    url: absoluteUrl(`/help/${article.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...staticRoutes, ...blogEntries, ...helpEntries]
}
