"use client"

import Link from "next/link"
import { useState } from "react"
import { blogPosts, type BlogPost } from "@/lib/blog-data"

export function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))
  const filteredPosts = selectedCategory ? blogPosts.filter((p) => p.category === selectedCategory) : blogPosts

  return (
    <section className="w-full flex justify-center items-start border-b border-[rgba(55,50,47,0.12)]">
      <div className="section-block-wide flex flex-col justify-start items-stretch gap-10 sm:gap-12">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="text-[#37322F] text-4xl md:text-5xl font-semibold leading-tight font-sans">
            Sagent Blog
          </div>
          <p className="text-[#605A57] text-lg font-normal leading-7 font-sans max-w-[600px]">
            Tips, strategies, and stories from sales professionals, recruiters, and support teams using Sagent to close more deals and save time.
          </p>
        </div>

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

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="h-full p-6 border border-[rgba(55,50,47,0.12)] rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex flex-col justify-between h-full gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span className="text-xs font-medium text-[#605A57] bg-white/50 px-3 py-1 rounded-full">
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
        <article className="w-full">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xs font-medium text-[#605A57] bg-white/50 px-3 py-1 rounded-full">
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

          <div className="w-full h-56 sm:h-80 md:h-96 bg-gradient-to-br from-[#EDE9F6] to-[#E8DFF4] rounded-lg flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-6xl mb-2">📚</div>
              <p className="text-[#605A57] font-medium text-sm">{post.title}</p>
            </div>
          </div>

          <div className="prose prose-lg text-[#49423D] leading-relaxed max-w-none">
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-base leading-7 font-sans">
                {paragraph}
              </p>
            ))}
          </div>

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
