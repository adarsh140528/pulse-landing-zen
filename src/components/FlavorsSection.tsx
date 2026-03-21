import voltLime from "@/assets/can-volt-lime.png";
import fireBerry from "@/assets/can-fire-berry.png";
import iceBlue from "@/assets/can-ice-blue.png";

const flavors = [
  {
    name: "Volt Lime",
    image: voltLime,
    color: "hsl(82 100% 50%)",
    glowClass: "shadow-[0_0_60px_hsl(82_100%_50%/0.35)]",
    borderClass: "hover:border-[hsl(82_100%_50%/0.3)]",
  },
  {
    name: "Fire Berry",
    image: fireBerry,
    color: "hsl(0 85% 55%)",
    glowClass: "shadow-[0_0_60px_hsl(0_85%_55%/0.35)]",
    borderClass: "hover:border-[hsl(0_85%_55%/0.3)]",
  },
  {
    name: "Ice Blue",
    image: iceBlue,
    color: "hsl(205 100% 55%)",
    glowClass: "shadow-[0_0_60px_hsl(205_100%_55%/0.35)]",
    borderClass: "hover:border-[hsl(205_100%_55%/0.3)]",
  },
];

const FlavorsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">Choose Your Fuel</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-tight">
            Three Flavors. <span className="text-primary text-glow-green">One Mission.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {flavors.map((flavor, i) => (
            <div
              key={flavor.name}
              className={`glass-card p-8 flex flex-col items-center gap-6 group transition-all duration-500 ${flavor.borderClass} ${flavor.glowClass} hover:scale-[1.02]`}
              style={{
                animation: `slide-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s forwards`,
                opacity: 0,
              }}
            >
              <div className="relative">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-40 h-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-6 blur-xl rounded-full opacity-60"
                  style={{ backgroundColor: flavor.color }}
                />
              </div>
              <h3
                className="text-2xl font-display font-bold uppercase tracking-wide"
                style={{ color: flavor.color }}
              >
                {flavor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
