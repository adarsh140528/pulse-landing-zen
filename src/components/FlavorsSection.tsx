import voltLime from "@/assets/can-volt-lime.png";
import fireBerry from "@/assets/can-fire-berry.png";
import iceBlue from "@/assets/can-ice-blue.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import FlavorModal, { type FlavorData } from "./FlavorModal";
import { Eye } from "lucide-react";

const flavors: FlavorData[] = [
  {
    name: "Volt Lime",
    tagline: "Citrus Surge",
    image: voltLime,
    color: "82 100% 50%",
    description:
      "A sharp citrus blast that ignites your senses. Volt Lime combines natural lime extract with our proprietary energy matrix for a clean, refreshing hit of sustained power. Designed for morning training and pre-game rituals.",
    nutrition: {
      calories: "10",
      caffeine: "160mg",
      sugar: "0g",
      sodium: "180mg",
      potassium: "90mg",
      vitaminB6: "250%",
      vitaminB12: "420%",
      niacin: "150%",
    },
    ingredients: [
      "Carbonated Water",
      "Citric Acid",
      "Natural Lime Flavor",
      "Caffeine Anhydrous",
      "L-Theanine",
      "Taurine",
      "B-Vitamins",
      "Electrolyte Blend",
      "Green Tea Extract",
      "Sucralose",
    ],
  },
  {
    name: "Fire Berry",
    tagline: "Berry Blaze",
    image: fireBerry,
    color: "0 85% 55%",
    description:
      "An intense mixed berry fusion that burns through fatigue. Fire Berry layers acai, goji, and raspberry into a bold flavor profile with an extra-strong caffeine kick. Built for late-night sessions and competition day.",
    nutrition: {
      calories: "15",
      caffeine: "200mg",
      sugar: "0g",
      sodium: "200mg",
      potassium: "110mg",
      vitaminB6: "300%",
      vitaminB12: "500%",
      niacin: "200%",
    },
    ingredients: [
      "Carbonated Water",
      "Natural Berry Blend",
      "Caffeine Anhydrous",
      "Acai Extract",
      "Goji Berry Extract",
      "Taurine",
      "L-Carnitine",
      "B-Vitamins",
      "Electrolyte Blend",
      "Beta-Alanine",
      "Sucralose",
    ],
  },
  {
    name: "Ice Blue",
    tagline: "Arctic Rush",
    image: iceBlue,
    color: "205 100% 55%",
    description:
      "A cooling arctic blast that recharges from the inside out. Ice Blue delivers maximum hydration with a crisp, clean finish. The highest electrolyte concentration in the lineup — ideal for endurance athletes and recovery.",
    nutrition: {
      calories: "5",
      caffeine: "120mg",
      sugar: "0g",
      sodium: "220mg",
      potassium: "150mg",
      vitaminB6: "200%",
      vitaminB12: "350%",
      niacin: "120%",
    },
    ingredients: [
      "Carbonated Water",
      "Natural Cooling Agent",
      "Caffeine Anhydrous",
      "Coconut Water Concentrate",
      "L-Theanine",
      "Magnesium Citrate",
      "B-Vitamins",
      "Electrolyte Complex",
      "BCAAs",
      "Sucralose",
    ],
  },
];

const FlavorsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorData | null>(null);

  return (
    <>
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
                className={`relative glass-card p-8 lg:p-10 flex flex-col items-center gap-8 group cursor-pointer overflow-hidden reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
                onClick={() => setSelectedFlavor(flavor)}
              >
                {/* Color glow behind card on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 60%, hsl(${flavor.color} / 0.1), transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-36 lg:w-44 h-auto drop-shadow-[0_10px_40px_hsl(0_0%_0%/0.4)] group-hover:scale-110 group-hover:-translate-y-3 transition-all duration-500"
                  />
                  {/* Colored reflection */}
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-8 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                    style={{ backgroundColor: `hsl(${flavor.color})` }}
                  />
                </div>

                <div className="relative z-10 text-center space-y-2">
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

                {/* View details indicator */}
                <div className="relative z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Eye className="w-3.5 h-3.5" style={{ color: `hsl(${flavor.color} / 0.7)` }} />
                  <span
                    className="text-[10px] font-body font-semibold uppercase tracking-[0.2em]"
                    style={{ color: `hsl(${flavor.color} / 0.7)` }}
                  >
                    View Details
                  </span>
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1px hsl(${flavor.color} / 0.25), 0 0 80px hsl(${flavor.color} / 0.15)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FlavorModal
        flavor={selectedFlavor}
        open={!!selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
      />
    </>
  );
};

export default FlavorsSection;
