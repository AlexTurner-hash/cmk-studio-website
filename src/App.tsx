import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import Impressum from "./pages/Impressum";
import Glossar from "./pages/Glossar";
import Insights from "./pages/Insights";
import ErsteModekollektion from "./pages/insights/ErsteModekollektion";
import NachhaltigeTextilproduktion from "./pages/insights/NachhaltigeTextilproduktion";
import PrivateLabelBekleidung from "./pages/insights/PrivateLabelBekleidung";
import QualitaetNachhaltigkeit from "./pages/insights/QualitaetNachhaltigkeit";
import LingerieExpertise from "./pages/insights/LingerieExpertise";
import SpezialisierungExpertise from "./pages/insights/SpezialisierungExpertise";
import ClaudiaKleinert from "./pages/insights/ClaudiaKleinert";
import WorkwearEmployerBranding from "./pages/insights/WorkwearEmployerBranding";
import LuxuryHospitalityCollections from "./pages/insights/LuxuryHospitalityCollections";
import CreatorsInfluencersFashion from "./pages/insights/CreatorsInfluencersFashion";
import KostenTransparenz from "./pages/insights/KostenTransparenz";
import Zertifizierungen from "./pages/insights/Zertifizierungen";
import DueDiligence from "./pages/insights/DueDiligence";
import TechZuFashion from "./pages/insights/TechZuFashion";
import Produktionszeiten from "./pages/insights/Produktionszeiten";
import Streetwear from "./pages/produktkategorien/Streetwear";
import Denim from "./pages/produktkategorien/Denim";
import Lingerie from "./pages/produktkategorien/Lingerie";
import Swimwear from "./pages/produktkategorien/Swimwear";
import Knitwear from "./pages/produktkategorien/Knitwear";
import Leather from "./pages/produktkategorien/Leather";
import Accessories from "./pages/produktkategorien/Accessories";
import Workwear from "./pages/produktkategorien/Workwear";
import SpaLeisure from "./pages/produktkategorien/SpaLeisure";
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
          <Route path="/glossar" element={<Glossar />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/erste-modekollektion-planen" element={<ErsteModekollektion />} />
          <Route path="/insights/nachhaltige-textilproduktion-europa" element={<NachhaltigeTextilproduktion />} />
          <Route path="/insights/private-label-bekleidung-eigenmarken" element={<PrivateLabelBekleidung />} />
          <Route path="/insights/qualitaet-nachhaltigkeit" element={<QualitaetNachhaltigkeit />} />
          <Route path="/insights/lingerie-expertise" element={<LingerieExpertise />} />
          <Route path="/insights/spezialisierung-expertise" element={<SpezialisierungExpertise />} />
          <Route path="/insights/workwear-employer-branding" element={<WorkwearEmployerBranding />} />
          <Route path="/insights/luxury-hospitality-collections" element={<LuxuryHospitalityCollections />} />
          <Route path="/insights/claudia-kleinert" element={<ClaudiaKleinert />} />
          <Route path="/insights/creators-influencers-fashion-produktion" element={<CreatorsInfluencersFashion />} />
          <Route path="/insights/kosten-transparenz-modeproduktion" element={<KostenTransparenz />} />
          <Route path="/insights/zertifizierungen-vergleich" element={<Zertifizierungen />} />
          <Route path="/insights/due-diligence-lieferketten" element={<DueDiligence />} />
          <Route path="/insights/tech-startup-merchandise" element={<TechZuFashion />} />
          <Route path="/insights/produktionszeiten-timeline" element={<Produktionszeiten />} />
          <Route path="/produktkategorien/streetwear" element={<Streetwear />} />
          <Route path="/produktkategorien/denim" element={<Denim />} />
          <Route path="/produktkategorien/lingerie" element={<Lingerie />} />
          <Route path="/produktkategorien/swimwear" element={<Swimwear />} />
          <Route path="/produktkategorien/knitwear" element={<Knitwear />} />
          <Route path="/produktkategorien/leather" element={<Leather />} />
          <Route path="/produktkategorien/accessories" element={<Accessories />} />
          <Route path="/produktkategorien/workwear" element={<Workwear />} />
          <Route path="/produktkategorien/spa-leisure" element={<SpaLeisure />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
