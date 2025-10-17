import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Glossar from "./pages/Glossar";
import Insights from "./pages/Insights";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load insight pages
const ErsteModekollektion = lazy(() => import("./pages/insights/ErsteModekollektion"));
const NachhaltigeTextilproduktion = lazy(() => import("./pages/insights/NachhaltigeTextilproduktion"));
const PrivateLabelBekleidung = lazy(() => import("./pages/insights/PrivateLabelBekleidung"));
const QualitaetNachhaltigkeit = lazy(() => import("./pages/insights/QualitaetNachhaltigkeit"));
const LingerieExpertise = lazy(() => import("./pages/insights/LingerieExpertise"));
const SpezialisierungExpertise = lazy(() => import("./pages/insights/SpezialisierungExpertise"));
const ClaudiaKleinert = lazy(() => import("./pages/insights/ClaudiaKleinert"));
const WorkwearEmployerBranding = lazy(() => import("./pages/insights/WorkwearEmployerBranding"));
const LuxuryHospitalityCollections = lazy(() => import("./pages/insights/LuxuryHospitalityCollections"));
const CreatorsInfluencersFashion = lazy(() => import("./pages/insights/CreatorsInfluencersFashion"));
const KostenTransparenz = lazy(() => import("./pages/insights/KostenTransparenz"));
const Zertifizierungen = lazy(() => import("./pages/insights/Zertifizierungen"));
const DueDiligence = lazy(() => import("./pages/insights/DueDiligence"));
const TechZuFashion = lazy(() => import("./pages/insights/TechZuFashion"));
const Produktionszeiten = lazy(() => import("./pages/insights/Produktionszeiten"));

// Lazy load product category pages
const Streetwear = lazy(() => import("./pages/produktkategorien/Streetwear"));
const Denim = lazy(() => import("./pages/produktkategorien/Denim"));
const Lingerie = lazy(() => import("./pages/produktkategorien/Lingerie"));
const Swimwear = lazy(() => import("./pages/produktkategorien/Swimwear"));
const Knitwear = lazy(() => import("./pages/produktkategorien/Knitwear"));
const Leather = lazy(() => import("./pages/produktkategorien/Leather"));
const Accessories = lazy(() => import("./pages/produktkategorien/Accessories"));
const Workwear = lazy(() => import("./pages/produktkategorien/Workwear"));
const SpaLeisure = lazy(() => import("./pages/produktkategorien/SpaLeisure"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Lädt...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
