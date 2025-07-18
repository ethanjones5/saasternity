"use client"

import { Card } from "@/components/ui/card"
import { Star, Shield, Award, Users, CheckCircle, Quote } from "lucide-react"

export interface Review {
  name: string
  rating: number
  comment: string
  source?: string
  date?: string
  location?: string
}

export interface TrustBadge {
  name: string
  description?: string
  image?: string
  verified?: boolean
}

export interface SocialProofProps {
  title?: string
  subtitle?: string
  overallRating?: number
  totalReviews?: number
  reviews?: Review[]
  trustBadges?: TrustBadge[]
  achievements?: {
    title: string
    value: string
    description?: string
  }[]
  showReviews?: boolean
  showBadges?: boolean
  showAchievements?: boolean
  className?: string
}

export const SocialProof = ({
  title = "What Our Customers Say",
  subtitle = "Don't just take our word for it - see what our satisfied customers have to say about our service",
  overallRating = 4.9,
  totalReviews = 127,
  reviews = [],
  trustBadges = [],
  achievements = [],
  showReviews = true,
  showBadges = true,
  showAchievements = true,
  className = ""
}: SocialProofProps) => {
  const renderStars = (rating: number, size: "sm" | "lg" = "sm") => {
    const starSize = size === "lg" ? "h-6 w-6" : "h-4 w-4"
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating 
                ? "text-yellow-400 fill-current" 
                : "text-slate-300 dark:text-slate-600"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className={`py-16 bg-slate-50 dark:bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                {overallRating}
              </div>
              {renderStars(overallRating, "lg")}
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Based on {totalReviews} reviews
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        {showAchievements && achievements.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">
                  {achievement.title}
                </div>
                {achievement.description && (
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {achievement.description}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Reviews */}
        {showReviews && reviews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center mb-8">
              Recent Reviews
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.slice(0, 6).map((review, index) => (
                <Card key={index} className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(review.rating)}
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {review.rating}/5
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                        "{review.comment}"
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white text-sm">
                          {review.name}
                        </div>
                        {review.location && (
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {review.location}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        {review.source && (
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {review.source}
                          </div>
                        )}
                        {review.date && (
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {review.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trust Badges */}
        {showBadges && trustBadges.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center mb-8">
              Trusted & Certified
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    {badge.image ? (
                      <img 
                        src={badge.image} 
                        alt={badge.name}
                        className="h-16 w-auto mx-auto mb-3 grayscale group-hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-8 w-8 text-slate-400 dark:text-slate-500" />
                      </div>
                    )}
                    {badge.verified && (
                      <CheckCircle className="absolute -top-1 -right-1 h-5 w-5 text-green-600 dark:text-green-400 bg-white dark:bg-slate-800 rounded-full" />
                    )}
                  </div>
                  <div className="font-medium text-slate-900 dark:text-white text-sm">
                    {badge.name}
                  </div>
                  {badge.description && (
                    <div className="text-xs text-slate-600 dark:text-slate-300 max-w-20">
                      {badge.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 max-w-2xl mx-auto">
            <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
              Join Our Satisfied Customers
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-6">
              Experience the same quality service that has earned us excellent reviews 
              and made us a trusted choice in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Your Free Quote
              </a>
              <a 
                href="tel:(555) 123-4567" 
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 