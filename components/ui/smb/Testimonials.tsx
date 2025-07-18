"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote, MapPin, Calendar } from "lucide-react"

export interface Testimonial {
  name: string
  location?: string
  serviceType?: string
  rating: number
  comment: string
  date?: string
  image?: string
  projectDetails?: string
  beforeAfter?: {
    before?: string
    after?: string
  }
}

export interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  layout?: "grid" | "carousel" | "featured"
  showImages?: boolean
  showProjectDetails?: boolean
  showBeforeAfter?: boolean
  className?: string
}

export const Testimonials = ({
  title = "What Our Customers Say",
  subtitle = "Real feedback from real customers in our community",
  testimonials,
  layout = "grid",
  showImages = true,
  showProjectDetails = false,
  showBeforeAfter = false,
  className = ""
}: TestimonialsProps) => {
  const renderStars = (rating: number) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating 
              ? "text-yellow-400 fill-current" 
              : "text-slate-300 dark:text-slate-600"
          }`}
        />
      ))}
    </div>
  )

  const featuredTestimonial = testimonials.find(t => t.rating === 5) || testimonials[0]
  const regularTestimonials = testimonials.filter(t => t !== featuredTestimonial)

  if (layout === "featured") {
    return (
      <section className={`py-16 bg-blue-50 dark:bg-blue-900/20 ${className}`}>
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

          {/* Featured Testimonial */}
          {featuredTestimonial && (
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="p-8 lg:p-12 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                <Quote className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                
                <blockquote className="text-xl lg:text-2xl text-slate-700 dark:text-slate-300 mb-8 italic">
                  "{featuredTestimonial.comment}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  {showImages && featuredTestimonial.image && (
                    <img 
                      src={featuredTestimonial.image} 
                      alt={featuredTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div className="text-center">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {featuredTestimonial.name}
                    </div>
                    {featuredTestimonial.location && (
                      <div className="text-slate-600 dark:text-slate-300 text-sm flex items-center justify-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {featuredTestimonial.location}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  {renderStars(featuredTestimonial.rating)}
                  <span className="text-slate-600 dark:text-slate-300">
                    {featuredTestimonial.rating}/5 stars
                  </span>
                </div>
                
                {featuredTestimonial.serviceType && (
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      {featuredTestimonial.serviceType}
                    </span>
                  </div>
                )}
              </Card>
            </div>
          )}

          {/* Regular Testimonials Grid */}
          {regularTestimonials.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularTestimonials.slice(0, 6).map((testimonial, index) => (
                <Card key={index} className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-2 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="text-slate-600 dark:text-slate-300 text-sm ml-2">
                      {testimonial.rating}/5
                    </span>
                  </div>
                  
                  <blockquote className="text-slate-600 dark:text-slate-300 mb-4 italic">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                    <div className="flex items-center gap-3">
                      {showImages && testimonial.image && (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <div className="font-medium text-slate-900 dark:text-white text-sm">
                          {testimonial.name}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                          {testimonial.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {testimonial.location}
                            </span>
                          )}
                          {testimonial.date && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {testimonial.date}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {testimonial.serviceType && (
                      <div className="mt-3">
                        <span className="inline-block bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded text-xs">
                          {testimonial.serviceType}
                        </span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }

  // Grid layout (default)
  const gridCols = testimonials.length <= 2 ? "md:grid-cols-2" : 
                  testimonials.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : 
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

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-slate-600 dark:text-slate-300 text-sm">
                  {testimonial.rating}/5
                </span>
              </div>
              
              {/* Comment */}
              <blockquote className="text-slate-600 dark:text-slate-300 mb-4 italic">
                "{testimonial.comment}"
              </blockquote>
              
              {/* Project Details */}
              {showProjectDetails && testimonial.projectDetails && (
                <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg mb-4">
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <strong>Project:</strong> {testimonial.projectDetails}
                  </div>
                </div>
              )}
              
              {/* Before/After Images */}
              {showBeforeAfter && testimonial.beforeAfter && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {testimonial.beforeAfter.before && (
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Before</div>
                      <img 
                        src={testimonial.beforeAfter.before} 
                        alt="Before"
                        className="w-full h-20 object-cover rounded"
                      />
                    </div>
                  )}
                  {testimonial.beforeAfter.after && (
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">After</div>
                      <img 
                        src={testimonial.beforeAfter.after} 
                        alt="After"
                        className="w-full h-20 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              )}
              
              {/* Customer Info */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <div className="flex items-center gap-3">
                  {showImages && testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 dark:text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </span>
                      )}
                      {testimonial.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {testimonial.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {testimonial.serviceType && (
                  <div className="mt-3">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                      {testimonial.serviceType}
                    </span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Ready to join our satisfied customers?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Your Free Quote
            </a>
            <a 
              href="/reviews" 
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 