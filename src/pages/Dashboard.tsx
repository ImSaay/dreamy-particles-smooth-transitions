
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DnaParticles from "@/components/DnaParticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Shield, Lock, LogIn } from "lucide-react";

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate checking for Discord authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      // In a real app, you would check if the user is authenticated with Discord
      // For now, we'll simulate this with localStorage
      const storedUser = localStorage.getItem("discord_user");
      
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const handleDiscordLogin = () => {
    // In a real implementation, redirect to Discord OAuth
    window.location.href = "https://discord.gg/hEFkEPeNMH";
    
    // For demo purposes, we'll simulate a successful login
    const mockUser = {
      id: "123456789",
      username: "ShadowUser",
      avatar: "https://i.pravatar.cc/150?img=3",
      discriminator: "0001"
    };
    
    localStorage.setItem("discord_user", JSON.stringify(mockUser));
  };

  const handleLogout = () => {
    localStorage.removeItem("discord_user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <div id="app">
      <DnaParticles />
      <Header />
      <main className="py-12 px-6 min-h-[70vh]">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Dashboard
          </h1>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 rounded-full border-4 border-purple/30 border-t-purple-light animate-spin" />
            </div>
          ) : isAuthenticated && user ? (
            <div className="bg-card border border-border rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="relative">
                  <img 
                    src={user.avatar} 
                    alt={user.username}
                    className="w-24 h-24 rounded-full object-cover border-4 border-purple-light"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-card"></div>
                </div>
                
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-1">{user.username}#{user.discriminator}</h2>
                  <p className="text-muted-foreground">Shadow AC Premium Member</p>
                  
                  <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Shield size={16} />
                      Premium Active
                    </Button>
                    
                    <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-500/10">
                      <Lock size={16} />
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-card/50 border border-border rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-medium mb-2">AC Units</h3>
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-muted-foreground text-sm">Protected devices</p>
                </div>
                
                <div className="bg-card/50 border border-border rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-medium mb-2">Subscription</h3>
                  <p className="text-3xl font-bold text-purple-light">Premium</p>
                  <p className="text-muted-foreground text-sm">Active until: Jan 2024</p>
                </div>
                
                <div className="bg-card/50 border border-border rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-medium mb-2">Energy Saved</h3>
                  <p className="text-3xl font-bold">35%</p>
                  <p className="text-muted-foreground text-sm">Since installation</p>
                </div>
              </div>
              
              <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                <h3 className="text-xl font-medium mb-4">System Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Main AC Protection</span>
                    <span className="text-green-500 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bedroom AC Protection</span>
                    <span className="text-green-500 font-medium">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Office AC Protection</span>
                    <span className="text-yellow-500 font-medium">Maintenance</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="btn-premium">
                  Configure Settings
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 max-w-md mx-auto">
              <div className="w-20 h-20 bg-purple/10 rounded-full flex items-center justify-center mb-6">
                <LogIn className="text-purple-light" size={32} />
              </div>
              
              <h2 className="text-2xl font-bold mb-3">Discord Login Required</h2>
              <p className="text-muted-foreground text-center mb-8">
                Por favor, faça login com sua conta do Discord para acessar o painel de controle do Shadow AC Premium.
              </p>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button 
                    onClick={handleDiscordLogin}
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white py-4 px-8 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                    Entrar com Discord
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="text-sm">
                  Você será direcionado para autenticação via Discord
                </HoverCardContent>
              </HoverCard>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
