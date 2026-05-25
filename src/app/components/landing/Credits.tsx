"use client";

import {
  Mail,
  Code2,
  Zap,
  Shield,
  Globe,
  Rocket,
  MessageSquare,
  RefreshCw,
  Network,
  Gauge,
} from "lucide-react";

export function Credits() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg text-text-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-8 pointer-events-none"></div>

      {/* Floating Glow Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-blue/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-purple/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Grid Lines */}
      <div className="absolute top-0 left-1/3 w-0.5 h-full grid-line-vertical"></div>
      <div className="absolute top-0 right-1/3 w-0.5 h-full grid-line-vertical-purple"></div>

      <div className="absolute top-1/3 left-0 w-full h-0.5 grid-line-horizontal-sky"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-0.5 grid-line-horizontal"></div>

      {/* Corner Borders */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-primary-blue/10 rounded-tl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-primary-purple/10 rounded-br-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Header */}
          <div className="space-y-1.5 md:space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-light">
              About This Website
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-text-light/70 max-w-3xl mx-auto px-4 leading-relaxed">
              Innovatech Solution based in Puerto Princesa City, Palawan.
              Our platform is built with cutting-edge technologies to deliver
              fast, secure, and reliable user experiences.
            </p>

            <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-primary-blue to-primary-purple mx-auto rounded-full"></div>
          </div>

          {/* Tech Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto px-4 sm:px-0">
            
            {/* Next.js */}
            <div className="group glass-card-dark rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 max-w-sm mx-auto sm:max-w-none w-full">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className="relative bg-black rounded-lg md:rounded-xl p-3 md:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl border border-white/10">
                    <svg
                      viewBox="0 0 180 180"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <mask
                        id="mask0_408_139"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="180"
                        height="180"
                      >
                        <circle cx="90" cy="90" r="90" fill="black" />
                      </mask>

                      <g mask="url(#mask0_408_139)">
                        <circle cx="90" cy="90" r="90" fill="black" />

                        <path
                          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                          fill="url(#paint0_linear_408_139)"
                        />

                        <rect
                          x="115"
                          y="54"
                          width="12"
                          height="72"
                          fill="url(#paint1_linear_408_139)"
                        />
                      </g>

                      <defs>
                        <linearGradient
                          id="paint0_linear_408_139"
                          x1="109"
                          y1="116.5"
                          x2="144.5"
                          y2="160.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                          />
                        </linearGradient>

                        <linearGradient
                          id="paint1_linear_408_139"
                          x1="121"
                          y1="54"
                          x2="120.799"
                          y2="106.875"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="text-center space-y-0.5 md:space-y-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-light">
                    Next.js 16
                  </h3>

                  <p className="text-xs text-text-light/60">
                    React Framework
                  </p>
                </div>

                <div className="space-y-1 md:space-y-1.5 w-full">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-blue flex-shrink-0" />
                    <span>Server-Side Rendering</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-blue flex-shrink-0" />
                    <span>React Server Components</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-blue flex-shrink-0" />
                    <span>Full-Stack Framework</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TypeScript */}
            <div className="group glass-card-dark rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 max-w-sm mx-auto sm:max-w-none w-full">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-blue to-primary-blue rounded-xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className="relative bg-[#3178C6] rounded-lg md:rounded-xl p-3 md:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg viewBox="0 0 128 128" className="w-full h-full">
                      <path
                        fill="#fff"
                        d="M22.67 47h99.67v73.67H22.67z"
                      ></path>

                      <path
                        fill="#007acc"
                        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="text-center space-y-0.5 md:space-y-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-light">
                    TypeScript
                  </h3>

                  <p className="text-xs text-text-light/60">
                    Type-Safe JavaScript
                  </p>
                </div>

                <div className="space-y-1 md:space-y-1.5 w-full">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-blue flex-shrink-0" />
                    <span>Type Safety & IntelliSense</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-blue flex-shrink-0" />
                    <span>Enhanced Developer Experience</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-blue flex-shrink-0" />
                    <span>Scalable Codebase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brevo */}
            <div className="group glass-card-dark rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 hover:bg-white/10 transition-all duration-300 border border-white/5 sm:col-span-2 lg:col-span-1 max-w-sm mx-auto sm:max-w-none w-full">
              <div className="flex flex-col items-center gap-2 md:gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-sky-blue rounded-xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className="relative bg-white rounded-lg md:rounded-xl p-3 md:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg
                      viewBox="0 0 200 60"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-auto"
                    >
                      <text
                        x="10"
                        y="40"
                        fontFamily="Arial, sans-serif"
                        fontSize="32"
                        fontWeight="bold"
                        fill="#0B996E"
                      >
                        brevo
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="text-center space-y-0.5 md:space-y-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-light">
                    Brevo
                  </h3>

                  <p className="text-xs text-text-light/60">
                    Email Marketing & CRM
                  </p>
                </div>

                <div className="space-y-1 md:space-y-1.5 w-full">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-purple flex-shrink-0" />
                    <span>Transactional Email API</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-purple flex-shrink-0" />
                    <span>Marketing Automation</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light/70">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-purple flex-shrink-0" />
                    <span>Customer Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Website Features */}
          <div className="glass-card-dark rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 max-w-5xl mx-auto border border-white/5">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-light mb-3 sm:mb-4">
              Website Features & Technologies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              <div className="px-3 py-2 rounded-lg bg-primary-blue/10 border border-primary-blue/20 text-primary-blue font-medium text-xs md:text-sm flex items-center justify-center gap-1.5 text-center">
                <Rocket className="w-3.5 h-3.5 flex-shrink-0" />
                <span>SSR</span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-primary-purple/10 border border-primary-purple/20 text-primary-purple font-medium text-xs md:text-sm flex items-center justify-center gap-1.5 text-center">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Email Auto</span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-primary-blue/10 border border-primary-blue/20 text-primary-blue font-medium text-xs md:text-sm flex items-center justify-center gap-1.5 text-center">
                <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Real-time</span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-sky-blue/10 border border-sky-blue/20 text-sky-blue font-medium text-xs md:text-sm flex items-center justify-center gap-1.5 text-center">
                <RefreshCw className="w-3.5 h-3.5 flex-shrink-0" />
                <span>API</span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-primary-blue/10 border border-primary-blue/20 text-primary-blue font-medium text-xs md:text-sm flex items-center justify-center gap-1.5 text-center">
                <Network className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Full-Stack</span>
              </div>

              <div className="px-3 py-2 rounded-lg bg-primary-purple/10 border border-primary-purple/20 text-primary-purple font-medium text-xs md:text-sm flex items-center justify-center gap-1.5 text-center">
                <Gauge className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}