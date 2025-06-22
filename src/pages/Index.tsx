
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechSection from "@/components/TechSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <TechSection />
      <Footer />
    </div>
  );
};

export default Index;
