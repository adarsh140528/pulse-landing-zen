const items = [
  "NIKE PULSE™",
  "FEEL THE ENERGY",
  "ZERO CRASH",
  "PURE PERFORMANCE",
  "+200% ENERGY",
  "ATHLETE APPROVED",
  "ELECTROLYTE CHARGED",
  "UNLEASH NOW",
];

const MarqueeTicker = () => {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 shrink-0">
      <span className="text-sm font-display font-bold uppercase tracking-[0.2em] text-foreground/20 whitespace-nowrap">
        {item}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
    </span>
  ));

  return (
    <div className="relative overflow-hidden py-6 border-y border-[hsl(0_0%_100%/0.04)]">
      <div className="flex gap-6 animate-marquee">
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default MarqueeTicker;
