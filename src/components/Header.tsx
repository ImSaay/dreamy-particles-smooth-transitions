
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Sun, Moon, Globe, Menu, X } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("features"), path: "/features" },
    { name: t("pricing"), path: "/pricing" },
    { name: t("testimonials"), path: "/testimonials" },
    { name: t("contact"), path: "/contact" },
  ];

  const languages = [
    { code: "pt-BR", name: "Português" },
    { code: "en-US", name: "English" },
    { code: "es-ES", name: "Español" },
  ];

  return (
    <header className="py-4 px-6 md:px-10 relative z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent">
            Shadow AC
          </span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="p-2 rounded-md md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className="text-foreground hover:text-purple-light transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Toggle */}
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-muted flex items-center"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <Globe size={20} />
            </button>
            
            {isLangDropdownOpen && (
              <div className="lang-dropdown absolute right-0 mt-2 py-1 min-w-[120px] z-50">
                {languages.map((lang) => (
                  <div 
                    key={lang.code}
                    className={`lang-option ${language === lang.code ? 'text-purple-light' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsLangDropdownOpen(false);
                    }}
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Theme Toggle */}
          <button 
            className="p-2 rounded-full hover:bg-muted"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* CTA Button */}
          <Link to="/pricing" className="btn-premium">
            {t("get_started")}
          </Link>
        </div>
        
        {/* Mobile Navigation Drawer */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-card shadow-lg transform transition-all duration-300 ease-custom z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Shadow AC</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-5 mb-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className="text-foreground hover:text-purple-light transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto space-y-4">
              {/* Language Selector */}
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-muted-foreground">{t("language")}</span>
                <div className="flex space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`px-3 py-1 text-sm rounded ${
                        language === lang.code 
                          ? 'bg-purple text-white' 
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => setLanguage(lang.code as any)}
                    >
                      {lang.code.split('-')[0]}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{t("theme")}</span>
                <button 
                  className="p-2 rounded-full hover:bg-muted"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
              
              {/* Mobile CTA */}
              <Link 
                to="/pricing" 
                className="btn-premium w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("get_started")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
