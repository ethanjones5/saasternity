import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

export interface UseCase {
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
  features: string[]
  badge?: string
}

export interface UseCasesProps {
  heading: string
  description?: string
  useCases: UseCase[]
  layout?: "grid" | "tabs" | "carousel"
  className?: string
}

export function UseCases({
  heading,
  description,
  useCases,
  layout = "grid",
  className = "",
}: UseCasesProps) {
  const [activeTab, setActiveTab] = React.useState(0)

  if (layout === "tabs") {
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

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {useCases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === index
                      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {useCase.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`${activeTab === index ? "block" : "hidden"} transition-all duration-300`}
              >
                <UseCaseCard useCase={useCase} featured />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Default grid layout
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
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCaseCard({ useCase, featured = false }: { useCase: UseCase; featured?: boolean }) {
  return (
    <Card className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
      featured ? "lg:col-span-2" : ""
    } bg-white dark:bg-gray-900`}>
      {/* Badge */}
      {useCase.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
            {useCase.badge}
          </span>
        </div>
      )}

      {/* Background Image */}
      {useCase.image && (
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <img
            src={useCase.image}
            alt={useCase.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <CardContent className={`relative p-8 ${featured ? "lg:p-12" : ""}`}>
        <div className={`${featured ? "grid lg:grid-cols-2 gap-8 items-center" : "space-y-6"}`}>
          <div className="space-y-6">
            {/* Icon */}
            {useCase.icon && (
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 text-blue-600 dark:text-blue-400">
                  {useCase.icon}
                </div>
              </div>
            )}

            {/* Title */}
            <h3 className={`font-bold text-gray-900 dark:text-white ${
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            }`}>
              {useCase.title}
            </h3>

            {/* Description */}
            <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
              featured ? "text-lg" : ""
            }`}>
              {useCase.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Key Features:
            </h4>
            <ul className="space-y-3">
              {useCase.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 