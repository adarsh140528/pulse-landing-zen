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
      {/* Multi-layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_2%)] via-background to-background" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 speed-lines" />

      {/* Large ambient blobs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px] animate-energy-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[120px] animate-energy-pulse" style={{ animationDelay: "2s" }} />

      {/* Rotating concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] animate-rotate-slow opacity-[0.06]">
        <div className="absolute inset-0 rounded-full border border-primary/50" />
        <div className="absolute inset-6 rounded-full border border-primary/30" />
        <div className="absolute inset-12 rounded-full border border-dashed border-primary/20" />
        <div className="absolute inset-20 rounded-full border border-primary/10" />
        {/* Tick marks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-px h-4 bg-primary/40 origin-bottom"
            style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: "50% 300px" }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(82 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(82 100% 50% / 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Pulse rings */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.07]"
          style={{
            width: `${200 + i * 130}px`,
            height: `${200 + i * 130}px`,
            animation: `pulse-ring ${2 + i * 0.5}s ease-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 pt-28 pb-20">
        {/* Text */}
        <div
          className={`flex-1 text-center lg:text-left space-y-8 transition-all duration-[1.2s] ease-out ${
            loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-sm"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/[0.06] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-primary">
              Now Available Worldwide
            </span>
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-display font-bold uppercase leading-[0.82] tracking-[-0.03em]">
            <span className="text-foreground block">Feel</span>
            <span className="text-foreground block">The </span>
            <span className="text-primary text-glow-green block relative">
              Pulse
              {/* Underline accent */}
              <span
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                style={{
                  width: loaded ? "100%" : "0%",
                  transition: "width 1s cubic-bezier(0.16,1,0.3,1) 0.8s",
                }}
              />
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
            Fuel your energy. Elevate your performance. Engineered for those who refuse to stop.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
            <button className="group relative inline-flex items-center gap-3 px-10 py-4.5 bg-primary text-primary-foreground font-display font-bold text-base uppercase tracking-[0.15em] rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 box-glow-green overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Unleash Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.15)] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-4 font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group">
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsl(82_100%_50%/0.2)] transition-all duration-300">
                <svg className="w-4 h-4 text-primary ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <span className="font-medium uppercase tracking-[0.1em] text-xs">Watch Film</span>
            </button>
          </div>
        </div>

        {/* Can */}
        <div
          className={`flex-1 flex justify-center relative transition-all duration-[1.4s] delay-200 ease-out ${
            loaded ? "opacity-100 translate-y-0 blur-0 scale-100" : "opacity-0 translate-y-16 blur-md scale-95"
          }`}
        >
          <div className="relative">
            {/* Orbiting glow dots */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-rotate-slow" style={{ animationDuration: "15s" }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/60 blur-[2px]" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-accent/50 blur-[2px]" />
            </div>

            {/* Aura layers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-primary/[0.06] blur-[80px] animate-energy-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-primary/[0.1] blur-[50px] animate-glow-pulse" />

            <img
              src={heroCan}
              alt="Nike Pulse Energy Drink Can"
              className="relative z-10 w-[300px] sm:w-[360px] lg:w-[420px] drop-shadow-[0_25px_80px_hsl(82_100%_50%/0.3)] animate-float"
            />

            {/* Reflection pool */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-20 bg-primary/15 blur-[40px] rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 transition-all duration-700 delay-[1.5s] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <span className="text-[9px] font-body font-medium uppercase tracking-[0.4em] text-muted-foreground/60">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-primary/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDuration: "1.5s" }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
