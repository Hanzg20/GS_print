import HeroSection from "@/components/print/hero-section";
import ServicesGrid from "@/components/print/services-grid";
import PortfolioShowcase from "@/components/print/portfolio-showcase";
import QuickContactCTA from "@/components/print/quick-contact-cta";

export default function PrintHomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesGrid />
      <PortfolioShowcase />
      <QuickContactCTA />
    </div>
  );
}
