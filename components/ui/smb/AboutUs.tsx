"use client"

import { Card } from "@/components/ui/card"
import { Award, Users, Target, Heart } from "lucide-react"

export interface AboutUsProps {
  title?: string
  description?: string
  yearEstablished?: number
  achievements?: {
    title: string
    description: string
    icon?: "award" | "users" | "target" | "heart"
  }[]
  stats?: {
    label: string
    value: string
  }[]
  mission?: string
  className?: string
}

export const AboutUs = ({
  title = "About Our Company",
  description = "We are a trusted local business committed to providing exceptional service and building lasting relationships with our clients.",
  yearEstablished = 2015,
  achievements = [
    {
      title: "Quality Service",
      description: "Committed to delivering excellence in every project",
      icon: "award"
    },
    {
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
      icon: "users"
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our top priority",
      icon: "target"
    },
    {
      title: "Community Care",
      description: "Proudly serving our local community",
      icon: "heart"
    }
  ],
  stats = [
    { label: "Years in Business", value: `${new Date().getFullYear() - yearEstablished}+` },
    { label: "Happy Clients", value: "500+" },
    { label: "Projects Completed", value: "1000+" },
    { label: "Team Members", value: "15+" }
  ],
  mission = "Our mission is to provide reliable, high-quality services that help our clients achieve their goals while contributing to the growth and prosperity of our community.",
  className = ""
}: AboutUsProps) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "award": return <Award className="h-8 w-8" />
      case "users": return <Users className="h-8 w-8" />
      case "target": return <Target className="h-8 w-8" />
      case "heart": return <Heart className="h-8 w-8" />
      default: return <Award className="h-8 w-8" />
    }
  }

  return (
    <section className={`py-16 bg-slate-50 dark:bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            {description}
          </p>
          <p className="text-base text-slate-500 dark:text-slate-400 italic">
            {mission}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                {getIcon(achievement.icon || "award")}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 