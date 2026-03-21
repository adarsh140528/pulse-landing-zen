import heroCan from "@/assets/hero-can.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 gradient-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />

      {/* Pulse ring lines */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
          style={{
            width: `${300 + i * 150}px`,
            height: `${300 + i * 150}px`,
            animation: `pulse-ring ${2 + i * 0.5}s ease-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 pt-32 pb-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left space-y-6" style={{ animation: "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards" }}>
          <p className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">
            Nike Pulse™ Energy
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold uppercase leading-[0.9] tracking-tight">
            <span className="text-foreground">Feel The</span>
            <br />
            <span className="text-primary text-glow-green">Pulse</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 font-light">
            Fuel your energy. Elevate your performance.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg uppercase tracking-wider rounded-lg box-glow-green hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200">
            Unleash Now
          </button>
        </div>

        {/* Can */}
        <div className="flex-1 flex justify-center relative" style={{ animation: "slide-up 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards", opacity: 0 }}>
          <div className="relative">
            <img
              src={heroCan}
              alt="Nike Pulse Energy Drink Can"
              className="w-[320px] sm:w-[400px] lg:w-[460px] drop-shadow-2xl animate-float"
            />
            {/* Glow under can */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/30 blur-2xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
