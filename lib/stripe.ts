import Stripe from "stripe"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  console.warn(
    "[Stripe] STRIPE_SECRET_KEY is not set. Stripe API calls will fail. " +
    "Add it to your .env.local file."
  )
}

export const stripe = new Stripe(stripeSecretKey || "", {
  apiVersion: "2025-05-28.basil",
  typescript: true,
})

export const PLANS = {
  monthly: {
    priceId: process.env.STRIPE_MONTHLY_PRICE_ID || "",
    name: "Pro Monthly",
    price: 8.99,
    interval: "month" as const,
  },
  yearly: {
    priceId: process.env.STRIPE_YEARLY_PRICE_ID || "",
    name: "Pro Yearly",
    price: 80.99,
    interval: "year" as const,
  },
} as const

export type PlanKey = keyof typeof PLANS
