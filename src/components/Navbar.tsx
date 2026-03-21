import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/70 border-b border-[hsl(0_0%_100%/0.06)] shadow-[0_4px_40px_hsl(0_0%_0%/0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" className="text-primary">
            <path d="M2 12C4 8 10 2 16 2C20 2 24 4 26 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-display font-bold text-xl uppercase tracking-wider text-primary">
            Pulse
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-body font-medium uppercase tracking-[0.25em] text-muted-foreground">
          {["Product", "Flavors", "Athletes", "Performance"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-300 relative group py-1"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="relative px-6 py-2.5 bg-primary text-primary-foreground font-display font-bold text-[10px] uppercase tracking-[0.2em] rounded-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-[0_0_25px_hsl(82_100%_50%/0.25)] overflow-hidden group">
          <span className="relative z-10">Order Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.1)] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
