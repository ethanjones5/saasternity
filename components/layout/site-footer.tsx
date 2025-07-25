import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Interior Renovations", href: "/services/interior-renovations" },
    { name: "Hardscaping", href: "/services/hardscaping" },
    { name: "Artificial Grass", href: "/services/artificial-grass" },
    { name: "Design & Build", href: "/services" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/about#process" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="bg-mocha-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Logo size="md" />
              <span className="font-bold text-lg">Eva Build & Design</span>
            </div>
            <p className="text-warm-200 text-sm leading-relaxed mb-6">
              Transforming homes and commercial spaces in Toronto since 2016. 
              Your trusted partner for interior renovations, hardscaping, and artificial grass installations.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com/evabuilddesign" 
                className="w-10 h-10 bg-mocha-800 rounded-lg flex items-center justify-center hover:bg-mocha-700 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com/evabuilddesign" 
                className="w-10 h-10 bg-mocha-800 rounded-lg flex items-center justify-center hover:bg-mocha-700 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/evabuilddesign" 
                className="w-10 h-10 bg-mocha-800 rounded-lg flex items-center justify-center hover:bg-mocha-700 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-warm-200 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-warm-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-warm-300 mt-0.5 flex-shrink-0" />
                <div className="text-warm-200 text-sm">
                  <div>Toronto, ON</div>
                  <div>Greater Toronto Area</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-warm-300 flex-shrink-0" />
                <Link 
                  href="tel:+1234567890"
                  className="text-warm-200 hover:text-white transition-colors text-sm"
                >
                  (123) 456-7890
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-warm-300 flex-shrink-0" />
                <Link 
                  href="mailto:info@evabuilddesign.com"
                  className="text-warm-200 hover:text-white transition-colors text-sm"
                >
                  info@evabuilddesign.com
                </Link>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-warm-300 mt-0.5 flex-shrink-0" />
                <div className="text-warm-200 text-sm">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom Bar */}
      <div className="border-t border-mocha-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-warm-300 text-sm">
              © {currentYear} Eva Build & Design. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              {legal.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-warm-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 