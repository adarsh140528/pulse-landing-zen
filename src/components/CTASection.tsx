const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-pulse" />

      <div className="container px-6 relative z-10 text-center space-y-8">
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight leading-[0.95]"
          style={{ animation: "slide-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          Ready To Feel
          <br />
          <span className="text-primary text-glow-green">The Pulse?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto" style={{ animation: "slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards", opacity: 0 }}>
          Join the next generation of peak performance. Available now.
        </p>
        <div style={{ animation: "slide-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards", opacity: 0 }}>
          <button className="relative inline-flex items-center gap-2 px-12 py-5 bg-primary text-primary-foreground font-display font-bold text-xl uppercase tracking-wider rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200 box-glow-green">
            Unleash Now
            {/* Glow ring */}
            <span className="absolute inset-0 rounded-xl border-2 border-primary/40 animate-glow-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
