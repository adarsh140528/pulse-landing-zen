import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductHighlights from "@/components/ProductHighlights";
import AthleteSection from "@/components/AthleteSection";
import FlavorsSection from "@/components/FlavorsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div id="highlights">
        <ProductHighlights />
      </div>
      <div id="athletes">
        <AthleteSection />
      </div>
      <div id="flavors">
        <FlavorsSection />
      </div>
      <StatsSection />
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display font-bold uppercase tracking-wider text-foreground/40">
            Nike Pulse™ 2026
          </span>
          <span>Fictional product — design concept only.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
