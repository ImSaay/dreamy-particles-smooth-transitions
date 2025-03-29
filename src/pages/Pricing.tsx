
import DnaParticles from "@/components/DnaParticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const Pricing = () => {
  return (
    <div id="app">
      <DnaParticles />
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Escolha o Plano Ideal Para Você
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Proteja seu ar condicionado com nossos planos premium e tenha acesso a recursos exclusivos.
        </p>
      </div>
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Pricing;
