"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"

export interface HeroSMBProps {
  companyName?: string
  tagline?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  contactInfo?: {
    phone?: string
    address?: string
    hours?: string
  }
  backgroundImage?: string
  className?: string
}

export const HeroSMB = ({
  companyName = "Your Business",
  tagline = "Professional Services You Can Trust",
  description = "We provide exceptional service to help your business grow and succeed in today's competitive market.",
  primaryCTA = { text: "Get Free Quote", href: "/contact" },
  secondaryCTA = { text: "Our Services", href: "/services" },
  contactInfo = {
    phone: "(555) 123-4567",
    address: "123 Main St, Your City",
    hours: "Mon-Fri 9AM-6PM"
  },
  backgroundImage,
  className = ""
}: HeroSMBProps) => {
  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.1]" />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-slate-900 dark:text-white">{companyName}</span>
              <br />
              <span className="text-blue-600 dark:text-blue-400">{tagline}</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href={primaryCTA.href}>{primaryCTA.text}</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            </div>
          </div>
          
          {/* Contact Info Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 shadow-xl max-w-sm w-full">
              <h3 className="text-xl font-semibold mb-4 text-center text-slate-900 dark:text-white">
                Contact Us Today
              </h3>
              
              <div className="space-y-4">
                {contactInfo.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-700 dark:text-slate-300">{contactInfo.phone}</span>
                  </div>
                )}
                
                {contactInfo.address && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-700 dark:text-slate-300">{contactInfo.address}</span>
                  </div>
                )}
                
                {contactInfo.hours && (
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-700 dark:text-slate-300">{contactInfo.hours}</span>
                  </div>
                )}
              </div>
              
              <Button className="w-full mt-4" asChild>
                <a href="/contact">Get Started</a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 