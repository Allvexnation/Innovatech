"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Printer,
  Wrench,
  Code2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { ProtectedImage } from "@/app/components/ui/ProtectedImage";
const services = [
  {
    icon: Printer,
    title: "Printing Services",
    description:
      "Professional printing and photocopying services for all your needs",
    color: "from-primary-blue to-sky-blue",
    items: [
      "Passport Photos",
      "Driver's License",
      "National ID",
      "School Documents",
      "Personal Documents",
      "2x2 Photo Size",
      "Passport Photo Size",
    ],
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Expert technical support for all your devices",
    color: "from-primary-purple to-primary-blue",
    items: [
      "Laptop Repairs",
      "Phone Issues",
      "Tablet Problems",
      "Software Fixes",
      "Hardware Diagnostics",
      "System Optimization",
      "Virus Removal",
    ],
  },
];
const techStack = [
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Express",
    logo: "https://www.manektech.com/storage/developer/1646733543.webp",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "SQLite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "MS SQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/1200px-Microsoft_SQL_Server_2025_icon.svg.png",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Socket.io",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Visual Basic",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "NPM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "React Query",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];
const tools = [
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Visual Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png",
  },
  {
    name: "NetBeans 8.2",
    logo: "https://gluonhq.com/wp-content/uploads/2015/09/netbeans-logo-21.png",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];
