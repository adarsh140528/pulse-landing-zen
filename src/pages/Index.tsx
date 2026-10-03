import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductHighlights from "@/components/ProductHighlights";
import AthleteSection from "@/components/AthleteSection";
import FlavorsSection from "@/components/FlavorsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import CursorGlow from "@/components/CursorGlow";
import FloatingParticles from "@/components/FloatingParticles";
import MarqueeTicker from "@/components/MarqueeTicker";
import SocialProof from "@/components/SocialProof";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorGlow />
      <FloatingParticles />
      <Navbar />
      <HeroSection />

      {/* Marquee divider */}
      <MarqueeTicker />

      <div id="highlights">
        <ProductHighlights />
      </div>

      <SocialProof />

      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div id="athletes">
        <AthleteSection />
      </div>

      <MarqueeTicker />

      <div id="flavors">
        <FlavorsSection />
      </div>

      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div id="performance">
        <StatsSection />
      </div>

      <div className="container px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </div>

      <CTASection />

      {/* Footer */}
      <footer className="border-t border-[hsl(0_0%_100%/0.04)] py-10 sm:py-12 relative">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <svg width="24" height="12" viewBox="0 0 28 14" fill="none" className="text-primary/40">
                <path d="M2 12C4 8 10 2 16 2C20 2 24 4 26 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="font-display font-bold text-sm uppercase tracking-wider text-foreground/40">
                Nike Pulse™ 2026
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground/50">
              {["Privacy", "Terms", "Contact", "Press Kit"].map((item) => (
                <span key={item} className="hover:text-primary transition-colors cursor-pointer py-1">{item}</span>
              ))}
            </div>
            <span className="text-[9px] text-muted-foreground/30 uppercase tracking-[0.15em]">
              Fictional product — design concept only
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
