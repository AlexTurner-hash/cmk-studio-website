import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import Impressum from "./pages/Impressum";
import Insights from "./pages/Insights";
import ErsteModekollektion from "./pages/insights/ErsteModekollektion";
import NachhaltigeTextilproduktion from "./pages/insights/NachhaltigeTextilproduktion";
import PrivateLabelBekleidung from "./pages/insights/PrivateLabelBekleidung";
import MicroProduktion from "./pages/insights/MicroProduktion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/erste-modekollektion-planen" element={<ErsteModekollektion />} />
          <Route path="/insights/nachhaltige-textilproduktion-europa" element={<NachhaltigeTextilproduktion />} />
          <Route path="/insights/private-label-bekleidung-eigenmarken" element={<PrivateLabelBekleidung />} />
          <Route path="/insights/micro-produktion-modebranche" element={<MicroProduktion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
