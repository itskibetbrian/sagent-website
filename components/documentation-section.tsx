"use client"

import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Save your messages in one place",
      description: "Your small business. Or sales, customer support or real estate realtors. Every message in its place. Find anything in one place, not needing to scroll 200 notes.",
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: "Send to any app",
      description: "Open WhatsApp. Open Gmail. Open LinkedIn. Tap share. Sagent is already there. Works in every app without switching.",
      image: "/team-collaboration-interface-with-shared-workspace.jpg",
    },
    {
      title: "Favourites for your most-sent messages",
      description: "Pin your top messages. Price list. Intro. Follow-up. One tap from any conversation, every time.",
      image: "/analytics-dashboard.png",
    },
    {
      title: "Copy when you need to",
      description: "Tap the clipboard icon to copy any message without opening the share sheet. No interruption to your flow.",
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: "No watermark on Pro",
      description: "Free plan adds a small Sent via Sagent line. Pro removes it. Your messages look entirely yours.",
      image: "/analytics-dashboard.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div id="how-it-works" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="section-block-inner max-w-2xl border-b border-[rgba(55,50,47,0.12)]">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="How it works"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Send your messages in just one tap.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 md:px-12 py-8 md:py-16 overflow-hidden flex justify-center items-center">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
          {/* Left Column - Feature Cards */}
          <div className="w-full lg:w-[420px] flex flex-col justify-center gap-4 order-2 lg:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full text-left overflow-hidden flex flex-col justify-start items-start transition-all duration-300 rounded-2xl ${
                    isActive
                      ? "bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.06)] border border-[#E0DEDB]"
                      : "border border-[rgba(2,6,23,0.06)] hover:border-[rgba(2,6,23,0.15)] bg-white/50"
                  }`}
                >
                  <div
                    className={`w-full h-1 bg-[rgba(50,45,43,0.04)] overflow-hidden rounded-t-2xl ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-1 bg-[#322D2B] animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#49423D] text-base font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-sm font-normal leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column - Phone Frame */}
          <div className="w-full lg:flex-1 flex flex-col justify-center items-center order-1 lg:order-2 py-4">
            <div className="relative flex justify-center items-center w-full max-w-[400px]">
              {/* Phone Frame */}
              <div className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] md:w-[360px] md:h-[720px] rounded-[48px] bg-[#1a1a1a] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.15)_inset] transition-all duration-300">
                {/* Dynamic Screen Bezel */}
                <div className="w-full h-full rounded-[38px] overflow-hidden bg-white relative border-[3px] border-[#262626]">
                  {/* Status bar / notch */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-2.5">
                    <div className="w-[100px] h-[22px] bg-[#1a1a1a] rounded-full" />
                  </div>
                  {/* Screenshot */}
                  <img
                    src={cards[activeCard].image}
                    alt={cards[activeCard].title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  {/* Bottom indicator bar */}
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-black/20 rounded-full" />
                </div>
              </div>
              {/* Decorative glow behind phone */}
              <div className="absolute -z-10 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] rounded-full bg-brand/10 blur-[80px]" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
