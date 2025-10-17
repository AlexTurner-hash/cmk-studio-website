import { ArrowLeftRight, Euro, Leaf, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyUsSection = () => {
  const { t } = useLanguage();
  const icons = [ArrowLeftRight, Euro, Leaf, Lightbulb];
  const reasons = (t('whyUs.reasons') as unknown as any[]).map((reason: any, idx: number) => ({
    ...reason,
    icon: icons[idx]
  }));
  return <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            {t('whyUs.title')}
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
                    <IconComponent className="w-6 h-6 text-[hsl(var(--bronze))] stroke-2" />
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