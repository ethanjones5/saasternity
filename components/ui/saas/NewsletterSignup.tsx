import * as React from "react"
import { Button } from "@/components/ui/button"

export interface NewsletterSignupProps {
  heading: string
  description?: string
  placeholder?: string
  buttonText?: string
  onSubmit: (email: string) => void | Promise<void>
  isLoading?: boolean
  privacyNote?: string
  variant?: "default" | "inline" | "centered"
  className?: string
}

export function NewsletterSignup({
  heading,
  description,
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  onSubmit,
  isLoading = false,
  privacyNote,
  variant = "default",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError("Email is required")
      return
    }
    
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    
    setError("")
    setIsSubmitting(true)
    
    try {
      await onSubmit(email)
      setEmail("") // Clear form on success
    } catch (error) {
      console.error("Newsletter signup error:", error)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError("") // Clear error when user starts typing
  }

  if (variant === "inline") {
    return (
      <div className={`inline-flex flex-col sm:flex-row gap-4 w-full max-w-md ${className}`}>
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              error 
                ? "border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-900/20" 
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
            disabled={isSubmitting || isLoading}
          />
          {error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
        </div>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || isLoading}
          className="px-6 py-3 whitespace-nowrap"
        >
          {isSubmitting || isLoading ? "..." : buttonText}
        </Button>
      </div>
    )
  }

  const sectionClass = variant === "centered" 
    ? "text-center py-16 md:py-24" 
    : "py-16 md:py-24"

  return (
    <section className={`${sectionClass} bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${variant === "centered" ? "max-w-2xl mx-auto" : "max-w-4xl mx-auto"} space-y-8`}>
          {/* Header */}
          <div className={variant === "centered" ? "text-center space-y-4" : "space-y-4"}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h2>
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={`flex flex-col sm:flex-row gap-4 ${variant === "centered" ? "justify-center" : ""} max-w-lg ${variant === "centered" ? "mx-auto" : ""}`}>
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={placeholder}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    error 
                      ? "border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-900/20" 
                      : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                  disabled={isSubmitting || isLoading}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isLoading}
                className="px-8 py-3 whitespace-nowrap"
              >
                {isSubmitting || isLoading ? "Subscribing..." : buttonText}
              </Button>
            </div>
            
            {error && (
              <p className={`text-sm text-red-600 dark:text-red-400 ${variant === "centered" ? "text-center" : ""}`}>
                {error}
              </p>
            )}
          </form>

          {/* Privacy Note */}
          {privacyNote && (
            <p className={`text-sm text-gray-500 dark:text-gray-400 ${variant === "centered" ? "text-center" : ""}`}>
              {privacyNote}
            </p>
          )}
        </div>
      </div>
    </section>
  )
} 