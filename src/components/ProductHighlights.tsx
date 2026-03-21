import { Zap, Droplets, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const highlights = [
  {
    icon: Zap,
    title: "Instant Energy Boost",
    description: "Engineered caffeine matrix delivers rapid, sustained energy within minutes of consumption.",
    stat: "47mg/oz",
  },
  {
    icon: Droplets,
    title: "Electrolyte Hydration",
    description: "Advanced 6-electrolyte blend keeps you performing at peak hydration during intense sessions.",
    stat: "6 types",
  },
  {
    icon: ShieldCheck,
    title: "Zero Crash Formula",
    description: "Balanced release technology eliminates the spike-and-crash cycle. Smooth energy, always.",
    stat: "0g sugar",
  },
];

const ProductHighlights = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] blur-[100px] rounded-full" />
      
      <div className="container px-6 relative z-10">
        <div className={`text-center mb-20 space-y-4 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          <div className="accent-line mx-auto" />
          <p className="text-xs font-body font-semibold tracking-[0.35em] uppercase text-primary pt-3">
            Why Pulse
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight leading-[0.9]">
            Engineered For{" "}
            <span className="text-primary text-glow-green">Greatness</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`glass-card p-8 lg:p-10 text-center space-y-5 group cursor-default reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Icon container */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.15] transition-all duration-500 group-hover:shadow-[0_0_30px_hsl(82_100%_50%/0.15)]">
                <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-display font-bold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Stat pill */}
              <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/[0.08] border border-primary/10">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-primary">
                  {item.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
