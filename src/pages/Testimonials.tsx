
import DnaParticles from "@/components/DnaParticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";

const Testimonials = () => {
  return (
    <div id="app">
      <DnaParticles />
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          O Que Nossos Clientes Estão Dizendo
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Descubra por que tantas pessoas confiam no Shadow AC Premium para proteger seus equipamentos.
        </p>
      </div>
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Testimonials;
