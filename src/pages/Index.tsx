import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ProductCategorySlider from "@/components/ProductCategorySlider";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import ServicesOfferedSection from "@/components/ServicesOfferedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import FAQSection from "@/components/FAQSection";
import FactoryImageSection from "@/components/FactoryImageSection";
import ContactSection from "@/components/ContactSection";
import InsightsPreviewSection from "@/components/InsightsPreviewSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CMK Studio",
    "description": "Premium-Textilproduktion aus Europa für Unternehmen, Creator und Consultancies",
    "url": "https://cmk.studio",
    "logo": "https://cmk.studio/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "DE"
    },
    "areaServed": ["Berlin", "Rhein-Main", "Europa"],
    "knowsAbout": ["Textilproduktion", "Modekollektion", "Nachhaltige Produktion", "Private Label"],
    "founder": {
      "@type": "Person",
      "name": "Claudia Kleinert"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>CMK Studio | Premium Textilproduktion in Europa - Berlin & Rhein-Main</title>
        <meta name="description" content="CMK Studio verbindet Beratung, Design, nachhaltige Produktion und Logistik in Europa. Hochwertige Textilproduktion für Marken, Creator und Unternehmen – von der ersten Idee bis zur fertigen Kollektion." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Navigation />
      <HeroSection />
      <IntroSection />
      <TestimonialsSection />
      <ServicesSection />
      <ProductCategorySlider />
      <ServicesOfferedSection />
      
      <FactoryImageSection />
      <SustainabilitySection />
      <FAQSection />
      <InsightsPreviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
