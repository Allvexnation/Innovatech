"use client";
import {
  Target,
  Eye,
  Zap,
  Heart,
  TrendingUp,
  Rocket,
  Globe,
  Sparkles,
} from "lucide-react";
const missionPoints = [
  {
    icon: Zap,
    title: "Empower Students",
    description:
      "To revolutionize IT support for students across Palawan by making technology accessible, affordable, and stress-free for every learner. We provide accessible and affordable IT solutions that enable students to focus on their academic success without technology barriers.",
  },
];
const visionPoints = [
  {
    icon: Rocket,
    title: "Leading IT Partner",
    description:
      "To create a future where every student has seamless access to technology, empowering them to achieve their full academic and professional potential. We aim to become the most trusted and preferred IT service provider for students throughout Palawan and beyond.",
  },
];
export function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="py-16 md:py-24 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg text-text-light relative overflow-hidden"
    >
      { }
      <div className="absolute inset-0 grid-pattern-dense opacity-25 pointer-events-none"></div>
      { }
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-1/2 right-10 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-10 left-1/3 w-64 h-64 bg-sky-blue/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      { }
      <div className="absolute top-0 left-1/4 w-0.5 h-full grid-line-vertical"></div>
      <div className="absolute top-0 right-1/4 w-0.5 h-full grid-line-vertical-purple"></div>
      <div className="absolute top-0 left-1/2 w-0.5 h-full grid-line-vertical-sky"></div>
      { }
      <div className="absolute top-1/3 left-0 w-full h-0.5 grid-line-horizontal"></div>
      <div className="absolute bottom-1/3 left-0 w-full h-0.5 grid-line-horizontal-purple"></div>
      { }
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-primary-blue/20 rounded-tr-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-primary-purple/20 rounded-bl-2xl"></div>
      { }
      <div className="absolute top-1/4 right-10 w-20 h-20 border border-sky-blue/15 rotate-45"></div>
      <div className="absolute bottom-1/4 left-10 w-16 h-16 border border-primary-blue/15 rounded-full"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          { }
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-10 md:mb-14 max-w-6xl mx-auto">
            { }
            <div className="group glass-card rounded-2xl p-6 md:p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary-blue/20 transition-all duration-300 animate-fade-in-up flex-1">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-primary-blue/20 to-sky-blue/20 p-2.5 md:p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                  <Target className="w-full h-full text-sky-blue" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] font-semibold text-white leading-tight font-[family-name:var(--font-heading)]">
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary-blue to-sky-blue bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
              </div>
              <p className="body-text text-text-light/70 text-sm md:text-base leading-relaxed">
                {missionPoints[0].description}
              </p>
            </div>
            { }
            <div
              className="group glass-card rounded-2xl p-6 md:p-8 hover:scale-105 hover:shadow-2xl hover:shadow-primary-purple/20 transition-all duration-300 animate-fade-in-up flex-1"
              style={{ animationDelay: "150ms" }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-primary-purple/20 to-sky-blue/20 p-2.5 md:p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                  <Eye className="w-full h-full text-primary-purple" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] font-semibold text-white leading-tight font-[family-name:var(--font-heading)]">
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary-purple to-sky-blue bg-clip-text text-transparent">
                    Vision
                  </span>
                </h2>
              </div>
              <p className="body-text text-text-light/70 text-sm md:text-base leading-relaxed">
                {visionPoints[0].description}
              </p>
            </div>
          </div>
          { }
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto border-2 border-primary-purple/20">
              <p className="text-sm sm:text-base md:text-lg text-white/90 italic leading-relaxed">
                "By 2030, we envision Innovatech as the cornerstone of student
                technology support, fostering a generation of digitally
                empowered learners ready to shape the future."
              </p>
              <div className="mt-4 md:mt-5 flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary-purple to-transparent"></div>
                <Sparkles className="w-4 h-4 text-primary-purple" />
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary-purple to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
