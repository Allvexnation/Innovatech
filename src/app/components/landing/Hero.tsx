"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ProtectedImage } from "@/app/components/ui/ProtectedImage";
export function Hero() {
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg pt-4 md:pt-20">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-blue/10 rounded-full blur-3xl"></div>
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
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary-blue/30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary-purple/30"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-3 md:space-y-4 animate-fade-in-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary-blue" />
              <span className="text-xs font-medium text-primary-blue">
                Student-Friendly IT Services
              </span>
            </div>
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                <span className="text-white">Your </span>
                <span className="relative inline-block text-white pb-1">
                  Trusted Partner
                  <svg
                    className="absolute -bottom-0.5 sm:-bottom-1 lg:bottom-0 left-0 w-full h-[6px] sm:h-[8px]"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,7 Q50,3 100,7 T200,7"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-white"> for </span>
                <span className="bg-gradient-to-r from-primary-blue via-primary-purple to-sky-blue bg-clip-text text-transparent">
                  Printing
                </span>
                <span className="text-white">, </span>
                <span className="bg-gradient-to-r from-sky-blue via-primary-blue to-primary-purple bg-clip-text text-transparent">
                  Tech Support
                </span>
                <span className="text-white"> & </span>
                <span className="bg-gradient-to-r from-primary-purple via-sky-blue to-primary-blue bg-clip-text text-transparent">
                  IT Solutions
                </span>
              </h1>
            </div>
            <p className="text-sm sm:text-base text-text-light/80 max-w-xl leading-relaxed">
              We provide affordable printing services, troubleshooting support,
              and custom programming solutions designed specifically for
              students across Palawan. Making technology accessible and
              budget-friendly.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                <span className="text-sm text-text-light/70">
                  Affordable Pricing
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-blue"></div>
                <span className="text-sm text-text-light/70">Fast Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-purple"></div>
                <span className="text-sm text-text-light/70">
                  Expert Support
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                onClick={(e) => handleScrollClick(e, "contact")}
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-blue to-primary-purple text-white text-sm font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-blue/50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link
                href="/services"
                onClick={(e) => handleScrollClick(e, "services")}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-blue flex-shrink-0" />
                <span className="text-xs sm:text-sm text-text-light/60">
                  100+ Students Served
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-purple flex-shrink-0" />
                <span className="text-xs sm:text-sm text-text-light/60">
                  3+ Partner Schools
                </span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-right hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-blue/30 via-primary-purple/30 to-sky-blue/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <ProtectedImage
                  src="https://res.cloudinary.com/diddn2pzb/image/upload/Tech-Assist-Banner_zcyu0c.jpg"
                  alt="Tech Assist - We're Here For You"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-primary-blue to-primary-purple p-2 rounded-xl shadow-xl animate-float hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-white text-xs font-semibold">
                    Available Now
                  </span>
                </div>
              </div>
              <div
                className="absolute -bottom-3 -left-3 glass-card-dark p-2 rounded-xl shadow-xl animate-float hidden sm:block"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold bg-gradient-to-r from-sky-blue to-primary-blue bg-clip-text text-transparent">
                    ★★★★★
                  </span>
                  <span className="text-white text-xs font-semibold">
                    Trusted by Students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-primary-blue/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-blue/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
