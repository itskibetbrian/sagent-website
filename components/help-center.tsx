"use client"

import Link from "next/link"
import { useState } from "react"
import { LinkifiedText } from "@/components/linkified-text"
import { helpArticles, type HelpArticle } from "@/lib/help-data"

export function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(helpArticles.map((a) => a.category)))
  const filteredArticles = selectedCategory
    ? helpArticles.filter((a) => a.category === selectedCategory)
    : helpArticles

  return (
    <section className="section-block">
      <div className="section-block-wide flex flex-col justify-start items-stretch gap-10 sm:gap-12">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="text-[#37322F] text-4xl md:text-5xl font-semibold leading-tight font-sans">
            Help Center
          </div>
          <p className="text-[#605A57] text-lg font-normal leading-7 font-sans max-w-[600px]">
            Find answers to common questions about using Sagent.
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
            All Articles
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
          {filteredArticles.map((article) => (
            <Link key={article.id} href={`/help/${article.slug}`}>
              <article className="h-full p-6 border border-[rgba(55,50,47,0.12)] rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex flex-col justify-between h-full gap-3">
                  <div>
                    <span className="text-xs font-medium text-[#605A57] bg-[rgba(237,233,246,0.8)] px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#37322F] leading-tight group-hover:text-brand transition-colors mt-3 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#605A57] leading-6">{article.shortDescription}</p>
                  </div>
                  <div className="pt-4 border-t border-[rgba(55,50,47,0.08)]">
                    <span className="text-sm font-medium text-[#37322F] group-hover:translate-x-1 transition-transform">
                      Learn more →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="w-full p-6 md:p-8 bg-[rgba(237,233,246,0.5)] rounded-lg border border-[rgba(55,50,47,0.12)]">
          <h3 className="text-lg font-semibold text-[#37322F] mb-2">Can't find what you're looking for?</h3>
          <p className="text-sm text-[#605A57] mb-4">
            Contact our support team and we'll help you out.
          </p>
          <Link href="/contact" className="inline-block px-6 py-2 bg-[#37322F] text-white text-sm font-medium rounded-full hover:bg-brand transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HelpArticleDetail({ article }: { article: HelpArticle }) {
  return (
    <section className="section-block">
      <div className="section-block-wide max-w-3xl mx-auto py-12 sm:py-16 md:py-20">
        <article className="w-full">
          <Link href="/help" className="text-sm text-[#605A57] hover:text-brand mb-6 inline-block transition-colors">
            ← Back to Help Center
          </Link>

          <span className="text-xs font-medium text-[#605A57] bg-[rgba(237,233,246,0.8)] px-3 py-1 rounded-full inline-block mb-4">
            {article.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#37322F] leading-tight mb-8 font-sans">
            {article.title}
          </h1>

          <div className="w-full h-56 sm:h-80 md:h-96 bg-gradient-to-br from-[#EDE9F6] to-[#E8DFF4] rounded-lg flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-6xl mb-2">🎓</div>
              <p className="text-[#605A57] font-medium text-sm">{article.title}</p>
            </div>
          </div>

          <div className="prose prose-lg text-[#49423D] leading-relaxed max-w-none">
            {article.content.split("\n\n").map((section, idx) => {
              if (section.startsWith("-") || section.includes("1.") || section.includes("2.")) {
                return (
                  <div key={idx} className="mb-6">
                    {section.split("\n").map((line, lineIdx) => (
                      <LinkifiedText
                        key={lineIdx}
                        text={line}
                        as="div"
                        className="mb-2 text-sm md:text-base leading-7 font-sans"
                      />
                    ))}
                  </div>
                )
              }
              return (
                <LinkifiedText key={idx} text={section} as="p" className="mb-6 text-base leading-7 font-sans" />
              )
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-[rgba(55,50,47,0.12)]">
            <p className="text-sm text-[#605A57] mb-4">Was this helpful?</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-[#E0DEDB] text-[#37322F] text-sm font-medium rounded hover:border-brand hover:text-brand transition-colors">
                Yes, this helped
              </button>
              <button className="px-4 py-2 border border-[#E0DEDB] text-[#37322F] text-sm font-medium rounded hover:border-brand hover:text-brand transition-colors">
                Not quite
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
