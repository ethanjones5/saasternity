"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

export interface GalleryItem {
  id: string
  title: string
  description?: string
  imageUrl: string
  category?: string
  tags?: string[]
}

export interface GalleryProps {
  title?: string
  subtitle?: string
  items: GalleryItem[]
  layout?: "grid" | "carousel" | "auto"
  categories?: string[]
  showCategories?: boolean
  showLightbox?: boolean
  itemsPerPage?: number
  className?: string
}

export const Gallery = ({
  title = "Our Work",
  subtitle = "Take a look at some of our recent projects and satisfied customers",
  items,
  layout = "auto",
  categories = [],
  showCategories = true,
  showLightbox = true,
  itemsPerPage = 6,
  className = ""
}: GalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(0)
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Auto-detect layout based on item count
  const getLayout = () => {
    if (layout !== "auto") return layout
    return items.length <= 4 ? "grid" : "carousel"
  }

  const currentLayout = getLayout()

  // Get unique categories from items if not provided
  const allCategories = categories.length > 0 ? categories : 
    [...new Set(items.map(item => item.category).filter(Boolean) as string[])]

  // Filter items by category
  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  // Pagination for grid layout
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const paginatedItems = currentLayout === "grid" 
    ? filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : filteredItems

  // Carousel navigation
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <>
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

          {/* Category Filter */}
          {showCategories && allCategories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory("all")
                  setCurrentPage(0)
                  setCarouselIndex(0)
                }}
                className="text-sm"
              >
                All
              </Button>
              {allCategories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(0)
                    setCarouselIndex(0)
                  }}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          )}

          {/* Gallery Content */}
          {currentLayout === "carousel" ? (
            // Carousel Layout
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg">
                <div className="flex transition-transform duration-300 ease-in-out"
                     style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                  {filteredItems.map((item, index) => (
                    <div key={item.id} className="w-full flex-shrink-0">
                      <div className="relative aspect-[4/3] group cursor-pointer"
                           onClick={() => showLightbox && setLightboxItem(item)}>
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          {showLightbox && (
                            <ZoomIn className="h-8 w-8 text-white" />
                          )}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                          <h3 className="text-white text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-white/90 text-sm">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90"
                onClick={prevSlide}
                disabled={filteredItems.length <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-slate-800/90"
                onClick={nextSlide}
                disabled={filteredItems.length <= 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {filteredItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === carouselIndex ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                    onClick={() => setCarouselIndex(index)}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Grid Layout
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 group cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => showLightbox && setLightboxItem(item)}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {showLightbox && (
                          <ZoomIn className="h-6 w-6 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                          {item.description}
                        </p>
                      )}
                      {item.category && (
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                          {item.category}
                        </span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                    disabled={currentPage === 0}
                  >
                    Previous
                  </Button>
                  <span className="text-slate-600 dark:text-slate-300">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                    disabled={currentPage === totalPages - 1}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {showLightbox && lightboxItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
             onClick={() => setLightboxItem(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxItem.imageUrl}
              alt={lightboxItem.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setLightboxItem(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {lightboxItem.title}
              </h3>
              {lightboxItem.description && (
                <p className="text-white/90">
                  {lightboxItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
} 