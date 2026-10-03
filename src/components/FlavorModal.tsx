import { X } from "lucide-react";
import { useEffect, useState } from "react";
import CanScene from "./CanScene";

export interface FlavorData {
  name: string;
  tagline: string;
  image: string;
  color: string;
  nutrition: {
    calories: string;
    caffeine: string;
    sugar: string;
    sodium: string;
    potassium: string;
    vitaminB6: string;
    vitaminB12: string;
    niacin: string;
  };
  ingredients: string[];
  description: string;
}

interface FlavorModalProps {
  flavor: FlavorData | null;
  open: boolean;
  onClose: () => void;
}

const NutritionRow = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="flex items-center justify-between py-2.5 border-b border-[hsl(0_0%_100%/0.06)] last:border-0">
    <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-muted-foreground">{label}</span>
    <span className={`text-sm font-display font-bold tabular-nums ${accent ? "text-primary" : "text-foreground"}`}>{value}</span>
  </div>
);

const FlavorModal = ({ flavor, open, onClose }: FlavorModalProps) => {
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (open) {
      setRender(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
    } else {
      setShow(false);
      document.body.style.overflow = "";
      const t = setTimeout(() => setRender(false), 400);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!render || !flavor) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 transition-all duration-400 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-[hsl(0_0%_0%/0.85)] backdrop-blur-xl transition-opacity duration-400 ${show ? "opacity-100" : "opacity-0"}`} />

      {/* Modal */}
      <div
        className={`relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-[hsl(0_0%_100%/0.08)] transition-all duration-500 ${show ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"}`}
        style={{
          background: `linear-gradient(145deg, hsl(0 0% 6%), hsl(0 0% 4%))`,
          boxShadow: `0 0 120px hsl(${flavor.color} / 0.12), 0 40px 80px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[hsl(0_0%_100%/0.06)] border border-[hsl(0_0%_100%/0.1)] flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-[hsl(0_0%_100%/0.1)] transition-all duration-200 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header color bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, hsl(${flavor.color} / 0.5), transparent)` }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: 3D Can View */}
          <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]">
            {/* Background glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] rounded-full blur-[80px] sm:blur-[100px] opacity-20 pointer-events-none"
              style={{ backgroundColor: `hsl(${flavor.color})` }}
            />

            {/* 3D Scene */}
            <div className="w-full h-[240px] sm:h-[300px] lg:h-[380px] relative z-10 touch-none">
              <CanScene textureUrl={flavor.image} color={flavor.color} />
            </div>

            <div className="text-center mt-3 sm:mt-4 space-y-1 relative z-10">
              <p className="text-[9px] sm:text-[10px] font-body uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground/60">
                Drag to rotate • Auto-spinning
              </p>
            </div>

            {/* Flavor title for mobile */}
            <div className="lg:hidden text-center mt-4 sm:mt-6 space-y-1.5 sm:space-y-2 relative z-10">
              <h3
                className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide"
                style={{ color: `hsl(${flavor.color})` }}
              >
                {flavor.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em]">{flavor.tagline}</p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="p-5 sm:p-8 lg:p-12 lg:border-l border-[hsl(0_0%_100%/0.06)] space-y-6 sm:space-y-8">
            {/* Title (desktop) */}
            <div className="hidden lg:block space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: `hsl(${flavor.color})`,
                    boxShadow: `0 0 12px hsl(${flavor.color} / 0.5)`,
                  }}
                />
                <p className="text-[10px] font-body font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Nike Pulse™ Energy
                </p>
              </div>
              <h3
                className="text-3xl lg:text-4xl font-display font-bold uppercase tracking-wide"
                style={{ color: `hsl(${flavor.color})` }}
              >
                {flavor.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-[0.2em]">{flavor.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {flavor.description}
            </p>

            {/* Nutrition Facts */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div
                  className="w-8 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, hsl(${flavor.color}), transparent)` }}
                />
                <h4 className="text-[11px] sm:text-xs font-display font-bold uppercase tracking-[0.2em] text-foreground/80">
                  Nutrition Facts
                </h4>
              </div>
              <div className="rounded-xl bg-[hsl(0_0%_100%/0.02)] border border-[hsl(0_0%_100%/0.05)] p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6">
                <NutritionRow label="Calories" value={flavor.nutrition.calories} />
                <NutritionRow label="Caffeine" value={flavor.nutrition.caffeine} accent />
                <NutritionRow label="Sugar" value={flavor.nutrition.sugar} accent />
                <NutritionRow label="Sodium" value={flavor.nutrition.sodium} />
                <NutritionRow label="Potassium" value={flavor.nutrition.potassium} />
                <NutritionRow label="Vitamin B6" value={flavor.nutrition.vitaminB6} />
                <NutritionRow label="Vitamin B12" value={flavor.nutrition.vitaminB12} />
                <NutritionRow label="Niacin" value={flavor.nutrition.niacin} />
              </div>
            </div>

            {/* Ingredients */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, hsl(${flavor.color}), transparent)` }}
                />
                <h4 className="text-[11px] sm:text-xs font-display font-bold uppercase tracking-[0.2em] text-foreground/80">
                  Ingredients
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {flavor.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-body font-medium uppercase tracking-[0.12em] sm:tracking-[0.15em] rounded-full border text-muted-foreground"
                    style={{
                      borderColor: `hsl(${flavor.color} / 0.15)`,
                      backgroundColor: `hsl(${flavor.color} / 0.04)`,
                    }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              className="w-full py-3.5 sm:py-4 rounded-xl font-display font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: `hsl(${flavor.color})`,
                color: "hsl(0 0% 4%)",
                boxShadow: `0 0 40px hsl(${flavor.color} / 0.3)`,
              }}
            >
              Add to Cart — $3.99
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorModal;
