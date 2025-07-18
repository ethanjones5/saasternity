"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, Clock, Award, ArrowRight } from "lucide-react"

export interface CTABannerProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
    variant?: "default" | "outline"
  }
  secondaryCTA?: {
    text: string
    href: string
    variant?: "default" | "outline"
  }
  urgency?: {
    text: string
    highlight?: string
  }
  trustElements?: {
    text: string
    icon?: "award" | "clock" | "phone"
  }[]
  backgroundStyle?: "solid" | "gradient" | "image"
  backgroundImage?: string
  style?: "standard" | "urgent" | "professional" | "friendly"
  showContactInfo?: boolean
  contactPhone?: string
  className?: string
}

export const CTABanner = ({
  title = "Ready to Get Started?",
  subtitle = "Contact us today for your free consultation and quote",
  description = "Join hundreds of satisfied customers who trust us for reliable, professional service. No obligation - just honest advice and fair pricing.",
  primaryCTA = { text: "Get Free Quote", href: "/contact", variant: "default" },
  secondaryCTA = { text: "Call Now", href: "tel:555-123-4567", variant: "outline" },
  urgency,
  trustElements = [
    { text: "Licensed & Insured", icon: "award" },
    { text: "Same-Day Response", icon: "clock" },
    { text: "24/7 Emergency Service", icon: "phone" }
  ],
  backgroundStyle = "gradient",
  backgroundImage,
  style = "standard",
  showContactInfo = true,
  contactPhone = "(555) 123-4567",
  className = ""
}: CTABannerProps) => {
  const getIcon = (iconType?: string) => {
    const iconClass = "h-4 w-4"
    switch (iconType) {
      case "award": return <Award className={iconClass} />
      case "clock": return <Clock className={iconClass} />
      case "phone": return <Phone className={iconClass} />
      default: return <Award className={iconClass} />
    }
  }

  const getStyleClasses = () => {
    switch (style) {
      case "urgent":
        return {
          background: "bg-red-600 dark:bg-red-700",
          text: "text-white",
          accent: "text-red-100"
        }
      case "professional":
        return {
          background: "bg-slate-900 dark:bg-slate-800",
          text: "text-white",
          accent: "text-slate-300"
        }
      case "friendly":
        return {
          background: "bg-green-600 dark:bg-green-700",
          text: "text-white",
          accent: "text-green-100"
        }
      default: // standard
        return {
          background: backgroundStyle === "gradient" 
            ? "bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800"
            : "bg-blue-600 dark:bg-blue-700",
          text: "text-white",
          accent: "text-blue-100"
        }
    }
  }

  const styleClasses = getStyleClasses()

  return (
    <section className={`relative py-16 overflow-hidden ${className}`}>
      {/* Background */}
      {backgroundStyle === "image" && backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <div className={`absolute inset-0 ${styleClasses.background}`} />
      )}
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-small-white/[0.1]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Banner */}
          {urgency && (
            <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {urgency.text}
              {urgency.highlight && (
                <span className="font-bold"> {urgency.highlight}</span>
              )}
            </div>
          )}
          
          {/* Main Content */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${styleClasses.text} mb-4`}>
            {title}
          </h2>
          
          <p className={`text-xl md:text-2xl ${styleClasses.accent} mb-6`}>
            {subtitle}
          </p>
          
          {description && (
            <p className={`text-lg ${styleClasses.accent} mb-8 max-w-2xl mx-auto`}>
              {description}
            </p>
          )}
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant={primaryCTA.variant || "default"}
              className={`text-lg px-8 ${primaryCTA.variant === "outline" ? "border-white text-white hover:bg-white hover:text-slate-900" : "bg-white text-blue-600 hover:bg-blue-50"}`}
              asChild
            >
              <a href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            {secondaryCTA && (
              <Button 
                size="lg" 
                variant={secondaryCTA.variant || "outline"}
                className={`text-lg px-8 ${secondaryCTA.variant === "outline" || !secondaryCTA.variant ? "border-white text-white hover:bg-white hover:text-slate-900" : "bg-white text-blue-600 hover:bg-blue-50"}`}
                asChild
              >
                <a href={secondaryCTA.href}>
                  {secondaryCTA.text}
                  {secondaryCTA.href.startsWith('tel:') && <Phone className="ml-2 h-5 w-5" />}
                </a>
              </Button>
            )}
          </div>
          
          {/* Trust Elements */}
          {trustElements.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              {trustElements.map((element, index) => (
                <div key={index} className={`flex items-center gap-2 ${styleClasses.accent}`}>
                  {getIcon(element.icon)}
                  <span className="text-sm font-medium">
                    {element.text}
                  </span>
                </div>
              ))}
            </div>
          )}
          
          {/* Contact Info */}
          {showContactInfo && (
            <div className={`border-t border-white/20 pt-6 ${styleClasses.accent}`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">Call us now:</span>
                  <a 
                    href={`tel:${contactPhone}`} 
                    className={`font-semibold hover:underline ${styleClasses.text}`}
                  >
                    {contactPhone}
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Or</span>
                  <a 
                    href="/contact" 
                    className={`font-semibold hover:underline ${styleClasses.text}`}
                  >
                    send us a message
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <a 
                    href="/schedule" 
                    className={`font-semibold hover:underline ${styleClasses.text}`}
                  >
                    Schedule online
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 