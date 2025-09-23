import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import ServicesCTASection from "@/components/ServicesCTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ClientsSection />
      <ServicesSection />
      <TestimonialsSection />
      <SustainabilitySection />
      <AboutSection />
      <FAQSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
