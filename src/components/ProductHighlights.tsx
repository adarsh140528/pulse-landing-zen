import { Zap, Droplets, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const highlights = [
  {
    icon: Zap,
    title: "Instant Energy Boost",
    description: "Engineered caffeine matrix delivers rapid, sustained energy within minutes of consumption.",
    stat: "47mg/oz",
    gradient: "from-[hsl(82_100%_50%/0.15)] to-transparent",
  },
  {
    icon: Droplets,
    title: "Electrolyte Hydration",
    description: "Advanced 6-electrolyte blend keeps you performing at peak hydration during intense sessions.",
    stat: "6 types",
    gradient: "from-[hsl(175_100%_50%/0.1)] to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Zero Crash Formula",
    description: "Balanced release technology eliminates the spike-and-crash cycle. Smooth energy, always.",
    stat: "0g sugar",
    gradient: "from-[hsl(205_100%_55%/0.1)] to-transparent",
  },
];

const ProductHighlights = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-[120px] rounded-full" />

      <div className="container px-6 relative z-10">
        <div className={`text-center mb-20 space-y-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          <div className="accent-line mx-auto" />
          <p className="text-[11px] font-body font-semibold tracking-[0.4em] uppercase text-primary pt-3">
            Why Pulse
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight leading-[0.85]">
            Engineered For
            <br />
            <span className="text-primary text-glow-green">Greatness</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`glass-card p-8 lg:p-10 space-y-6 group cursor-default relative overflow-hidden reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.15] group-hover:shadow-[0_0_30px_hsl(82_100%_50%/0.15)] transition-all duration-500">
                  <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <span className="px-3 py-1.5 text-[10px] font-display font-bold uppercase tracking-wider text-primary bg-primary/[0.06] border border-primary/10 rounded-full">
                  {item.stat}
                </span>
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-display font-bold uppercase tracking-wide text-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="relative z-10 pt-4">
                <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
