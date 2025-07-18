import * as React from "react"

export interface BrandLogo {
  name: string
  logo: string | React.ReactNode
  href?: string
}

export interface BrandLogosProps {
  heading?: string
  description?: string
  logos: BrandLogo[]
  variant?: "default" | "carousel" | "grid"
  grayscale?: boolean
  className?: string
}

export function BrandLogos({
  heading,
  description,
  logos,
  variant = "default",
  grayscale = true,
  className = "",
}: BrandLogosProps) {
  if (variant === "grid") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(heading || description) && (
            <div className="text-center mb-16 space-y-4">
              {heading && (
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {logos.map((brand, index) => (
              <LogoItem key={index} brand={brand} grayscale={grayscale} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (variant === "carousel") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(heading || description) && (
            <div className="text-center mb-16 space-y-4">
              {heading && (
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Infinite Scroll Animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set */}
              {logos.map((brand, index) => (
                <div key={`first-${index}`} className="flex-none mx-8">
                  <LogoItem brand={brand} grayscale={grayscale} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {logos.map((brand, index) => (
                <div key={`second-${index}`} className="flex-none mx-8">
                  <LogoItem brand={brand} grayscale={grayscale} />
                </div>
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 z-10" />
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </section>
    )
  }

  // Default horizontal layout
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(heading || description) && (
          <div className="text-center mb-16 space-y-4">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Default Layout */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((brand, index) => (
            <LogoItem key={index} brand={brand} grayscale={grayscale} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoItem({ brand, grayscale }: { brand: BrandLogo; grayscale: boolean }) {
  const content = (
    <div className={`flex items-center justify-center h-12 w-32 transition-all duration-300 ${
      grayscale ? "grayscale hover:grayscale-0 opacity-60 hover:opacity-100" : "opacity-80 hover:opacity-100"
    }`}>
      {typeof brand.logo === 'string' ? (
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-12 max-w-32 object-contain"
        />
      ) : (
        brand.logo
      )}
    </div>
  )

  if (brand.href) {
    return (
      <a 
        href={brand.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transform hover:scale-110 transition-transform duration-300"
      >
        {content}
      </a>
    )
  }

  return content
} 