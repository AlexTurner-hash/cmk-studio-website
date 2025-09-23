import { CheckCircle } from "lucide-react";

const ServicesOfferedSection = () => {
  const services = [
    "Farb- und Materialkonzepte",
    "Design & Grafik",
    "Logoentwicklung",
    "Schnitt & Vermassung",
    "Prototypenentwicklung",
    "Passformberatung",
    "Produktionsüberwachung & Qualitätskontrolle",
    "Effiziente SKU-Planung",
    "Strategisches Pricing",
    "Logistik & Versand"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">Alles, was eine Kollektion braucht.</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">
            Wir bieten nicht nur Produktion, sondern eine vollständige Wertschöpfungskette – vom ersten Entwurf bis zum Versand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--cream-tan-hover))] flex-shrink-0" />
                <span className="text-foreground font-body">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-accent">
            Jetzt anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesOfferedSection;