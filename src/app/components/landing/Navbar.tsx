"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronUp,
  Home,
  Briefcase,
  Info,
  Users,
  Handshake,
  Mail,
} from "lucide-react";
import { ProtectedImage } from "@/app/components/ui/ProtectedImage";
const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "About", href: "/about", icon: Info },
  { name: "Team", href: "/team", icon: Users },
  { name: "Partners", href: "/clients", icon: Handshake },
  { name: "Contact", href: "/contact", icon: Mail },
];
export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
        if (isNavbarOpen) {
          setIsNavbarOpen(false);
        }
      } else {
        setIsScrolled(false);
        setIsNavbarOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavbarOpen]);
  const handleFloatingButtonClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsNavbarOpen(false);
    setIsMobileOpen(false);
    if (pathname === "/" && href !== "/") {
      e.preventDefault();
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled && !isNavbarOpen
          ? "opacity-0 pointer-events-none -translate-y-full"
          : "opacity-100 translate-y-0"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-secondary to-dark-bg opacity-95 backdrop-blur-xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-50"></div>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-20 bg-gradient-to-r from-primary-blue/20 via-primary-purple/20 to-sky-blue/20 blur-3xl"></div>
        <div className="relative container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 min-w-0 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-blue/30 to-primary-purple/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ProtectedImage
                src="https://res.cloudinary.com/diddn2pzb/image/upload/Tech-Assist_h7dufc.jpg"
                alt="Innovatech Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-primary-blue/50 group-hover:ring-primary-purple group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 shadow-lg shadow-primary-blue/30"
              />
              <div className="min-w-0 relative">
                <h1 className="heading-4 text-xs sm:text-sm md:text-base lg:text-lg bg-gradient-to-r from-primary-blue via-primary-purple to-sky-blue bg-clip-text text-transparent whitespace-nowrap font-bold">
                  Innovatech
                </h1>
                <p className="body-small text-text-light/60 text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">
                  Solutions
                </p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="relative px-4 xl:px-5 py-2.5 text-text-light/80 hover:text-white transition-all duration-300 group overflow-hidden rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 via-primary-purple/10 to-sky-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-blue via-primary-purple to-sky-blue opacity-30 blur-sm"></div>
                  </div>
                  <div className="relative flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm whitespace-nowrap">
                    <link.icon className="w-4 h-4 xl:w-4.5 xl:h-4.5 opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span className="font-medium">{link.name}</span>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue via-primary-purple to-sky-blue group-hover:w-full transition-all duration-500"></span>
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={(e) => handleNavLinkClick(e, "/contact")}
              className="hidden lg:flex items-center gap-1.5 xl:gap-2 px-4 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-primary-blue via-primary-purple to-sky-blue text-white rounded-full font-semibold text-xs xl:text-sm hover:scale-105 transition-all duration-300 relative overflow-hidden group flex-shrink-0 whitespace-nowrap shadow-lg shadow-primary-blue/30 hover:shadow-2xl hover:shadow-primary-purple/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
              <Mail className="w-3.5 h-3.5 xl:w-4 xl:h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Get Started</span>
              <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-text-light hover:text-primary-blue transition-colors duration-300 relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group flex-shrink-0 ml-2 rounded-xl hover:bg-white/5"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex flex-col items-center justify-center relative">
                <span
                  className={`absolute h-0.5 w-6 sm:w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 sm:w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileOpen ? "opacity-0 rotate-180" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 sm:w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                ></span>
              </div>
            </button>
          </div>
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div
              className={`py-4 space-y-2 border-t border-white/10 transition-all duration-300 ${isMobileOpen ? "translate-y-0" : "-translate-y-4"
                }`}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="flex items-center gap-3 px-4 py-3 text-text-light/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 p-2 flex items-center justify-center flex-shrink-0">
                    <link.icon className="w-full h-full text-primary-blue" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    {link.name}
                  </span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={(e) => handleNavLinkClick(e, "/contact")}
                className="flex items-center justify-center gap-2 mx-4 mt-4 px-5 py-2.5 bg-gradient-to-r from-primary-blue via-primary-purple to-sky-blue text-white text-center rounded-full font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <button
        onClick={handleFloatingButtonClick}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ${isScrolled && !isNavbarOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-20 scale-0 pointer-events-none"
          } group`}
        aria-label="Toggle navigation"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-sky-blue to-primary-blue rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-primary-blue via-primary-purple to-sky-blue rounded-full flex items-center justify-center shadow-2xl shadow-primary-blue/50 group-hover:scale-110 transition-all duration-500 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full overflow-hidden ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
              <ProtectedImage
                src="https://res.cloudinary.com/diddn2pzb/image/upload/Tech-Assist_h7dufc.jpg"
                alt="Innovatech Logo"
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-primary-blue/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
        </div>
      </button>
    </>
  );
}
