import oekoTexLogo from "@/assets/oeko-tex-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SustainabilitySection = () => {
  const certifications = [
    {
      logo: oekoTexLogo,
      name: "OEKO-TEX Standard 100"
    },
    {
      logo: oekoTexLogo, // Placeholder - will be replaced with actual GOTS logo
      name: "GOTS"
    },
    {
      logo: oekoTexLogo, // Placeholder - will be replaced with actual Responsible Wool logo  
      name: "Responsible Wool"
    },
    {
      logo: oekoTexLogo, // Placeholder - will be replaced with actual BSCI logo
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
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
            <p>
              Nachhaltigkeit spielt bei uns in allen Abläufen eine große Rolle. Wichtig ist uns dabei, dass wir das Thema vor allem auch nach Ihren Wünschen umsetzen. Durch die Wiederverwendung von Materialien und die Herstellung von recycelten Textilien kann der Bedarf an neuen Ressourcen reduziert werden, was die Umweltauswirkungen verringert.
            </p>
            
            <p>
              Wir versuchen Transporte so zu organisieren, dass sie möglichst wenig CO2 Emissionen verursachen: Über 90% unserer Produktionsstätten befinden sich in Europa, was uns ermöglicht bei der Lieferung fertiger Ware auf Flugzeugtransporte zu verzichten.
            </p>
            
            <p>
              Besonders am Herzen liegt uns die Langlebigkeit der Kleidungsstücke, die wir produzieren – je länger Kleidungsstücke getragen werden, umso weniger oft müssen sie ersetzt werden. Eine hochwertige Materialauswahl und Verarbeitung sowie eine strenge Qualitätssicherung bilden die Grundlage für die Langlebigkeit unserer Textilien.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground font-display">
            Zertifizierte Nachhaltigkeit
          </h3>
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
              Mehr über unsere Nachhaltigkeit erfahren
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;