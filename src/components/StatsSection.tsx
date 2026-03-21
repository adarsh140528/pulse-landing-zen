const stats = [
  { value: "+200%", label: "Energy", barWidth: "90%" },
  { value: "0", label: "Sugar Crash", barWidth: "100%" },
  { value: "2×", label: "Hydration", barWidth: "80%" },
];

const StatsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-body font-semibold tracking-[0.3em] uppercase text-primary">Performance Data</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-tight">
            The <span className="text-primary text-glow-green">Numbers</span> Speak
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="space-y-3"
              style={{
                animation: `slide-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s forwards`,
                opacity: 0,
              }}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-body font-semibold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </span>
                <span className="text-3xl font-display font-bold text-primary tabular-nums">
                  {stat.value}
                </span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                  style={{ width: stat.barWidth }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
