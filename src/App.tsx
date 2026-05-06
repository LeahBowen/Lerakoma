import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import WhoWeAre from "./pages/WhoWeAre.tsx";
import Insights from "./pages/Insights.tsx";
import InvestmentRiskManagement from "./pages/InvestmentRiskManagement.tsx";
import RiskPyramid from "./pages/RiskPyramid.tsx";
import SupportedLivingSSAS from "./pages/SupportedLivingSSAS.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Initiatives from "./pages/Initiatives.tsx";
import WhatIsSupportedLiving from "./pages/WhatIsSupportedLiving.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/insights/investment-risk-management" element={<InvestmentRiskManagement />} />
          <Route path="/insights/the-risk-pyramid" element={<RiskPyramid />} />
          <Route path="/insights/supported-living-ssas" element={<SupportedLivingSSAS />} />
          <Route path="/insights/what-is-supported-living" element={<WhatIsSupportedLiving />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
