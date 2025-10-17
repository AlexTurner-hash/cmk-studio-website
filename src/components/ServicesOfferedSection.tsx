import { CheckCircle } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const ServicesOfferedSection = () => {
  const { content, loading } = useContent();
  
  if (loading) return null;
  
  const servicesOffered = content.servicesOffered || {};
  const services = servicesOffered.items || [];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">{servicesOffered.title}</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">
            {servicesOffered.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service: string, index: number) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--bronze))] flex-shrink-0" />
                <span className="text-foreground font-body">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-accent">
            {servicesOffered.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferedSection;