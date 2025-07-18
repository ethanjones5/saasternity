import * as React from "react"

export interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
  followers?: string
  description?: string
}

export interface SocialLinksProps {
  heading?: string
  description?: string
  links: SocialLink[]
  variant?: "default" | "cards" | "minimal" | "inline"
  showFollowers?: boolean
  className?: string
}

export function SocialLinks({
  heading,
  description,
  links,
  variant = "default",
  showFollowers = false,
  className = "",
}: SocialLinksProps) {
  if (variant === "inline") {
    return (
      <div className={`flex items-center space-x-4 ${className}`}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label={`Follow us on ${link.platform}`}
          >
            <div className="w-5 h-5">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    )
  }

  if (variant === "minimal") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Header */}
            {(heading || description) && (
              <div className="space-y-4">
                {heading && (
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {heading}
                  </h2>
                )}
                {description && (
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110"
                  aria-label={`Follow us on ${link.platform}`}
                >
                  <div className="w-8 h-8">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === "cards") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {(heading || description) && (
            <div className="text-center mb-16 space-y-4">
              {heading && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {heading}
                </h2>
              )}
              {description && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                      <div className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {link.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {link.platform}
                    </h3>
                    {showFollowers && link.followers && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {link.followers} followers
                      </p>
                    )}
                    {link.description && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {link.description}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section className={`py-16 md:py-24 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(heading || description) && (
          <div className="text-center mb-16 space-y-4">
            {heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Social Links List */}
        <div className="max-w-2xl mx-auto space-y-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                  <div className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {link.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {link.platform}
                  </h3>
                  {showFollowers && link.followers && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {link.followers} followers
                    </p>
                  )}
                  {link.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {link.description}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Arrow */}
              <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 