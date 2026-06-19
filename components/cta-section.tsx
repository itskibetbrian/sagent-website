"use client"

import Link from "next/link"
import { ContactModal } from "@/components/contact-modal"

export default function CTASection() {
  return (
    <div id="contact" className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      {/* Content */}
      <div className="section-block-inner max-w-xl border-t border-b border-[rgba(55,50,47,0.12)] relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
              Stop typing. Start closing.
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
              Send your first message in under 60 seconds.
            </div>
          </div>
          <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-3 w-full">
              <ContactModal>
                <button
                  type="button"
                  className="h-10 px-8 py-[6px] w-full sm:w-auto relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center hover:bg-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                    Talk to Sales
                  </span>
                </button>
              </ContactModal>
              <div className="text-center text-[#605A57] text-xs font-normal leading-5 font-sans">
                No credit card &middot; No setup &middot; Available on Android and iOS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

