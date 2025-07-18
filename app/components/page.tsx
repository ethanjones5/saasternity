import { SiteHeader } from "@/components/layout/site-header";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { HoverEffect } from "@/components/aceternity/card-hover-effect";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { Meteors } from "@/components/aceternity/meteors";
import { Spotlight } from "@/components/aceternity/spotlight";
import { MovingBorder } from "@/components/aceternity/moving-border";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Comprehensive component catalog
const aceternityComponents = [
  {
    category: "Background & Effects",
    components: [
      { name: "BackgroundBeams", description: "Animated SVG beam effects", complexity: "Medium", demo: true },
      { name: "AuroraBackground", description: "Northern lights background effect", complexity: "Low" },
      { name: "Meteors", description: "Falling meteor animations", complexity: "Medium", demo: true },
      { name: "SparklesCore", description: "Configurable sparkles animation", complexity: "High" },
      { name: "Spotlight", description: "SVG spotlight effects", complexity: "Low", demo: true },
      { name: "ShootingStars", description: "Shooting star animation", complexity: "Medium" },
      { name: "Vortex", description: "Wavy vortex background", complexity: "High" },
      { name: "WavyBackground", description: "Wave motion background", complexity: "High" }
    ]
  },
  {
    category: "Cards & Hover Effects", 
    components: [
      { name: "BentoGrid", description: "Skewed grid layout", complexity: "Low" },
      { name: "HoverEffect", description: "Card hover animations", complexity: "Medium", demo: true },
      { name: "CardStack", description: "Auto-rotating card stack", complexity: "Medium" },
      { name: "EvervaultCard", description: "Encrypted text reveal", complexity: "High" },
      { name: "WobbleCard", description: "Mouse-based wobble effect", complexity: "Medium" },
      { name: "GlareCard", description: "Linear-style glare effect", complexity: "Medium" },
      { name: "FocusCards", description: "Focus-blur card interactions", complexity: "Medium" },
      { name: "TextRevealCard", description: "Mouse reveal text effect", complexity: "High" },
      { name: "DirectionAwareHover", description: "Direction-aware hover", complexity: "High" }
    ]
  },
  {
    category: "Text Effects",
    components: [
      { name: "TextGenerateEffect", description: "Word-by-word text reveal", complexity: "Low", demo: true },
      { name: "TypewriterEffect", description: "Typewriter text animation", complexity: "Low" },
      { name: "FlipWords", description: "Rotating word carousel", complexity: "Medium" },
      { name: "HeroHighlight", description: "Text highlighting effects", complexity: "Low" }
    ]
  },
  {
    category: "Navigation & UI",
    components: [
      { name: "FloatingNav", description: "Hide/reveal sticky navbar", complexity: "Medium" },
      { name: "FloatingDock", description: "Mac OS style dock", complexity: "High" },
      { name: "Sidebar", description: "Expandable sidebar", complexity: "Medium" },
      { name: "Tabs", description: "Animated tabs component", complexity: "Low" },
      { name: "Menu", description: "Animated navbar menu", complexity: "Medium" }
    ]
  },
  {
    category: "Motion & Interactions",
    components: [
      { name: "MovingBorder", description: "Animated gradient borders", complexity: "Medium", demo: true },
      { name: "InfiniteMovingCards", description: "Infinite scrolling cards", complexity: "Medium" },
      { name: "HoverBorderGradient", description: "Expanding gradient border", complexity: "Medium" },
      { name: "FollowerPointerCard", description: "Custom mouse pointer", complexity: "High" }
    ]
  },
  {
    category: "Layout & Containers",
    components: [
      { name: "LayoutGrid", description: "Animated grid with click effects", complexity: "High" },
      { name: "ParallaxScroll", description: "Two-column parallax", complexity: "Medium" },
      { name: "ContainerScroll", description: "Scroll-based animations", complexity: "High" },
      { name: "HeroParallax", description: "3D parallax hero section", complexity: "High" },
      { name: "Compare", description: "Before/after comparison", complexity: "Medium" }
    ]
  },
  {
    category: "Advanced Effects",
    components: [
      { name: "GoogleGeminiEffect", description: "Gemini-style animations", complexity: "Very High" },
      { name: "TracingBeam", description: "Animated line tracing", complexity: "High" },
      { name: "Timeline", description: "Animated timeline component", complexity: "Medium" },
      { name: "Lens", description: "Magnifying lens effect", complexity: "High" },
      { name: "LinkPreview", description: "Hover link previews", complexity: "Medium" },
      { name: "MacbookScroll", description: "MacBook Pro showcase", complexity: "Very High" }
    ]
  }
];

const saasComponents = [
  { name: "HeroSaaS", description: "SaaS landing hero", usage: "Landing pages" },
  { name: "FeaturesGrid", description: "Feature showcase grid", usage: "Feature sections" },
  { name: "PricingTiers", description: "Pricing table component", usage: "Pricing pages" },
  { name: "Testimonials", description: "Customer testimonials", usage: "Social proof" },
  { name: "LeadCaptureForm", description: "Lead generation form", usage: "Conversion" },
  { name: "NewsletterSignup", description: "Email subscription", usage: "Engagement" },
  { name: "CTABanner", description: "Call-to-action banner", usage: "Conversion" },
  { name: "WhyUs", description: "Differentiator section", usage: "Value prop" },
  { name: "BrandLogos", description: "Client logo showcase", usage: "Social proof" },
  { name: "VideoSection", description: "Product demo videos", usage: "Engagement" },
  { name: "StatsSection", description: "Key metrics display", usage: "Social proof" },
  { name: "UseCases", description: "Use case examples", usage: "Education" },
  { name: "TeamSection", description: "Team member profiles", usage: "About pages" },
  { name: "ContactOptions", description: "Contact methods", usage: "Support" },
  { name: "SocialLinks", description: "Social media links", usage: "Footer" }
];

