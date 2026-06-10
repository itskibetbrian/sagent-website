"use client"

import { useState } from "react"

interface ObjectionItem {
  question: string
  answer: string
}

const objectionsData: ObjectionItem[] = [
  {
    question: "I already save messages in Notes.",
    answer: "Sagent stores all your messages in one app, never lose a message. Send a message quickly with Sagent (much faster than copy pasting).",
  },
  {
    question: "Does it actually work in WhatsApp?",
    answer: "Yes, even there. Open Sagent > tap on message > select WhatsApp > send message.",
  },
  {
    question: "Is it safe to store my sales messages here?",
    answer: "Everything is stored locally on your device. Your messages never leave your phone. No external server. No data risk.",
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

export default function ObjectionsSection() {
  const [openItem, setOpenItem] = useState<number>(0)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index)
  }

  return (
    <div className="section-block w-full">
      <div className="section-block-wide flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Common doubts
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Got doubts about Sagent? We have got answers.
          </div>
        </div>

        {/* Right Column - Accordion Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {objectionsData.map((item, index) => {
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
