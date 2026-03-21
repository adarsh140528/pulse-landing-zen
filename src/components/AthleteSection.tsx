import athleteImg from "@/assets/athlete.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AthleteSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[600px] bg-primary/[0.03] blur-[120px] rounded-full" />

      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className={`relative reveal-hidden reveal-left ${isVisible ? "reveal-visible" : ""}`}>
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={athleteImg}
                alt="Athlete powered by Nike Pulse"
                className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
              
              {/* Corner accent */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-[10px] font-body font-semibold uppercase tracking-[0.3em] text-primary/80">Live Performance</span>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
          </div>

          {/* Text */}
          <div className={`space-y-8 reveal-hidden reveal-right ${isVisible ? "reveal-visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            <div className="accent-line" />
            <p className="text-xs font-body font-semibold tracking-[0.35em] uppercase text-accent">
              Athlete Energy
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase leading-[0.9] tracking-tight">
              Built For
              <br />
              Athletes.
              <br />
              <span className="text-primary text-glow-green">Designed For</span>
              <br />
              <span className="text-primary text-glow-green">Dominance.</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-lg leading-relaxed">
              Every ingredient is purpose-selected. Every formula is athlete-tested. Nike Pulse delivers the competitive edge that separates contenders from champions.
            </p>

            {/* Stats row */}
            <div className="flex gap-10 pt-4">
              {[
                { value: "47mg", label: "Caffeine / oz" },
                { value: "6", label: "Electrolytes" },
                { value: "0g", label: "Sugar" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="text-3xl lg:text-4xl font-display font-bold text-primary tabular-nums tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteSection;
