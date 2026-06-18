"use client"

import React, { useState } from "react"

import Link from "next/link"
import SmartSimpleBrilliant from "@/components/smart-simple-brilliant"
import YourWorkInSync from "@/components/your-work-in-sync"
import EffortlessIntegration from "@/components/effortless-integration-updated"
import NumbersThatSpeak from "@/components/numbers-that-speak"
import DocumentationSection from "@/components/documentation-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"
import { SagentHomeSections, SagentPricing } from "@/components/sagent-marketing-sections"
import FoundersNoteSection from "@/components/founders-note-section"

// Reusable Badge Component
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

export default function LandingPage() {
  const [activeVideo, setActiveVideo] = useState(0)
  const videos = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  ]

  return (
    <div className="page-shell">
      <Header />
      <div className="page-container-bordered min-h-screen relative">
          {/* Side borders — desktop only */}
          <div className="hidden lg:block w-[1px] h-full absolute left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />
          <div className="hidden lg:block w-[1px] h-full absolute right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0 pointer-events-none" />

          <div className="w-full flex flex-col items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-12 relative z-10">
            {/* Start sending faster today CTA Section */}
            <section className="section-block pt-12 sm:pt-16 md:pt-20 lg:pt-24 relative overflow-hidden min-h-[400px] flex items-center justify-center">
              {/* Background Video Player */}
              <div className="absolute inset-0 w-full h-full z-0 bg-[#EDE9F6]">
                {videos.map((src, idx) => (
                  <video
                    key={src}
                    src={src}
                    autoPlay={idx === activeVideo}
                    muted
                    playsInline
                    onEnded={() => setActiveVideo((prev) => (prev + 1) % videos.length)}
                    className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-1000 ${
                      idx === activeVideo ? "opacity-30" : "opacity-0"
                    }`}
                    style={{ pointerEvents: "none" }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#EDE9F6]/80" />
              </div>

              <div className="section-block-inner max-w-xl relative z-10">
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
                      Send any message in under 10 seconds.
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
                      Save your best messages. Send to any app. Done.
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.sagent.app"
                      className="h-10 px-8 py-[6px] w-full sm:w-auto relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center hover:bg-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                        Get it on Google Play
                      </span>
                    </Link>
                    <Link
                      href="#appstore"
                      className="h-10 px-8 py-[6px] w-full sm:w-auto bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:text-primary hover:border-primary hover:shadow-[0_4px_15px_rgba(124,58,237,0.2)] hover:scale-[1.02] transition-all duration-300 border border-[rgba(55,50,47,0.12)]"
                    >
                      <span className="flex flex-col justify-center text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                        Download on App Store
                      </span>
                    </Link>
                  </div>
              </div>
            </section>

            {/* Social Proof Section */}
            <div className="section-block">
              <div className="section-block-inner max-w-2xl">
                <div className="w-full flex flex-col justify-center items-center gap-3 sm:gap-4">
                  <Badge
                    icon={
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
                        <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
                        <rect x="2" y="4" width="1" height="1" fill="#37322F" />
                        <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
                        <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
                        <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
                        <rect x="8" y="2" width="1" height="1" fill="#37322F" />
                        <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
                        <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
                        <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
                        <rect x="8" y="5" width="1" height="1" fill="#37322F" />
                        <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
                      </svg>
                    }
                    text="Trusted by closers"
                  />
                  <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[1.15] font-sans tracking-tight text-balance">
                    Confidence backed by results
                  </div>
                  <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                    Sellers, recruiters, and support agents
                    <br className="hidden sm:block" />
                    send faster with Sagent every day.
                  </div>
                </div>
              </div>

              {/* Logo Grid */}
              <div className="w-full border-[rgba(55,50,47,0.12)] flex justify-center items-stretch border-t">
                <div className="hidden sm:block w-4 md:w-8 lg:w-12 shrink-0 relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                  {/* Logo Grid - Responsive grid */}
                  {Array.from({ length: 8 }).map((_, index) => {
                    const isMobileFirstColumn = index % 2 === 0
                    const isMobileLastColumn = index % 2 === 1
                    const isDesktopFirstColumn = index % 4 === 0
                    const isDesktopLastColumn = index % 4 === 3
                    const isMobileBottomRow = index >= 6
                    const isDesktopTopRow = index < 4
                    const isDesktopBottomRow = index >= 4

                    return (
                      <div
                        key={index}
                        className={`group h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex justify-center items-center gap-1 xs:gap-2 sm:gap-3 border-b border-[rgba(227,226,225,0.5)] transition-colors duration-300 hover:bg-primary-soft ${
                          index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b"
                        } ${index >= 6 ? "border-b" : ""} ${isMobileFirstColumn ? "border-r-[0.5px]" : ""} sm:border-r-[0.5px] sm:border-l-0 ${
                          isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"
                        } ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"} ${
                          isDesktopTopRow ? "md:border-b-[0.5px]" : ""
                        } ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""} border-[#E3E2E1]`}
                      >
                        <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 relative shadow-[0px_-4px_8px_rgba(255,255,255,0.64)_inset] overflow-hidden rounded-full flex items-center justify-center bg-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all duration-300">
                          <img 
                            src={["/slack-logo.svg", "/whatsapp-icon.svg", "/gmail-icon.svg", "/telegram-icon.svg", "/linkedin-icon.svg", "/instagram-icon.svg", "/messages-icon.svg", "/facebook-messenger-icon.svg"][index]} 
                            alt={["Slack","WhatsApp","Email","Telegram","LinkedIn","Instagram","SMS","Messenger"][index]} 
                            className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain" 
                          />
                        </div>
                        <div className="text-center flex justify-center flex-col text-[#37322F] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight md:leading-9 font-sans">
                          {["Slack","WhatsApp","Email","Telegram","LinkedIn","Instagram","SMS","Messenger"][index]}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="hidden sm:block w-4 md:w-8 lg:w-12 shrink-0 relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Section */}
            <div className="section-block">
              <div className="section-block-inner max-w-2xl">
                <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
                  <Badge
                    icon={
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                        <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                        <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                        <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                      </svg>
                    }
                    text="How it works"
                  />
                  <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[1.15] font-sans tracking-tight text-balance">
                    Built for absolute clarity and focused work
                  </div>
                  <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                    Stay focused with tools that organize, connect
                    <br />
                    and turn information into confident decisions.
                  </div>
                </div>
              </div>

              {/* Bento Grid Content */}
              <div className="w-full flex justify-center items-stretch">
                <div className="hidden sm:block w-4 md:w-8 lg:w-12 shrink-0 relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                  {/* Top Left - Smart. Simple. Brilliant. */}
                  <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 transition-colors duration-300 hover:bg-primary-soft">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                        Save. Organize. Send.
                      </h3>
                      <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                        Keep your messages in smart folders so you can find and reuse them instantly every time.
                      </p>
                    </div>
                    <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                      <SmartSimpleBrilliant
                        width="100%"
                        height="100%"
                        theme="light"
                        className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
                      />
                    </div>
                  </div>

                  {/* Top Right - Your work, in sync */}
                  <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 transition-colors duration-300 hover:bg-primary-soft">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                        Message faster than ever
                      </h3>
                      <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                        Send personalized messages to your network instantly without repetitive typing or manual work.
                      </p>
                    </div>
                    <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center">
                      <YourWorkInSync
                        width="100%"
                        height="100%"
                        theme="light"
                        className="w-full max-w-[400px] h-auto scale-75 sm:scale-90"
                      />
                    </div>
                  </div>

                  {/* Bottom Left - Effortless integration */}
                  <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent transition-colors duration-300 hover:bg-primary-soft">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                        Works everywhere you do
                      </h3>
                      <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                        Use Sagent on any messaging platform - LinkedIn, email, SMS, WhatsApp, and more.
                      </p>
                    </div>
                    <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
                      <div className="w-full h-full flex items-center justify-center bg-transparent">
                        <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
                      </div>
                      {/* Gradient mask for soft bottom edge */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#EDE9F6] to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Bottom Right - Numbers that speak */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 transition-colors duration-300 hover:bg-primary-soft">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                        10x your productivity
                      </h3>
                      <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                        Save hours every week by sending more messages faster with templates and smart organization.
                      </p>
                    </div>
                    <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <NumbersThatSpeak
                          width="100%"
                          height="100%"
                          theme="light"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Gradient mask for soft bottom edge */}
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#EDE9F6] to-transparent pointer-events-none"></div>
                      {/* Fallback content if component doesn't render */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20 hidden">
                        <div className="flex flex-col items-center gap-2 p-4">
                          <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-sm text-green-600">Growth Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block w-4 md:w-8 lg:w-12 shrink-0 relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation Section */}
            <DocumentationSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Pricing Section */}
            <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
              <div className="section-block-inner max-w-2xl pt-12 pb-6">
                <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.15] font-sans tracking-tight text-balance">
                  Use it for free now. Try Pro later if you are a power user.
                </div>
              </div>
              <SagentPricing />
              <div className="w-full flex flex-col items-center gap-3 py-8 px-4">
                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.sagent.app"
                    className="h-10 px-8 py-[6px] w-full sm:w-auto relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center hover:bg-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans">
                      Get it on Google Play
                    </span>
                  </Link>
                  <Link
                    href="#appstore"
                    className="h-10 px-8 py-[6px] w-full sm:w-auto bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:text-primary hover:border-primary hover:shadow-[0_4px_15px_rgba(124,58,237,0.2)] hover:scale-[1.02] transition-all duration-300 border border-[rgba(55,50,47,0.12)]"
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
            </div>



            {/* FAQ Section */}
            <FAQSection />

            {/* Founder's Note Section */}
            <FoundersNoteSection />

            {/* CTA Section */}
            <CTASection />

            {/* Footer Section */}
            <FooterSection />
          </div>
      </div>
    </div>
  )
}
