import * as React from "react"

export interface Differentiator {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: boolean
}

export interface WhyUsProps {
  heading: string
  description?: string
  differentiators: Differentiator[]
  layout?: "grid" | "list"
  className?: string
}

export function WhyUs({
  heading,
  description,
  differentiators,
  layout = "grid",
  className = "",
}: WhyUsProps) {
  if (layout === "list") {
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
            <div className="space-y-8">
              {differentiators.map((item, index) => (
                <div key={index} className={`flex items-start space-x-6 p-6 rounded-xl transition-all duration-300 ${
                  item.highlight 
                    ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800" 
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}>
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-3 rounded-lg ${
                    item.highlight 
                      ? "bg-blue-100 dark:bg-blue-800" 
                      : "bg-gray-100 dark:bg-gray-700"
                  }`}>
                    <div className={`w-6 h-6 ${
                      item.highlight 
                        ? "text-blue-600 dark:text-blue-400" 
                        : "text-gray-600 dark:text-gray-400"
                    }`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
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

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className={`group text-center p-8 rounded-xl transition-all duration-300 hover:shadow-lg ${
              item.highlight 
                ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800" 
                : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700"
            }`}>
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                item.highlight 
                  ? "bg-blue-100 dark:bg-blue-800" 
                  : "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
              }`}>
                <div className={`w-8 h-8 ${
                  item.highlight 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-blue-600 dark:text-blue-400"
                }`}>
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 