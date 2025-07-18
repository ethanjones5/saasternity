"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Calendar, Wrench, ClipboardCheck, Star } from "lucide-react"

export interface ProcessStep {
  title: string
  description: string
  details?: string[]
  icon?: "phone" | "calendar" | "wrench" | "clipboard" | "star" | "check"
  duration?: string
}

export interface ProcessStepsProps {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
  layout?: "vertical" | "horizontal"
  showConnectors?: boolean
  className?: string
}

export const ProcessSteps = ({
  title = "Our Process",
  subtitle = "From initial consultation to project completion, here's how we ensure exceptional results",
  steps,
  layout = "vertical",
  showConnectors = true,
  className = ""
}: ProcessStepsProps) => {
  const getIcon = (iconType?: string) => {
    const iconClass = "h-6 w-6"
    switch (iconType) {
      case "phone": return <Phone className={iconClass} />
      case "calendar": return <Calendar className={iconClass} />
      case "wrench": return <Wrench className={iconClass} />
      case "clipboard": return <ClipboardCheck className={iconClass} />
      case "star": return <Star className={iconClass} />
      case "check": return <CheckCircle className={iconClass} />
      default: return <CheckCircle className={iconClass} />
    }
  }

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

        {layout === "horizontal" ? (
          // Horizontal Layout
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow h-full">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                      {getIcon(step.icon)}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {step.description}
                    </p>
                    
                    {step.duration && (
                      <div className="inline-block bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                        {step.duration}
                      </div>
                    )}
                  </Card>
                  
                  {/* Connector Arrow */}
                  {showConnectors && index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Vertical Layout
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline Line */}
                  {showConnectors && index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200 dark:bg-blue-800 z-0"></div>
                  )}
                  
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center flex-shrink-0 z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-2">
                      {index + 1}
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                      {getIcon(step.icon)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {step.description}
                    </p>
                    
                    {step.details && step.details.length > 0 && (
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-6">
              Our streamlined process ensures your project is completed efficiently and to your exact specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start Your Project
              </a>
              <a 
                href="tel:(555) 123-4567" 
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 