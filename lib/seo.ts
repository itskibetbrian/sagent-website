import type { Metadata } from "next"

export const siteUrl = "https://gosagent.com"
export const siteName = "Sagent"
export const themeColor = "#EDE9F6"
export const defaultDescription =
  "Sagent: Save your best messages once and send them anywhere in under 10 seconds. The fast messaging app for sales reps, recruiters, and support agents."
export const iconPath = "/icon.png"
export const ogImagePath = "/analytics-dashboard.png"
export const ogImage = {
  url: ogImagePath,
  width: 1024,
  height: 569,
  alt: "Sagent dashboard preview",
}

export const seoRoutes = [
  {
    path: "/",
    title: "Sagent — Send faster. Close more.",
    description: defaultDescription,
    priority: 1,
  },
  {
    path: "/how-it-works",
    title: "How Sagent Works | Save & Send Messages Fast",
    description: "Learn how Sagent works: Save messages in templates, organize them in folders, and send personalized replies instantly from any device.",
    priority: 0.9,
  },
  {
    path: "/pricing",
    title: "Sagent Pricing Plans | Free & Pro Options",
    description: "Choose Sagent's flexible pricing: Free with 50 monthly sends or Pro with unlimited sends. No credit card required.",
    priority: 0.8,
  },
  {
    path: "/contact",
    title: "Contact Sagent | Get Support & Feedback",
    description: "Contact Sagent for customer support, product inquiries, partnerships, and feature requests.",
    priority: 0.7,
  },
  {
    path: "/privacy",
    title: "Sagent Privacy Policy | Your Data Protection",
    description: "Sagent's privacy policy: Learn how we protect your messages, handle local storage, and manage third-party integrations securely.",
    priority: 0.4,
  },
  {
    path: "/terms",
    title: "Sagent Terms & Conditions | Legal Agreement",
    description: "Review Sagent's terms and conditions, usage guidelines, and legal agreement for using our messaging platform.",
    priority: 0.4,
  },
] as const

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  noIndex?: boolean
}): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title,
      description,
      images: [
        {
          ...ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImagePath],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
