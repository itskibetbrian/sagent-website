"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
  children: React.ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [category, setCategory] = useState("General Inquiry")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      if (params.get("contact") === "true") {
        setIsOpen(true)
        // Clean URL params without reloading page
        const newUrl = window.location.pathname + window.location.hash
        window.history.replaceState({}, document.title, newUrl)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call for Resend
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Close modal after success
      setTimeout(() => {
        setIsOpen(false)
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#EDE9F6] border border-[rgba(55,50,47,0.12)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-sans text-[#181512]">Talk to Sales</DialogTitle>
          <DialogDescription className="text-[#3F3A36] font-sans">
            Tell us what you need and our team will get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-medium text-[#181512]">Message sent!</p>
            <p className="text-sm text-[#3F3A36] text-center">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-[#181512]">Name</label>
              <Input 
                id="name" 
                name="name" 
                required 
                placeholder="John Doe" 
                className="bg-white border-[rgba(55,50,47,0.12)] focus-visible:ring-brand"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-[#181512]">Work Email</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="john@company.com" 
                className="bg-white border-[rgba(55,50,47,0.12)] focus-visible:ring-brand"
              />
            </div>
            
            {/* Inquiry Category Select */}
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-sm font-semibold text-[#181512]">Inquiry Type</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-10 px-3 bg-white border border-[rgba(55,50,47,0.12)] rounded-md text-sm text-[#181512] font-sans focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Other Requests">Other Requests</option>
                <option value="Product Feedback & Ideas">Product Feedback & Ideas</option>
                <option value="Strategic Partnership">Strategic Partnership</option>
                <option value="Technical Support">Technical Support</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-[#181512]">How can we help?</label>
              <Textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Tell us about your team and workflow..." 
                className="min-h-[100px] bg-white border-[rgba(55,50,47,0.12)] focus-visible:ring-brand"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 h-10 w-full rounded-full bg-[#37322F] text-white font-medium hover:bg-brand transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : "Send Message"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
