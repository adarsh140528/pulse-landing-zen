import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const proofs = [
  { value: "2.4M+", label: "Cans Sold" },
  { value: "148", label: "Pro Athletes" },
  { value: "32", label: "Countries" },
  { value: "#1", label: "Energy Drink 2026" },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div className="container px-6">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          {proofs.map((p, i) => (
            <div
              key={p.label}
              className="text-center space-y-2 reveal-hidden"
              style={{
                transitionDelay: `${100 + i * 80}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                filter: isVisible ? "blur(0)" : "blur(4px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <p className="text-3xl lg:text-4xl font-display font-bold text-primary tabular-nums tracking-tight text-glow-green">
                {p.value}
              </p>
              <p className="text-[10px] font-body font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