const deployment = [
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  },
  { name: "Render", logo: "https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg" },
  {
    name: "Netlify",
    logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  },
  {
    name: "Wasmer",
    logo: "https://cdn.simpleicons.org/wasmer",
  },
];
const programmingServices = [
  "Student Management System",
  "Inventory Management System",
  "Basic Calculator Apps",
  "Shopping System",
  "Personal Websites",
  "Custom Applications",
  "Database Design",
];
export function Services() {
  const [showTechDetails, setShowTechDetails] = useState(false);
  const pathname = usePathname();
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return (
    <section
      id="services"
      className="py-24 bg-dark-secondary relative overflow-hidden"
    >
      {}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
      {}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      {}
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-50"></div>
      {}
      <div className="absolute top-0 left-1/4 w-0.5 h-full grid-line-vertical"></div>
      <div className="absolute top-0 right-1/4 w-0.5 h-full grid-line-vertical-purple"></div>
      {}
      <div className="absolute top-1/3 left-0 w-full h-0.5 grid-line-horizontal-sky"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-0.5 grid-line-horizontal"></div>
      {}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-blue/20 rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-primary-purple/20 rounded-full"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {}
        <div className="text-center mb-16">
          <h1 className="heading-1-mobile md:heading-1 text-text-light mb-4">
            Our Services
          </h1>
          <p className="body-large max-w-3xl mx-auto px-4">
            Comprehensive IT solutions designed specifically for students.
            Quality service at prices that won't break your budget.
          </p>
        </div>
        {}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-8">
          {}
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl p-5 md:p-6 h-full hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-blue/20">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>
                <div
                  className={`relative w-11 h-11 md:w-14 md:h-14 mb-3 md:mb-4 rounded-xl bg-gradient-to-br ${service.color} p-2.5 md:p-3.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow`}
                >
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="heading-4-mobile md:heading-4 text-text-light mb-2">
                  {service.title}
                </h3>
                <p className="body-text text-sm mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-text-muted text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-blue flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500 rounded-b-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {}
        <div
          className="group relative animate-fade-in-up max-w-7xl mx-auto"
          style={{ animationDelay: "200ms" }}
        >
          <div className="glass-card rounded-2xl p-5 md:p-7 hover:shadow-2xl hover:shadow-primary-purple/20 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-blue to-primary-purple opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
            {}
            <div className="flex items-start gap-3 md:gap-5 mb-4 md:mb-6 relative z-10">
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-sky-blue to-primary-purple p-2.5 md:p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow">
                  <Code2 className="w-full h-full text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="heading-4-mobile md:heading-3 text-text-light mb-1.5 md:mb-2">
                  Programming Services
                </h3>
                <p className="body-text text-sm md:text-base">
                  Custom software development and coding solutions for your
                  projects
                </p>
              </div>
            </div>
            {}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3 mb-5 md:mb-6 relative z-10">
              {programmingServices.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 md:gap-3 text-text-muted"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                  <span className="body-text text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            {}
            <div className="border-t border-white/10 pt-3 md:pt-5 relative z-20">
              <button
                type="button"
                onClick={() => setShowTechDetails(!showTechDetails)}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-primary-blue to-primary-purple text-white text-sm md:text-base font-semibold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-primary-blue/50 transition-all duration-300 cursor-pointer relative z-20"
              >
                {showTechDetails ? (
                  <>
                    <ChevronUp className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">
                      Hide Tech Stack & Tools
                    </span>
                    <span className="sm:hidden">Hide Details</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">
                      View Tech Stack & Tools We Use
                    </span>
                    <span className="sm:hidden">View Tech Stack</span>
                  </>
                )}
              </button>
            </div>
            {}
            {showTechDetails && (
              <div className="mt-5 md:mt-7 space-y-6 md:space-y-8 animate-fade-in-up border-t border-white/10 pt-5 md:pt-7 relative z-10">
                {}
                <div>
                  <h4 className="heading-4-mobile md:heading-3 text-text-light mb-4 md:mb-6 text-center">
                    Tech Stack
                  </h4>
                  <div className="relative overflow-x-auto scrollbar-hide py-2">
                    <div className="flex gap-4 animate-scroll-left">
                      {}
                      {[
                        ...techStack,
                        ...techStack,
                        ...techStack,
                        ...techStack,
                      ].map((tech, index) => (
                        <div key={`tech-${index}`} className="flex-shrink-0">
                          <div className="glass-card-dark rounded-full px-2.5 md:px-4 py-1.5 md:py-2 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
                            <div className="flex items-center gap-1.5 md:gap-2.5">
                              <div className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center flex-shrink-0">
                                <ProtectedImage
                                  src={tech.logo}
                                  alt={tech.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-text-light text-xs md:text-sm font-medium whitespace-nowrap">
                                {tech.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {}
                <div>
                  <h4 className="heading-4-mobile md:heading-3 text-text-light mb-4 md:mb-6 text-center">
                    Development Tools
                  </h4>
                  <div className="relative overflow-x-auto scrollbar-hide py-2">
                    <div className="flex gap-4 animate-scroll-right">
                      {}
                      {[
                        ...tools,
                        ...tools,
                        ...tools,
                        ...tools,
                        ...tools,
                        ...tools,
                        ...tools,
                        ...tools,
                      ].map((tool, index) => (
                        <div key={`tool-${index}`} className="flex-shrink-0">
                          <div className="glass-card-dark rounded-full px-3 md:px-5 py-2 md:py-3 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
                                <ProtectedImage
                                  src={tool.logo}
                                  alt={tool.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-text-light text-xs md:text-sm font-medium whitespace-nowrap">
                                {tool.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {}
                <div>
                  <h4 className="heading-4-mobile md:heading-3 text-text-light mb-4 md:mb-6 text-center">
                    Deployment (Websites Only)
                  </h4>
                  <div className="relative overflow-x-auto scrollbar-hide py-2">
                    <div className="flex gap-4 animate-scroll-left">
                      {}
                      {[
                        ...deployment,
                        ...deployment,
                        ...deployment,
                        ...deployment,
                        ...deployment,
                        ...deployment,
                        ...deployment,
                        ...deployment,
                      ].map((platform, index) => (
                        <div key={`deploy-${index}`} className="flex-shrink-0">
                          <div className="glass-card-dark rounded-full px-3 md:px-5 py-2 md:py-3 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/10">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center flex-shrink-0">
                                <ProtectedImage
                                  src={platform.logo}
                                  alt={platform.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="text-text-light text-xs md:text-sm font-medium whitespace-nowrap">
                                {platform.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-blue to-primary-purple group-hover:w-full transition-all duration-500 rounded-b-2xl pointer-events-none"></div>
          </div>
        </div>
        {}
        <div
          className="text-center mt-12 animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="heading-3-mobile md:heading-3 text-text-light mb-3">
              Ready to Get Started?
            </h3>
            <p className="body-large mb-5">
              Contact us today for affordable, student-friendly IT services
            </p>
            <Link
              href="/contact"
              onClick={handleScrollClick}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-primary-blue/50 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
