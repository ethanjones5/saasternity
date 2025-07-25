"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Hammer, 
  Mountain, 
  Trees,
  Droplets,
  Building,
  CheckCircle, 
  Phone,
  Award,
  Shield,
  Clock,
  Users,
  Star,
  Calendar,
  Lightbulb,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

export default function HardscapingPage() {
  const subServices = [
    {
      title: "Patios & Decks",
      description: "Create beautiful outdoor living spaces with custom patios and decks designed for entertainment, relaxation, and year-round enjoyment.",
      icon: Mountain,
      image: "/EvaDesignPhotos/Hardscape/Decking.jpg",
      features: ["Custom Design", "Composite & Wood Options", "Multi-level Designs", "Integrated Seating"],
      startingPrice: "$15,000"
    },
    {
      title: "Interlock & Pavers",
      description: "Transform your outdoor space with elegant interlock patios, walkways, and driveways that combine beauty with durability.",
      icon: Building,
      image: "/EvaDesignPhotos/Hardscape/Interlock.png",
      features: ["Premium Pavers", "Custom Patterns", "Proper Base Preparation", "Sealing & Maintenance"],
      startingPrice: "$12,000"
    },
    {
      title: "Driveways",
      description: "Enhance your home's curb appeal with professionally installed driveways using premium materials and expert craftsmanship.",
      icon: Trees,
      image: "/EvaDesignPhotos/Hardscape/Driveways.png",
      features: ["Asphalt & Concrete", "Decorative Borders", "Proper Drainage", "Quality Materials"],
      startingPrice: "$8,000"
    },
    {
      title: "Retaining Walls & Fencing",
      description: "Functional and beautiful retaining walls and fencing solutions that define spaces while providing structural support and privacy.",
      icon: Droplets,
      image: "/EvaDesignPhotos/Hardscape/Fencing.jpg",
      features: ["Structural Engineering", "Natural Stone Options", "Privacy Solutions", "Drainage Integration"],
      startingPrice: "$6,000"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Assessment",
      description: "We evaluate your outdoor space, soil conditions, drainage needs, and discuss your vision and budget.",
      icon: Users
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team creates detailed plans, 3D renderings, and material selections for your hardscaping project.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Permits & Preparation",
      description: "We handle permits, excavation, and site preparation to ensure a solid foundation for your project.",
      icon: FileText
    },
    {
      step: "04",
      title: "Installation",
      description: "Our skilled team installs your hardscaping with precision, following best practices for longevity.",
      icon: Hammer
    },
    {
      step: "05",
      title: "Final Inspection",
      description: "We conduct thorough quality checks and provide maintenance guidelines for lasting beauty.",
      icon: CheckCircle
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Licensed Professionals",
      description: "All work performed by licensed contractors with specialized hardscaping expertise"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "Quality pavers, stone, and materials backed by manufacturer warranties"
    },
    {
      icon: Clock,
      title: "Weather-Ready Installation",
      description: "Proper drainage and base preparation for Toronto's climate conditions"
    },
    {
      icon: CheckCircle,
      title: "Structural Engineering",
      description: "Professional engineering for retaining walls and complex installations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Hardscaping Services Toronto - Patios, Decks, Driveways & More | Eva Build & Design</title>
        <meta name="description" content="Professional hardscaping services in Toronto including patios, decks, interlock, driveways, and retaining walls. Licensed contractor with quality guarantee and expert installation." />
        <link rel="canonical" href="https://evabuilddesign.com/services/hardscaping" />
        <meta property="og:title" content="Hardscaping Services Toronto - Eva Build & Design" />
        <meta property="og:description" content="Transform your outdoor space with professional hardscaping services from Eva Build & Design. Patios, decks, driveways, and more across Toronto." />
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
              <li className="text-mocha-800 font-medium">Hardscaping</li>
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
                <span className="text-mocha-600 font-medium text-lg">Hardscaping Services</span>
                <h1 className="text-mocha-800 mt-4">
                  Create Stunning Outdoor Living Spaces
                </h1>
              </div>
              
              <p className="subtitle text-mocha-600 leading-relaxed">
                Transform your outdoor space with professional hardscaping services. From elegant 
                patios and custom decks to durable driveways and functional retaining walls, we 
                create outdoor environments that enhance your property's beauty and value.
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Weather-Resistant Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Structural Engineering</span>
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
                  src="/EvaDesignPhotos/Hardscape/Decking.jpg"
                  alt="Beautiful hardscaping project featuring custom deck by Eva Build & Design"
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
                    <div className="font-semibold text-mocha-800">500+ Projects</div>
                    <div className="text-sm text-mocha-600">Completed</div>
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
            <h2 className="text-mocha-800 mb-4">Our Hardscaping Services</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Comprehensive hardscaping solutions to transform your outdoor space into a beautiful and functional environment
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
                      alt={`${service.title} hardscaping service by Eva Build & Design`}
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
            <h2 className="text-mocha-800 mb-4">Our Hardscaping Process</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              A proven 5-step process that ensures quality results and lasting outdoor spaces built for Toronto's climate
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
            <h2 className="text-mocha-800 mb-4">Why Choose Eva Build & Design for Hardscaping</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Experience the difference of working with Toronto's trusted hardscaping specialists
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

      {/* Portfolio Highlight */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Recent Hardscaping Projects</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              See how we've transformed outdoor spaces across the Greater Toronto Area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/EvaDesignPhotos/Hardscape/Interlock.png"
                  alt="Interlock patio project by Eva Build & Design"
                  fill
                  className="object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-sm font-medium text-mocha-200 uppercase tracking-wide">
                    Interlock Patio
                  </span>
                  <h4 className="text-xl font-semibold mt-1">
                    Toronto Backyard Transformation
                  </h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/EvaDesignPhotos/Hardscape/Decking.jpg"
                  alt="Custom deck construction by Eva Build & Design"
                  fill
                  className="object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-sm font-medium text-mocha-200 uppercase tracking-wide">
                    Custom Deck
                  </span>
                  <h4 className="text-xl font-semibold mt-1">
                    Multi-Level Outdoor Deck
                  </h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/EvaDesignPhotos/Hardscape/Driveways.png"
                  alt="Driveway installation by Eva Build & Design"
                  fill
                  className="object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-sm font-medium text-mocha-200 uppercase tracking-wide">
                    Driveway
                  </span>
                  <h4 className="text-xl font-semibold mt-1">
                    Modern Driveway Installation
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-mocha-300 text-mocha-700 hover:bg-mocha-600 hover:text-white"
              asChild
            >
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            <h2 className="text-white">Ready to Transform Your Outdoor Space?</h2>
            <p className="subtitle text-warm-200 max-w-2xl mx-auto">
              Let's discuss your hardscaping vision and create the beautiful, functional outdoor space you've always dreamed of. 
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
                <span className="text-sm">Free Site Visit</span>
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