const smbComponents = [
  { name: "HeroSMB", description: "Local business hero", usage: "Landing pages" },
  { name: "AboutUs", description: "Company overview", usage: "About pages" },
  { name: "ServicesList", description: "Service offerings", usage: "Service pages" },
  { name: "ContactCard", description: "Contact information", usage: "Contact pages" },
  { name: "LeadForm", description: "Local lead capture", usage: "Conversion" },
  { name: "Gallery", description: "Work portfolio gallery", usage: "Portfolio" },
  { name: "ServiceAreaMap", description: "Coverage area map", usage: "Local SEO" },
  { name: "StatsBlock", description: "Business statistics", usage: "Social proof" },
  { name: "Guarantees", description: "Service guarantees", usage: "Trust building" },
  { name: "ProcessSteps", description: "Work process flow", usage: "Education" },
  { name: "TeamGrid", description: "Staff profiles", usage: "About pages" },
  { name: "SocialProof", description: "Reviews & badges", usage: "Trust building" },
  { name: "NewsletterCapture", description: "Local newsletter", usage: "Engagement" },
  { name: "FAQ", description: "Frequently asked questions", usage: "Support" }
];

const projects = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix", 
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies and documentaries.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-black/[0.96] antialiased">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 md:pt-0">
          <TextGenerateEffect 
            words="Complete Component Arsenal"
            className="text-center text-4xl font-bold md:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-lg text-center text-base font-normal text-neutral-300 md:text-lg">
            78 components ready for your next unique website. Copy, customize, and create.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <MovingBorder duration={2000} className="bg-background text-foreground">
              <span>Browse Components</span>
            </MovingBorder>
            <Button variant="outline" size="lg" asChild>
              <Link href="#catalog">View Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Component Catalog */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Component Catalog
            </h2>
            <p className="text-lg text-muted-foreground">
              Every component in your arsenal, organized and ready to use
            </p>
          </div>
          
          <Tabs defaultValue="aceternity" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="aceternity">🎨 Aceternity UI (48)</TabsTrigger>
              <TabsTrigger value="saas">🏢 SaaS Components (15)</TabsTrigger>
              <TabsTrigger value="smb">🏪 SMB Components (15)</TabsTrigger>
            </TabsList>
            
            {/* Aceternity Components */}
            <TabsContent value="aceternity" className="mt-8">
              {aceternityComponents.map((category, idx) => (
                <div key={idx} className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.components.map((component, compIdx) => (
                      <Card key={compIdx} className="relative">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{component.name}</CardTitle>
                            <div className="flex gap-2">
                              <Badge variant={
                                component.complexity === "Low" ? "default" :
                                component.complexity === "Medium" ? "secondary" :
                                component.complexity === "High" ? "destructive" : "outline"
                              }>
                                {component.complexity}
                              </Badge>
                              {component.demo && <Badge variant="outline">Demo ↓</Badge>}
                            </div>
                          </div>
                          <CardDescription>{component.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <code className="text-sm bg-muted p-2 rounded block break-all">
                            import &#123; {component.name} &#125; from &quot;@/components/aceternity&quot;
                          </code>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
            
            {/* SaaS Components */}
            <TabsContent value="saas" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {saasComponents.map((component, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{component.name}</CardTitle>
                        <Badge>{component.usage}</Badge>
                      </div>
                      <CardDescription>{component.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <code className="text-sm bg-muted p-2 rounded block break-all">
                        import &#123; {component.name} &#125; from &quot;@/components/ui/saas&quot;
                      </code>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* SMB Components */}
            <TabsContent value="smb" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {smbComponents.map((component, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{component.name}</CardTitle>
                        <Badge variant="secondary">{component.usage}</Badge>
                      </div>
                      <CardDescription>{component.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <code className="text-sm bg-muted p-2 rounded block break-all">
                        import &#123; {component.name} &#125; from &quot;@/components/ui/smb&quot;
                      </code>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Live Demos Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Live Component Demos
            </h2>
            <p className="text-lg text-muted-foreground">
              See key components in action
            </p>
          </div>
          
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* Background Demos */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        <BackgroundBeams className="opacity-40" />
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-white">
            Background Effects Demo
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Perfect for hero sections and feature areas
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-neutral-950 overflow-hidden">
        <Meteors number={15} />
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-white">
            Meteors Effect Demo
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Great for night-themed sections and dramatic backgrounds
          </p>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Quick Start Guide
            </h2>
            <p className="text-lg text-muted-foreground">
              Get building with your component arsenal
            </p>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>🎨 Creating Unique Designs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Mix components for maximum impact:</p>
                <div className="bg-muted p-4 rounded">
                                     <code className="text-sm">
                     {/* Hero with multiple effects */}<br/>
                     &lt;Spotlight /&gt;<br/>
                     &lt;TextGenerateEffect words=&quot;Your Message&quot; /&gt;<br/>
                     &lt;MovingBorder&gt;CTA Button&lt;/MovingBorder&gt;
                   </code>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>⚡ Performance Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Use 1-2 heavy animations per page maximum</li>
                  <li>• Reduce meteor count for better performance (15 max recommended)</li>
                  <li>• Test with `npm run build` before deployment</li>
                  <li>• Consider `prefers-reduced-motion` for accessibility</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>🚀 Generator Commands</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><code>npm run generate:site saas</code> - SaaS component recommendations</p>
                  <p><code>npm run generate:site smb</code> - SMB component recommendations</p>
                  <p><code>npm run generate:site components</code> - Full component overview</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 