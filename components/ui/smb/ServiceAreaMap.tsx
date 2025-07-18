"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Check } from "lucide-react"

export interface ServiceArea {
  name: string
  description?: string
  responseTime?: string
  featured?: boolean
}

export interface ServiceAreaMapProps {
  title?: string
  subtitle?: string
  mapEmbedUrl?: string
  serviceAreas: ServiceArea[]
  contact?: {
    phone: string
    hours: string
  }
  emergencyService?: boolean
  className?: string
}

export const ServiceAreaMap = ({
  title = "Our Service Area",
  subtitle = "We proudly serve these communities with reliable, professional service",
  mapEmbedUrl,
  serviceAreas,
  contact = {
    phone: "(555) 123-4567",
    hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM"
  },
  emergencyService = false,
  className = ""
}: ServiceAreaMapProps) => {
  return (
    <section className={`py-16 bg-slate-50 dark:bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              {mapEmbedUrl ? (
                <div className="w-full h-96">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Service Area Map"
                  />
                </div>
              ) : (
                <div className="w-full h-96 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 dark:text-slate-300">
                      Interactive map would be displayed here
                    </p>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Service Coverage
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Primary Service Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">Extended Service Area</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Service Areas List & Contact */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Call us now</div>
                    <a href={`tel:${contact.phone}`} className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      {contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Business Hours</div>
                    <div className="text-slate-900 dark:text-white">
                      {contact.hours}
                    </div>
                  </div>
                </div>
              </div>

              {emergencyService && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <div className="text-red-900 dark:text-red-100 font-medium text-sm mb-1">
                      24/7 Emergency Service
                    </div>
                    <div className="text-red-700 dark:text-red-300 text-sm">
                      Available for urgent situations
                    </div>
                  </div>
                </div>
              )}

              <Button className="w-full mt-4" asChild>
                <a href={`tel:${contact.phone}`}>Call Now</a>
              </Button>
            </Card>

            {/* Service Areas */}
            <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Areas We Serve
              </h3>
              
              <div className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className={`p-3 rounded-lg ${area.featured ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'bg-slate-50 dark:bg-slate-700'}`}>
                    <div className="flex items-start gap-3">
                      <Check className={`h-4 w-4 mt-0.5 ${area.featured ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'}`} />
                      <div className="flex-1">
                        <div className={`font-medium ${area.featured ? 'text-blue-900 dark:text-blue-100' : 'text-slate-900 dark:text-white'}`}>
                          {area.name}
                          {area.featured && (
                            <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">
                              Primary
                            </span>
                          )}
                        </div>
                        {area.description && (
                          <div className={`text-sm mt-1 ${area.featured ? 'text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-300'}`}>
                            {area.description}
                          </div>
                        )}
                        {area.responseTime && (
                          <div className={`text-xs mt-1 ${area.featured ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>
                            Response time: {area.responseTime}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Don't see your area listed? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</a> to check if we can serve you.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 