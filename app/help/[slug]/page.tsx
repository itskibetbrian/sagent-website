import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MarketingPageShell } from "@/components/sagent-marketing-sections"
import { HelpArticleDetail, helpArticles } from "@/components/help-center"
import { createPageMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = helpArticles.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return createPageMetadata({
    title: article.title,
    description: article.shortDescription,
    path: `/help/${slug}`,
  })
}

export async function generateStaticParams() {
  return helpArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params
  const article = helpArticles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <MarketingPageShell>
      <HelpArticleDetail article={article} />
    </MarketingPageShell>
  )
}
