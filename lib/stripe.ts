import Stripe from "stripe"

let _stripe: Stripe | null = null

function getStripe(): Stripe {
  if (_stripe) return _stripe

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY

  if (!stripeSecretKey) {
    throw new Error(
      "[Stripe] STRIPE_SECRET_KEY is not set. " +
      "Add it to your environment variables."
    )
  }

  _stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2025-05-28.basil",
    typescript: true,
  })

  return _stripe
}



// Re-export as a callable getter — usage: stripe.customers.list(...)
// But callers use `stripe` as a Stripe instance, so we use a Proxy:
const handler: ProxyHandler<object> = {
  get(_target, prop) {
    return (getStripe() as Record<string | symbol, unknown>)[prop]
  },
}

export const stripe = new Proxy({} as Stripe, handler)

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
