import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroCan from "@/assets/hero-can.png";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden" ref={ref}>
      {/* Layered background */}
      <div className="absolute inset-0 gradient-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] blur-[120px] rounded-full" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(82 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(82 100% 50% / 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Small floating can */}
          <div className={`flex-shrink-0 reveal-hidden reveal-left ${isVisible ? "reveal-visible" : ""}`}>
            <img src={heroCan} alt="" className="w-48 lg:w-56 animate-float opacity-80" />
          </div>

          <div className={`text-center lg:text-left space-y-8 flex-1 reveal-hidden ${isVisible ? "reveal-visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold uppercase tracking-tight leading-[0.85]">
              Ready To
              <br />
              Feel{" "}
              <span className="text-primary text-glow-green">The Pulse?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join the next generation of peak performance. Available now in select stores and online.
            </p>
            <div className={`reveal-hidden ${isVisible ? "reveal-visible" : ""}`} style={{ transitionDelay: "300ms" }}>
              <button className="group relative inline-flex items-center gap-3 px-14 py-5 bg-primary text-primary-foreground font-display font-bold text-lg uppercase tracking-[0.15em] rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 box-glow-green overflow-hidden">
                <span className="relative z-10">Unleash Now</span>
                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.12)] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                {/* Outer glow ring */}
                <span className="absolute -inset-px rounded-xl border border-primary/30 animate-glow-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
