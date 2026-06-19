"use client"

import { useState } from "react"
import Link from "next/link"
import { useRecaptcha } from "@/hooks/use-recaptcha"
import { SpotlightCard } from "@/components/ui/spotlight-card"

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3L4.5 8.5L2 6"
        stroke={light ? "#FF8000" : "#9CA3AF"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const plans = [
  {
    key: "free" as const,
    label: "FREE",
    price: "$0",
    subline: "Forever free",
    features: [
      "50 sends per month",
      "All message categories",
      "Share sheet access",
      "Sent via Sagent tag on messages",
    ],
    cta: "Get Sagent free",
    variant: "secondary" as const,
  },
  {
    key: "pro" as const,
    label: "PRO",
    badge: "Save vs App Store",
    monthlyPrice: "$8.99",
    yearlyPrice: "$80.99",
    monthlySubline: "",
    yearlySubline: "Save $26.89",
    appMonthlyPrice: "$9.99/mo on app",
    appYearlyPrice: "$89.99/yr on app",
    features: [
      "Unlimited sends",
      "All message categories",
      "No watermark",
      "Priority support",
    ],
    cta: "Subscribe now",
    variant: "primary" as const,
  },
]

export default function WebPricing() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly"
  )
  const [showCheckout, setShowCheckout] = useState(false)
  const [checkoutEmail, setCheckoutEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const executeRecaptcha = useRecaptcha()

  const handleSubscribe = () => {
    setError("")
    setShowCheckout(true)
  }

  const handleCheckout = async () => {
    if (!checkoutEmail) {
      setError("Please enter your email address")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(checkoutEmail)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const recaptchaToken = await executeRecaptcha("checkout")

      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: checkoutEmail,
          plan: billingInterval,
          recaptchaToken,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
        setIsLoading(false)
        return
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setError("Network error. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <>
      <section className="w-full flex flex-col border-b border-[rgba(55,50,47,0.12)]">
        {/* Billing toggle */}
        <div className="self-stretch px-6 md:px-12 pt-8 flex justify-center">
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-[0px_1px_2px_rgba(55,50,47,0.12)] border border-[rgba(55,50,47,0.08)]">
            <button
              onClick={() => setBillingInterval("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium font-sans transition-all duration-300 ${
                billingInterval === "monthly"
                  ? "bg-[#37322F] text-white shadow-sm"
                  : "text-[#605A57] hover:text-[#37322F]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingInterval("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-medium font-sans transition-all duration-300 relative ${
                billingInterval === "yearly"
                  ? "bg-[#37322F] text-white shadow-sm"
                  : "text-[#605A57] hover:text-[#37322F]"
              }`}
            >
              Yearly
              <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-green-100 text-green-700">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="self-stretch px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => {
            const highlighted = plan.variant === "primary"
            const isFree = plan.key === "free"

            return (
              <SpotlightCard
                key={plan.key}
                spotlightColor={highlighted ? "rgba(255, 255, 255, 0.15)" : "rgba(124, 58, 237, 0.15)"}
                className={`self-stretch overflow-hidden transition-all duration-300 h-full ${
                  highlighted
                    ? "!bg-black border-[rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(124,58,237,0.2)]"
                    : "glass hover:border-[#37322F]/20"
                }`}
              >
                <div className="flex flex-col justify-start items-start gap-10 h-full w-full px-6 py-6 relative z-10">
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  {plan.key === "pro" && plan.badge && (
                    <div className="px-[14px] py-[6px] bg-gradient-to-r from-green-50 to-emerald-50 rounded-[90px] border border-green-200 text-green-700 text-xs font-medium leading-3 font-sans">
                      {plan.badge}
                    </div>
                  )}
                  <div
                    className={
                      highlighted
                        ? "text-[#FBFAF9] text-lg font-medium leading-7 font-sans"
                        : "text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans"
                    }
                  >
                    {plan.label}
                  </div>
                  <div
                    className={
                      highlighted
                        ? "text-[#F0EFEE] text-5xl font-medium leading-[60px] font-serif"
                        : "text-[#37322F] text-5xl font-medium leading-[60px] font-serif"
                    }
                  >
                    {isFree
                      ? plan.price
                      : billingInterval === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                  </div>
                  {(isFree ? plan.subline : (billingInterval === "monthly" ? plan.monthlySubline : plan.yearlySubline)) ? (
                    <div
                      className={
                        highlighted
                          ? "text-[#D2C6BF] text-sm font-medium font-sans"
                          : "text-[#847971] text-sm font-medium font-sans"
                      }
                    >
                      {isFree
                        ? plan.subline
                        : billingInterval === "monthly"
                          ? plan.monthlySubline
                          : plan.yearlySubline}
                    </div>
                  ) : null}
                  {!isFree && (
                    <div className="text-[#847971] text-xs font-normal leading-5 font-sans flex items-center gap-1.5">
                      <span className="line-through opacity-60">
                        {billingInterval === "monthly"
                          ? plan.appMonthlyPrice
                          : plan.appYearlyPrice}
                      </span>
                      <span className="text-green-500 font-medium no-underline">
                        {billingInterval === "monthly"
                          ? "Save $1/mo"
                          : "Save $9/yr"}
                      </span>
                    </div>
                  )}
                  {highlighted && (
                    <div className="text-[#D2C6BF] text-sm font-normal leading-5 font-sans">
                      Cancel anytime. No contracts. No hidden fees.
                    </div>
                  )}
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="self-stretch flex justify-start items-center gap-[13px]"
                    >
                      <div className="w-4 h-4 relative flex items-center justify-center">
                        <CheckIcon light={highlighted} />
                      </div>
                      <div
                        className={
                          highlighted
                            ? "flex-1 text-[#F0EFEE] text-[12.5px] font-normal leading-5 font-sans"
                            : "flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans"
                        }
                      >
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto w-full">
                  {isFree ? (
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.sagent.app"
                      className="self-stretch px-4 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center hover:bg-primary hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                        {plan.cta}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={handleSubscribe}
                      className="self-stretch px-4 py-[10px] relative text-white w-full bg-[length:200%_100%] animate-shimmer bg-gradient-to-r from-brand via-white/30 to-brand border border-brand/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] overflow-hidden rounded-[99px] flex justify-center items-center hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-white text-[14px] font-semibold leading-5 font-sans relative z-10">
                        {plan.cta}
                      </span>
                    </button>
                  )}
                </div>
              </div>
              </SpotlightCard>
            )
          })}
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setShowCheckout(false)
              setError("")
            }}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md glass bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-white/80 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-[rgba(55,50,47,0.12)]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#181512] font-sans">
                    Subscribe to Pro
                  </h3>
                  <p className="text-sm text-[#3F3A36] font-medium font-sans mt-1">
                    {billingInterval === "monthly"
                      ? "$8.99/month"
                      : "$80.99/year"}{" "}
                    · Cancel anytime
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowCheckout(false)
                    setError("")
                  }}
                  className="w-8 h-8 rounded-full bg-[rgba(55,50,47,0.08)] flex items-center justify-center hover:bg-[rgba(55,50,47,0.15)] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M11 3L3 11M3 3l8 8"
                      stroke="#181512"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="checkout-email"
                  className="text-sm font-bold text-[#181512] font-sans"
                >
                  Email address
                </label>
                <p className="text-xs text-[#524B47] font-medium font-sans">
                  Use the same email you signed up with in the Sagent app
                </p>
                <input
                  id="checkout-email"
                  type="email"
                  placeholder="you@example.com"
                  value={checkoutEmail}
                  onChange={(e) => {
                    setCheckoutEmail(e.target.value)
                    setError("")
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCheckout()
                  }}
                  className="w-full h-11 px-4 bg-white border border-[#B0AAA5] rounded-xl text-sm text-[#181512] font-semibold font-sans placeholder:text-[#847971] focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
                  autoFocus
                />
              </div>

              {error && (
                <div className="text-sm text-red-700 font-semibold font-sans bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              {/* Plan summary */}
              <div className="bg-[#F5F2F9] border border-[rgba(161,117,251,0.15)] rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-[#3F3A36] font-medium">Plan</span>
                  <span className="text-[#181512] font-bold">
                    Pro {billingInterval === "monthly" ? "Monthly" : "Yearly"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-[#3F3A36] font-medium">Price</span>
                  <span className="text-[#181512] font-bold">
                    {billingInterval === "monthly"
                      ? "$8.99/mo"
                      : "$80.99/yr"}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-[#3F3A36] font-medium">vs App Store</span>
                  <span className="text-green-700 font-bold">
                    {billingInterval === "monthly"
                      ? "Save $1.00/mo"
                      : "Save $9.00/yr"}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full h-11 relative text-white bg-[length:200%_100%] animate-shimmer bg-gradient-to-r from-brand via-white/30 to-brand border border-brand/50 shadow-[0_0_20px_rgba(124,58,237,0.4)] overflow-hidden rounded-full flex justify-center items-center hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-sans font-bold gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
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
                    Redirecting to checkout...
                  </>
                ) : (
                  "Continue to payment"
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#3F3A36] font-semibold font-sans">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.5 5.5H2.5C2.22386 5.5 2 5.72386 2 6V10C2 10.2761 2.22386 10.5 2.5 10.5H9.5C9.77614 10.5 10 10.2761 10 10V6C10 5.72386 9.77614 5.5 9.5 5.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 5.5V3.5C4 2.39543 4.89543 1.5 6 1.5C7.10457 1.5 8 2.39543 8 3.5V5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Powered by Stripe
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
