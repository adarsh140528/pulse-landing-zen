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
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-[0_4px_30px_hsl(0_0%_0%/0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Swoosh-inspired mark */}
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" className="text-primary">
            <path d="M2 12C4 8 10 2 16 2C20 2 24 4 26 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-display font-bold text-xl uppercase tracking-wider">
            <span className="text-primary">Pulse</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs font-body font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#highlights" className="hover:text-primary transition-colors duration-300 relative group">
            Product
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#flavors" className="hover:text-primary transition-colors duration-300 relative group">
            Flavors
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#athletes" className="hover:text-primary transition-colors duration-300 relative group">
            Athletes
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#stats" className="hover:text-primary transition-colors duration-300 relative group">
            Performance
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <button className="px-6 py-2.5 bg-primary text-primary-foreground font-display font-bold text-xs uppercase tracking-[0.15em] rounded-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-[0_0_20px_hsl(82_100%_50%/0.25)]">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
