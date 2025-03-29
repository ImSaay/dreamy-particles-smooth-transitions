
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageTransition component adds transition effects when navigating between pages
 */
const PageTransition = () => {
  const location = useLocation();

  useEffect(() => {
    // Apply fade-in effect to the main app container when route changes
    const appContainer = document.getElementById("app");
    
    if (appContainer) {
      // Add fade-in class to initiate animation
      appContainer.classList.add("animate-fade-in");
      
      // Remove the class after animation completes
      const timeout = setTimeout(() => {
        appContainer.classList.remove("animate-fade-in");
      }, 400); // Match the duration in the CSS
      
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  // Intercept link clicks for smooth transitions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      // Only handle internal links that use react-router
      if (
        link && 
        link.href && 
        link.href.includes(window.location.origin) &&
        !link.target &&
        !link.getAttribute("download") &&
        !link.getAttribute("rel")?.includes("external") &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        const appContainer = document.getElementById("app");
        
        if (appContainer && link.pathname !== location.pathname) {
          e.preventDefault();
          
          // Add fade-out effect
          appContainer.classList.add("animate-fade-out");
          
          // Navigate after animation completes
          setTimeout(() => {
            window.location.href = link.href;
          }, 400); // Match the duration in the CSS
        }
      }
    };
    
    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [location.pathname]);

  return null; // This is a behavior component with no UI
};

export default PageTransition;
