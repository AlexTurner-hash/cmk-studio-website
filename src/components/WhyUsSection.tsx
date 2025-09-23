import { Award, MapPin, Leaf, Target } from "lucide-react";
const WhyUsSection = () => {
  const reasons = [{
    icon: Target,
    title: "Expertenberatung und strategische Planung",
    description: "Umfassende Beratung von der Konzeption bis zur Umsetzung Ihrer Textilprojekte"
  }, {
    icon: MapPin,
    title: "Europäische Produktionsstätten",
    description: "Höchste Qualitätsstandards durch moderne Fertigungsstätten in Europa"
  }, {
    icon: Leaf,
    title: "Nachhaltige und ethische Produktion",
    description: "Umweltfreundliche Materialien und faire Arbeitsbedingungen stehen im Mittelpunkt"
  }, {
    icon: Award,
    title: "End-to-End Service",
    description: "Komplette Projektbetreuung von der ersten Idee bis zum fertigen Produkt"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Warum CMK.Studio?
          </h2>
          
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return <div key={index} className="group">
                {/* Icon */}
                <div className="flex justify-start mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground font-display">
                  {reason.title}
                </h3>
                <p className="text-clay/70 leading-relaxed font-body">
                  {reason.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default WhyUsSection;