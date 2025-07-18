import * as React from "react"
import { Button } from "@/components/ui/button"

export interface FormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "select" | "textarea"
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

export interface LeadCaptureFormProps {
  heading: string
  description?: string
  fields: FormField[]
  submitButton: {
    text: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }
  onSubmit: (data: Record<string, string>) => void | Promise<void>
  isLoading?: boolean
  privacyNote?: string
  className?: string
}

export function LeadCaptureForm({
  heading,
  description,
  fields,
  submitButton,
  onSubmit,
  isLoading = false,
  privacyNote,
  className = "",
}: LeadCaptureFormProps) {
  const [formData, setFormData] = React.useState<Record<string, string>>({})
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    fields.forEach(field => {
      const value = formData[field.name] || ""
      
      if (field.required && !value.trim()) {
        newErrors[field.name] = `${field.label} is required`
      } else if (field.type === "email" && value && !isValidEmail(value)) {
        newErrors[field.name] = "Please enter a valid email address"
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    try {
      await onSubmit(formData)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderField = (field: FormField) => {
    const value = formData[field.name] || ""
    const error = errors[field.name]
    const hasError = !!error

    switch (field.type) {
      case "select":
        return (
          <select
            id={field.name}
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              hasError 
                ? "border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-900/20" 
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            } text-gray-900 dark:text-white`}
            required={field.required}
          >
            <option value="">{field.placeholder || `Select ${field.label}`}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      case "textarea":
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-y ${
              hasError 
                ? "border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-900/20" 
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
            required={field.required}
          />
        )
      
      default:
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              hasError 
                ? "border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-900/20" 
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            } text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
            required={field.required}
          />
        )
    }
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h2>
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                
                {renderField(field)}
                
                {errors[field.name] && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                variant={submitButton.variant || "default"}
                disabled={isSubmitting || isLoading}
                className="w-full"
              >
                {isSubmitting || isLoading ? "Submitting..." : submitButton.text}
              </Button>
            </div>

            {/* Privacy Note */}
            {privacyNote && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {privacyNote}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
} 