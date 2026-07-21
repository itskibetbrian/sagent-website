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
    slug: "best-practices-message-library",
    excerpt: "Organize, categorize, and maintain a powerful message template library.",
    content: `Your message library is the heart of Sagent. A well-organized library means faster sending, better consistency, and less friction in your daily workflow. This guide covers folder structures, naming conventions, template maintenance, and team sharing strategies.`,
    date: "April 20, 2026",
    category: "Productivity",
    readTime: "5 min read",
    author: "Sagent Team",
  },
]
