import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

export interface Testimonial {
  content: string
  author: {
    name: string
    title: string
    company: string
    avatar?: string
  }
  rating?: number
  featured?: boolean
}

export interface TestimonialsProps {
  heading: string
  description?: string
  testimonials: Testimonial[]
  layout?: "grid" | "carousel"
  showRatings?: boolean
  className?: string
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials({
  heading,
  description,
  testimonials,
  layout = "grid",
  showRatings = true,
  className = "",
}: TestimonialsProps) {
  const featuredTestimonials = testimonials.filter((t) => t.featured)
  const regularTestimonials = testimonials.filter((t) => !t.featured)

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

        {/* Featured Testimonials */}
        {featuredTestimonials.length > 0 && (
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-xl bg-white dark:bg-gray-800">
                  <CardContent className="p-8 lg:p-12">
                    {/* Rating */}
                    {showRatings && testimonial.rating && (
                      <div className="mb-6">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    )}
                    
                    {/* Content */}
                    <blockquote className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      {testimonial.author.avatar && (
                        <img
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.author.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {testimonial.author.title} at {testimonial.author.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Testimonials Grid */}
        {regularTestimonials.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  {showRatings && testimonial.rating && (
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  )}
                  
                  {/* Content */}
                  <blockquote className="text-gray-900 dark:text-white leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    {testimonial.author.avatar && (
                      <img
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.author.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        {testimonial.author.title} at {testimonial.author.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 