"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { LinkifiedText } from "./linkified-text"
import FooterSection from "./footer-section"
import { Header } from "./header"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import FAQSection from "./faq-section"

const featureCards = [
  {
    title: "One-tap send",
    body: "Tap any message card to open the native share sheet. Send to WhatsApp, Gmail, SMS, or any app instantly.",
  },
  {
    title: "Organised library",
    body: "Save unlimited messages across folders. Sales scripts, follow-ups, payment links - all in one searchable library.",
  },
  {
    title: "No keyboard needed",
    body: "Works without any special permissions. No keyboard extension. No setup. Just open, tap, send.",
  },
]

const screenshots = [
  "Your message library",
  "One-tap share",
  "Organised folders",
  "Add new message",
  "Pro upgrade",
]

const testimonials = [
  {
    quote: "I used to retype the same follow-up message 30 times a day. Sagent cut that to one tap. Game changer.",
    name: "James K.",
    role: "Sales Rep, Nairobi",
  },
  {
    quote:
      "My whole price list, payment link, and thank you message ready in seconds. My customers think I'm incredibly organised.",
    name: "Amira S.",
    role: "WhatsApp Seller, Dubai",
  },
  {
    quote:
      "As a recruiter I send the same outreach messages all day. Sagent is the tool I didn't know I needed.",
    name: "David M.",
    role: "Recruiter, Amsterdam",
  },
]

