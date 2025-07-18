"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

export interface ContactMethod {
  type: "phone" | "email" | "address" | "hours" | "chat" | "appointment"
  label: string
  value: string
  href?: string
  icon?: boolean
}

export interface ContactCardProps {
  title?: string
  subtitle?: string
  contactMethods: ContactMethod[]
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  emergencyContact?: {
    label: string
    value: string
    href?: string
  }
  showMap?: boolean
  mapEmbedUrl?: string
  className?: string
}

export const ContactCard = ({
  title = "Get In Touch",
  subtitle = "Ready to get started? Contact us today for a free consultation.",
  contactMethods,
  primaryCTA = { text: "Call Now", href: "tel:555-123-4567" },
  secondaryCTA = { text: "Send Email", href: "mailto:info@company.com" },
  emergencyContact,
  showMap = false,
  mapEmbedUrl,
  className = ""
}: ContactCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "phone": return <Phone className="h-5 w-5" />
      case "email": return <Mail className="h-5 w-5" />
      case "address": return <MapPin className="h-5 w-5" />
      case "hours": return <Clock className="h-5 w-5" />
      case "chat": return <MessageCircle className="h-5 w-5" />
      case "appointment": return <Calendar className="h-5 w-5" />
      default: return <Phone className="h-5 w-5" />
    }
  }

  return (
    <section className={`py-16 bg-slate-50 dark:bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <div className="text-blue-600 dark:text-blue-400">
                        {getIcon(method.type)}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        {method.label}
                      </div>
                      {method.href ? (
                        <a 
                          href={method.href}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-slate-600 dark:text-slate-300">
                          {method.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              {emergencyContact && (
                <div className="border-t border-slate-200 dark:border-slate-700 pt-6 mb-6">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <div className="font-medium text-red-900 dark:text-red-100 mb-1">
                      {emergencyContact.label}
                    </div>
                    {emergencyContact.href ? (
                      <a 
                        href={emergencyContact.href}
                        className="text-red-600 dark:text-red-400 font-semibold hover:underline"
                      >
                        {emergencyContact.value}
                      </a>
                    ) : (
                      <div className="text-red-600 dark:text-red-400 font-semibold">
                        {emergencyContact.value}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <a href={primaryCTA.href}>{primaryCTA.text}</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                </Button>
              </div>
            </Card>

            {/* Map or Additional Info */}
            <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              {showMap && mapEmbedUrl ? (
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    Find Us
                  </h3>
                  <div className="w-full h-64 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Business Location"
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-4">
                    Click the map above for directions and more details.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        Fast response times - we typically respond within 2 hours
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        Local business with deep community knowledge
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        Licensed, insured, and fully certified professionals
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        100% satisfaction guarantee on all our work
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 