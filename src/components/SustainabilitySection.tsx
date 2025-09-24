import oekoTexLogo from "@/assets/oeko-tex-logo.png";
import gotsLogo from "@/assets/gots-logo.png";
import rwsLogo from "@/assets/rws-logo.png";
import bsciLogo from "@/assets/bsci-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SustainabilitySection = () => {
  const certifications = [
    {
      logo: oekoTexLogo,
      name: "OEKO-TEX Standard 100"
    },
    {
      logo: gotsLogo,
      name: "GOTS"
    },
    {
      logo: rwsLogo,
      name: "Responsible Wool"
    },
    {
      logo: bsciLogo,
      name: "BSCI"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Nachhaltigkeit nach europäischen Standards
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-muted-foreground font-body leading-relaxed">
            <p>
              90% unserer Produktionsstätten befinden sich in Europa. Wir setzen auf Materialrecycling, zertifizierte Nachhaltigkeit und langlebige Qualität. Transportwege werden optimiert, um CO2-Emissionen zu minimieren.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center justify-center group">
                <img 
                  src={cert.logo}
                  alt={`${cert.name} Zertifizierung Logo`}
                  className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300 mb-2"
                />
                <span className="text-sm text-muted-foreground font-body">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white" asChild>
            <Link to="/nachhaltigkeit">
              Mehr zum Thema
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;