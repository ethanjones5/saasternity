"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Clock, Award, Star, Target } from "lucide-react"

export interface Stat {
  label: string
  value: string
  description?: string
  icon?: "trending" | "users" | "clock" | "award" | "star" | "target"
  color?: "blue" | "green" | "purple" | "orange" | "red"
}

export interface StatsBlockProps {
  title?: string
  subtitle?: string
  stats: Stat[]
  layout?: "grid" | "row"
  showIcons?: boolean
  animated?: boolean
  className?: string
}

export const StatsBlock = ({
  title = "Our Track Record",
  subtitle = "Numbers that speak to our commitment to excellence and customer satisfaction",
  stats,
  layout = "grid",
  showIcons = true,
  animated = true,
  className = ""
}: StatsBlockProps) => {
  const getIcon = (iconType?: string) => {
    const iconClass = "h-6 w-6"
    switch (iconType) {
      case "trending": return <TrendingUp className={iconClass} />
      case "users": return <Users className={iconClass} />
      case "clock": return <Clock className={iconClass} />
      case "award": return <Award className={iconClass} />
      case "star": return <Star className={iconClass} />
      case "target": return <Target className={iconClass} />
      default: return <TrendingUp className={iconClass} />
    }
  }

  const getColorClasses = (color?: string) => {
    switch (color) {
      case "green":
        return {
          icon: "text-green-600 dark:text-green-400",
          bg: "bg-green-100 dark:bg-green-900",
          accent: "text-green-900 dark:text-green-100"
        }
      case "purple":
        return {
          icon: "text-purple-600 dark:text-purple-400",
          bg: "bg-purple-100 dark:bg-purple-900",
          accent: "text-purple-900 dark:text-purple-100"
        }
      case "orange":
        return {
          icon: "text-orange-600 dark:text-orange-400",
          bg: "bg-orange-100 dark:bg-orange-900",
          accent: "text-orange-900 dark:text-orange-100"
        }
      case "red":
        return {
          icon: "text-red-600 dark:text-red-400",
          bg: "bg-red-100 dark:bg-red-900",
          accent: "text-red-900 dark:text-red-100"
        }
      default: // blue
        return {
          icon: "text-blue-600 dark:text-blue-400",
          bg: "bg-blue-100 dark:bg-blue-900",
          accent: "text-blue-900 dark:text-blue-100"
        }
    }
  }

  const gridCols = stats.length === 2 ? "md:grid-cols-2" :
                  stats.length === 3 ? "md:grid-cols-3" :
                  stats.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" :
                  stats.length === 5 ? "md:grid-cols-2 lg:grid-cols-5" :
                  "md:grid-cols-2 lg:grid-cols-3"

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

        {/* Stats */}
        {layout === "row" ? (
          // Row Layout for fewer stats
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const colors = getColorClasses(stat.color)
                return (
                  <Card key={index} className="p-8 text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                    {showIcons && (
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-full mb-6`}>
                        <div className={colors.icon}>
                          {getIcon(stat.icon)}
                        </div>
                      </div>
                    )}
                    <div className={`text-4xl md:text-5xl font-bold mb-2 ${animated ? 'transition-all duration-300 hover:scale-105' : ''}`}>
                      <span className="text-slate-900 dark:text-white">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {stat.label}
                    </div>
                    {stat.description && (
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {stat.description}
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        ) : (
          // Grid Layout for more stats
          <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
            {stats.map((stat, index) => {
              const colors = getColorClasses(stat.color)
              return (
                <Card key={index} className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    {showIcons && (
                      <div className={`flex-shrink-0 w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <div className={colors.icon}>
                          {getIcon(stat.icon)}
                        </div>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className={`text-2xl md:text-3xl font-bold mb-1 ${animated ? 'transition-all duration-300 hover:scale-105' : ''}`}>
                        <span className="text-slate-900 dark:text-white">
                          {stat.value}
                        </span>
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white mb-1">
                        {stat.label}
                      </div>
                      {stat.description && (
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {stat.description}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            These numbers represent real results for real customers. 
            <br />
            Let us help you achieve similar success.
          </p>
        </div>
      </div>
    </section>
  )
} 