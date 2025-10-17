import { Award, Leaf, MapPin } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: MapPin,
      title: "MADE IN EU",
      description: "Alle unsere Textilien werden ausschließlich in europäischen Produktionsstätten gefertigt. Höchste Qualitätsstandards und faire Arbeitsbedingungen sind garantiert."
    },
    {
      icon: Leaf,
      title: "NACHHALTIGKEIT FIRST",
      description: "Umweltschutz steht bei uns an erster Stelle. Von der Materialauswahl bis zur Produktion achten wir auf minimale Umweltbelastung und ressourcenschonende Verfahren."
    },
    {
      icon: Award,
      title: "ÖKO-ZERTIFIZIERT",
      description: "Unsere Textilien erfüllen strenge Öko-Standards wie GOTS und Grüner Knopf. Zertifizierte Bio-Materialien und schadstofffreie Produktion für Ihre Sicherheit."
    }
  ];

  return (
    <section id="values" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <IconComponent 
                    size={48} 
                    className="text-accent group-hover:text-warm-fuchsia transition-colors duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-clay text-sm tracking-wider font-body">
                  {value.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;