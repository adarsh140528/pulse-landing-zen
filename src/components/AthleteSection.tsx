import athleteImg from "@/assets/athlete.png";

const AthleteSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative" style={{ animation: "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards", opacity: 0 }}>
            <img
              src={athleteImg}
              alt="Athlete powered by Nike Pulse"
              className="w-full rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div className="space-y-6" style={{ animation: "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s forwards", opacity: 0 }}>
            <p className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-accent">
              Athlete Energy
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase leading-[0.95] tracking-tight">
              Built For Athletes.
              <br />
              <span className="text-primary text-glow-green">Designed For Dominance.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Every ingredient is purpose-selected. Every formula is athlete-tested. Nike Pulse delivers the competitive edge that separates contenders from champions.
            </p>
            <div className="flex gap-8 pt-4">
              {[
                { value: "47mg", label: "Caffeine/oz" },
                { value: "6", label: "Electrolytes" },
                { value: "0g", label: "Sugar" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-display font-bold text-primary tabular-nums">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
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
