import * as React from "react"

export interface Stat {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
  highlight?: boolean
}

export interface StatsSectionProps {
  heading?: string
  description?: string
  stats: Stat[]
  variant?: "default" | "cards" | "minimal"
  columns?: 2 | 3 | 4
  className?: string
}

export function StatsSection({
  heading,
  description,
  stats,
  variant = "default",
  columns = 4,
  className = "",
}: StatsSectionProps) {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }

  if (variant === "cards") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(heading || description) && (
            <div className="text-center mb-16 space-y-4">
              {heading && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Stats Cards */}
          <div className={`grid ${gridClass[columns]} gap-8`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  stat.highlight
                    ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700"
                }`}
              >
                {/* Icon */}
                {stat.icon && (
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${
                    stat.highlight 
                      ? "bg-blue-100 dark:bg-blue-800" 
                      : "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
                  }`}>
                    <div className={`w-6 h-6 ${
                      stat.highlight 
                        ? "text-blue-600 dark:text-blue-400" 
                        : "text-blue-600 dark:text-blue-400"
                    }`}>
                      {stat.icon}
                    </div>
                  </div>
                )}
                
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (variant === "minimal") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(heading || description) && (
            <div className="text-center mb-16 space-y-4">
              {heading && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Minimal Stats */}
          <div className={`grid ${gridClass[columns]} gap-8 text-center`}>
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section className={`py-16 md:py-24 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(heading || description) && (
          <div className="text-center mb-16 space-y-4">
            {heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Default Stats */}
        <div className={`grid ${gridClass[columns]} gap-8 text-center`}>
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4">
              {/* Icon */}
              {stat.icon && (
                <div className="flex justify-center">
                  <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                    <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                      {stat.icon}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-sm text-gray-600 dark:text-gray-300 max-w-xs mx-auto">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 