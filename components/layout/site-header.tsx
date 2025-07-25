"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/shared/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const services = [
    {
      title: "Interior Renovations",
      href: "/services/interior-renovations",
      description: "Complete interior transformations including renovations, additions, and full-service design."
    },
    {
      title: "Hardscaping", 
      href: "/services/hardscaping",
      description: "Outdoor living spaces with patios, decks, retaining walls, and walkways."
    },
    {
      title: "Artificial Grass",
      href: "/services/artificial-grass", 
      description: "Eco-friendly artificial turf installations for year-round green spaces."
    }
  ]

  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex shrink-0 min-w-0">
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <Logo size="md" className="shrink-0" />
            <span className="font-bold text-lg sm:text-xl text-mocha-800 whitespace-nowrap truncate">Eva Build & Design</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex flex-1 justify-center mx-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/" && "bg-accent")}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/about" && "bg-accent")}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={pathname?.startsWith("/services") ? "bg-accent" : ""}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-mocha-100 to-mocha-200 p-6 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-mocha-800">
                          Our Services
                        </div>
                        <p className="text-sm leading-tight text-mocha-600">
                          Comprehensive design-build services from concept to completion
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/portfolio" && "bg-accent")}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/contact" && "bg-accent")}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center space-x-3 shrink-0">
          <Button variant="outline" size="sm" asChild className="whitespace-nowrap">
            <Link href="tel:+1234567890">
              <Phone className="mr-1 h-4 w-4" />
              <span className="hidden xl:inline">Call Now</span>
              <span className="xl:hidden">Call</span>
            </Link>
          </Button>
          <Button size="sm" className="bg-mocha-600 hover:bg-mocha-700 whitespace-nowrap" asChild>
            <Link href="/contact">
              <span className="hidden xl:inline">Get Quote</span>
              <span className="xl:hidden">Quote</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* Medium Screen Navigation - Simplified */}
        <div className="hidden md:flex lg:hidden items-center space-x-2 shrink-0">
          <Button variant="outline" size="sm" asChild>
            <Link href="tel:+1234567890">
              <Phone className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="sm" className="bg-mocha-600 hover:bg-mocha-700" asChild>
            <Link href="/contact">Quote</Link>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-8 w-8 px-0 ml-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2 shrink-0">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-8 w-8 px-0"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav className="container px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Mobile Services Submenu */}
              <div className="space-y-2 pl-3">
                <div className="text-sm font-medium text-muted-foreground">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="tel:+1234567890" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
                <Button className="w-full bg-mocha-600 hover:bg-mocha-700" asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem" 