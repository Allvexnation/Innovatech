"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Mail, Phone, MapPin, Home, Briefcase, Info, Users, Handshake } from "lucide-react";
import { ProtectedImage } from "@/app/components/ui/ProtectedImage";

export function Footer() {
  const pathname = usePathname();

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-dark-bg text-text-light py-8 md:py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-large opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary/30 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-6 md:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <ProtectedImage
                src="https://res.cloudinary.com/dbob1wota/image/upload/3f3e83ebe24f2efe9edbfffd18acb955_bbiayb.jpg"
                alt="Innovatech Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-primary-blue/50 hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="heading-4 text-base md:text-lg">Innovatech</h3>
                <p className="body-small text-text-light/60 text-xs md:text-sm">
                  IT Solution
                </p>
              </div>
            </div>
            <p className="body-text text-text-light/70 text-sm md:text-base mb-4">
              Student-friendly IT services in Palawan. Your technology
              partner for success.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/Innovatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-blue/20 border border-white/10 hover:border-primary-blue/50 flex items-center justify-center transition-all duration-300 group"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4 text-text-light/70 group-hover:text-primary-blue transition-colors" />
              </a>
              <a
                href="mailto:contact@Innovatechsolution.com"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary-blue/20 border border-white/10 hover:border-primary-blue/50 flex items-center justify-center transition-all duration-300 group"
                aria-label="Send us an email"
              >
                <Mail className="w-4 h-4 text-text-light/70 group-hover:text-primary-blue transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="heading-4 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
              <Home className="w-4 h-4 text-primary-blue" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={(e) => handleScrollClick(e, "about")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={(e) => handleScrollClick(e, "services")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  onClick={(e) => handleScrollClick(e, "team")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={(e) => handleScrollClick(e, "contact")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="heading-4 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary-blue" />
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  onClick={(e) => handleScrollClick(e, "services")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  Printing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={(e) => handleScrollClick(e, "services")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  Troubleshooting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={(e) => handleScrollClick(e, "services")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  Programming Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={(e) => handleScrollClick(e, "services")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  IT Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="heading-4 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
              <Handshake className="w-4 h-4 text-primary-blue" />
              Partner Schools
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/clients"
                  onClick={(e) => handleScrollClick(e, "clients")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  STI Palawan
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  onClick={(e) => handleScrollClick(e, "clients")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  onClick={(e) => handleScrollClick(e, "clients")}
                  className="body-text text-text-light/70 hover:text-primary-blue hover:translate-x-1 transition-all duration-300 inline-block text-sm md:text-base"
                >
                  
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="heading-4 mb-3 md:mb-4 text-base md:text-lg flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-blue" />
              Contact Info
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3 group">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-blue group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+639819829768"
                  className="body-text text-text-light/70 hover:text-primary-blue transition-colors text-sm md:text-base"
                >
                  0981-982-9768
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3 group">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-blue group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@Innovatechsolution.com"
                  className="body-text text-text-light/70 hover:text-primary-blue transition-colors text-sm md:text-base break-all"
                >
                  Innovatechsolution.com
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3 group">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-blue group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                <span className="body-text text-text-light/70 text-sm md:text-base">
                  Puerto Princesa City, Palawan, Philippines
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/10 flex justify-center items-center">
          <p className="body-text text-text-light/60 text-xs md:text-sm text-center">
            © 2026 Innovatech Solutions. All rights reserveds.
          </p>
        </div>
      </div>
    </footer>
  );
}
