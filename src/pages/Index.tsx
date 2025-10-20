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
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
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
