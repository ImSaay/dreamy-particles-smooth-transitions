
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { ArrowRight, ShieldCheck, Zap, BarChart4 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useLanguage();
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="pt-10 pb-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 dark:from-white dark:to-white/60 bg-clip-text text-transparent">
              {t("hero_title")}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t("hero_subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/pricing" 
                className="btn-premium flex items-center justify-center gap-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {t("get_started")}
                <ArrowRight 
                  size={18} 
                  className={`transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`}
                />
              </Link>
              
              <Link 
                to="/features" 
                className="px-6 py-3 rounded-lg border border-border hover:border-purple-light/50 text-foreground hover:text-purple-light transition-all duration-300 flex items-center justify-center"
              >
                {t("learn_more")}
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="text-purple-light" size={24} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Proteção Avançada
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <Zap className="text-purple-light" size={24} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Baixo Consumo
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple/10 rounded-full flex items-center justify-center mb-3">
                  <BarChart4 className="text-purple-light" size={24} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Monitoramento
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-purple-light/20 to-purple-dark/20 rounded-3xl overflow-hidden flex items-center justify-center animate-float">
              <div className="relative w-3/4 aspect-video">
                <img 
                  src="https://i.imgur.com/eWnrGQv.png" 
                  alt="Shadow AC Device" 
                  className="object-contain w-full h-full"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-light/20 rounded-full blur-xl" />
                <div className="absolute -bottom-12 -right-10 w-24 h-24 bg-purple/20 rounded-full blur-xl" />
                <div className="absolute top-1/4 right-0 w-10 h-10 bg-purple-light/30 rounded-full blur-md" />
              </div>
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg w-40 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="text-xs text-muted-foreground mb-1">
                Economia de energia
              </div>
              <div className="text-xl font-bold">
                35%
              </div>
              <div className="w-full h-2 bg-secondary rounded-full mt-2 overflow-hidden">
                <div className="h-full w-[35%] bg-gradient-to-r from-purple-light to-purple" />
              </div>
            </div>
            
            {/* Protection card */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg animate-float" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-purple-light" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Proteção
                  </div>
                  <div className="font-medium">
                    Ativa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
