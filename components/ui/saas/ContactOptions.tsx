import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

export interface ContactOption {
  type: "phone" | "email" | "address" | "hours" | "chat" | "support"
  icon: React.ReactNode
  title: string
  value: string
  description?: string
  action?: {
    text: string
    href: string
  }
}

export interface ContactOptionsProps {
  heading: string
  description?: string
  options: ContactOption[]
  variant?: "grid" | "list" | "cards"
  columns?: 2 | 3 | 4
  className?: string
}

export function ContactOptions({
  heading,
  description,
  options,
  variant = "grid",
  columns = 2,
  className = "",
}: ContactOptionsProps) {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  if (variant === "list") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {heading}
              </h2>
              {description && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* List Layout */}
            <div className="space-y-6">
              {options.map((option, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300">
                  {/* Icon */}
                  <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <div className="w-6 h-6 text-blue-600 dark:text-blue-400">
                      {option.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {option.title}
                    </h3>
                    <p className="text-gray-900 dark:text-white font-medium mb-2">
                      {option.value}
                    </p>
                    {option.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {option.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Action */}
                  {option.action && (
                    <div className="flex-shrink-0">
                      <a
                        href={option.action.href}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                      >
                        {option.action.text}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === "cards") {
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

          {/* Cards Layout */}
          <div className={`grid ${gridClass[columns]} gap-8`}>
            {options.map((option, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 group-hover:scale-110 transition-transform duration-300 mb-6">
                    <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                      {option.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {option.value}
                  </p>
                  {option.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {option.description}
                    </p>
                  )}
                  
                  {option.action && (
                    <a
                      href={option.action.href}
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-200"
                    >
                      {option.action.text}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Default grid variant
  return (
    <section className={`py-16 md:py-24 bg-gray-50 dark:bg-gray-900 ${className}`}>
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

        {/* Grid Layout */}
        <div className={`grid ${gridClass[columns]} gap-8`}>
          {options.map((option, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                  <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                    {option.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {option.title}
              </h3>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {option.value}
              </p>
              {option.description && (
                <p className="text-gray-600 dark:text-gray-300">
                  {option.description}
                </p>
              )}
              
              {option.action && (
                <a
                  href={option.action.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200"
                >
                  {option.action.text}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 