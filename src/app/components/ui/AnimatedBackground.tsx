"use client";
import { useEffect, useRef } from "react";
interface AnimatedBackgroundProps {
  variant?: "default" | "subtle" | "vibrant";
  showGrid?: boolean;
  showOrbs?: boolean;
  showParticles?: boolean;
}
export function AnimatedBackground({
  variant = "default",
  showGrid = true,
  showOrbs = true,
  showParticles = true,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!showParticles) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];
    const particleCount =
      variant === "vibrant" ? 80 : variant === "subtle" ? 30 : 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, showParticles]);
  const gridOpacity =
    variant === "vibrant" ? 0.15 : variant === "subtle" ? 0.05 : 0.08;
  const orbOpacity =
    variant === "vibrant" ? 0.3 : variant === "subtle" ? 0.1 : 0.2;
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg" />
      {}
      {showGrid && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, ${gridOpacity}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, ${gridOpacity}) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      )}
      {}
      {showOrbs && (
        <>
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, ${orbOpacity}) 0%, transparent 70%)`,
              animationDelay: "0s",
              animationDuration: "8s",
            }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float"
            style={{
              background: `radial-gradient(circle, rgba(139, 92, 246, ${orbOpacity}) 0%, transparent 70%)`,
              animationDelay: "2s",
              animationDuration: "10s",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float"
            style={{
              background: `radial-gradient(circle, rgba(56, 189, 248, ${orbOpacity}) 0%, transparent 70%)`,
              animationDelay: "4s",
              animationDuration: "12s",
            }}
          />
        </>
      )}
      {}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity:
              variant === "vibrant" ? 0.8 : variant === "subtle" ? 0.4 : 0.6,
          }}
        />
      )}
      {}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
