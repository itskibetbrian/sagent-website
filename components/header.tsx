"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

const navLinkClass =
  "text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors hover:text-brand"

const mobileNavLinkClass =
  "block w-full rounded-lg px-4 py-3 text-base font-medium text-[#37322F] transition-colors hover:bg-brand/10 hover:text-brand font-sans"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-12 sm:h-14 md:h-16 lg:h-[84px] w-full items-center justify-center bg-[#EDE9F6]/95 px-4 backdrop-blur-sm sm:px-6 md:px-8 lg:px-0">
        <div className="pointer-events-none absolute left-0 top-6 h-0 w-full border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] sm:top-7 md:top-8 lg:top-[42px]" />

        <div className="relative z-30 flex h-10 w-full max-w-[min(700px,calc(100%-2rem))] items-center justify-between rounded-[50px] bg-[#EDE9F6] px-3 py-1.5 shadow-[0px_0px_0px_2px_white] backdrop-blur-sm sm:h-11 sm:overflow-hidden sm:px-4 md:h-12 md:pr-3">
          <div className="flex min-w-0 items-center justify-center">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
                window.history.pushState(null, "", "/")
              }}
              className="flex flex-col justify-center font-sans text-sm font-medium leading-5 text-[#2F3037] transition-colors hover:text-brand sm:text-base md:text-lg lg:text-xl"
            >
              Sagent
            </Link>
            <nav
              className="hidden flex-row items-start justify-start gap-2 pl-3 sm:flex sm:gap-3 md:gap-4 md:pl-5 lg:pl-5"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop login removed */}

          {/* Mobile menu */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#37322F] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] transition-colors hover:bg-brand/10 hover:text-brand sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" strokeWidth={2} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="z-[60] w-[min(100vw,20rem)] border-[rgba(55,50,47,0.12)] bg-[#EDE9F6] p-0 sm:max-w-xs"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="flex flex-col gap-1 px-4 pt-14 pb-6" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={mobileNavLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {/* Mobile login removed */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="h-12 shrink-0 sm:h-14 md:h-16 lg:h-[84px]" aria-hidden />
    </>
  )
}
