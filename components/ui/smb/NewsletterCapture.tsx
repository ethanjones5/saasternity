"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Gift, Bell, Users, CheckCircle } from "lucide-react"

export interface NewsletterCaptureProps {
  title?: string
  subtitle?: string
  description?: string
  benefits?: string[]
  incentive?: {
    title: string
    description: string
  }
  placeholder?: string
  ctaText?: string
  privacyNote?: string
  onSubmit?: (email: string) => void
  showBenefits?: boolean
  layout?: "inline" | "card" | "banner"
  className?: string
}

export const NewsletterCapture = ({
  title = "Stay Connected",
  subtitle = "Get the latest updates, tips, and special offers from our local business",
  description = "Join our community newsletter for exclusive insights, seasonal tips, and special offers just for our neighbors.",
  benefits = [
    "Seasonal maintenance tips and reminders",
    "Exclusive discounts for newsletter subscribers",
    "Early access to special promotions",
    "Community news and local partnerships"
  ],
  incentive = {
    title: "Welcome Bonus!",
    description: "Get 10% off your first service when you subscribe"
  },
  placeholder = "Enter your email address",
  ctaText = "Subscribe Now",
  privacyNote = "We respect your privacy. Unsubscribe at any time.",
  onSubmit,
  showBenefits = true,
  layout = "card",
  className = ""
}: NewsletterCaptureProps) => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      if (onSubmit) {
        await onSubmit(email)
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className={`py-16 ${layout === "banner" ? "bg-green-50 dark:bg-green-900/20" : "bg-blue-50 dark:bg-blue-900/20"} ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300 mb-6">
              Thank you for subscribing! Check your email for your welcome bonus and first newsletter.
            </p>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <Gift className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <p className="text-slate-600 dark:text-slate-300">
                Your {incentive.title.toLowerCase()} will be sent to your email shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (layout === "banner") {
    return (
      <section className={`py-12 bg-blue-600 dark:bg-blue-800 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {title}
                </h2>
                <p className="text-blue-100 text-lg">
                  {subtitle}
                </p>
              </div>
              <div className="flex-shrink-0 w-full lg:w-auto">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white bg-white text-slate-900 min-w-80"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading} 
                    className="bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap"
                  >
                    {isLoading ? "Subscribing..." : ctaText}
                  </Button>
                </form>
                <p className="text-blue-100 text-xs mt-2 text-center lg:text-left">
                  {privacyNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (layout === "inline") {
    return (
      <section className={`py-16 bg-slate-50 dark:bg-slate-900 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Bell className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              {subtitle}
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? "Subscribing..." : ctaText}
              </Button>
            </form>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
              {privacyNote}
            </p>
          </div>
        </div>
      </section>
    )
  }

  // Card layout (default)
  return (
    <section className={`py-16 bg-slate-50 dark:bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {title}
                </h2>
              </div>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {subtitle}
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {description}
              </p>

              {/* Incentive */}
              {incentive && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Gift className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                    <div>
                      <div className="font-semibold text-yellow-900 dark:text-yellow-100">
                        {incentive.title}
                      </div>
                      <div className="text-yellow-700 dark:text-yellow-300 text-sm">
                        {incentive.description}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits */}
              {showBenefits && benefits.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    What you'll get:
                  </h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Form */}
            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? "Subscribing..." : ctaText}
                </Button>
                
                <p className="text-slate-500 dark:text-slate-400 text-xs text-center">
                  {privacyNote}
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 