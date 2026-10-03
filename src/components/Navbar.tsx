import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Product", href: "#highlights" },
  { label: "Flavors", href: "#flavors" },
  { label: "Athletes", href: "#athletes" },
  { label: "Performance", href: "#performance" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "backdrop-blur-2xl bg-background/80 border-b border-[hsl(0_0%_100%/0.06)] shadow-[0_4px_40px_hsl(0_0%_0%/0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" className="text-primary transition-transform duration-300 group-hover:scale-110">
            <path d="M2 12C4 8 10 2 16 2C20 2 24 4 26 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-primary">
            Pulse
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[10px] lg:text-xs font-body font-medium uppercase tracking-[0.25em] text-muted-foreground">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="hover:text-primary transition-colors duration-300 relative group py-1"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Order Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="relative px-5 lg:px-6 py-2.5 bg-primary text-primary-foreground font-display font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] rounded-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-[0_0_25px_hsl(82_100%_50%/0.25)] overflow-hidden group">
            <span className="relative z-10">Order Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.1)] to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-foreground hover:text-primary transition-colors duration-200 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-background/95 backdrop-blur-2xl border-t border-[hsl(0_0%_100%/0.06)] flex flex-col justify-between p-6 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4 pt-4">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="flex items-center justify-between py-3 text-lg font-display font-semibold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors border-b border-[hsl(0_0%_100%/0.04)]"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <span>{item.label}</span>
              <span className="text-primary text-xs">→</span>
            </a>
          ))}
        </div>

        <div className="pt-6 pb-8 space-y-4">
          <button className="w-full py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.2em] rounded-xl shadow-[0_0_30px_hsl(82_100%_50%/0.3)] active:scale-98 transition-transform">
            Order Now
          </button>
          <p className="text-center text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
            Nike Pulse™ Energy Worldwide
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
