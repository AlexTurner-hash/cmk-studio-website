import { Workflow, Map, Leaf, Lightbulb } from "lucide-react";
const WhyUsSection = () => {
  const reasons = [{
    icon: Workflow,
    title: "End-to-End Service",
    description: "Beratung, Produktion, Logistik in einem Prozess"
  }, {
    icon: Map,
    title: "Europäische Fertigung",
    description: "Qualität & Nähe statt lange Lieferketten"
  }, {
    icon: Leaf,
    title: "Nachhaltige Prozesse",
    description: "geprüfte Fabriken, faire Arbeitsbedingungen"
  }, {
    icon: Lightbulb,
    title: "Strategische Beratung",
    description: "von der Idee bis zur Serienproduktion"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Ihr Vorteil mit uns.
          </h2>
          
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {reasons.map((reason, index) => {
          const IconComponent = reason.icon;
          return <div key={index} className="group">
                {/* Icon */}
                <div className="flex justify-start mb-4">
                  <div className="w-12 h-12 bg-[hsl(var(--bronze))]/20 rounded-full flex items-center justify-center group-hover:bg-[hsl(var(--bronze))]/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[hsl(var(--bronze))] stroke-1" />
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