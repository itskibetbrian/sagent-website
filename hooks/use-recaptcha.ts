"use client"

import { useCallback, useEffect, useRef } from "react"

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

const RECAPTCHA_SCRIPT_ID = "recaptcha-v3-script"

/**
 * Hook that provides a function to execute reCAPTCHA v3 and get a token.
 *
 * Usage:
 *   const executeRecaptcha = useRecaptcha()
 *   const token = await executeRecaptcha("checkout")
 */
export function useRecaptcha() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
  const loaded = useRef(false)

  useEffect(() => {
    if (!siteKey || loaded.current) return

    // Don't inject twice
    if (document.getElementById(RECAPTCHA_SCRIPT_ID)) {
      loaded.current = true
      return
    }

    const script = document.createElement("script")
    script.id = RECAPTCHA_SCRIPT_ID
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)
    loaded.current = true
  }, [siteKey])

  const executeRecaptcha = useCallback(
    async (action: string): Promise<string> => {
      if (!siteKey) {
        console.warn("[reCAPTCHA] NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set")
        return ""
      }

      return new Promise((resolve) => {
        if (typeof window === "undefined" || !window.grecaptcha) {
          console.warn("[reCAPTCHA] grecaptcha not loaded yet")
          resolve("")
          return
        }

        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, { action })
            resolve(token)
          } catch (error) {
            console.error("[reCAPTCHA] Execute error:", error)
            resolve("")
          }
        })
      })
    },
    [siteKey]
  )

  return executeRecaptcha
}
