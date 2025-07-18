"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, User, MessageSquare, MapPin, Calendar } from "lucide-react"

export interface FormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "textarea" | "select"
  required?: boolean
  placeholder?: string
  options?: string[]
}

export interface LeadFormProps {
  title?: string
  subtitle?: string
  description?: string
  fields?: FormField[]
  showContactInfo?: boolean
  contactInfo?: {
    phone?: string
    email?: string
    address?: string
  }
  successMessage?: string
  ctaText?: string
  onSubmit?: (data: Record<string, string>) => void
  className?: string
}

export const LeadForm = ({
  title = "Get Your Free Quote",
  subtitle = "Tell us about your project and we'll get back to you within 24 hours",
  description = "No obligation consultation - just honest advice and a fair price.",
  fields = [
    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Smith" },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "john@email.com" },
    { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "(555) 123-4567" },
    { name: "service", label: "Service Needed", type: "select", required: true, options: ["General Inquiry", "Consultation", "Quote Request", "Emergency Service"] },
    { name: "message", label: "Project Details", type: "textarea", required: false, placeholder: "Tell us more about your project..." }
  ],
  showContactInfo = true,
  contactInfo = {
    phone: "(555) 123-4567",
    email: "info@company.com",
    address: "123 Main St, Your City"
  },
  successMessage = "Thank you! We'll contact you within 24 hours.",
  ctaText = "Get Free Quote",
  onSubmit,
  className = ""
}: LeadFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      if (onSubmit) {
        await onSubmit(formData)
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <section className={`py-16 bg-green-50 dark:bg-green-900/20 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-100 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-green-700 dark:text-green-300">
              {successMessage}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 bg-blue-50 dark:bg-slate-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
              {subtitle}
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            {showContactInfo && (
              <div className="lg:col-span-1">
                <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 h-fit">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    {contactInfo.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Phone</div>
                          <a href={`tel:${contactInfo.phone}`} className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {contactInfo.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                          <a href={`mailto:${contactInfo.email}`} className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {contactInfo.address && (
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Address</div>
                          <div className="text-slate-900 dark:text-white">
                            {contactInfo.address}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">Quick Response</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      We typically respond to all inquiries within 2-4 hours during business hours.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            {/* Lead Form */}
            <div className={showContactInfo ? "lg:col-span-2" : "lg:col-span-3"}>
              <Card className="p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {fields.map((field, index) => (
                      <div key={field.name} className={field.type === "textarea" ? "md:col-span-2" : ""}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            rows={4}
                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            value={formData[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                          />
                        ) : field.type === "select" ? (
                          <select
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            value={formData[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                          >
                            <option value="">Select {field.label}</option>
                            {field.options?.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            value={formData[field.name] || ""}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : ctaText}
                  </Button>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    By submitting this form, you agree to be contacted about your project. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 