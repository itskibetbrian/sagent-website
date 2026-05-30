import { BrandMark } from "@/components/brand-mark"
import Link from "next/link"

export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col lg:flex-row justify-between items-stretch pr-0 pb-8 pt-0 gap-8 lg:gap-0">
        {/* Left Section - Brand & Social */}
        <div className="h-auto px-4 md:px-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <div className="self-stretch flex justify-start items-center gap-3">
            <BrandMark />
          </div>
          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px] font-sans">
            Made for closers worldwide
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-start gap-4">
            {/* Facebook Icon */}
            <a href="https://facebook.com/gosagent" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#49423D"
                  />
                </svg>
              </div>
            </a>

            {/* X (Twitter) Icon */}
            <a href="https://x.com/sagentsales" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="#49423D"
                  />
                </svg>
              </div>
            </a>

            {/* Instagram Icon */}
            <a href="https://instagram.com/sagentsales" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.169a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"
                    fill="#49423D"
                  />
                </svg>
              </div>
            </a>

            {/* YouTube Icon */}
            <a href="https://youtube.com/sagentsales" target="_blank" rel="noopener noreferrer" className="w-6 h-6 relative overflow-hidden hover:opacity-70 transition-opacity">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#49423D"/>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="grid w-full grid-cols-3 gap-x-3 gap-y-4 px-4 sm:gap-x-6 sm:gap-y-6 md:gap-x-8 md:px-8 lg:w-auto lg:gap-12 lg:justify-items-end">
          {/* Product Column */}
          <div className="flex min-w-0 flex-col items-start justify-start gap-2 sm:gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-[10px] sm:text-xs md:text-sm font-medium leading-4 sm:leading-5 font-sans uppercase tracking-wide">
              Product
            </div>
            <div className="flex flex-col items-start justify-start gap-2 sm:gap-3">
              <Link
                href="/how-it-works"
                className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand"
              >
                How it works
              </Link>
              <Link
                href="/pricing"
                className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand"
              >
                Pricing
              </Link>
              <div className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand cursor-pointer">
                Features
              </div>
              <div className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand cursor-pointer">
                Security
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex min-w-0 flex-col items-start justify-start gap-2 sm:gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-[10px] sm:text-xs md:text-sm font-medium leading-4 sm:leading-5 font-sans uppercase tracking-wide">
              Company
            </div>
            <div className="flex flex-col items-start justify-start gap-2 sm:gap-3">
              <div className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand cursor-pointer">
                About us
              </div>
              <div className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand cursor-pointer">
                Careers
              </div>
              <Link
                href="/contact"
                className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand"
              >
                Contact
              </Link>
              <div className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand cursor-pointer">
                Team
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex min-w-0 flex-col items-start justify-start gap-2 sm:gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-[10px] sm:text-xs md:text-sm font-medium leading-4 sm:leading-5 font-sans uppercase tracking-wide">
              Resources
            </div>
            <div className="flex flex-col items-start justify-start gap-2 sm:gap-3">
              <Link
                href="/blog"
                className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand"
              >
                Blog
              </Link>
              <Link
                href="/help"
                className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand"
              >
                Help
              </Link>
              <Link
                href="/terms"
                className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-[#49423D] text-xs sm:text-sm font-normal leading-4 sm:leading-5 font-sans transition-colors hover:text-brand"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full border-t border-[rgba(55,50,47,0.12)] px-4 py-4 md:px-8">
        <div className="text-[#605A57] text-xs md:text-sm font-normal leading-5 font-sans">
          © 2026 Sagent Inc. All rights reserved.
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16 border border-[rgba(3,7,18,0.08)]"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
