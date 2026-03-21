import heroCan from "@/assets/hero-can.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay scanlines">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[hsl(82_100%_50%/0.03)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[120px]" />
      
      {/* Rotating ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-rotate-slow opacity-[0.08]">
        <div className="w-full h-full rounded-full border border-primary/40" />
        <div className="absolute inset-4 rounded-full border border-primary/20" />
        <div className="absolute inset-8 rounded-full border border-dashed border-primary/15" />
      </div>

      {/* Pulse rings */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
          style={{
            width: `${250 + i * 140}px`,
            height: `${250 + i * 140}px`,
            animation: `pulse-ring ${2.5 + i * 0.6}s ease-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(82 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(82 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 pt-32 pb-20">
        {/* Text */}
        <div
          className={`flex-1 text-center lg:text-left space-y-8 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/[0.06]">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-primary">
              Nike Pulse™ Energy
            </span>
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-display font-bold uppercase leading-[0.85] tracking-[-0.02em]">
            <span className="text-foreground">Feel</span>
            <br />
            <span className="text-foreground">The </span>
            <span className="text-primary text-glow-green">Pulse</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
            Fuel your energy. Elevate your performance. Engineered for those who refuse to stop.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-base uppercase tracking-[0.15em] rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 box-glow-green overflow-hidden">
              <span className="relative z-10">Unleash Now</span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.15)] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 font-display font-bold text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 group">
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              Watch Film
            </button>
          </div>
        </div>

        {/* Can */}
        <div
          className={`flex-1 flex justify-center relative transition-all duration-1000 delay-300 ease-out ${
            loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
          }`}
        >
          <div className="relative">
            {/* Aura glow behind can */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/[0.08] blur-[80px] animate-glow-pulse" />
            
            <img
              src={heroCan}
              alt="Nike Pulse Energy Drink Can"
              className="relative z-10 w-[300px] sm:w-[380px] lg:w-[440px] drop-shadow-[0_20px_60px_hsl(82_100%_50%/0.25)] animate-float"
            />
            
            {/* Reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-16 bg-primary/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 delay-[1.2s] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
