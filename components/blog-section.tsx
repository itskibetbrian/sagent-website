"use client"

import Link from "next/link"
import { useState } from "react"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  author: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Sales Message Templates That Convert",
    slug: "10-sales-message-templates-that-convert",
    excerpt: "Proven message templates for sales professionals that drive engagement and close deals faster.",
    content: `Sales messaging is an art and a science. In this guide, we share 10 battle-tested templates that sales reps use daily to reach out, follow up, and convert prospects. Each template is designed to be personalized and optimized for conversion. Learn how to adapt these templates to your industry and audience.

Key templates covered:
1. Cold outreach that gets responses
2. Follow-up sequences that don't feel pushy
3. Value-prop messages that stick
4. Objection handling replies
5. Close-worthy final follow-ups

And 5 more proven performers used by top sales teams.`,
    date: "May 15, 2026",
    category: "Sales",
    readTime: "5 min read",
    author: "Sagent Team",
  },
  {
    id: "2",
    title: "How to Boost Your Response Rate by 40%",
    slug: "boost-response-rate-by-40-percent",
    excerpt: "Data-driven strategies to increase message response rates and engagement metrics.",
    content: `Response rates matter. Whether you're in sales, recruiting, or support, getting people to reply to your messages is crucial. This article breaks down what research shows about message effectiveness and how Sagent users have achieved a 40% boost in response rates.

Discover the psychology behind effective messaging, timing strategies, personalization tactics, and how pre-built templates combined with customization creates the perfect balance for maximum engagement.`,
    date: "May 10, 2026",
    category: "Growth",
    readTime: "8 min read",
    author: "Sagent Team",
  },
  {
    id: "3",
    title: "Recruiter Guide: Message Templates for Passive Candidates",
    slug: "recruiter-message-templates-passive-candidates",
    excerpt: "Reach more passive candidates with compelling, personalized recruitment messages.",
    content: `Recruiting top talent requires a different approach than sales. Passive candidates are less likely to respond to generic outreach. In this guide, we share templates and strategies that experienced recruiters use to stand out in crowded inboxes and attract passive candidates.

Learn about voice in recruiting messages, how to highlight career growth, why personalization matters beyond just using names, and how to build pipelines with consistent, thoughtful outreach.`,
    date: "May 5, 2026",
    category: "Recruiting",
    readTime: "6 min read",
    author: "Sagent Team",
  },
  {
    id: "4",
    title: "Save Hours Weekly: Why Sales Reps Love Sagent",
    slug: "save-hours-weekly-why-sales-reps-love-sagent",
    excerpt: "Real stories from sales professionals about how Sagent saves time and boosts productivity.",
    content: `Time is your most valuable asset in sales. Every minute saved is a minute you can spend closing deals or building relationships. We interviewed dozens of sales reps to understand how Sagent transforms their daily workflow.

From reducing typing time to organizing message libraries to sending faster than ever, discover real-world productivity gains and how they translate to more closes and higher commissions.`,
    date: "April 28, 2026",
    category: "Sales",
    readTime: "7 min read",
    author: "Sagent Team",
  },
  {
    id: "5",
    title: "Best Practices for Building Your Message Library",
    slug: "best-practices-building-message-library",
    excerpt: "How to organize and maintain an effective library of message templates that scale.",
    content: `A well-organized message library is the foundation of using Sagent effectively. This guide covers best practices for categorizing, tagging, and maintaining your templates so they're always accessible and easy to use.

Learn folder structure recommendations, naming conventions that work, when to retire old templates, how to keep templates fresh, and best practices for team sharing and collaboration.`,
    date: "April 20, 2026",
    category: "Tips & Tricks",
    readTime: "5 min read",
    author: "Sagent Team",
  },
]

export function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))
  const filteredPosts = selectedCategory ? blogPosts.filter((p) => p.category === selectedCategory) : blogPosts

  return (
    <section className="w-full flex justify-center items-start border-b border-[rgba(55,50,47,0.12)]">
      <div className="w-full px-4 md:px-12 py-16 md:py-24 flex flex-col justify-start items-start gap-12">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="text-[#37322F] text-4xl md:text-5xl font-semibold leading-tight font-sans">
            Sagent Blog
          </div>
          <p className="text-[#605A57] text-lg font-normal leading-7 font-sans max-w-[600px]">
            Tips, strategies, and stories from sales professionals, recruiters, and support teams using Sagent to close more deals and save time.
          </p>
        </div>

        {/* Category Filter */}
        <div className="w-full flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-[#37322F] text-white"
                : "border border-[#E0DEDB] text-[#49423D] hover:border-[#37322F]"
            }`}
          >
            All Posts
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-[#37322F] text-white"
                  : "border border-[#E0DEDB] text-[#49423D] hover:border-[#37322F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="h-full p-6 border border-[rgba(55,50,47,0.12)] rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex flex-col justify-between h-full gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span className="text-xs font-medium text-[#605A57] bg-[rgba(237,233,246,0.8)] px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#605A57]">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#37322F] leading-tight group-hover:text-[#2A2520] transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#605A57] leading-6">{post.excerpt}</p>
                  </div>
                  <div className="flex justify-between items-end pt-4 border-t border-[rgba(55,50,47,0.08)]">
                    <span className="text-xs text-[#605A57]">{post.date}</span>
                    <span className="text-sm font-medium text-[#37322F] group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogPostDetail({ post }: { post: BlogPost }) {
  return (
    <section className="w-full flex justify-center items-start">
      <div className="w-full max-w-[800px] px-4 md:px-8 py-16 md:py-24">
        {/* Post Header */}
        <article className="w-full">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xs font-medium text-[#605A57] bg-[rgba(237,233,246,0.8)] px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-[#605A57]">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#37322F] leading-tight mb-4 font-sans">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[rgba(55,50,47,0.12)]">
            <span className="text-sm text-[#605A57]">By {post.author}</span>
            <span className="text-sm text-[#605A57]">{post.date}</span>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg text-[#49423D] leading-relaxed max-w-none">
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-base leading-7 font-sans">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 md:p-8 bg-[rgba(237,233,246,0.5)] rounded-lg border border-[rgba(55,50,47,0.12)]">
            <h3 className="text-lg font-semibold text-[#37322F] mb-2">Ready to save more time?</h3>
            <p className="text-sm text-[#605A57] mb-4">
              Download Sagent today and start sending faster. Available on Google Play and the App Store.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.sagent.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#37322F] text-white text-sm font-medium rounded-full hover:bg-[#2A2520] transition-colors"
              >
                Get on Google Play
              </Link>
              <Link
                href="https://apps.apple.com/app/sagent/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#37322F] text-[#37322F] text-sm font-medium rounded-full hover:bg-[#37322F] hover:text-white transition-colors"
              >
                Get on App Store
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
