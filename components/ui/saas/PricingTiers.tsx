import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingTier {
  name: string
  description: string
  price: {
    amount: string
    period: string
    originalAmount?: string
  }
  features: PricingFeature[]
  cta: {
    text: string
    href: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }
  popular?: boolean
  badge?: string
}

export interface PricingTiersProps {
  heading: string
  description?: string
  tiers: PricingTier[]
  billingToggle?: {
    monthly: string
    yearly: string
    showSavings?: string
  }
  className?: string
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function PricingTiers({
  heading,
  description,
  tiers,
  billingToggle,
  className = "",
}: PricingTiersProps) {
  const [isYearly, setIsYearly] = React.useState(false)

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h2>
          {description && (
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          
          {/* Billing Toggle */}
          {billingToggle && (
            <div className="flex items-center justify-center space-x-4 mt-8">
              <span className={`text-sm font-medium ${!isYearly ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
                {billingToggle.monthly}
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
                {billingToggle.yearly}
              </span>
              {billingToggle.showSavings && isYearly && (
                <span className="ml-2 inline-flex items-center px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
                  {billingToggle.showSavings}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
              tier.popular 
                ? "border-blue-500 shadow-lg scale-105 bg-white dark:bg-gray-900" 
                : "border-gray-200 dark:border-gray-800 hover:border-blue-300 bg-white dark:bg-gray-900"
            }`}>
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Custom Badge */}
              {tier.badge && !tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 text-sm font-medium bg-gray-900 text-white rounded-full dark:bg-white dark:text-gray-900">
                    {tier.badge}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tier.description}
                </p>
                
                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-2">
                    {tier.price.originalAmount && (
                      <span className="text-2xl font-medium text-gray-400 line-through">
                        {tier.price.originalAmount}
                      </span>
                    )}
                    <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      {tier.price.amount}
                    </span>
                    <span className="text-lg text-gray-600 dark:text-gray-300">
                      /{tier.price.period}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {feature.included ? <CheckIcon /> : <XIcon />}
                      </div>
                      <span className={`text-sm ${
                        feature.included 
                          ? "text-gray-900 dark:text-white" 
                          : "text-gray-400 dark:text-gray-500 line-through"
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className="pt-6">
                  <Button
                    variant={tier.cta.variant || (tier.popular ? "default" : "outline")}
                    size="lg"
                    asChild
                    className="w-full"
                  >
                    <a href={tier.cta.href}>{tier.cta.text}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 