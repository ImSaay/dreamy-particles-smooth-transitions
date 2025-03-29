
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/50 backdrop-blur-sm py-10 px-6 md:px-10 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent mb-4">
              Shadow AC
            </span>
            <p className="text-muted-foreground mb-6">
              Proteção premium para o seu ar condicionado com tecnologia avançada e garantia de qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-purple-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-light transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t("home")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-purple-light transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-purple-light transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-purple-light transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-medium mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-purple-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-purple-light transition-colors">
                  Central de Suporte
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-purple-light transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-purple-light transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-purple-light transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-purple-light transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Shadow AC Premium. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-muted-foreground hover:text-purple-light text-sm">
              Termos
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-purple-light text-sm">
              Privacidade
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-purple-light text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
