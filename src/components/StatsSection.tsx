import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";

const stats = [
  { value: 200, suffix: "%", prefix: "+", label: "Energy Boost", barWidth: 90, color: "82 100% 50%" },
  { value: 0, suffix: "", prefix: "", label: "Sugar Crash", barWidth: 100, color: "175 100% 50%" },
  { value: 2, suffix: "×", prefix: "", label: "Hydration Power", barWidth: 80, color: "205 100% 55%" },
];

const AnimatedNumber = ({ target, prefix, suffix, animate }: { target: number; prefix: string; suffix: string; animate: boolean }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!animate) return;
    if (target === 0) { setCurrent(0); return; }
    const dur = 1400;
    const steps = 50;
    const inc = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round(inc * step), target));
      if (step >= steps) clearInterval(timer);
    }, dur / steps);
    return () => clearInterval(timer);
  }, [animate, target]);
  return <>{prefix}{current}{suffix}</>;
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] bg-primary/[0.03] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-5 reveal-hidden ${isVisible ? "reveal-visible" : ""}`}>
          <div className="accent-line mx-auto" />
          <p className="text-[10px] sm:text-[11px] font-body font-semibold tracking-[0.35em] sm:tracking-[0.4em] uppercase text-primary pt-2 sm:pt-3">
            Performance Data
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight leading-[0.9] sm:leading-[0.85]">
            The <span className="text-primary text-glow-green">Numbers</span>
            <br />
            Speak
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-14">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`relative reveal-hidden ${isVisible ? "reveal-visible" : ""}`}
              style={{ transitionDelay: `${250 + i * 150}ms` }}
            >
              {/* Background number */}
              <span
                className="absolute -top-3 sm:-top-4 right-0 text-[3.5rem] sm:text-[5rem] lg:text-[6rem] font-display font-bold uppercase leading-none pointer-events-none select-none"
                style={{ color: `hsl(${stat.color} / 0.04)` }}
              >
                {stat.prefix}{stat.value}{stat.suffix}
              </span>

              <div className="relative z-10 space-y-3 sm:space-y-4">
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] sm:text-xs font-body font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tabular-nums tracking-tight" style={{ color: `hsl(${stat.color})`, textShadow: `0 0 30px hsl(${stat.color} / 0.3)` }}>
                    <AnimatedNumber target={stat.value} prefix={stat.prefix} suffix={stat.suffix} animate={isVisible} />
                  </span>
                </div>

                {/* Bar */}
                <div className="relative h-2 rounded-full bg-[hsl(0_0%_100%/0.04)] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all ease-out"
                    style={{
                      width: isVisible ? `${stat.barWidth}%` : "0%",
                      transitionDuration: "1.6s",
                      transitionDelay: `${400 + i * 150}ms`,
                      background: `linear-gradient(90deg, hsl(${stat.color}), hsl(${stat.color} / 0.5))`,
                      boxShadow: `0 0 30px hsl(${stat.color} / 0.3), 0 0 8px hsl(${stat.color} / 0.5)`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
