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

  return (
    <section className={`${sizeClasses[size]} ${className}`}>
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-12 text-center hover-lift">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Heading */}
            <h2 className="text-foreground">
              {heading}
            </h2>
            
            {/* Description */}
            {description && (
              <p className="subtitle text-muted-foreground">
                {description}
              </p>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                variant={primaryCTA.variant || "default"}
                asChild
                className="group relative overflow-hidden h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href={primaryCTA.href}>
                  <span className="relative z-10">{primaryCTA.text}</span>
                  <div className="absolute inset-0 bg-slate-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              </Button>
              
              {secondaryCTA && (
                <Button
                  size="lg"
                  variant={secondaryCTA.variant || "outline"}
                  asChild
                  className="h-12 px-8"
                >
                  <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 