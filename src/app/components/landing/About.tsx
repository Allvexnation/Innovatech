"use client";
import { CheckCircle2, Users, Award, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const highlights = [
  { icon: Users, text: "Student-Focused Service" },
  { icon: Award, text: "Quality Guaranteed" },
  { icon: Clock, text: "Quick Turnaround" },
];
function useCounterAnimation(
  end: number,
  duration: number = 2000,
  suffix: string = ""
) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);
  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);
  return { count, ref, displayValue: count + suffix };
}
export function About() {
  const mainCounter = useCounterAnimation(100, 2000, "+");
  const schoolsCounter = useCounterAnimation(1, 1500,);
  const supportCounter = useCounterAnimation(24, 1500);
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-dark-bg to-dark-secondary text-text-light relative overflow-hidden"
    >
      { }
      <div className="absolute inset-0 grid-pattern-dense opacity-15 pointer-events-none"></div>
      { }
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      { }
      <div className="absolute top-0 right-1/3 w-0.5 h-full grid-line-vertical"></div>
      <div className="absolute top-1/4 left-0 w-full h-0.5 grid-line-horizontal-purple"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-0.5 grid-line-horizontal-sky"></div>
      { }
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-primary-blue/20 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-primary-purple/20 rounded-bl-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto">
          { }
          <div className="animate-fade-in-left">
            <h1 className="heading-1-mobile md:heading-1 mb-4 md:mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                Innovatech?
              </span>
            </h1>
            <p className="body-large text-text-light/80 mb-6 md:mb-8 text-base md:text-lg">
              Innovatech IT Solution is your dedicated technology partner in
              Palawan. We understand the unique challenges students face and
              provide affordable, reliable IT services that help you succeed
              academically.
            </p>
            <p className="body-text text-text-light/70 mb-6 md:mb-8 text-sm md:text-base">
              From urgent printing needs before class to complex troubleshooting
              issues, our experienced team is here to support you. We've built
              our reputation on fast service, fair pricing, and genuine care for
              student success.
            </p>
            { }
            <div className="space-y-2.5 md:space-y-3">
              {highlights.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 md:gap-3 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-primary-blue to-primary-purple p-2 md:p-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow">
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <span className="body-large text-text-light font-medium text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          { }
          <div className="relative animate-fade-in-right mt-8 lg:mt-0">
            <div className="glass-card-dark rounded-2xl p-5 md:p-8 space-y-5 md:space-y-6 hover:scale-105 transition-transform duration-300">
              <div className="text-center" ref={mainCounter.ref}>
                <div className="heading-2-mobile md:heading-hero bg-gradient-to-r from-sky-blue to-primary-blue bg-clip-text text-transparent mb-1.5">
                  {mainCounter.displayValue}
                </div>
                <p className="body-large text-text-light/80 text-sm md:text-base">
                  Students Served Monthly
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div
                  className="text-center p-3 md:p-5 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 group cursor-pointer"
                  ref={schoolsCounter.ref}
                >
                  <div className="heading-3-mobile md:heading-2 text-sky-blue mb-1.5 group-hover:scale-110 transition-transform duration-300">
                    {schoolsCounter.displayValue}
                  </div>
                  <p className="body-small text-text-light/70 text-xs md:text-sm">
                    Partner Schools
                  </p>
                </div>
                <div
                  className="text-center p-3 md:p-5 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 group cursor-pointer"
                  ref={supportCounter.ref}
                >
                  <div className="heading-3-mobile md:heading-2 text-primary-purple mb-1.5 group-hover:scale-110 transition-transform duration-300">
                    {supportCounter.displayValue}/7
                  </div>
                  <p className="body-small text-text-light/70 text-xs md:text-sm">
                    Support Available
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                  <p className="body-text text-text-light/70">
                    Trusted by students from leading institutions across
                    Palawan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
