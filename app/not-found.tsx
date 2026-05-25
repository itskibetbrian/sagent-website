import Link from "next/link"

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-4 bg-[#EDE9F6]">
      <div className="flex flex-col justify-center items-center gap-6 max-w-[600px]">
        {/* 404 Number */}
        <div className="text-7xl md:text-9xl font-bold text-[#37322F] leading-none">
          404
        </div>

        {/* Error Message */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#37322F] mb-2 font-sans">
            Page Not Found
          </h1>
          <p className="text-lg text-[#605A57] font-normal font-sans leading-7">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Illustration or Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-[rgba(237,233,246,0.8)] to-[rgba(237,233,246,0.4)] rounded-lg flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              fill="#37322F"
            />
          </svg>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="flex-1 sm:flex-none px-8 py-3 bg-[#37322F] text-white text-sm font-medium rounded-full hover:bg-[#2A2520] transition-colors text-center"
          >
            Go to Home
          </Link>
          <Link
            href="/help"
            className="flex-1 sm:flex-none px-8 py-3 border border-[#37322F] text-[#37322F] text-sm font-medium rounded-full hover:bg-[#37322F] hover:text-white transition-colors text-center"
          >
            Visit Help Center
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-6 border-t border-[rgba(55,50,47,0.12)] text-center">
          <p className="text-sm text-[#605A57] mb-4">You might find this helpful:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link href="/how-it-works" className="text-sm text-[#37322F] hover:underline">
              How it works
            </Link>
            <span className="text-[#605A57] hidden sm:inline">•</span>
            <Link href="/pricing" className="text-sm text-[#37322F] hover:underline">
              Pricing
            </Link>
            <span className="text-[#605A57] hidden sm:inline">•</span>
            <Link href="/contact" className="text-sm text-[#37322F] hover:underline">
              Contact us
            </Link>
            <span className="text-[#605A57] hidden sm:inline">•</span>
            <Link href="/blog" className="text-sm text-[#37322F] hover:underline">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
