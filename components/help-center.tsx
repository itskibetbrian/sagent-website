"use client"

import Link from "next/link"
import { useState } from "react"
import { LinkifiedText } from "@/components/linkified-text"

export interface HelpArticle {
  id: string
  title: string
  category: string
  slug: string
  content: string
  shortDescription: string
}

export const helpArticles: HelpArticle[] = [
  {
    id: "1",
    title: "Getting Started with Sagent",
    category: "Getting Started",
    slug: "getting-started",
    shortDescription: "Download Sagent and create your first message template",
    content: `Getting started with Sagent is simple:

1. Download Sagent from Google Play or the App Store
2. Open the app - no account or sign-in required
3. Explore the pre-loaded Sales and Support message templates
4. Tap any message to preview it
5. Create your first template by tapping "Add Message"
6. Name your template and enter your message
7. Organize into folders for easy access

That's it! You're ready to start sending faster.`,
  },
  {
    id: "2",
    title: "How to Send a Message",
    category: "Usage",
    slug: "how-to-send",
    shortDescription: "Send a saved message to any app on your phone",
    content: `Sending a message with Sagent takes just two taps:

1. Find the message you want to send
2. Tap the message card
3. Your device's share sheet appears
4. Select the app you want to send to (WhatsApp, Gmail, SMS, etc.)
5. The message appears in the compose field
6. Edit if needed, then send

You can send to:
- WhatsApp
- Email (Gmail, Outlook, etc.)
- SMS text messages
- LinkedIn
- Telegram
- iMessage
- Any messaging app that accepts shared text`,
  },
  {
    id: "3",
    title: "Creating and Managing Templates",
    category: "Templates",
    slug: "creating-templates",
    shortDescription: "Save and organize your message templates",
    content: `Create templates for messages you send regularly:

Creating a Template:
1. Tap the + button to add a new message
2. Enter a memorable name (e.g., "Cold Outreach", "Follow-up")
3. Type your message content
4. Add to a folder for organization
5. Tap Save

Tips for Better Templates:
- Use variables like [NAME] and [COMPANY] for personalization
- Keep messages concise but compelling
- Test before adding to your library
- Review and update templates quarterly

Managing Templates:
- Tap Edit to change a template
- Swipe to delete templates you no longer use
- Create folders to organize by purpose`,
  },
  {
    id: "4",
    title: "Organizing with Folders",
    category: "Organization",
    slug: "organizing-folders",
    shortDescription: "Use folders to keep your messages organized",
    content: `Folders help you find messages quickly:

Creating Folders:
1. Tap "New Folder"
2. Enter a folder name (e.g., "Sales Outreach", "Support Replies")
3. Move messages into the folder

Recommended Folder Structure:
- Sales Outreach
- Follow-ups
- Objection Handling
- Support Responses
- Recruiting
- Personal Use

Tips:
- Use clear, descriptive folder names
- Keep no more than 10-15 folders
- Archive old folders if needed
- Consider purpose-based vs. client-based organization`,
  },
  {
    id: "5",
    title: "Using Message Variables",
    category: "Advanced",
    slug: "message-variables",
    shortDescription: "Personalize messages with variables",
    content: `Variables let you personalize messages quickly:

Supported Variables:
- [NAME] - Recipient's name
- [COMPANY] - Company name
- [TITLE] - Job title
- [DATE] - Today's date
- [TIME] - Current time

Using Variables:
1. Create a template with variables
2. When you send, you'll be prompted to fill in each variable
3. The message auto-fills before sending

Example:
"Hi [NAME], I saw you're at [COMPANY] as a [TITLE]. I'd love to connect."

When you send, it becomes:
"Hi John, I saw you're at TechCorp as a Sales Manager. I'd love to connect."`,
  },
  {
    id: "6",
    title: "Understanding Free vs. Pro Plans",
    category: "Pricing",
    slug: "free-vs-pro",
    shortDescription: "What's included in each plan",
    content: `Sagent offers two plans:

Free Plan:
- 50 sends per month (resets monthly)
- Unlimited saved messages
- Unlimited folders
- All message types
- "Sent via Sagent" watermark
- Perfect for trying the app

Pro Plan:
- Unlimited sends (no monthly limit)
- Everything in Free plus:
- Remove the watermark
- Priority support
- Better for heavy users

FAQ:
Q: Do unused sends carry over?
A: No, unused sends reset each month.

Q: Can I upgrade anytime?
A: Yes, upgrade directly in the app.

Q: Can I downgrade?
A: Yes, you can downgrade at any time.`,
  },
  {
    id: "7",
    title: "Privacy & Data Security",
    category: "Security",
    slug: "privacy-security",
    shortDescription: "How Sagent protects your data",
    content: `Your data is yours alone:

How Data is Protected:
- All messages stored locally on your device only
- We do not upload or store your data on servers
- No account or login required
- Your device's security locks protect your messages

What Sagent Collects:
- Usage analytics (non-identifying)
- Crash reports to fix bugs
- Support inquiries if you contact us

What Sagent Doesn't Do:
- We never read your messages
- We never sell your data
- We never share with third parties
- We never use your messages for AI training

Deleting Your Data:
- Uninstall the app to delete all local data
- Export your templates before uninstalling if you want to keep them

For more, see our full Privacy Policy.`,
  },
  {
    id: "8",
    title: "Troubleshooting Common Issues",
    category: "Support",
    slug: "troubleshooting",
    shortDescription: "Solutions to common problems",
    content: `Here are solutions to common issues:

App Won't Open:
- Force close and restart the app
- Restart your device
- Reinstall if the issue persists

Messages Not Sending:
- Check you have permissions for the app you're sending to
- Restart the app
- Ensure you have enough space on your device

Missing Messages:
- Check all folders - you might have organized them
- Search your message library
- Messages are only stored locally - check you didn't uninstall

Slow Performance:
- Delete unused messages
- Clear your app cache
- Restart your device

Can't Export:
- Ensure you have enough storage space
- Try again on a different app (email, cloud storage)

Still need help? Contact support@gosagent.com`,
  },
]

export function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(helpArticles.map((a) => a.category)))
  const filteredArticles = selectedCategory
    ? helpArticles.filter((a) => a.category === selectedCategory)
    : helpArticles

  return (
    <section className="section-block">
      <div className="section-block-wide flex flex-col justify-start items-stretch gap-10 sm:gap-12">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="text-[#37322F] text-4xl md:text-5xl font-semibold leading-tight font-sans">
            Help Center
          </div>
          <p className="text-[#605A57] text-lg font-normal leading-7 font-sans max-w-[600px]">
            Find answers to common questions about using Sagent.
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

        {/* Articles Grid */}
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

        {/* Still need help? */}
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

          {/* Featured Image Section */}
          <div className="w-full h-56 sm:h-80 md:h-96 bg-gradient-to-br from-[#EDE9F6] to-[#E8DFF4] rounded-lg flex items-center justify-center mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-6xl mb-2">🎓</div>
              <p className="text-[#605A57] font-medium text-sm">{article.title}</p>
            </div>
          </div>

          {/* Article Content */}
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

          {/* Navigation */}
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
