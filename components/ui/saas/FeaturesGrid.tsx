import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
}

export interface FeaturesGridProps {
  heading: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeaturesGrid({
  heading,
  description,
  features,
  columns = 3,
  className = "",
}: FeaturesGridProps) {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

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
        </div>

        {/* Features Grid */}
        <div className={`grid ${gridClass[columns]} gap-8`}>
          {features.map((feature, index) => (
            <Card key={index} className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm dark:bg-gray-900/50">
              <CardContent className="p-8 text-center space-y-4">
                {/* Badge */}
                {feature.badge && (
                  <div className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 mb-2">
                    {feature.badge}
                  </div>
                )}
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 