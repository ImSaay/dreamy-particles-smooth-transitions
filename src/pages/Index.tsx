
import DnaParticles from "@/components/DnaParticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ReviewSection from "@/components/ReviewSection";

const Index = () => {
  return (
    <div id="app">
      <DnaParticles />
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
