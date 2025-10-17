import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import portfolioTurtleneck from "@/assets/portfolio-turtleneck.png";
import portfolioBlazer from "@/assets/portfolio-blazer.png";
import portfolioPullover from "@/assets/portfolio-pullover.png";
import portfolioCardigan from "@/assets/portfolio-cardigan.png";
import portfolioHose from "@/assets/portfolio-hose.png";
import portfolioHemd from "@/assets/portfolio-hemd.png";
import portfolioSchuerze from "@/assets/portfolio-schuerze.png";
import portfolioPuffer from "@/assets/portfolio-puffer.png";
import portfolioHoodie from "@/assets/portfolio-hoodie.png";
import portfolioBasecap from "@/assets/portfolio-basecap.png";
import portfolioMuetze from "@/assets/portfolio-muetze.png";
import portfolioSweater from "@/assets/portfolio-sweater.png";

const ServicesSection = () => {
  const { t } = useLanguage();
  const serviceCategories = (t('servicesSection.categories') as unknown as any[]);

  const portfolioImages = [
    portfolioTurtleneck,
    portfolioBlazer,
    portfolioPullover,
    portfolioCardigan,
    portfolioHose,
    portfolioHemd,
    portfolioSchuerze,
    portfolioPuffer,
    portfolioHoodie,
    portfolioBasecap,
    portfolioMuetze,
    portfolioSweater
  ];

  return (
    <section id="services" className="pb-8 md:pb-12 lg:pb-16 pt-4 md:pt-6 lg:pt-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">{t('servicesSection.title')}</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">{t('servicesSection.subtitle')}</p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {serviceCategories.map((category: any, idx: number) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl md:text-2xl font-display leading-tight text-[hsl(var(--bronze))] mb-8 text-left font-semibold px-[16px] lg:text-2xl tracking-wide">{category.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item: any, itemIdx: number) => (
                  <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`} className="border-clay/20">
                    <AccordionTrigger className="text-left text-base md:text-lg font-body leading-relaxed font-normal text-foreground hover:text-[hsl(var(--bronze))] transition-colors hover:no-underline data-[state=open]:bg-[hsl(var(--bronze))] data-[state=open]:text-white px-4 py-3">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-[hsl(var(--bronze))] text-white leading-relaxed font-body pt-2 pb-4 px-4 text-left">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <a href="#contact" className="btn-accent">
            Jetzt anfragen
          </a>
        </div>

        {/* Portfolio Mosaic */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground font-display mb-6">100% individuelle Produktion</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">Von Knitwear, Denim und Basics bis zu High Fashion und Accessoires. Wir produzieren frei nach ihren Wünschen. Und beraten.</p>
        </div>
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-gradient-to-b from-gray-50 to-white">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden group aspect-square flex items-center justify-center p-8">
                <img 
                  src={image} 
                  alt={`Portfolio image ${index + 1}`} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;