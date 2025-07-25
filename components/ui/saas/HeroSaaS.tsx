import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export interface HeroSaaSProps {
  headline: string
  subheading: string
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
  heroImage?: {
    src: string
    alt: string
  }
  backgroundPattern?: "dots" | "grid" | "none"
  className?: string
}

export function HeroSaaS({
  headline,
  subheading,
  description,
  primaryCTA,
  secondaryCTA,
  heroImage,
  backgroundPattern = "dots",
  className = "",
}: HeroSaaSProps) {
  const backgroundClass = {
    dots: "bg-[radial-gradient(circle_at_1px_1px,rgb(148,163,184)_1px,transparent_0)] [background-size:24px_24px] opacity-10",
    grid: "bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:24px_24px]",
    none: "",
  }

  return (
    <section className={`relative py-16 md:py-24 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      {backgroundPattern !== "none" && (
        <div className={`absolute inset-0 ${backgroundClass[backgroundPattern]}`} />
      )}
      
      {/* Content Container */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Subheading */}
                            <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-slate-50/80 text-slate-600 rounded-full border border-slate-200/80 dark:bg-slate-900/16 dark:text-slate-400 dark:border-slate-800/80">
              {subheading}
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              {headline}
            </h1>
            
            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl lg:max-w-none">
                {description}
              </p>
            )}
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                variant={primaryCTA.variant || "default"}
                asChild
                className="px-8 py-3 text-base font-semibold"
              >
                <a href={primaryCTA.href}>{primaryCTA.text}</a>
              </Button>
              
              {secondaryCTA && (
                <Button
                  size="lg"
                  variant={secondaryCTA.variant || "outline"}
                  asChild
                  className="px-8 py-3 text-base font-semibold"
                >
                  <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                </Button>
              )}
            </div>
          </div>
          
          {/* Hero Image */}
          {heroImage && (
            <div className="relative lg:order-last">
              <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/16 to-gray-500/16" />
              </div>
              
              {/* Floating Elements */}
                                                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-slate-500 rounded-full opacity-16 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-500 rounded-full opacity-16 blur-xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 