import * as React from "react"
import { Button } from "@/components/ui/button"

export interface VideoSectionProps {
  heading: string
  subheading?: string
  description?: string
  video: {
    src?: string
    poster?: string
    embedId?: string
    provider?: "youtube" | "vimeo" | "custom"
  }
  cta?: {
    text: string
    href: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }
  variant?: "default" | "centered" | "split"
  className?: string
}

function PlayIcon() {
  return (
    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
  )
}

export function VideoSection({
  heading,
  subheading,
  description,
  video,
  cta,
  variant = "default",
  className = "",
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)

  const getEmbedUrl = () => {
    if (!video.embedId) return ""
    
    switch (video.provider) {
      case "youtube":
        return `https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0`
      case "vimeo":
        return `https://player.vimeo.com/video/${video.embedId}?autoplay=1`
      default:
        return video.src || ""
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (variant === "split") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {subheading && (
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                  {subheading}
                </div>
              )}
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                {heading}
              </h2>
              
              {description && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              )}
              
              {cta && (
                <Button
                  size="lg"
                  variant={cta.variant || "default"}
                  asChild
                  className="px-8 py-3 text-base font-semibold"
                >
                  <a href={cta.href}>{cta.text}</a>
                </Button>
              )}
            </div>

            {/* Video */}
            <div className="relative">
              <VideoPlayer 
                video={video} 
                isPlaying={isPlaying} 
                onPlay={handlePlay}
                getEmbedUrl={getEmbedUrl}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === "centered") {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Header */}
            <div className="space-y-6">
              {subheading && (
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                  {subheading}
                </div>
              )}
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {heading}
              </h2>
              
              {description && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>

            {/* Video */}
            <VideoPlayer 
              video={video} 
              isPlaying={isPlaying} 
              onPlay={handlePlay}
              getEmbedUrl={getEmbedUrl}
            />
            
            {cta && (
              <Button
                size="lg"
                variant={cta.variant || "default"}
                asChild
                className="px-8 py-3 text-base font-semibold"
              >
                <a href={cta.href}>{cta.text}</a>
              </Button>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Default layout
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            {subheading && (
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                {subheading}
              </div>
            )}
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h2>
            
            {description && (
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>

          {/* Video */}
          <VideoPlayer 
            video={video} 
            isPlaying={isPlaying} 
            onPlay={handlePlay}
            getEmbedUrl={getEmbedUrl}
          />
          
          {cta && (
            <div className="text-center">
              <Button
                size="lg"
                variant={cta.variant || "default"}
                asChild
                className="px-8 py-3 text-base font-semibold"
              >
                <a href={cta.href}>{cta.text}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function VideoPlayer({ 
  video, 
  isPlaying, 
  onPlay, 
  getEmbedUrl 
}: { 
  video: VideoSectionProps['video']
  isPlaying: boolean
  onPlay: () => void
  getEmbedUrl: () => string
}) {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
      {!isPlaying ? (
        <>
          {/* Poster/Thumbnail */}
          <img
            src={video.poster || "/api/placeholder/800/450"}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              onClick={onPlay}
              className="flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
              aria-label="Play video"
            >
              <PlayIcon />
            </button>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
        </>
      ) : (
        <iframe
          src={getEmbedUrl()}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      )}
    </div>
  )
} 