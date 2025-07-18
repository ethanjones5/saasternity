import { SiteHeader } from "@/components/layout/site-header";
import { Spotlight } from "@/components/aceternity/spotlight";
import { MovingBorder } from "@/components/aceternity/moving-border";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section with Spotlight Effect */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black/[0.96] antialiased dark:bg-black/[0.96] md:items-center md:justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Build Beautiful <br /> Websites Faster
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300 md:text-lg">
            Combine the power of shadcn/ui components with stunning Aceternity UI effects. 
            Perfect for creating modern, professional websites for your clients.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-6">
            <MovingBorder duration={2000} className="bg-background text-foreground">
              Get Started
            </MovingBorder>
            <Button variant="outline" size="lg" asChild>
              <Link href="/templates">View Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose SaaSternity?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The perfect combination of utility and beauty for modern web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>🎨 Beautiful Components</CardTitle>
                <CardDescription>
                  Stunning Aceternity UI components with smooth animations and modern design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From spotlight effects to moving borders, create websites that captivate your audience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardHeader>
                <CardTitle>⚡ shadcn/ui Integration</CardTitle>
                <CardDescription>
                  Robust, accessible components built on Radix UI primitives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Professional UI components that work seamlessly with beautiful animations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardHeader>
                <CardTitle>🚀 Client-Ready</CardTitle>
                <CardDescription>
                  Clone this template for each new client project and customize quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built-in theme support, responsive design, and professional layouts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Built with Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">N</span>
              </div>
              <p className="font-medium">Next.js 15</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">T</span>
              </div>
              <p className="font-medium">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">S</span>
              </div>
              <p className="font-medium">shadcn/ui</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">A</span>
              </div>
              <p className="font-medium">Aceternity UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Build Amazing Websites?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Clone this repository and start building beautiful, modern websites for your clients today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://github.com/yourusername/saasternity">
                Clone Repository
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/documentation">
                View Docs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
