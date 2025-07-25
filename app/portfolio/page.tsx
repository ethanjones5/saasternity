"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Home, 
  Hammer, 
  Leaf, 
  Filter,
  ExternalLink,
  Calendar,
  MapPin,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects", count: 12 },
    { id: "interior", name: "Interior Renovations", count: 6 },
    { id: "hardscape", name: "Hardscaping", count: 4 },
    { id: "artificial-grass", name: "Artificial Grass", count: 2 }
  ];

  const projects = [
    {
      id: "kitchen-renovation-toronto",
      title: "Modern Kitchen Renovation",
      category: "interior",
      location: "Toronto, ON",
      year: "2024",
      image: "/EvaDesignPhotos/Portfolio/Kitchen Renovation.jpg",
      description: "Complete kitchen transformation featuring custom cabinetry, quartz countertops, and modern appliances.",
      features: ["Custom Cabinetry", "Quartz Countertops", "Modern Appliances", "Tile Backsplash"],
      projectValue: "$45,000"
    },
    {
      id: "home-renovation-markham",
      title: "Complete Home Transformation",
      category: "interior",
      location: "Markham, ON",
      year: "2024",
      image: "/EvaDesignPhotos/Portfolio/Home Renovation.jpg",
      description: "Full-scale home renovation including main floor, basement finishing, and exterior updates.",
      features: ["Full Home Renovation", "Basement Finishing", "Exterior Updates", "Interior Design"],
      projectValue: "$120,000"
    },
    {
      id: "bedroom-renovation-luxury",
      title: "Luxury Bedroom Design",
      category: "interior",
      location: "Richmond Hill, ON",
      year: "2023",
      image: "/EvaDesignPhotos/Portfolio/Bedroom Renovation with Marble Wall.png",
      description: "Sophisticated bedroom renovation with marble accent wall and custom built-ins.",
      features: ["Marble Accent Wall", "Custom Built-ins", "Luxury Finishes", "Lighting Design"],
      projectValue: "$28,000"
    },
    {
      id: "mess-room-renovation",
      title: "Mess Room Renovation",
      category: "interior",
      location: "Vaughan, ON",
      year: "2023",
      image: "/EvaDesignPhotos/Portfolio/Mess Room Renovation.jpg",
      description: "Functional and stylish mess room renovation with built-in storage and modern finishes.",
      features: ["Built-in Storage", "Modern Finishes", "Functional Layout", "Custom Millwork"],
      projectValue: "$22,000"
    },
    {
      id: "home-exterior-renovation",
      title: "Home Exterior Renovation",
      category: "interior",
      location: "Mississauga, ON",
      year: "2023",
      image: "/EvaDesignPhotos/Portfolio/Home Exterior Renovation.jpg",
      description: "Stunning exterior renovation with modern materials and enhanced curb appeal.",
      features: ["Modern Siding", "Stone Accents", "New Windows", "Landscaping"],
      projectValue: "$65,000"
    },
    {
      id: "interlock-patio-design",
      title: "Interlock Patio & Walkway",
      category: "hardscape",
      location: "Toronto, ON",
      year: "2024",
      image: "/EvaDesignPhotos/Hardscape/Interlock.png",
      description: "Beautiful interlock patio and walkway design creating an elegant outdoor living space.",
      features: ["Interlock Pavers", "Drainage System", "Lighting", "Seating Walls"],
      projectValue: "$18,000"
    },
    {
      id: "custom-decking-project",
      title: "Custom Deck Construction",
      category: "hardscape",
      location: "Brampton, ON",
      year: "2023",
      image: "/EvaDesignPhotos/Hardscape/Decking.jpg",
      description: "Multi-level custom deck with integrated seating and modern railing system.",
      features: ["Multi-level Design", "Composite Decking", "Integrated Seating", "Modern Railings"],
      projectValue: "$25,000"
    },
    {
      id: "driveway-installation",
      title: "Driveway Installation",
      category: "hardscape",
      location: "Aurora, ON",
      year: "2023",
      image: "/EvaDesignPhotos/Hardscape/Driveways.png",
      description: "New driveway installation with decorative borders and proper drainage.",
      features: ["Decorative Borders", "Proper Drainage", "Quality Materials", "Professional Finish"],
      projectValue: "$12,000"
    },
    {
      id: "garden-fencing-project",
      title: "Garden Fencing Project",
      category: "hardscape",
      location: "Newmarket, ON",
      year: "2023",
      image: "/EvaDesignPhotos/Hardscape/Fencing.jpg",
      description: "Custom garden fencing with decorative elements and integrated gate system.",
      features: ["Custom Design", "Quality Materials", "Integrated Gates", "Professional Installation"],
      projectValue: "$8,500"
    },
    {
      id: "artificial-grass-installation-1",
      title: "Residential Artificial Grass",
      category: "artificial-grass",
      location: "Toronto, ON",
      year: "2024",
      image: "/EvaDesignPhotos/Artificial Grass/artgrass1.jpg",
      description: "Premium artificial grass installation for a family backyard with play area.",
      features: ["Premium Turf", "Drainage System", "Play Area Safe", "Pet Friendly"],
      projectValue: "$15,000"
    },
    {
      id: "artificial-grass-installation-2",
      title: "Commercial Artificial Grass",
      category: "artificial-grass",
      location: "Mississauga, ON",
      year: "2023",
      image: "/EvaDesignPhotos/Artificial Grass/artgrass2.jpg",
      description: "Commercial artificial grass installation for office building outdoor space.",
      features: ["Commercial Grade", "Low Maintenance", "Professional Installation", "Warranty"],
      projectValue: "$32,000"
    },
    {
      id: "interior-design-consultation",
      title: "Interior Design Consultation",
      category: "interior",
      location: "Richmond Hill, ON",
      year: "2024",
      image: "/EvaDesignPhotos/Interiors/InteriorDesign.jpg",
      description: "Comprehensive interior design consultation and implementation for modern home.",
      features: ["Design Consultation", "Color Schemes", "Furniture Selection", "Styling"],
      projectValue: "$8,000"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Awards & Recognition" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <head>
        <title>Portfolio - Eva Build & Design Projects | Toronto Home Renovations</title>
        <meta name="description" content="View our portfolio of completed interior renovations, hardscaping, and artificial grass projects across Toronto and the GTA. See why Eva Build & Design is Toronto's trusted contractor." />
        <link rel="canonical" href="https://evabuilddesign.com/portfolio" />
        <meta property="og:title" content="Portfolio - Eva Build & Design Projects" />
        <meta property="og:description" content="Explore our completed renovation projects across Toronto. Interior renovations, hardscaping, and artificial grass installations." />
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
              <span className="text-mocha-600 font-medium text-lg">Our Portfolio</span>
              <h1 className="text-mocha-800 mt-4">
                Transforming Spaces Across Toronto
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="subtitle text-mocha-600 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our portfolio of completed projects across the Greater Toronto Area. 
              From stunning interior renovations to beautiful hardscaping and eco-friendly 
              artificial grass installations, see how we bring our clients' visions to life.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-mocha-700">{stat.number}</div>
                  <div className="text-sm text-mocha-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-compact bg-white border-b border-mocha-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-mocha-600">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id 
                  ? "bg-mocha-600 hover:bg-mocha-700 text-white" 
                  : "border-mocha-300 text-mocha-700 hover:bg-mocha-600 hover:text-white"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-standard bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover-effect"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} by Eva Build & Design in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white bg-mocha-600 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-medium text-mocha-800 bg-white px-3 py-1 rounded-full">
                      {project.projectValue}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-mocha-500 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{project.location}</span>
                    <span>•</span>
                    <Calendar className="h-3 w-3" />
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-mocha-800 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-mocha-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 bg-mocha-100 text-mocha-700 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-mocha-100 text-mocha-700 rounded-md">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-mocha-200">
                      <span className="text-sm font-semibold text-mocha-800">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1).replace('-', ' ')}
                      </span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="text-mocha-600 hover:text-mocha-800 p-0"
                      >
                        View Details
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-standard bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="text-4xl text-mocha-600">"</div>
              <blockquote className="text-xl text-mocha-700 leading-relaxed italic">
                Eva Build & Design transformed our outdated kitchen into the heart of our home. 
                Their attention to detail, professionalism, and ability to bring our vision to life 
                exceeded all our expectations. We couldn't be happier with the results.
              </blockquote>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-mocha-800">Sarah & Michael Johnson</div>
                <div className="text-sm text-mocha-600">Kitchen Renovation, Toronto</div>
              </div>
            </div>
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
            <h2 className="text-white">Ready to Start Your Project?</h2>
            <p className="subtitle text-warm-200 max-w-2xl mx-auto">
              Let's discuss your vision and create the space of your dreams. 
              Contact us today for a free consultation and detailed quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-mocha-800 hover:bg-warm-100 font-semibold" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-mocha-800" asChild>
                <Link href="/services">
                  Our Services
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
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Quality Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 