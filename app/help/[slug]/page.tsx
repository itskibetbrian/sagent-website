import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MarketingPageShell } from "@/components/sagent-marketing-sections"
import { HelpArticleDetail, helpArticles } from "@/components/help-center"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = helpArticles?.find?.((a: any) => a.slug === slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} | Sagent Help Center`,
    description: article.shortDescription,
    openGraph: {
      title: article.title,
      description: article.shortDescription,
      url: `https://gosagent.com/help/${slug}`,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  if (!Array.isArray(helpArticles)) {
    return []
  }
  return helpArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params
  const article = helpArticles?.find?.((a: any) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <MarketingPageShell>
      <HelpArticleDetail article={article} />
    </MarketingPageShell>
  )
}
