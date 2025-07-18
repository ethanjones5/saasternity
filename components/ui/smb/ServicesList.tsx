"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export interface Service {
  title: string
  description: string
  features?: string[]
  price?: string
  priceNote?: string
  popular?: boolean
  image?: string
  ctaText?: string
  ctaHref?: string
}

export interface ServicesListProps {
  title?: string
  subtitle?: string
  services: Service[]
  layout?: "grid" | "list" | "auto"
  showPricing?: boolean
  className?: string
}

export const ServicesList = ({
  title = "Our Services",
  subtitle = "Professional services tailored to meet your specific needs",
  services,
  layout = "auto",
  showPricing = true,
  className = ""
}: ServicesListProps) => {
  // Auto-detect layout based on service count
  const getLayout = () => {
    if (layout !== "auto") return layout
    return services.length <= 3 ? "grid" : "list"
  }

  const currentLayout = getLayout()
  const gridCols = services.length === 1 ? "lg:grid-cols-1" : 
                  services.length === 2 ? "lg:grid-cols-2" : 
                  services.length === 3 ? "lg:grid-cols-3" : 
                  "lg:grid-cols-2"

  return (
    <section className={`py-16 bg-white dark:bg-slate-900 ${className}`}>
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

        {/* Services Grid/List */}
        <div className={`grid gap-8 ${currentLayout === "grid" ? `md:grid-cols-2 ${gridCols}` : "max-w-4xl mx-auto"}`}>
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''} ${currentLayout === "list" ? 'flex flex-col md:flex-row' : ''}`}
            >
              {service.popular && (
                <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              {/* Service Image */}
              {service.image && (
                <div className={`${currentLayout === "list" ? 'md:w-1/3' : 'h-48'} overflow-hidden`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className={`p-6 ${currentLayout === "list" ? 'md:flex-1' : ''}`}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {service.description}
                </p>
                
                {/* Features List */}
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Pricing */}
                {showPricing && service.price && (
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">
                      {service.price}
                    </div>
                    {service.priceNote && (
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {service.priceNote}
                      </div>
                    )}
                  </div>
                )}
                
                {/* CTA Button */}
                <Button 
                  className="w-full group" 
                  variant={service.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={service.ctaHref || "/contact"}>
                    {service.ctaText || "Learn More"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
} 