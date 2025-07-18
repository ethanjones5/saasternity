"use client"

import { Card } from "@/components/ui/card"
import { Shield, RefreshCw, Award, Clock, CheckCircle, Star } from "lucide-react"

export interface Guarantee {
  title: string
  description: string
  icon?: "shield" | "refresh" | "award" | "clock" | "check" | "star"
  badge?: string
  highlights?: string[]
}

export interface GuaranteesProps {
  title?: string
  subtitle?: string
  guarantees: Guarantee[]
  showBadges?: boolean
  layout?: "grid" | "cards"
  className?: string
}

export const Guarantees = ({
  title = "Our Guarantees",
  subtitle = "We stand behind our work with industry-leading warranties and satisfaction guarantees",
  guarantees,
  showBadges = true,
  layout = "cards",
  className = ""
}: GuaranteesProps) => {
  const getIcon = (iconType?: string) => {
    const iconClass = "h-8 w-8"
    switch (iconType) {
      case "shield": return <Shield className={iconClass} />
      case "refresh": return <RefreshCw className={iconClass} />
      case "award": return <Award className={iconClass} />
      case "clock": return <Clock className={iconClass} />
      case "check": return <CheckCircle className={iconClass} />
      case "star": return <Star className={iconClass} />
      default: return <Shield className={iconClass} />
    }
  }

  const gridCols = guarantees.length === 2 ? "md:grid-cols-2" :
                  guarantees.length === 3 ? "md:grid-cols-3" :
                  guarantees.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" :
                  "md:grid-cols-2 lg:grid-cols-3"

  return (
    <section className={`py-16 bg-green-50 dark:bg-green-900/10 ${className}`}>
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

        {/* Guarantees Grid */}
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {guarantees.map((guarantee, index) => (
            <Card key={index} className={`relative overflow-hidden ${layout === "cards" ? "p-8 text-center" : "p-6"} bg-white dark:bg-slate-800 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 hover:border-green-300 dark:hover:border-green-700`}>
              {/* Badge */}
              {showBadges && guarantee.badge && (
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {guarantee.badge}
                </div>
              )}
              
              {/* Icon */}
              <div className={`${layout === "cards" ? "mb-6" : "mb-4 flex-shrink-0"} ${layout === "cards" ? "flex justify-center" : ""}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full">
                  {getIcon(guarantee.icon)}
                </div>
              </div>
              
              <div className={layout === "cards" ? "" : "flex-1"}>
                {/* Title */}
                <h3 className={`font-bold text-slate-900 dark:text-white mb-3 ${layout === "cards" ? "text-xl" : "text-lg"}`}>
                  {guarantee.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {guarantee.description}
                </p>
                
                {/* Highlights */}
                {guarantee.highlights && guarantee.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {guarantee.highlights.map((highlight, hlIndex) => (
                      <li key={hlIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-green-200 dark:border-green-800 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Why You Can Trust Our Guarantees
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <div className="font-semibold text-slate-900 dark:text-white mb-2">Licensed & Insured</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Fully licensed professionals with comprehensive insurance coverage
                </p>
              </div>
              
              <div className="text-center">
                <Star className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <div className="font-semibold text-slate-900 dark:text-white mb-2">Industry Experience</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Over a decade of experience serving satisfied customers
                </p>
              </div>
              
              <div className="text-center">
                <Shield className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <div className="font-semibold text-slate-900 dark:text-white mb-2">Bonded Business</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Bonded for your protection and peace of mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 