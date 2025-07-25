"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Award, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle, 
  Shield, 
  Clock, 
  Star,
  Heart,
  Lightbulb,
  Hammer
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue the highest standards in every project, using quality materials and skilled craftsmanship."
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Your vision and satisfaction drive everything we do. We listen, collaborate, and deliver beyond expectations."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest communication, transparent pricing, and reliable service are the foundation of our business."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new techniques and materials to create modern, efficient, and beautiful spaces."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, needs, and budget. Our team provides expert guidance and initial recommendations.",
      icon: Users
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "We create detailed plans and 3D visualizations. Our designers work with you to perfect every detail.",
      icon: Lightbulb
    },
    {
      step: "03",
      title: "Permits & Approval",
      description: "We handle all permit applications and regulatory requirements, making the process seamless for you.",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Construction",
      description: "Our skilled team brings your vision to life with meticulous attention to detail and regular progress updates.",
      icon: Hammer
    },
    {
      step: "05",
      title: "Final Walkthrough",
      description: "We ensure every detail meets our high standards and your expectations before project completion.",
      icon: Star
    }
  ];

  const stats = [
    { number: "8+", label: "Years of Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Licensed & Insured" },
    { number: "5★", label: "Client Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>About Eva Build & Design - Toronto's Trusted Home Contractor Since 2016</title>
        <meta name="description" content="Learn about Eva Build & Design's story, mission, and values. Founded in 2016, we're Toronto's trusted partner for interior renovations, hardscaping, and artificial grass installations." />
        <link rel="canonical" href="https://evabuilddesign.com/about" />
        <meta property="og:title" content="About Eva Build & Design - Toronto's Trusted Home Contractor" />
        <meta property="og:description" content="Discover our story, mission, and commitment to transforming Toronto homes and commercial spaces since 2016." />
      </head>

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
                <span className="text-mocha-600 font-medium text-lg">About Eva Build & Design</span>
                <h1 className="text-mocha-800 mt-4">
                  Transforming Spaces, Building Dreams Since 2016
                </h1>
              </div>
              
              <p className="subtitle text-mocha-600 leading-relaxed">
                Founded in Toronto with a passion for exceptional craftsmanship, Eva Build & Design 
                has grown from a small renovation company to a trusted design-build partner for 
                homeowners and businesses across the Greater Toronto Area.
              </p>

              <div className="flex flex-wrap gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-mocha-700">{stat.number}</div>
                    <div className="text-sm text-mocha-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" className="bg-mocha-600 hover:bg-mocha-700" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/EvaDesignPhotos/Portfolio/Home Renovation.jpg"
                  alt="Eva Build & Design team working on a home renovation project"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-mocha-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-mocha-800">Licensed & Insured</div>
                    <div className="text-sm text-mocha-600">Professional Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-standard bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-mocha-800">Our Story</h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-mocha-700">
              <p>
                Eva Build & Design was founded in 2016 with a simple yet powerful vision: to transform 
                ordinary spaces into extraordinary places where people love to live and work. What started 
                as a small renovation company has grown into one of Toronto's most trusted design-build contractors.
              </p>
              
              <p>
                Our Toronto roots run deep. We understand the unique character of homes in this vibrant city, 
                from heritage properties in established neighborhoods to modern condos in bustling downtown cores. 
                This local knowledge, combined with our commitment to excellence, allows us to create spaces that 
                truly reflect the lifestyle and personality of our clients.
              </p>
              
              <p>
                Over the years, we've expanded our services to include comprehensive interior renovations, 
                stunning hardscaping projects, and eco-friendly artificial grass installations. What hasn't 
                changed is our dedication to making the renovation process enjoyable and stress-free for our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-mocha-600 mx-auto mb-4" />
                <h4 className="text-mocha-800 mb-2">Founded 2016</h4>
                <p className="text-mocha-600">Eight years of growing expertise and satisfied clients</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-mocha-600 mx-auto mb-4" />
                <h4 className="text-mocha-800 mb-2">Toronto Based</h4>
                <p className="text-mocha-600">Serving the Greater Toronto Area with pride</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-mocha-600 mx-auto mb-4" />
                <h4 className="text-mocha-800 mb-2">Expert Team</h4>
                <p className="text-mocha-600">Licensed professionals committed to quality</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Our Values</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              The principles that guide everything we do and ensure exceptional results for every client
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="h-8 w-8 text-mocha-600" />
                </div>
                <h4 className="text-mocha-800 mb-4">{value.title}</h4>
                <p className="text-mocha-600 text-regular leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-standard bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-mocha-800 mb-4">Our Process</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              From initial consultation to final walkthrough, we guide you through every step 
              of your renovation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full border border-mocha-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-6 w-6 text-mocha-600" />
                    </div>
                    <div className="text-sm font-bold text-mocha-500 bg-mocha-50 px-3 py-1 rounded-full">
                      Step {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-mocha-800 mb-4">{step.title}</h3>
                  <p className="text-mocha-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting line for larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-px bg-mocha-200 transform translate-x-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-standard bg-mocha-800 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Why Choose Eva Build & Design</h2>
            <p className="subtitle text-warm-200 max-w-2xl mx-auto">
              Experience the difference of working with Toronto's most trusted design-build team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="h-12 w-12 text-warm-300 mx-auto mb-6" />
              <h4 className="text-white mb-4">Licensed & Insured</h4>
              <p className="text-warm-200 leading-relaxed">
                Fully licensed trades and comprehensive insurance coverage for complete peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <CheckCircle className="h-12 w-12 text-warm-300 mx-auto mb-6" />
              <h4 className="text-white mb-4">Permit Handling</h4>
              <p className="text-warm-200 leading-relaxed">
                We manage all permits and regulatory requirements, making the process seamless for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Clock className="h-12 w-12 text-warm-300 mx-auto mb-6" />
              <h4 className="text-white mb-4">On-Time Delivery</h4>
              <p className="text-warm-200 leading-relaxed">
                Projects completed on schedule with regular updates and transparent communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="h-12 w-12 text-warm-300 mx-auto mb-6" />
              <h4 className="text-white mb-4">Quality Materials</h4>
              <p className="text-warm-200 leading-relaxed">
                We use only the highest quality materials and finishes for lasting, beautiful results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Star className="h-12 w-12 text-warm-300 mx-auto mb-6" />
              <h4 className="text-white mb-4">Warranty Coverage</h4>
              <p className="text-warm-200 leading-relaxed">
                Comprehensive warranty on all work gives you confidence in your investment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Heart className="h-12 w-12 text-warm-300 mx-auto mb-6" />
              <h4 className="text-white mb-4">Personal Touch</h4>
              <p className="text-warm-200 leading-relaxed">
                We treat every project as if it were our own home, with care and attention to detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-compact bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-mocha-800">Ready to Transform Your Space?</h2>
            <p className="subtitle text-mocha-600 max-w-2xl mx-auto">
              Let's discuss your vision and create the space of your dreams. 
              Contact us today for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-mocha-600 hover:bg-mocha-700" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-mocha-300 text-mocha-700 hover:bg-mocha-600 hover:text-white" asChild>
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 