"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import FooterSection from "@/components/footer-section"

interface SessionData {
  email: string | null
  plan: string
  status: string
  customerName: string | null
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [session, setSession] = useState<SessionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!sessionId) {
      setError("No session ID provided")
      setLoading(false)
      return
    }

    fetch(`/api/stripe/verify-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setSession(data)
        }
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to verify your payment")
        setLoading(false)
      })
  }, [sessionId])

  if (loading) {
    return (
      <div className="section-block-inner max-w-xl py-24">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[rgba(55,50,47,0.06)] flex items-center justify-center">
            <svg
              className="animate-spin h-6 w-6 text-[#605A57]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>
          <p className="text-[#605A57] text-sm font-sans">
            Verifying your payment...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="section-block-inner max-w-xl py-24">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#37322F] font-sans mb-2">
              Something went wrong
            </h1>
            <p className="text-[#605A57] text-sm font-sans">{error}</p>
          </div>
          <Link
            href="/#pricing"
            className="px-6 py-2.5 bg-[#37322F] text-white text-sm font-medium rounded-full hover:bg-primary transition-colors font-sans"
          >
            Back to pricing
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-block-inner max-w-xl py-16 md:py-24">
      <div className="flex flex-col items-center gap-8">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center shadow-[0_0_0_8px_rgba(34,197,94,0.08)]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22C55E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#37322F] font-sans">
            You&apos;re all set!
          </h1>
          <p className="text-[#605A57] text-base font-sans leading-7 max-w-sm">
            Your Pro subscription is now active. Open the Sagent app to access
            all premium features.
          </p>
        </div>

        <div className="w-full max-w-sm bg-white rounded-xl border border-[rgba(55,50,47,0.12)] p-5 flex flex-col gap-3 shadow-sm">
          <div className="flex justify-between items-center text-sm font-sans">
            <span className="text-[#605A57]">Email</span>
            <span className="text-[#37322F] font-medium">
              {session?.email}
            </span>
          </div>
          <div className="h-px bg-[rgba(55,50,47,0.08)]" />
          <div className="flex justify-between items-center text-sm font-sans">
            <span className="text-[#605A57]">Plan</span>
            <span className="text-[#37322F] font-medium">
              Pro{" "}
              {session?.plan === "yearly" ? "Yearly" : "Monthly"}
            </span>
          </div>
          <div className="h-px bg-[rgba(55,50,47,0.08)]" />
          <div className="flex justify-between items-center text-sm font-sans">
            <span className="text-[#605A57]">Status</span>
            <span className="inline-flex items-center gap-1.5 text-green-600 font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Active
            </span>
          </div>
        </div>

        <div className="w-full max-w-sm bg-[rgba(237,233,246,0.5)] rounded-xl border border-[rgba(55,50,47,0.08)] p-5">
          <h3 className="text-sm font-semibold text-[#37322F] font-sans mb-3">
            Next steps
          </h3>
          <ol className="flex flex-col gap-2.5 text-sm text-[#605A57] font-sans">
            <li className="flex gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#37322F] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                1
              </span>
              Open the Sagent app on your phone
            </li>
            <li className="flex gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#37322F] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                2
              </span>
              Make sure you&apos;re signed in with{" "}
              <strong className="text-[#37322F]">{session?.email}</strong>
            </li>
            <li className="flex gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#37322F] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                3
              </span>
              Your Pro features will be unlocked automatically
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Link
            href="https://play.google.com/store/apps/details?id=com.sagent.app"
            className="flex-1 h-11 bg-[#37322F] text-white text-sm font-medium rounded-full flex justify-center items-center hover:bg-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 font-sans"
          >
            Open Sagent app
          </Link>
          <Link
            href="/"
            className="flex-1 h-11 bg-white border border-[rgba(55,50,47,0.12)] text-[#37322F] text-sm font-medium rounded-full flex justify-center items-center hover:border-[#37322F]/30 transition-all duration-300 font-sans"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-container-bordered min-h-screen">
        <Suspense
          fallback={
            <div className="section-block-inner max-w-xl py-24">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(55,50,47,0.06)] flex items-center justify-center">
                  <svg
                    className="animate-spin h-6 w-6 text-[#605A57]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                </div>
                <p className="text-[#605A57] text-sm font-sans">
                  Loading...
                </p>
              </div>
            </div>
          }
        >
          <SuccessContent />
        </Suspense>
      </main>
      <div className="page-container-bordered">
        <FooterSection />
      </div>
    </div>
  )
}
