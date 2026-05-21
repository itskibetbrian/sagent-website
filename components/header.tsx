import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#EDE9F6]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-[#37322f] font-semibold text-lg">
              Sagent
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/how-it-works" className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">
                How it works
              </Link>
              <Link href="/pricing" className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">
                Pricing
              </Link>
              <Link href="/contact" className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <Button variant="ghost" className="text-[#37322f] hover:bg-[#37322f]/5">
            Log in
          </Button>
        </nav>
      </div>
    </header>
  )
}
