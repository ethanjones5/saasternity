import * as React from "react"
import { Button } from "@/components/ui/button"

export interface CTABannerProps {
  heading: string
  description?: string
  primaryCTA: {
    text: string
    href: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }
  secondaryCTA?: {
    text: string
    href: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }
  variant?: "default" | "gradient" | "minimal"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function CTABanner({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
  size = "md",
  className = "",
}: CTABannerProps) {
  const sizeClasses = {
    sm: "py-12",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28",
  }

  const variantClasses = {
    default: "bg-blue-600 dark:bg-blue-700",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
    minimal: "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
  }

  const textColorClass = variant === "minimal" 
    ? "text-gray-900 dark:text-white" 
    : "text-white"

  const descriptionColorClass = variant === "minimal"
    ? "text-gray-600 dark:text-gray-300"
    : "text-blue-100"

  return (
    <section className={`relative overflow-hidden ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {/* Background Pattern for gradient variant */}
      {variant === "gradient" && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        </div>
      )}
      
      {/* Content Container */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${textColorClass} leading-tight`}>
            {heading}
          </h2>
          
          {/* Description */}
          {description && (
            <p className={`text-lg md:text-xl ${descriptionColorClass} leading-relaxed max-w-2xl mx-auto`}>
              {description}
            </p>
          )}
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant={primaryCTA.variant || (variant === "minimal" ? "default" : "secondary")}
              asChild
              className="px-8 py-3 text-base font-semibold min-w-[200px]"
            >
              <a href={primaryCTA.href}>{primaryCTA.text}</a>
            </Button>
            
            {secondaryCTA && (
              <Button
                size="lg"
                variant={secondaryCTA.variant || (variant === "minimal" ? "outline" : "ghost")}
                asChild
                className={`px-8 py-3 text-base font-semibold min-w-[200px] ${
                  variant !== "minimal" ? "text-white hover:text-blue-600 border-white/20 hover:bg-white" : ""
                }`}
              >
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      {variant !== "minimal" && (
        <>
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 blur-xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20 blur-xl" />
        </>
      )}
    </section>
  )
} 