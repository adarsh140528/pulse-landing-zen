import athleteImg from "@/assets/athlete.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AthleteSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative py-20 sm:py-28 lg:py-44 overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[500px] sm:h-[700px] bg-primary/[0.03] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[300px] sm:h-[400px] bg-accent/[0.02] blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-28 items-center">
          {/* Image */}
          <div className={`relative reveal-hidden reveal-left ${isVisible ? "reveal-visible" : ""}`}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group">
              {/* Decorative border */}
              <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-b from-primary/20 via-transparent to-transparent z-10 pointer-events-none" />

              <img
                src={athleteImg}
                alt="Athlete powered by Nike Pulse"
                className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />

              {/* Live badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-background/60 backdrop-blur-md border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[8px] sm:text-[9px] font-body font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary/90">
                  Live Performance
                </span>
              </div>

              {/* Bottom stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 flex items-end justify-between">
                <div className="flex gap-4 sm:gap-6">
                  {[
                    { value: "47mg", label: "Caffeine/oz" },
                    { value: "6", label: "Electrolytes" },
                    { value: "0g", label: "Sugar" },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-0.5 sm:space-y-1">
                      <p className="text-lg sm:text-2xl font-display font-bold text-primary tabular-nums tracking-tight text-glow-green">
                        {stat.value}
                      </p>
                      <p className="text-[7px] sm:text-[8px] text-muted-foreground/80 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute -right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent hidden lg:block" />
          </div>

          {/* Text */}
          <div className={`space-y-6 sm:space-y-8 reveal-hidden reveal-right ${isVisible ? "reveal-visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            <div className="accent-line" />
            <p className="text-[10px] sm:text-[11px] font-body font-semibold tracking-[0.35em] sm:tracking-[0.4em] uppercase text-accent">
              Athlete Energy
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.88] sm:leading-[0.85] tracking-tight">
              Built For
              <br />
              Athletes.
              <br />
              <span className="text-primary text-glow-green">Designed For</span>
              <br />
              <span className="text-primary text-glow-green">Dominance.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
              Every ingredient is purpose-selected. Every formula is athlete-tested. Nike Pulse delivers the competitive edge that separates contenders from champions.
            </p>

            {/* Feature list */}
            <div className="space-y-2.5 sm:space-y-3 pt-2">
              {["Lab-tested performance formula", "Used by 148+ professional athletes", "Anti-fatigue compound technology"].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-xs sm:text-sm text-foreground/80 font-body">{feat}</span>
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
