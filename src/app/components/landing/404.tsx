"use client";
import Link from "next/link";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg px-4">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-sky-blue/10 rounded-full blur-3xl"></div>

        <div className="absolute top-0 left-1/4 w-0.5 h-full grid-line-vertical"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full grid-line-vertical-purple"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 grid-line-horizontal-sky"></div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-blue rounded-full animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary-purple rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-sky-blue rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-l-2 border-t-2 border-primary-blue/30"></div>
        <div className="absolute bottom-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-r-2 border-b-2 border-primary-purple/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 md:space-y-5 animate-fade-in-up">
          <div className="relative inline-block mb-1 sm:mb-2">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/30 to-primary-purple/30 rounded-full blur-xl opacity-75 animate-pulse"></div>
            <div className="relative glass-card-dark rounded-full p-2 sm:p-3 md:p-4 inline-block">
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-blue" />
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
              <span className="bg-gradient-to-r from-primary-blue via-primary-purple to-sky-blue bg-clip-text text-transparent">
                404
              </span>
            </h1>

            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Page Not Found
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-0.5 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-transparent via-primary-blue to-transparent"></div>
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-purple" />
                <div className="h-0.5 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-transparent via-primary-purple to-transparent"></div>
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-text-light/70 max-w-md mx-auto px-4 leading-relaxed">
              The page you're looking for doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center pt-2 sm:pt-3">
            <Link
              href="/"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl hover:shadow-primary-blue/50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Support
            </Link>
          </div>

          <div className="pt-3 sm:pt-4 md:pt-5">
            <p className="text-xs sm:text-sm text-text-light/50 mb-2 sm:mb-3">
              Try these pages:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center">
              {[
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Team", href: "/team" },
                { name: "Partners", href: "/clients" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-text-light/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-blue/30 rounded-full transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
