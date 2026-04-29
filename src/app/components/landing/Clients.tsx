"use client";
import { ProtectedImage } from "@/app/components/ui/ProtectedImage";
const schools = [
  {
    name: "STI Palawan",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8czNrHoA_3dyj7BHHvFlSFRIjXc_2LtpHQ&s",
    description: "Our valued clients and students",
  },

];
export function Clients() {
  return (
    <section id="clients" className="py-24 bg-dark-bg relative overflow-hidden">
      {}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
      {}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/10 to-transparent"></div>
      {}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-purple/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      {}
      <div className="absolute top-0 left-1/3 w-0.5 h-full grid-line-vertical"></div>
      <div className="absolute top-0 right-1/3 w-0.5 h-full grid-line-vertical-purple"></div>
      {}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-blue to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-purple to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-blue/50 to-transparent"></div>
      </div>
      {}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-primary-blue/10 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-primary-purple/10 rounded-br-3xl"></div>
      {}
      <div className="absolute top-20 right-20 w-16 h-16 border border-sky-blue/20 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 border border-primary-blue/20 rounded-full"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-1-mobile md:heading-1 text-text-light mb-4">
            Trusted by Students From
          </h2>
          <p className="body-large max-w-2xl mx-auto px-4 text-sm md:text-base">
            Most of our clients are students from these leading institutions in
            Palawan
          </p>
        </div>
        {}
        <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {schools.map((school, index) => (
            <div
              key={school.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {}
              <div className="glass-card rounded-2xl p-5 md:p-6 h-full hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-purple/20 flex flex-col items-center text-center cursor-pointer">
                {}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 rounded-2xl"></div>
                {}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 md:mb-4 rounded-xl bg-dark-card p-2.5 md:p-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center border border-border">
                  <ProtectedImage
                    src={school.logo}
                    alt={`${school.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                {}
                <h3 className="heading-4-mobile md:heading-4 text-text-light mb-1.5 md:mb-2 relative z-10">
                  {school.name}
                </h3>
                <p className="body-small text-text-muted relative z-10 text-xs md:text-sm">
                  {school.description}
                </p>
                {}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-blue to-primary-purple group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
        {}
        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="body-text max-w-3xl mx-auto text-sm md:text-base">
            We're grateful to serve students from these institutions who trust
            us with their IT needs. Your success is our priority, and we're
            committed to providing reliable, affordable services that help you
            excel in your studies.
          </p>
        </div>
      </div>
    </section>
  );
}
