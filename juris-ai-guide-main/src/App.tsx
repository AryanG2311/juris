
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import ContractAnalyzer from "./pages/ContractAnalyzer";
import AILawyer from "./pages/AILawyer";
import SchemeRecommender from "./pages/SchemeRecommender";
import ContractComparisonPage from "./pages/contractComparisonPage";
const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Apply theme to body element
    if (theme === "dark") {
      document.body.classList.add("bg-black");
      document.body.classList.add("text-white");
    } else {
      document.body.classList.remove("bg-black");
      document.body.classList.remove("text-white");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleTheme}
            className="bg-juris-primary text-white p-3 rounded-full shadow-lg hover:bg-juris-accent transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/contract-analyzer" element={<ContractAnalyzer />} />
            <Route path="/ai-lawyer" element={<AILawyer />} />
            <Route path="/scheme-recommender" element={<SchemeRecommender />} />
            <Route path="/contract-comparison" element={<ContractComparisonPage />} />
            {/* ADD ALL CUSTOM ROUTES BELOW THE CATCH-ALL "*" ROUTE */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
