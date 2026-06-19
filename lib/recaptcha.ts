/**
 * Server-side reCAPTCHA v3 verification
 */

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"

interface RecaptchaVerifyResponse {
  success: boolean
  score: number
  action: string
  challenge_ts: string
  hostname: string
  "error-codes"?: string[]
}

interface VerifyResult {
  success: boolean
  score: number
  error?: string
}

/**
 * Verify a reCAPTCHA v3 token on the server.
 *
 * @param token  - The token from the client's grecaptcha.execute() call
 * @param action - The expected action name (must match what the client sent)
 * @param minScore - Minimum acceptable score (0.0 – 1.0). Default 0.5
 */
export async function verifyRecaptcha(
  token: string,
  action: string,
  minScore = 0.5
): Promise<VerifyResult> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.warn(
      "[reCAPTCHA] RECAPTCHA_SECRET_KEY is not set. Skipping verification."
    )
    // Allow in dev / missing config so the site doesn't break
    return { success: true, score: 1.0 }
  }

  if (!token) {
    return { success: false, score: 0, error: "Missing reCAPTCHA token" }
  }

  try {
    const res = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    })

    const data: RecaptchaVerifyResponse = await res.json()

    if (!data.success) {
      console.warn("[reCAPTCHA] Verification failed:", data["error-codes"])
      return {
        success: false,
        score: 0,
        error: "reCAPTCHA verification failed",
      }
    }

    // Check action matches to prevent token reuse across different forms
    if (data.action !== action) {
      console.warn(
        `[reCAPTCHA] Action mismatch: expected "${action}", got "${data.action}"`
      )
      return {
        success: false,
        score: data.score,
        error: "reCAPTCHA action mismatch",
      }
    }

    // Check score threshold
    if (data.score < minScore) {
      console.warn(
        `[reCAPTCHA] Score too low: ${data.score} < ${minScore}`
      )
      return {
        success: false,
        score: data.score,
        error: "Request blocked by spam protection",
      }
    }

    return { success: true, score: data.score }
  } catch (error) {
    console.error("[reCAPTCHA] Verification error:", error)
    return {
      success: false,
      score: 0,
      error: "reCAPTCHA verification failed",
    }
  }
}
