import type { Metadata } from "next"

export const siteUrl = "https://gosagent.com"
export const siteName = "Sagent"
export const themeColor = "#EDE9F6"
export const defaultDescription =
  "Save your best messages once. Share them anywhere in under 10 seconds. Built for sellers, recruiters, and support agents who send the same messages every day."
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
    title: "How Sagent Works",
    description: "Set up Sagent in 60 seconds, save reusable messages, and send polished replies anywhere from your phone.",
    priority: 0.9,
  },
  {
    path: "/pricing",
    title: "Sagent Pricing",
    description: "Simple Sagent pricing for individuals and teams who want to save messages once and send them faster.",
    priority: 0.8,
  },
  {
    path: "/contact",
    title: "Contact Sagent",
    description: "Contact the Sagent team for support, product questions, partnerships, and feedback.",
    priority: 0.7,
  },
  {
    path: "/privacy",
    title: "Sagent Privacy Policy",
    description: "Read how Sagent handles privacy, local message storage, third-party services, and support requests.",
    priority: 0.4,
  },
  {
    path: "/terms",
    title: "Sagent Terms & Conditions",
    description: "Review the terms and conditions for using Sagent and Sagent Inc. services.",
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
