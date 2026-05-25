import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import { defaultDescription, iconPath, ogImage, ogImagePath, siteName, siteUrl, themeColor } from "@/lib/seo"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Sagent — Send faster. Close more.",
    template: "%s | Sagent",
  },
  description: defaultDescription,
  keywords: [
    "message sharing app",
    "sales messaging tool",
    "WhatsApp sales tool",
    "send messages faster",
    "sales templates",
    "message templates",
    "mobile sales app",
    "recruiter tool",
    "support agent tool",
    "fast messaging",
    "message organizer",
    "Sagent",
  ],
  authors: [{ name: "Sagent Inc" }],
  creator: "Sagent Inc",
  publisher: "Sagent Inc",
  category: "productivity",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [{ url: iconPath, type: "image/png" }],
    shortcut: [iconPath],
    apple: [{ url: iconPath, type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Sagent — Send faster. Close more.",
    description: defaultDescription,
    images: [
      {
        ...ogImage,
        alt: "Sagent — Send faster. Close more.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagent — Send faster. Close more.",
    description: defaultDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
