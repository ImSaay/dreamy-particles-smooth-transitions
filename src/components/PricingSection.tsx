
import { useState } from "react";
import { Check, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useToast } from "@/hooks/use-toast";

const PricingSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const plans = [
    {
      id: "basic",
      name: t("basic_plan"),
      price: 29.90,
      features: [
        { name: t("essential_protection"), included: true },
        { name: t("standard_support"), included: true },
        { name: t("advanced_protection"), included: false },
        { name: t("priority_support"), included: false },
        { name: t("extended_warranty"), included: false },
      ],
      popular: false,
    },
    {
      id: "standard",
      name: t("standard_plan"),
      price: 59.90,
      features: [
        { name: t("essential_protection"), included: true },
        { name: t("standard_support"), included: true },
        { name: t("advanced_protection"), included: true },
        { name: t("priority_support"), included: true },
        { name: t("extended_warranty"), included: false },
      ],
      popular: true,
    },
    {
      id: "premium",
      name: t("premium_plan"),
      price: 99.90,
      features: [
        { name: t("essential_protection"), included: true },
        { name: t("standard_support"), included: true },
        { name: t("advanced_protection"), included: true },
        { name: t("priority_support"), included: true },
        { name: t("extended_warranty"), included: true },
      ],
      popular: false,
    },
  ];
  
  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setIsCheckoutOpen(true);
  };
  
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setSelectedPlan(null);
  };
  
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setIsCheckoutOpen(false);
      
      toast({
        title: "Pagamento realizado com sucesso",
        description: "Você receberá um e-mail com os detalhes da sua compra.",
      });
    }, 2000);
  };
  
  return (
    <section id="pricing" className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t("pricing")}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Escolha o plano ideal para sua necessidade e proteja seu ar condicionado
        </p>
        
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan-card ${
                plan.popular ? 'border-purple ring-2 ring-purple/20' : ''
              }`}
              data-plan={plan.id}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple text-white text-xs font-bold py-1 px-3 rounded-full">
                  Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="price">
                R${plan.price.toFixed(2)}
                <span>{t("per_month")}</span>
              </div>
              
              <ul className="my-6 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.included ? (
                      <Check className="text-green-500 mr-2" size={16} />
                    ) : (
                      <X className="text-red-500 mr-2" size={16} />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full ${plan.popular ? 'btn-premium animate-pulse-glow' : 'btn-premium opacity-90 hover:opacity-100'}`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {t("select_plan")}
              </button>
            </div>
          ))}
        </div>
        
        {/* Checkout Modal */}
        <div className={`checkout-modal ${isCheckoutOpen ? 'active' : ''}`}>
          <div className="checkout-content max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">{t("checkout")}</h3>
              <button 
                className="text-muted-foreground hover:text-foreground"
                onClick={handleCloseCheckout}
              >
                <X size={20} />
              </button>
            </div>
            
            {selectedPlan && (
              <div className="mb-6">
                <div className="bg-card/50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Plano:</span>
                    <span className="font-medium">
                      {plans.find(p => p.id === selectedPlan)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Preço:</span>
                    <span className="font-medium">
                      R$ {plans.find(p => p.id === selectedPlan)?.price.toFixed(2)}
                      {t("per_month")}
                    </span>
                  </div>
                </div>
                
                <form onSubmit={handleCheckout}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-lg bg-background border border-border focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="card" className="block text-sm font-medium mb-1">
                      Cartão de crédito
                    </label>
                    <div className="bg-background border border-border rounded-lg p-3 focus-within:border-purple focus-within:ring-1 focus-within:ring-purple transition-all">
                      <div className="flex mb-3">
                        <input
                          type="text"
                          id="card"
                          className="flex-1 bg-transparent outline-none"
                          placeholder="0000 0000 0000 0000"
                          required
                        />
                        <div className="flex space-x-1">
                          <span className="text-muted-foreground">Visa</span>
                          <span className="text-muted-foreground">Mastercard</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <input
                          type="text"
                          className="w-24 bg-transparent outline-none"
                          placeholder="MM/AA"
                          required
                        />
                        <input
                          type="text"
                          className="w-16 bg-transparent outline-none"
                          placeholder="CVC"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-premium w-full flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2" />
                    ) : null}
                    {isLoading ? 'Processando...' : 'Finalizar pagamento'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
