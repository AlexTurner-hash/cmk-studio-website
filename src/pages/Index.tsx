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
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import InsightsPreviewSection from "@/components/InsightsPreviewSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductCategorySlider />
      <ServicesSection />
      <ServicesOfferedSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <InsightsPreviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
