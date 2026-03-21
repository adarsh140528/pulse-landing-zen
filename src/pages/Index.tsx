import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductHighlights from "@/components/ProductHighlights";
import AthleteSection from "@/components/AthleteSection";
import FlavorsSection from "@/components/FlavorsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      {/* Divider */}
      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div id="highlights">
        <ProductHighlights />
      </div>

      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div id="athletes">
        <AthleteSection />
      </div>

      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div id="flavors">
        <FlavorsSection />
      </div>

      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div id="stats">
        <StatsSection />
      </div>

      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <CTASection />

      {/* Footer */}
      <footer className="border-t border-border/30 py-10">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <svg width="24" height="12" viewBox="0 0 28 14" fill="none" className="text-primary/60">
                <path d="M2 12C4 8 10 2 16 2C20 2 24 4 26 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="font-display font-bold text-sm uppercase tracking-wider text-foreground/30">
                Nike Pulse™ 2026
              </span>
            </div>
            <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Contact</span>
            </div>
            <span className="text-[10px] text-muted-foreground/40 uppercase tracking-wider">
              Fictional product — design concept only
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