const pricingCards = [
  {
    label: "FREE",
    price: "$0",
    subline: "Forever free",
    features: [
      "50 sends per month",
      "All message categories",
      "Share sheet access",
      "Sent via Sagent tag on messages",
    ],
    cta: "Get Sagent free",
    variant: "secondary",
  },
  {
    label: "PRO",
    badge: "Most Popular",
    price: "$9.99",
    subline: "per month or $89.99 per year",
    note: "Cancel anytime. No contracts. No hidden fees.",
    features: [
      "Unlimited sends",
      "All message categories",
      "No watermark",
    ],
    cta: "Go Pro",
    variant: "primary",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke={light ? "#FF8000" : "#9CA3AF"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhonePlaceholder({ caption }: { caption?: string }) {
  return (
    <div className="w-[min(180px,72vw)] sm:w-[210px] shrink-0 snap-center flex flex-col justify-start items-center gap-4">
      <div className="w-full h-[min(360px,55vh)] sm:h-[420px] p-2 bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[28px]">
        <div className="w-full h-full rounded-[22px] border border-[rgba(255,255,255,0.14)] bg-[#EDE9F6] flex justify-center items-center">
          <div className="w-16 h-1.5 absolute mt-[-360px] bg-[rgba(255,255,255,0.28)] rounded-full" />
          <div className="text-[#605A57] text-sm font-medium leading-5 font-sans">Phone frame</div>
        </div>
      </div>
      {caption && <div className="text-center text-[#49423D] text-sm font-medium leading-5 font-sans">{caption}</div>}
    </div>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="section-block-inner max-w-2xl">
      <h2 className="w-full text-[#49423D] text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.15] font-sans tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="w-full text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function MarketingPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-container-bordered">{children}</main>
      <div className="page-container-bordered">
        <FooterSection />
      </div>
    </div>
  )
}

export function SagentHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section-block pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-14">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-4 sm:gap-6 text-center">
        <h1 className="w-full text-[#37322F] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] font-serif text-balance">
          {title}
        </h1>
        <p className="w-full max-w-xl text-[rgba(55,50,47,0.80)] text-sm sm:text-base md:text-lg font-medium leading-6 sm:leading-7 font-sans text-pretty">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export function SagentHomeSections() {
  return (
    <>
      <section className="section-block">
        <div className="section-block-wide flex flex-col items-center gap-6">
          <p className="text-center text-[#605A57] text-sm font-medium leading-5 font-sans">
            Trusted by sellers and agents across
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-[#E0DEDB] bg-white/50">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="min-h-20 sm:min-h-24 flex justify-center items-center border-r border-b border-[#E0DEDB] text-[#49423D] text-xs sm:text-sm font-medium leading-5 font-sans px-2 text-center last:border-r-0 sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 lg:border-b-0"
              >
                Logo {index + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col">
        <SectionHeader title="Everything you need to send faster" />
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 border-t border-[rgba(55,50,47,0.12)]">
          {featureCards.map((card, index) => (
            <div
              key={card.title}
              className={`p-6 md:p-8 flex flex-col justify-start items-start gap-3 border-b md:border-b-0 border-[rgba(55,50,47,0.12)] ${
                index < featureCards.length - 1 ? "md:border-r" : ""
              }`}
            >
              <div className="text-[#49423D] text-lg font-semibold leading-7 font-sans">{card.title}</div>
              <div className="text-[#605A57] text-sm font-normal leading-6 font-sans">{card.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader title="See Sagent in action" />
        <div className="section-block-wide overflow-x-auto snap-x snap-mandatory md:snap-none md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 justify-start md:justify-items-center items-start gap-4 sm:gap-6 pb-2 md:pb-0">
            {screenshots.map((caption) => (
              <PhonePlaceholder key={caption} caption={caption} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col">
        <SectionHeader title="What closers are saying" />
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`p-6 md:p-8 flex flex-col justify-between items-start gap-8 border-b md:border-b-0 border-[rgba(55,50,47,0.12)] ${
                index < testimonials.length - 1 ? "md:border-r" : ""
              }`}
            >
              <div className="text-[#49423D] text-base font-normal leading-7 font-sans">"{item.quote}"</div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E0DEDB]" />
                <div className="flex flex-col">
                  <div className="text-[#49423D] text-sm font-semibold leading-5 font-sans">{item.name}</div>
                  <div className="text-[#605A57] text-xs font-normal leading-5 font-sans">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-block-inner max-w-xl">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
                Start sending faster today
              </div>
              <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
                Free to download. No account needed.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none">
              <Link
                href="#playstore"
                className="h-10 px-8 py-[6px] w-full sm:w-auto relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center"
              >
                <span className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                  Get it on Google Play
                </span>
              </Link>
              <Link
                href="#appstore"
                className="h-10 px-8 py-[6px] w-full sm:w-auto bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center"
              >
                <span className="flex flex-col justify-center text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                  Download on App Store
                </span>
              </Link>
            </div>
            <div className="text-center text-[#605A57] text-xs font-normal leading-5 font-sans">
              Available on Android and iOS
            </div>
        </div>
      </section>
    </>
  )
}

export function HowItWorksSteps() {
  const steps = [
    {
      number: "01",
      title: "Download Sagent",
      body: "Available free on Google Play and the App Store. No account or sign-in required.",
    },
    {
      number: "02",
      title: "Your library is ready",
      body: "Sagent comes pre-loaded with Sales and Support messages so you can start sending immediately.",
    },
    {
      number: "03",
      title: "Tap to send",
      body: "Tap any message card to open the share sheet. Pick WhatsApp, Gmail, SMS - any app on your phone.",
    },
    {
      number: "04",
      title: "Add your own",
      body: "Save your own scripts, price lists, and follow-ups. Organise them into folders by type or client.",
    },
  ]

  return (
    <section className="w-full flex flex-col border-b border-[rgba(55,50,47,0.12)]">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="self-stretch grid grid-cols-1 md:grid-cols-2 border-b last:border-b-0 border-[rgba(55,50,47,0.12)]"
        >
          <div
            className={`p-6 md:p-12 flex flex-col justify-center items-start gap-4 ${
              index % 2 === 1 ? "md:order-2" : ""
            }`}
          >
            <div className="text-[#847971] text-sm font-medium leading-5 font-sans">{step.number}</div>
            <div className="text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight font-sans tracking-tight">
              {step.title}
            </div>
            <div className="text-[#605A57] text-base font-normal leading-7 font-sans">{step.body}</div>
          </div>
          <div className="p-6 md:p-12 flex justify-center items-center border-t md:border-t-0 md:border-l border-[rgba(55,50,47,0.12)]">
            <PhonePlaceholder />
          </div>
        </div>
      ))}
    </section>
  )
}

export { FAQSection as SagentFAQ }

export function SagentPricing() {
  return (
    <section className="w-full flex flex-col border-b border-[rgba(55,50,47,0.12)]">
      <div className="self-stretch px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {pricingCards.map((plan) => {
          const highlighted = plan.variant === "primary"

          return (
            <div
              key={plan.label}
              className={`self-stretch px-6 py-6 border overflow-hidden flex flex-col justify-start items-start gap-10 ${
                highlighted ? "bg-[#37322F] border-[rgba(55,50,47,0.12)]" : "bg-white border-[#E0DEDB]"
              }`}
            >
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.badge && (
                  <div className="px-[14px] py-[6px] bg-white rounded-[90px] border border-[rgba(2,6,23,0.08)] text-[#37322F] text-xs font-medium leading-3 font-sans">
                    {plan.badge}
                  </div>
                )}
                <div className={highlighted ? "text-[#FBFAF9] text-lg font-medium leading-7 font-sans" : "text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans"}>
                  {plan.label}
                </div>
                <div className={highlighted ? "text-[#F0EFEE] text-5xl font-medium leading-[60px] font-serif" : "text-[#37322F] text-5xl font-medium leading-[60px] font-serif"}>
                  {plan.price}
                </div>
                <div className={highlighted ? "text-[#D2C6BF] text-sm font-medium font-sans" : "text-[#847971] text-sm font-medium font-sans"}>
                  {plan.subline}
                </div>
                {plan.note && <div className="text-[#D2C6BF] text-sm font-normal leading-5 font-sans">{plan.note}</div>}
              </div>
              <Link
                href="#playstore"
                className={`self-stretch px-4 py-[10px] relative shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center hover:scale-[1.02] transition-all duration-300 ${
                  highlighted ? "bg-[#FBFAF9] hover:text-primary hover:border-primary hover:shadow-[0_4px_15px_rgba(124,58,237,0.2)]" : "bg-[#37322F] hover:bg-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                }`}
              >
                <span className={highlighted ? "text-[#37322F] text-[13px] font-medium leading-5 font-sans" : "text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans"}>
                  {plan.cta}
                </span>
              </Link>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <CheckIcon light={highlighted} />
                    </div>
                    <div className={highlighted ? "flex-1 text-[#F0EFEE] text-[12.5px] font-normal leading-5 font-sans" : "flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans"}>
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function LegalPage({
  title,
  subtitle,
  sections,
}: {
  title: string
  subtitle: string
  sections: { title: string; body: string }[]
}) {
  return (
    <>
      <SagentHero title={title} subtitle={subtitle} />
      <section className="section-block">
        <div className="section-block-wide max-w-3xl mx-auto flex flex-col gap-8 sm:gap-9">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-[#49423D] text-2xl font-semibold leading-8 font-sans">{section.title}</h2>
              <LinkifiedText
                text={section.body}
                as="p"
                className="text-[#605A57] text-base font-normal leading-7 font-sans"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export function ContactPageContent() {
  const cards = [
    { title: "General enquiries", email: "hello@gosagent.com" },
    { title: "Bug reports & ideas", email: "support@gosagent.com" },
    { title: "Legal & privacy", email: "legal@gosagent.com" },
  ]

  return (
    <>
      <SagentHero title="Get in touch" subtitle="We read every message." />
      <section className="w-full flex flex-col border-b border-[rgba(55,50,47,0.12)]">
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.email}
              className={`p-6 md:p-8 flex flex-col justify-start items-start gap-3 border-b md:border-b-0 border-[rgba(55,50,47,0.12)] ${
                index < cards.length - 1 ? "md:border-r" : ""
              }`}
            >
              <div className="text-[#49423D] text-lg font-semibold leading-7 font-sans">{card.title}</div>
              <a
                href={`mailto:${card.email}`}
                className="text-[#605A57] text-sm font-normal leading-6 font-sans transition-colors hover:text-brand hover:underline underline-offset-2"
              >
                {card.email}
              </a>
            </div>
          ))}
        </div>
        <div className="section-block-wide flex justify-center">
          <form className="w-full max-w-xl flex flex-col gap-4">
            <Input placeholder="Name" aria-label="Name" className="bg-white border-[#E0DEDB]" />
            <Input placeholder="Email" aria-label="Email" type="email" className="bg-white border-[#E0DEDB]" />
            <Textarea placeholder="Message" aria-label="Message" className="min-h-36 bg-white border-[#E0DEDB]" />
            <Button type="submit" className="self-start bg-[#37322F] hover:bg-[#2A2520] text-white rounded-full px-8">
              Send message
            </Button>
            <div className="text-[#605A57] text-sm font-normal leading-6 font-sans">
              We aim to reply within 24 hours.
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
