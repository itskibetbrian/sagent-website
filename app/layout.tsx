import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
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
  title: {
    default: "Sagent — Send faster. Close more.",
    template: "%s | Sagent",
  },
  description: "Save your best messages once. Share them anywhere in under 10 seconds. Built for sellers, recruiters, and support agents who send the same messages every day.",
  keywords: [
    "message sharing app",
    "sales messaging tool",
    "WhatsApp sales tool",
    "send messages faster",
    "sales scripts app",
    "text share platform",
    "mobile sales tool",
    "Sagent",
  ],
  authors: [{ name: "Nogeybix Labs" }],
  creator: "Nogeybix Labs",
  metadataBase: new URL("https://gosagent.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gosagent.com",
    siteName: "Sagent",
    title: "Sagent — Send faster. Close more.",
    description: "Save your best messages once. Share them anywhere in under 10 seconds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sagent — Send faster. Close more.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagent — Send faster. Close more.",
    description: "Save your best messages once. Share them anywhere in under 10 seconds.",
    images: ["/og-image.png"],
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
  themeColor: "#EDE9F6",
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
