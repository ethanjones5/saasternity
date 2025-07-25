"use client";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Logo } from "@/components/shared/logo";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/16 via-transparent to-gray-50/16" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-display mb-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            className="lead text-foreground/80 mb-16"
            initial={{ opacity: 0, y: 6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Terms and conditions for using NVSN services.
          </motion.p>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="flex flex-col items-center space-y-2 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="text-sm text-muted-foreground/70">Read our terms</span>
            <motion.div 
              className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-1"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-standard">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-8">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using NVSN services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  NVSN provides AI-powered web design and development services. We create websites, 
                  provide hosting, and offer digital marketing solutions for businesses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any activity that could harm our services or other users</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be specified in your service agreement. All fees are non-refundable 
                  unless otherwise stated in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, you will own the website we create for you. However, NVSN retains 
                  rights to any proprietary tools, frameworks, or methodologies used in the development process.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive for maximum uptime, we cannot guarantee that our services will be 
                  available 100% of the time. We are not liable for any downtime or service interruptions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  NVSN shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages arising from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with appropriate notice as specified in the 
                  service agreement. Upon termination, you retain ownership of completed work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with applicable laws, 
                  without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of 
                  significant changes via email or through our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these terms, please contact us through our 
                  <Link href="/contact" className="text-primary hover:underline"> contact page</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-compact bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center space-y-6 mb-8">
            <Logo size="lg" />
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              AI-powered web design platform for the modern web.
            </p>
            <div className="flex items-center space-x-8">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 NVSN. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 