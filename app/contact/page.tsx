"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Award,
  Shield,
  Users,
  Calendar
} from "lucide-react";

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: xPercent, y: yPercent });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const services = [
    "Interior Renovations",
    "Kitchen Renovations", 
    "Bathroom Remodeling",
    "Basement Finishing",
    "Home Additions",
    "Hardscaping",
    "Artificial Grass Installation",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Contact Eva Build & Design - Get Your Free Quote Today | Toronto Contractor</title>
        <meta name="description" content="Contact Eva Build & Design for your free consultation and quote. Licensed Toronto contractor specializing in interior renovations, hardscaping, and artificial grass installations." />
        <link rel="canonical" href="https://evabuilddesign.com/contact" />
      </head>
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dynamic Background Gradients */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-warm-50/20 via-transparent to-mocha-50/20 transition-all duration-300" 
          style={{ zIndex: 0 }} 
        />
        <div 
          className="absolute inset-0 transition-all duration-500 ease-out" 
          style={{ 
            zIndex: 0,
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(184,149,88,0.1) 0%, transparent 50%)`
          }} 
        />
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out" 
          style={{ 
            zIndex: 0,
            background: `radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(139,117,75,0.08) 0%, transparent 40%)`
          }} 
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            className="text-mocha-800 mb-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            Get Your Free Quote
          </motion.h1>
          <motion.p 
            className="subtitle text-mocha-600 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            Ready to transform your space? Let's discuss your renovation project and bring your vision to life. 
            Contact Eva Build & Design today for your free consultation.
          </motion.p>
          
          {/* Trust Signals */}
          <motion.div 
            className="flex items-center justify-center space-x-8 text-mocha-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">No Obligation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-mocha-800 mb-6">Tell us about your project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-mocha-800 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-mocha-200 rounded-xl bg-background focus:ring-2 focus:ring-mocha-500 focus:border-mocha-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-mocha-800 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-mocha-200 rounded-xl bg-background focus:ring-2 focus:ring-mocha-500 focus:border-mocha-500 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mocha-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-mocha-200 rounded-xl bg-background focus:ring-2 focus:ring-mocha-500 focus:border-mocha-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-mocha-800 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-mocha-200 rounded-xl bg-background focus:ring-2 focus:ring-mocha-500 focus:border-mocha-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-mocha-800 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-mocha-200 rounded-xl bg-background focus:ring-2 focus:ring-mocha-500 focus:border-mocha-500 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, timeline, and budget range..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="group relative overflow-hidden h-12 px-8 bg-mocha-600 hover:bg-mocha-700 text-white w-full md:w-auto"
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </motion.div>

            {/* Why Choose Eva Build & Design */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-warm-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-mocha-800 mb-6">Why Choose Eva Build & Design?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-mocha-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-mocha-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-mocha-800">Licensed & Insured</h4>
                    <p className="text-sm text-mocha-600">
                      Fully licensed trades and comprehensive insurance coverage for complete peace of mind.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-mocha-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-mocha-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-mocha-800">Quality Guarantee</h4>
                    <p className="text-sm text-mocha-600">
                      Premium materials and expert craftsmanship backed by our comprehensive warranty.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-mocha-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-mocha-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-mocha-800">Permit Handling</h4>
                    <p className="text-sm text-mocha-600">
                      We manage all permits and regulatory requirements, making the process seamless for you.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-mocha-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-mocha-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-mocha-800">Expert Team</h4>
                    <p className="text-sm text-mocha-600">
                      Experienced professionals committed to delivering exceptional results on every project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-mocha-200">
                <h4 className="font-semibold mb-4 text-mocha-800">Get in touch</h4>
                <div className="space-y-3 text-sm text-mocha-600">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4" />
                    <Link href="tel:+1234567890" className="hover:text-mocha-800 transition-colors">
                      (123) 456-7890
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4" />
                    <Link href="mailto:info@evabuilddesign.com" className="hover:text-mocha-800 transition-colors">
                      info@evabuilddesign.com
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4" />
                    <span>Toronto & Greater Toronto Area</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-mocha-300 text-mocha-700 hover:bg-mocha-600 hover:text-white"
                  asChild
                >
                  <Link href="tel:+1234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now for Immediate Response
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-compact bg-mocha-800 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-white">We Serve the Greater Toronto Area</h2>
            <p className="subtitle text-warm-200 max-w-2xl mx-auto">
              Eva Build & Design proudly serves homeowners and businesses across Toronto and surrounding communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-white mb-2">Toronto</h4>
                <p className="text-warm-200 text-sm">Downtown, Midtown, North York, Scarborough, Etobicoke</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">York Region</h4>
                <p className="text-warm-200 text-sm">Markham, Richmond Hill, Vaughan, Aurora, Newmarket</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Peel Region</h4>
                <p className="text-warm-200 text-sm">Mississauga, Brampton, Caledon</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-warm-200">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">No Obligation Quote</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 