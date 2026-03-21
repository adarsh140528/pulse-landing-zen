import { Zap, Droplets, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Instant Energy Boost",
    description: "Engineered caffeine matrix delivers rapid, sustained energy within minutes.",
  },
  {
    icon: Droplets,
    title: "Electrolyte Hydration",
    description: "Advanced electrolyte blend keeps you performing at peak hydration levels.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Crash Formula",
    description: "Balanced release technology eliminates the spike-and-crash cycle completely.",
  },
];

const ProductHighlights = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container px-6">
        <div className="text-center mb-16 space-y-3" style={{ animation: "slide-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards" }}>
          <p className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">Why Pulse</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-tight">
            Engineered For <span className="text-primary text-glow-green">Greatness</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="glass-card p-8 text-center space-y-4 hover:border-primary/20 transition-colors duration-300 group"
              style={{
                animation: `slide-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-wide">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
