import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MarketingPageShell } from "@/components/sagent-marketing-sections"
import { BlogPostDetail, blogPosts } from "@/components/blog-section"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts?.find?.((p: any) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Sagent Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sagent.io/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  if (!Array.isArray(blogPosts)) {
    return []
  }
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts?.find?.((p: any) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <MarketingPageShell>
      <BlogPostDetail post={post} />
    </MarketingPageShell>
  )
}

