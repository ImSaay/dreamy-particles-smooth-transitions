
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import DnaParticles from "@/components/DnaParticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div id="app">
      <DnaParticles />
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops! Esta página não foi encontrada
        </p>
        <Link 
          to="/" 
          className="btn-premium"
        >
          Voltar para o início
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
