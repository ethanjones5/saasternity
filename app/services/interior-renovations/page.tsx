"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Home, 
  PaintBucket, 
  Building, 
  Wrench,
  CheckCircle, 
  Phone,
  Award,
  Shield,
  Clock,
  Users,
  Star,
  Calendar,
  Lightbulb,
  FileText,
  Hammer
} from "lucide-react";
import { motion } from "framer-motion";

export default function InteriorRenovationsPage() {
  const subServices = [
    {
      title: "Kitchen Renovations",
      description: "Transform your kitchen into the heart of your home with modern designs, quality materials, and functional layouts that enhance both beauty and practicality.",
      icon: PaintBucket,
      image: "/EvaDesignPhotos/Portfolio/Kitchen Renovation.jpg",
      features: ["Custom Cabinetry", "Countertops & Backsplashes", "Modern Appliances", "Lighting Design"],
      startingPrice: "$25,000"
    },
    {
      title: "Bathroom Remodeling",
      description: "Create luxurious and functional bathroom spaces with spa-like features, premium fixtures, and efficient layouts designed for comfort and style.",
      icon: Building,
      image: "/EvaDesignPhotos/Portfolio/Bedroom Renovation with Marble Wall.png",
      features: ["Luxury Fixtures", "Tile & Stone Work", "Custom Vanities", "Spa Features"],
      startingPrice: "$18,000"
    },
    {
      title: "Basement Finishing",
      description: "Maximize your home's potential by transforming unused basement space into beautiful, functional living areas perfect for entertainment or additional bedrooms.",
      icon: Home,
      image: "/EvaDesignPhotos/Interiors/FullService.jpg",
      features: ["Moisture Protection", "Insulation & Drywall", "Flooring Solutions", "Entertainment Areas"],
      startingPrice: "$20,000"
    },
    {
      title: "Complete Home Additions",
      description: "Expand your living space with seamlessly integrated home additions that match your existing architecture while adding value and functionality.",
      icon: Wrench,
      image: "/EvaDesignPhotos/Interiors/Additions.jpg",
      features: ["Structural Engineering", "Permit Management", "Seamless Integration", "Interior Design"],
      startingPrice: "$40,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, assess your space, and understand your budget and timeline requirements.",
      icon: Users
    },
    {
      step: "02", 
      title: "Design Development",
      description: "Our designers create detailed plans, 3D renderings, and material selections to bring your vision to life.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Permits & Planning",
      description: "We handle all permit applications, contractor coordination, and project scheduling to ensure smooth execution.",
      icon: FileText
    },
    {
      step: "04",
      title: "Construction Phase",
      description: "Our skilled team executes the renovation with daily progress updates and quality control at every stage.",
      icon: Hammer
    },
    {
      step: "05",
      title: "Final Inspection",
      description: "We conduct thorough quality checks and walkthrough to ensure every detail meets our high standards.",
      icon: CheckCircle
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Licensed Trades",
      description: "All work performed by licensed electricians, plumbers, and contractors"
    },
    {
      icon: Award,
      title: "Quality Materials",
      description: "Premium materials and finishes backed by manufacturer warranties"
    },
    {
      icon: Clock,
      title: "On-Schedule Delivery",
      description: "Projects completed on time with transparent communication throughout"
    },
    {
      icon: CheckCircle,
      title: "Permit Handling",
      description: "We manage all permits and inspections for a stress-free experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Interior Renovations Toronto - Kitchen, Bathroom & Home Renovations | Eva Build & Design</title>
        <meta name="description" content="Expert interior renovations in Toronto including kitchen remodeling, bathroom renovations, basement finishing, and home additions. Licensed contractor with quality guarantee." />
        <link rel="canonical" href="https://evabuilddesign.com/services/interior-renovations" />
        <meta property="og:title" content="Interior Renovations Toronto - Eva Build & Design" />
        <meta property="og:description" content="Transform your Toronto home with professional interior renovations from Eva Build & Design. Kitchen, bathroom, basement, and full home renovations." />
      </head>

      {/* Breadcrumb Navigation */}
      <section className="bg-warm-50 py-4 border-b border-mocha-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2 text-mocha-600">
              <li><Link href="/" className="hover:text-mocha-800 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-mocha-800 transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-mocha-800 font-medium">Interior Renovations</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-hero bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-mocha-600 font-medium text-lg">Interior Renovations</span>
                <h1 className="text-mocha-800 mt-4">
                  Transform Your Living Spaces into Dream Homes
                </h1>
              </div>
              
              <p className="subtitle text-mocha-600 leading-relaxed">
                From stunning kitchen renovations to luxurious bathroom remodels and complete home 
                additions, we make the renovation experience enjoyable while transforming your 
                dreams into beautiful, functional spaces.
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Permit Handling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Quality Guarantee</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-mocha-600 hover:bg-mocha-700" asChild>
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="border-mocha-300 text-mocha-700 hover:bg-mocha-600 hover:text-white" asChild>
                  <Link href="tel:+1234567890">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/EvaDesignPhotos/Interiors/Renovation.jpg"
                  alt="Beautiful interior renovation by Eva Build & Design"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-mocha-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-mocha-800">8+ Years</div>
                    <div className="text-sm text-mocha-600">Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Our Interior Renovation Services</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Comprehensive renovation solutions to transform every space in your home
            </p>
          </div>

          <div className="space-y-16">
            {subServices.map((service, index) => (
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
                      <span className="text-lg font-semibold text-mocha-800">Starting from {service.startingPrice}</span>
                      <Button className="bg-mocha-600 hover:bg-mocha-700" asChild>
                        <Link href="/contact">
                          Get Quote
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
                      alt={`${service.title} by Eva Build & Design - Professional interior renovation services in Toronto showing completed project`}
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

      {/* Process Section */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Our Renovation Process</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              A proven 5-step process that ensures quality results and peace of mind throughout your renovation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="h-8 w-8 text-mocha-600" />
                </div>
                <div className="text-sm font-semibold text-mocha-500 mb-2">{step.step}</div>
                <h4 className="text-mocha-800 mb-3">{step.title}</h4>
                <p className="text-mocha-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Why Choose Eva Build & Design</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Experience the difference of working with Toronto's trusted renovation experts
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

      {/* CTA Section */}
      <section className="section-compact bg-mocha-800 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-white">Ready to Transform Your Interior?</h2>
            <p className="subtitle text-warm-200 max-w-2xl mx-auto">
              Let's discuss your renovation vision and create the beautiful, functional space you've always dreamed of. 
              Contact us today for a free consultation and detailed quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-mocha-800 hover:bg-warm-100 font-semibold" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-mocha-800" asChild>
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
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
                <span className="text-sm">Quality Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 