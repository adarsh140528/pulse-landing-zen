import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroCan from "@/assets/hero-can.png";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="relative py-36 lg:py-48 overflow-hidden" ref={ref}>
      {/* Multi-layer background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] blur-[140px] rounded-full animate-energy-pulse" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(82 100% 50% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(82 100% 50% / 0.4) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="container px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Floating can */}
          <div className={`flex-shrink-0 relative reveal-hidden reveal-left ${isVisible ? "reveal-visible" : ""}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-primary/[0.08] blur-[60px] animate-glow-pulse" />
            <img src={heroCan} alt="" className="relative z-10 w-44 lg:w-56 animate-float drop-shadow-[0_20px_60px_hsl(82_100%_50%/0.25)]" />
          </div>

          <div className={`text-center lg:text-left space-y-8 flex-1 reveal-hidden ${isVisible ? "reveal-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-display font-bold uppercase tracking-tight leading-[0.82]">
              Ready To
              <br />
              Feel{" "}
              <span className="text-primary text-glow-green relative">
                The Pulse?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join the next generation of peak performance. Available now in select stores and online worldwide.
            </p>
            <div className={`flex flex-col sm:flex-row items-center lg:items-start gap-4 reveal-hidden ${isVisible ? "reveal-visible" : ""}`} style={{ transitionDelay: "400ms" }}>
              <button className="group relative inline-flex items-center gap-3 px-14 py-5 bg-primary text-primary-foreground font-display font-bold text-lg uppercase tracking-[0.15em] rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 box-glow-green overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Unleash Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.12)] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                <span className="absolute -inset-px rounded-xl border border-primary/30 animate-glow-pulse pointer-events-none" />
              </button>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex -space-x-2">
                  {["M.J.", "S.W.", "L.H.", "K.B."].map((init, i) => (
                    <div
                      key={init}
                      className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[8px] font-display font-bold text-foreground/60"
                      style={{ zIndex: 4 - i }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-body">
                  <span className="text-primary font-semibold">2.4M+</span> athletes trust Pulse
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
