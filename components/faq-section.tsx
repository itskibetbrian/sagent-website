"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Sagent?",
    answer: "Sagent is a mobile app that lets you save, organize, and instantly send your most-used messages across any messaging platform — WhatsApp, Gmail, LinkedIn, SMS, and more — in under 10 seconds.",
  },
  {
    question: "How does Sagent work?",
    answer: "Save your messages once in Sagent, organize them into folders, then share them to any app using your phone's native share sheet. Tap a message, pick a platform, and send. No copy-pasting, no switching between apps.",
  },
  {
    question: "Who is Sagent built for?",
    answer: "Anyone who sends the same messages repeatedly — sales reps, recruiters, customer support agents, real estate agents, freelancers, and small business owners. If you type the same thing more than once, Sagent saves you time.",
  },
  {
    question: "Does it work in WhatsApp?",
    answer: "Yes. Sagent lives in your share sheet and works in WhatsApp, Gmail, LinkedIn, SMS, and any app that uses the standard share function. Open Sagent › tap on message › select WhatsApp › send.",
  },
  {
    question: "Is my data safe and private?",
    answer: "Yes. The free tier and message templates remain fully local with no account needed. Pro subscribers sign in with Google solely to verify their subscription—no other data is collected.",
  },
  {
    question: "Does Sagent work on iPhone?",
    answer: "Yes. Available on both Android and iOS.",
  },
  {
    question: "Do I need to create an account?",
    answer: "Not to start. You can download and start immediately. An account is only required if you upgrade to Pro to protect your subscription.",
  },
  {
    question: "What is the difference between Free and Pro?",
    answer: "The Free plan gives you 50 message sends per month, smart folders, favourites, and the share sheet integration. Pro unlocks unlimited sends, removes the 'Sent via Sagent' watermark, and provides priority support — all for $8.99/month or $80.99/year.",
  },
  {
    question: "What happens when I hit 50 free sends?",
    answer: "Upgrade to Pro for unlimited sends. Or wait — your count resets every month.",
  },
  {
    question: "Can I organize my messages into folders?",
    answer: "Absolutely. Sagent lets you create custom folders to group your messages by client, campaign, category, or anything else. Pin your most-used messages as favourites for one-tap access.",
  },
  {
    question: "Does Sagent read or store my conversations?",
    answer: "No. Sagent only stores message templates that you create. It never reads, accesses, or transmits your actual conversations on any messaging platform.",
  },
  {
    question: "How do I cancel my Pro subscription?",
    answer: "You can cancel anytime through your Google Play or App Store subscription settings. You will keep Pro benefits until the end of your current billing period.",
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

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number>(0)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index)
  }

  return (
    <div id="faq" className="section-block w-full">
      <div className="section-block-wide flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            FAQ
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Everything you need to know about Sagent, answered.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItem === index

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-brand/10 transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
