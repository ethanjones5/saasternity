"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from "lucide-react"

export interface FAQItem {
  question: string
  answer: string
  category?: string
  popular?: boolean
}

export interface FAQProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  categories?: string[]
  showCategories?: boolean
  showContact?: boolean
  contactInfo?: {
    phone?: string
    email?: string
    hours?: string
  }
  className?: string
}

export const FAQ = ({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our services and process",
  faqs,
  categories = [],
  showCategories = true,
  showContact = true,
  contactInfo = {
    phone: "(555) 123-4567",
    email: "info@company.com",
    hours: "Mon-Fri 8AM-6PM"
  },
  className = ""
}: FAQProps) => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Get unique categories from FAQs if not provided
  const allCategories = categories.length > 0 ? categories : 
    [...new Set(faqs.map(faq => faq.category).filter(Boolean) as string[])]

  // Filter FAQs by category
  const filteredFAQs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  // Sort FAQs with popular ones first
  const sortedFAQs = [...filteredFAQs].sort((a, b) => {
    if (a.popular && !b.popular) return -1
    if (!a.popular && b.popular) return 1
    return 0
  })

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className={`py-16 bg-slate-50 dark:bg-slate-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          {showCategories && allCategories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600"
                }`}
              >
                All Questions
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* FAQ List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {sortedFAQs.map((faq, index) => (
                  <Card key={index} className="overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {faq.question}
                            {faq.popular && (
                              <span className="ml-2 inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs font-normal">
                                Popular
                              </span>
                            )}
                          </h3>
                          {faq.category && (
                            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                              {faq.category}
                            </div>
                          )}
                        </div>
                        <div className="flex-shrink-0">
                          {openItems.includes(index) ? (
                            <ChevronUp className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                          <div className="text-slate-600 dark:text-slate-300 prose prose-sm max-w-none">
                            {faq.answer.split('\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className={pIndex > 0 ? "mt-3" : ""}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Sidebar */}
            {showContact && (
              <div className="lg:col-span-1">
                <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 sticky top-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                    Still Have Questions?
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">
                    Can't find what you're looking for? Our friendly team is here to help you with any questions about our services.
                  </p>
                  
                  <div className="space-y-4">
                    {contactInfo.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Call us</div>
                          <a 
                            href={`tel:${contactInfo.phone}`}
                            className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {contactInfo.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Email us</div>
                          <a 
                            href={`mailto:${contactInfo.email}`}
                            className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 break-all"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {contactInfo.hours && (
                      <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Business Hours</div>
                        <div className="text-sm text-slate-900 dark:text-white">
                          {contactInfo.hours}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <a 
                      href="/contact" 
                      className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Contact Us
                    </a>
                    <a 
                      href="/quote" 
                      className="block w-full text-center px-4 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 