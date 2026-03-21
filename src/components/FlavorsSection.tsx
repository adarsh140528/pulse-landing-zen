import voltLime from "@/assets/can-volt-lime.png";
import fireBerry from "@/assets/can-fire-berry.png";
import iceBlue from "@/assets/can-ice-blue.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const flavors = [
  {
    name: "Volt Lime",
    tagline: "Citrus Surge",
    image: voltLime,
    color: "82 100% 50%",
  },
  {
    name: "Fire Berry",
    tagline: "Berry Blaze",
    image: fireBerry,
    color: "0 85% 55%",
  },
  {
    name: "Ice Blue",
    tagline: "Arctic Rush",
    image: iceBlue,
    color: "205 100% 55%",
  },
];

const FlavorsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      <div className="container px-6 relative z-10">
        <div className={`text-center mb-20 space-y-4 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          <div className="accent-line mx-auto" />
          <p className="text-xs font-body font-semibold tracking-[0.35em] uppercase text-primary pt-3">
            Choose Your Fuel
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight leading-[0.9]">
            Three Flavors.{" "}
            <span className="text-primary text-glow-green">One Mission.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {flavors.map((flavor, i) => (
            <div
              key={flavor.name}
              className={`relative glass-card p-8 lg:p-10 flex flex-col items-center gap-8 group cursor-default overflow-hidden reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
              style={{
                transitionDelay: `${200 + i * 120}ms`,
              }}
            >
              {/* Color glow behind card on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 60%, hsl(${flavor.color} / 0.08), transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-36 lg:w-44 h-auto drop-shadow-[0_10px_40px_hsl(0_0%_0%/0.4)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500"
                />
                {/* Colored reflection */}
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-8 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ backgroundColor: `hsl(${flavor.color})` }}
                />
              </div>

              <div className="relative z-10 text-center space-y-1">
                <h3
                  className="text-2xl font-display font-bold uppercase tracking-wide"
                  style={{ color: `hsl(${flavor.color})` }}
                >
                  {flavor.name}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                  {flavor.tagline}
                </p>
              </div>

              {/* Border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px hsl(${flavor.color} / 0.2), 0 0 60px hsl(${flavor.color} / 0.15)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
