export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sagent Inc",
    url: "https://gosagent.com",
    logo: "https://gosagent.com/icon.png",
    description: "Fast messaging app for sales reps, recruiters, and support agents. Save messages once, send them anywhere in under 10 seconds.",
    sameAs: [
      "https://x.com/sagent",
      "https://facebook.com/sagent",
      "https://instagram.com/sagent",
    ],
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: "https://gosagent.com/contact",
    },
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://gosagent.com",
    name: "Sagent",
    description: "Fast messaging app for sales professionals",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://gosagent.com/search?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  }
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sagent",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Android, iOS",
    description: "Save your best messages once and send them anywhere in under 10 seconds.",
    url: "https://gosagent.com",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      category: "Free",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
