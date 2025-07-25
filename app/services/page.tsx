"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Home, 
  Hammer, 
  Leaf, 
  CheckCircle, 
  Phone,
  Award,
  Shield,
  Clock,
  Users,
  Wrench,
  PaintBucket,
  Mountain,
  Trees,
  Droplets,
  Building
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Interior Renovations",
      description: "Transform your living spaces with our comprehensive interior renovation services. From single rooms to complete home makeovers, we bring your vision to life.",
      icon: Home,
      image: "/EvaDesignPhotos/Interiors/Renovation.jpg",
      href: "/services/interior-renovations",
      features: ["Complete Renovations", "Room Additions", "Full-Service Design", "Interior Design"],
      pricing: "Starting from $15,000"
    },
    {
      title: "Hardscaping",
      description: "Create stunning outdoor living spaces with our professional hardscaping services. Enhance your property's value and enjoyment with durable, beautiful outdoor features.",
      icon: Hammer,
      image: "/EvaDesignPhotos/Hardscape/Decking.jpg",
      href: "/services/hardscaping",
      features: ["Patios & Decks", "Retaining Walls", "Walkways", "Driveways"],
      pricing: "Starting from $8,000"
    },
    {
      title: "Artificial Grass",
      description: "Enjoy year-round green spaces with our eco-friendly artificial grass installations. Low maintenance, pet-friendly, and perfect for Toronto's climate.",
      icon: Leaf,
      image: "/EvaDesignPhotos/Artificial Grass/artgrass1.jpg",
      href: "/services/artificial-grass",
      features: ["Eco-Friendly Turf", "Pet-Friendly Options", "Playground Areas", "Maintenance-Free"],
      pricing: "Starting from $12/sq ft"
    }
  ];

  const subServices = {
    interior: [
      { icon: PaintBucket, title: "Kitchen Renovations", description: "Modern kitchen designs with quality finishes" },
      { icon: Building, title: "Bathroom Remodeling", description: "Luxurious and functional bathroom spaces" },
      { icon: Home, title: "Basement Finishing", description: "Transform your basement into usable living space" },
      { icon: Wrench, title: "Custom Millwork", description: "Bespoke cabinetry and built-in solutions" }
    ],
    hardscape: [
      { icon: Mountain, title: "Stone Patios", description: "Durable and beautiful outdoor entertaining areas" },
      { icon: Trees, title: "Garden Retaining Walls", description: "Functional and aesthetic landscape solutions" },
      { icon: Hammer, title: "Deck Construction", description: "Custom wooden and composite decking" },
      { icon: Droplets, title: "Drainage Solutions", description: "Proper water management for your property" }
    ],
    grass: [
      { icon: Leaf, title: "Residential Lawns", description: "Perfect green spaces for family enjoyment" },
      { icon: Users, title: "Commercial Installations", description: "Professional turf for business properties" },
      { icon: Home, title: "Rooftop Gardens", description: "Green solutions for urban living" },
      { icon: Trees, title: "Sports Fields", description: "High-performance surfaces for athletic use" }
    ]
  };

  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed trades with comprehensive insurance coverage"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Premium materials and workmanship backed by our warranty"
    },
    {
      icon: Clock,
      title: "On-Time Completion",
      description: "Projects delivered on schedule with transparent communication"
    },
    {
      icon: CheckCircle,
      title: "Permit Handling",
      description: "We manage all permits and regulatory requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Our Services - Interior Renovations, Hardscaping & Artificial Grass | Eva Build & Design</title>
        <meta name="description" content="Eva Build & Design offers comprehensive interior renovations, hardscaping, and artificial grass installation services in Toronto. Licensed contractor with quality guarantee." />
        <link rel="canonical" href="https://evabuilddesign.com/services" />
        <meta property="og:title" content="Our Services - Eva Build & Design Toronto" />
        <meta property="og:description" content="Professional interior renovations, hardscaping, and artificial grass installation services in the Greater Toronto Area." />
      </head>

      {/* Hero Section */}
      <section className="section-hero bg-gradient-to-b from-mocha-100 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-mocha-600 font-medium text-lg">Our Services</span>
              <h1 className="text-mocha-800 mt-4">
                Comprehensive Design-Build Solutions
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="subtitle text-mocha-600 max-w-3xl mx-auto leading-relaxed"
            >
              From interior renovations to stunning hardscaping and eco-friendly artificial grass, 
              we transform residential and commercial spaces across the Greater Toronto Area with 
              expert craftsmanship and attention to detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center space-y-4"
            >
              <Button size="lg" className="bg-mocha-600 hover:bg-mocha-700" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <p className="text-mocha-600">
                Or call us now: <Link href="tel:+1234567890" className="font-semibold hover:text-mocha-800 transition-colors">(123) 456-7890</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Our Core Services</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Specialized expertise in three key areas to transform your space
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-mocha-100 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-mocha-600" />
                    </div>
                    
                    <div>
                      <h3 className="text-mocha-800 mb-4">{service.title}</h3>
                      <p className="text-mocha-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-mocha-500 flex-shrink-0" />
                          <span className="text-mocha-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-mocha-200">
                      <span className="text-lg font-semibold text-mocha-800">{service.pricing}</span>
                      <Button className="bg-mocha-600 hover:bg-mocha-700" asChild>
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} service by Eva Build & Design - Expert ${service.title.toLowerCase()} contractor in Toronto`}
                      fill
                      className="object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Specialized Services</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Detailed expertise in specific areas to meet your unique needs
            </p>
          </div>

          <div className="space-y-16">
            {/* Interior Sub-services */}
            <div>
              <h3 className="text-2xl font-bold text-mocha-800 mb-8 text-center">Interior Renovation Specialties</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subServices.interior.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 text-center card-hover-effect"
                  >
                    <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-mocha-600" />
                    </div>
                    <h4 className="text-mocha-800 mb-3">{service.title}</h4>
                    <p className="text-mocha-600 text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hardscape Sub-services */}
            <div>
              <h3 className="text-2xl font-bold text-mocha-800 mb-8 text-center">Hardscaping Specialties</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subServices.hardscape.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 text-center card-hover-effect"
                  >
                    <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-mocha-600" />
                    </div>
                    <h4 className="text-mocha-800 mb-3">{service.title}</h4>
                    <p className="text-mocha-600 text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Artificial Grass Sub-services */}
            <div>
              <h3 className="text-2xl font-bold text-mocha-800 mb-8 text-center">Artificial Grass Applications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subServices.grass.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 text-center card-hover-effect"
                  >
                    <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-mocha-600" />
                    </div>
                    <h4 className="text-mocha-800 mb-3">{service.title}</h4>
                    <p className="text-mocha-600 text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Why Choose Our Services</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Professional excellence and customer satisfaction in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-mocha-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-mocha-600" />
                </div>
                <h4 className="text-mocha-800 mb-4">{benefit.title}</h4>
                <p className="text-mocha-600 text-regular leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-compact bg-mocha-800 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-white">Ready to Start Your Project?</h2>
            <p className="subtitle text-warm-200 max-w-2xl mx-auto">
              Contact us today for a free consultation and detailed quote. 
              Let's discuss how we can transform your space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-mocha-800 hover:bg-warm-100 font-semibold" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-mocha-800" asChild>
                <Link href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  (123) 456-7890
                </Link>
              </Button>
            </div>

            <div className="pt-8 text-center">
              <p className="text-warm-300 mb-4">Service Areas</p>
              <p className="text-warm-200 text-sm">
                Toronto • Markham • Richmond Hill • Vaughan • Mississauga • Brampton • Greater Toronto Area
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 