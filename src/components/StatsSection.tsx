import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";

const stats = [
  { value: 200, suffix: "%", prefix: "+", label: "Energy Boost", barWidth: 90 },
  { value: 0, suffix: "", prefix: "", label: "Sugar Crash", barWidth: 100 },
  { value: 2, suffix: "×", prefix: "", label: "Hydration Power", barWidth: 80 },
];

const AnimatedNumber = ({ target, prefix, suffix, animate }: { target: number; prefix: string; suffix: string; animate: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!animate) return;
    if (target === 0) { setCurrent(0); return; }
    const duration = 1200;
    const steps = 40;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [animate, target]);

  return <>{prefix}{current}{suffix}</>;
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/[0.03] blur-[120px] rounded-full" />

      <div className="container px-6 relative z-10">
        <div className={`text-center mb-20 space-y-4 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          <div className="accent-line mx-auto" />
          <p className="text-xs font-body font-semibold tracking-[0.35em] uppercase text-primary pt-3">
            Performance Data
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight leading-[0.9]">
            The <span className="text-primary text-glow-green">Numbers</span> Speak
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`space-y-4 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-body font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {stat.label}
                </span>
                <span className="text-4xl lg:text-5xl font-display font-bold text-primary tabular-nums tracking-tight">
                  <AnimatedNumber target={stat.value} prefix={stat.prefix} suffix={stat.suffix} animate={isVisible} />
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary/80 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all ease-out"
                  style={{
                    width: isVisible ? `${stat.barWidth}%` : "0%",
                    transitionDuration: "1.4s",
                    transitionDelay: `${300 + i * 120}ms`,
                    background: `linear-gradient(90deg, hsl(82 100% 50%), hsl(175 100% 50%))`,
                    boxShadow: "0 0 20px hsl(82 100% 50% / 0.3)",
                  }}
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
