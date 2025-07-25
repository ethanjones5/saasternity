"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Leaf, 
  Users, 
  Home,
  Building,
  Trees,
  CheckCircle, 
  Phone,
  Award,
  Shield,
  Clock,
  Star,
  Calendar,
  Lightbulb,
  FileText,
  Hammer,
  Droplets
} from "lucide-react";
import { motion } from "framer-motion";

export default function ArtificialGrassPage() {
  const subServices = [
    {
      title: "Residential Lawns",
      description: "Transform your backyard into a lush, green oasis with premium artificial grass that's perfect for families, pets, and year-round enjoyment.",
      icon: Home,
      image: "/EvaDesignPhotos/Artificial Grass/artgrass1.jpg",
      features: ["Pet-Friendly Turf", "Child-Safe Materials", "Drainage System", "UV Protection"],
      startingPrice: "$12/sq ft"
    },
    {
      title: "Commercial Installations",
      description: "Professional-grade artificial turf for commercial properties, offices, and businesses looking for low-maintenance, attractive landscaping solutions.",
      icon: Building,
      image: "/EvaDesignPhotos/Artificial Grass/artgrass2.jpg",
      features: ["High-Traffic Durability", "Commercial Grade", "Professional Installation", "Maintenance Plans"],
      startingPrice: "$10/sq ft"
    },
    {
      title: "Playground Areas",
      description: "Safe, soft artificial grass perfect for children's play areas, providing cushioning and eliminating mud while maintaining a natural appearance.",
      icon: Users,
      image: "/EvaDesignPhotos/Artificial Grass/artgrass1.jpg",
      features: ["Safety Padding", "Non-Toxic Materials", "Easy Cleaning", "All-Weather Use"],
      startingPrice: "$15/sq ft"
    },
    {
      title: "Rooftop & Balcony Gardens",
      description: "Bring greenery to urban spaces with lightweight artificial grass solutions designed for rooftops, balconies, and terraces.",
      icon: Trees,
      image: "/EvaDesignPhotos/Artificial Grass/artgrass2.jpg",
      features: ["Lightweight Design", "Weather Resistant", "Easy Installation", "Urban Solutions"],
      startingPrice: "$18/sq ft"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Evaluation",
      description: "We assess your space, existing lawn conditions, drainage needs, and usage requirements for optimal turf selection.",
      icon: Users
    },
    {
      step: "02", 
      title: "Turf Selection",
      description: "Our experts help you choose the perfect artificial grass type, color, and pile height for your specific needs.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Site Preparation",
      description: "We prepare the base with proper excavation, drainage installation, and substrate preparation for longevity.",
      icon: FileText
    },
    {
      step: "04",
      title: "Professional Installation",
      description: "Our certified installers lay the turf with precision seaming, securing, and infill for a natural appearance.",
      icon: Hammer
    },
    {
      step: "05",
      title: "Final Inspection & Care",
      description: "We conduct quality checks and provide maintenance guidelines to keep your artificial grass looking perfect.",
      icon: CheckCircle
    }
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Save thousands of gallons annually while maintaining a beautiful green lawn year-round"
    },
    {
      icon: Clock,
      title: "Low Maintenance",
      description: "No mowing, watering, fertilizing, or seasonal maintenance required"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Made from recycled materials with no harmful chemicals or pesticides needed"
    },
    {
      icon: Shield,
      title: "Durability Guarantee",
      description: "15-20 year lifespan with UV protection and fade-resistant materials"
    }
  ];

  const features = [
    "Pet-friendly and odor-resistant",
    "All-weather durability for Toronto climate",
    "Realistic look and feel",
    "Professional drainage systems",
    "15-20 year warranty",
    "No watering or mowing required",
    "Safe for children and pets",
    "UV resistant and fade-proof"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Artificial Grass Installation Toronto - Premium Synthetic Turf | Eva Build & Design</title>
        <meta name="description" content="Professional artificial grass installation in Toronto. Premium synthetic turf for residential, commercial, and playground applications. Eco-friendly, pet-safe, and maintenance-free solutions." />
        <link rel="canonical" href="https://evabuilddesign.com/services/artificial-grass" />
        <meta property="og:title" content="Artificial Grass Installation Toronto - Eva Build & Design" />
        <meta property="og:description" content="Transform your lawn with premium artificial grass installation from Eva Build & Design. Eco-friendly, pet-safe, and maintenance-free synthetic turf solutions." />
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
              <li className="text-mocha-800 font-medium">Artificial Grass</li>
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
                <span className="text-mocha-600 font-medium text-lg">Artificial Grass Installation</span>
                <h1 className="text-mocha-800 mt-4">
                  Eco-Friendly Lawns That Look Perfect Year-Round
                </h1>
              </div>
              
              <p className="subtitle text-mocha-600 leading-relaxed">
                Discover the beauty of maintenance-free landscaping with our premium artificial grass 
                installations. Perfect for Toronto's climate, our synthetic turf solutions provide 
                lush, green spaces without the need for watering, mowing, or seasonal maintenance.
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Pet & Child Safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">15-20 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-mocha-500" />
                  <span className="text-mocha-700">Water Conservation</span>
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
                  src="/EvaDesignPhotos/Artificial Grass/artgrass1.jpg"
                  alt="Beautiful artificial grass installation by Eva Build & Design showing realistic synthetic turf"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-mocha-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-mocha-800">Eco-Friendly</div>
                    <div className="text-sm text-mocha-600">Water Saving</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Why Choose Artificial Grass?</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Modern artificial grass offers incredible benefits for Toronto homeowners and businesses
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

      {/* Features Grid */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Premium Artificial Grass Features</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Our artificial grass combines the latest technology with natural appearance for the perfect lawn solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white p-4 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-mocha-500 flex-shrink-0" />
                <span className="text-mocha-700 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Our Artificial Grass Applications</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Professional artificial grass installation for residential, commercial, and specialized applications
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
                      alt={`${service.title} artificial grass installation by Eva Build & Design`}
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
            <h2 className="text-mocha-800 mb-4">Our Installation Process</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Professional installation process ensuring your artificial grass looks natural and lasts for decades
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

      {/* Savings Calculator */}
      <section className="section-standard bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-mocha-800">Annual Savings with Artificial Grass</h2>
            <p className="subtitle text-mocha-600">
              See how much you can save on water, maintenance, and time with artificial grass
            </p>

            <div className="grid md:grid-cols-3 gap-8 bg-warm-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-mocha-700 mb-2">$1,200+</div>
                <div className="text-sm text-mocha-600">Annual Water Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mocha-700 mb-2">100+</div>
                <div className="text-sm text-mocha-600">Hours Saved per Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mocha-700 mb-2">$800+</div>
                <div className="text-sm text-mocha-600">Maintenance Cost Savings</div>
              </div>
            </div>

            <p className="text-mocha-600 text-sm">
              *Savings calculated based on average Toronto household lawn maintenance costs and water usage.
            </p>
          </motion.div>
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
            <h2 className="text-white">Ready for a Maintenance-Free Lawn?</h2>
            <p className="subtitle text-warm-200 max-w-2xl mx-auto">
              Transform your outdoor space with beautiful, eco-friendly artificial grass. 
              Contact us today for a free consultation and see how much you can save.
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
                  View Installations
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
                <span className="text-sm">15-20 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">Professional Installation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 