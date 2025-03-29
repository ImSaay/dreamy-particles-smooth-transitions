
import { createContext, useContext, useEffect, useState } from "react";

type Language = "pt-BR" | "en-US" | "es-ES";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Simple translations
const translations: Record<Language, Record<string, string>> = {
  "pt-BR": {
    "home": "Início",
    "features": "Funcionalidades",
    "pricing": "Preços",
    "testimonials": "Depoimentos",
    "contact": "Contato",
    "hero_title": "Proteção Premium para Seu Ar Condicionado",
    "hero_subtitle": "Solução avançada que protege seu equipamento contra danos e otimiza seu desempenho",
    "learn_more": "Saiba mais",
    "get_started": "Começar agora",
    "basic_plan": "Básico",
    "standard_plan": "Padrão",
    "premium_plan": "Premium",
    "per_month": "/mês",
    "select_plan": "Selecionar",
    "essential_protection": "Proteção essencial",
    "standard_support": "Suporte padrão",
    "advanced_protection": "Proteção avançada",
    "priority_support": "Suporte prioritário",
    "full_protection": "Proteção completa",
    "24h_support": "Suporte 24h",
    "extended_warranty": "Garantia estendida",
    "checkout": "Finalizar Compra",
    "theme": "Tema",
    "language": "Idioma",
    "dashboard": "Painel de Controle",
    "login_required": "Login Necessário",
    "login_with_discord": "Entrar com Discord",
    "discord_login_info": "Por favor, faça login com sua conta do Discord para acessar o painel de controle."
  },
  "en-US": {
    "home": "Home",
    "features": "Features",
    "pricing": "Pricing",
    "testimonials": "Testimonials",
    "contact": "Contact",
    "hero_title": "Premium Protection for Your AC",
    "hero_subtitle": "Advanced solution that protects your equipment from damage and optimizes its performance",
    "learn_more": "Learn more",
    "get_started": "Get started",
    "basic_plan": "Basic",
    "standard_plan": "Standard",
    "premium_plan": "Premium",
    "per_month": "/month",
    "select_plan": "Select",
    "essential_protection": "Essential protection",
    "standard_support": "Standard support",
    "advanced_protection": "Advanced protection",
    "priority_support": "Priority support",
    "full_protection": "Full protection",
    "24h_support": "24h support",
    "extended_warranty": "Extended warranty",
    "checkout": "Checkout",
    "theme": "Theme",
    "language": "Language",
    "dashboard": "Dashboard",
    "login_required": "Login Required",
    "login_with_discord": "Login with Discord",
    "discord_login_info": "Please login with your Discord account to access the control panel."
  },
  "es-ES": {
    "home": "Inicio",
    "features": "Características",
    "pricing": "Precios",
    "testimonials": "Testimonios",
    "contact": "Contacto",
    "hero_title": "Protección Premium para Su AC",
    "hero_subtitle": "Solución avanzada que protege su equipo contra daños y optimiza su rendimiento",
    "learn_more": "Aprender más",
    "get_started": "Comenzar",
    "basic_plan": "Básico",
    "standard_plan": "Estándar",
    "premium_plan": "Premium",
    "per_month": "/mes",
    "select_plan": "Seleccionar",
    "essential_protection": "Protección esencial",
    "standard_support": "Soporte estándar",
    "advanced_protection": "Protección avanzada",
    "priority_support": "Soporte prioritario",
    "full_protection": "Protección completa",
    "24h_support": "Soporte 24h",
    "extended_warranty": "Garantía extendida",
    "checkout": "Finalizar Compra",
    "theme": "Tema",
    "language": "Idioma",
    "dashboard": "Panel de Control",
    "login_required": "Inicio de Sesión Requerido",
    "login_with_discord": "Iniciar con Discord",
    "discord_login_info": "Por favor, inicie sesión con su cuenta de Discord para acceder al panel de control."
  }
};

const initialState: LanguageProviderState = {
  language: "pt-BR",
  setLanguage: () => null,
  t: (key) => key,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "pt-BR",
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageProviderContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);
  
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  
  return context;
};
