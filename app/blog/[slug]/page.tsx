import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MarketingPageShell } from "@/components/sagent-marketing-sections"
import { BlogPostDetail, blogPosts } from "@/components/blog-section"
import { createPageMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  })
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <MarketingPageShell>
      <BlogPostDetail post={post} />
    </MarketingPageShell>
  )
}
