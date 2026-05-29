'use client'

// Google Analytics conversion tracking
export function trackConversion(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as any).gtag('event', eventName, eventData)
  }
}

// Track app store clicks
export function trackAppStoreClick(platform: 'google-play' | 'app-store') {
  trackConversion('app_store_click', {
    platform,
    timestamp: new Date().toISOString(),
  })
}

// Track CTA clicks
export function trackCTAClick(ctaName: string, location: string) {
  trackConversion('cta_click', {
    cta_name: ctaName,
    location,
    timestamp: new Date().toISOString(),
  })
}

// Track form submissions
export function trackFormSubmission(formType: 'contact' | 'newsletter') {
  trackConversion('form_submission', {
    form_type: formType,
    timestamp: new Date().toISOString(),
  })
}

// Track page views (called automatically by GA4)
export function trackPageView(pagePath: string, pageTitle: string) {
  trackConversion('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  })
}

// Track scroll depth
export function trackScrollDepth(percentageScrolled: number) {
  trackConversion('scroll', {
    scroll_depth: percentageScrolled,
  })
}

// Track time on page
export function trackTimeOnPage(pagePath: string, timeInSeconds: number) {
  if (timeInSeconds > 10) {
    // Only track if user spent significant time
    trackConversion('time_on_page', {
      page_path: pagePath,
      time_seconds: timeInSeconds,
    })
  }
}
