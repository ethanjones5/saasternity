"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Clock, Hammer, Leaf, Home, Star, CheckCircle, Phone, Mail } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: xPercent, y: yPercent });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  const services = [
    {
      title: "Interior Renovations",
      description: "Transform your living spaces with our expert interior renovation services, from concept to completion.",
      icon: Home,
      image: "/EvaDesignPhotos/Interiors/Renovation.jpg",
      href: "/services/interior-renovations"
    },
    {
      title: "Hardscaping",
      description: "Create stunning outdoor living spaces with professional hardscaping, patios, decks, and walkways.",
      icon: Hammer,
      image: "/EvaDesignPhotos/Hardscape/Decking.jpg",
      href: "/services/hardscaping"
    },
    {
      title: "Artificial Grass",
      description: "Enjoy year-round green spaces with our eco-friendly artificial grass installations.",
      icon: Leaf,
      image: "/EvaDesignPhotos/Artificial Grass/artgrass1.jpg",
      href: "/services/artificial-grass"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed trades and comprehensive insurance for your peace of mind."
    },
    {
      icon: Award,
      title: "Quality Materials",
      description: "We use only the highest quality materials and finishes for lasting results."
    },
    {
      icon: Users,
      title: "Permit Handling",
      description: "We handle all permits and regulations, making the process seamless for you."
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description: "Projects completed on schedule with meticulous attention to detail."
    }
  ];

  const featuredProjects = [
    {
      title: "Modern Kitchen Renovation",
      category: "Interior",
      image: "/EvaDesignPhotos/Portfolio/Kitchen Renovation.jpg"
    },
    {
      title: "Complete Home Transformation",
      category: "Full Service",
      image: "/EvaDesignPhotos/Portfolio/Home Renovation.jpg"
    },
    {
      title: "Luxury Bedroom Design",
      category: "Interior",
      image: "/EvaDesignPhotos/Portfolio/Bedroom Renovation with Marble Wall.png"
    },
    {
      title: "Outdoor Living Space",
      category: "Hardscape",
      image: "/EvaDesignPhotos/Hardscape/Interlock.png"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      text: "Eva Build & Design transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Markham, ON", 
      text: "The hardscaping project in our backyard created the perfect outdoor entertainment space. The team was reliable and the quality is outstanding.",
      rating: 5
    },
    {
      name: "Jennifer Smith",
      location: "Richmond Hill, ON",
      text: "From permits to final touches, Eva Build & Design handled everything. Our home renovation was stress-free and the results are beautiful.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Eva Build & Design - Premier Home Contractor in Toronto | Making Dreams Come to Life</title>
        <meta name="description" content="Eva Build & Design transforms homes and commercial spaces in Toronto through expert interior renovations, hardscaping, and artificial grass installations. Licensed contractor since 2016." />
        <link rel="canonical" href="https://evabuilddesign.com" />
        <meta property="og:title" content="Eva Build & Design - Premier Home Contractor in Toronto" />
        <meta property="og:description" content="Transform your space with Toronto's trusted design-build contractor. Interior renovations, hardscaping, and artificial grass installations." />
        <meta property="og:image" content="/EvaDesignPhotos/Portfolio/Home Renovation.jpg" />
      </head>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden section-hero"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/EvaDesignPhotos/Portfolio/Home Renovation.jpg"
            alt="Eva Build & Design - Beautiful home renovation showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="image-overlay" />
        </div>

        {/* Dynamic Background Gradients */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-out z-10" 
          style={{ 
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(184,149,88,0.2) 0%, transparent 50%)`
          }} 
        />

        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Main Headline */}
            <h1 className="text-white text-shadow">
              Making Dreams Come to Life
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow">
              Full-service home contractor transforming residential and commercial spaces 
              through expert interior renovations, hardscaping, and artificial grass installations
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="group relative overflow-hidden h-14 px-10 bg-mocha-600 hover:bg-mocha-700 text-white text-lg font-semibold shadow-2xl"
                asChild
              >
                <Link href="/contact">
                  <span className="relative z-10">Get a Free Quote</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center justify-center space-x-8 mt-12 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Since 2016</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">Toronto Based</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">
              Our Services
            </h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Comprehensive design-build services to transform your space from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={service.href} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover-effect h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} by Eva Build & Design - Professional ${service.title.toLowerCase()} services in Toronto`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-mocha-200 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-mocha-600" />
                      </div>
                      <h3 className="text-mocha-800 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-mocha-600 text-regular leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 pt-4 border-t border-mocha-200">
                        <Button size="sm" variant="ghost" className="text-mocha-600 hover:text-mocha-800 hover:bg-mocha-50 p-0 h-auto">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">
              Why Choose Eva Build & Design
            </h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Experience the difference of working with Toronto's trusted design-build experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-mocha-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-mocha-600" />
                </div>
                <h4 className="text-mocha-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-mocha-600 text-regular leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">
              Featured Projects
            </h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              See how we've transformed spaces for our clients across Toronto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} completed by Eva Build & Design - ${project.category} renovation project showcasing expert craftsmanship`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-sm font-medium text-mocha-200 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-semibold mt-1">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-mocha-300 text-mocha-700 hover:bg-mocha-600 hover:text-white"
              asChild
            >
              <Link href="/portfolio">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="subtitle text-mocha-600">
              Trusted by homeowners across the Greater Toronto Area
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-mocha-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-mocha-200">
                  <div className="text-4xl font-serif">"</div>
                </div>
                
                {/* Star Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-mocha-700 leading-relaxed mb-6 italic">
                  {testimonial.text}
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-mocha-100">
                  {/* Avatar with Initials */}
                  <div className="w-12 h-12 bg-mocha-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-mocha-700 font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-mocha-800">{testimonial.name}</div>
                    <div className="text-sm text-mocha-600">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-compact bg-mocha-800">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="subtitle text-warm-100 max-w-2xl mx-auto">
              Let's discuss your vision and create the space of your dreams. 
              Start your renovation journey with Toronto's trusted design-build experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="h-12 px-8 bg-white text-mocha-800 hover:bg-warm-100 font-semibold"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 px-8 border-white text-white hover:bg-white hover:text-mocha-800"
                asChild
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-warm-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">No Obligation Quote</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Expert Guidance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
