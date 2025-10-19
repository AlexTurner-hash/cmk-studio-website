import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import portfolioSchuerze from "@/assets/portfolio-schuerze.png";
import portfolioHemdGruen from "@/assets/portfolio-hemd-gruen.png";
import portfolioChino from "@/assets/portfolio-chino.png";
import portfolioPulloverLila from "@/assets/portfolio-pullover-lila.png";
import portfolioCardiganBunt from "@/assets/portfolio-cardigan-bunt.png";
import portfolioDenimJacket from "@/assets/portfolio-denim-jacket.png";
import portfolioDenimPants from "@/assets/portfolio-denim-pants.png";
import portfolioLeatherJacket from "@/assets/portfolio-leather-jacket.png";
import portfolioZipHoodie from "@/assets/portfolio-zip-hoodie.png";
import portfolioBlazerKhaki from "@/assets/portfolio-blazer-khaki.png";
import portfolioTurtleneckGreen from "@/assets/portfolio-turtleneck-green.png";

const ServicesSection = () => {
  const { t } = useLanguage();
  const serviceCategories = (t('servicesSection.categories') as unknown as any[]);

  const portfolioImages = [
    portfolioSchuerze,
    portfolioHemdGruen,
    portfolioChino,
    portfolioPulloverLila,
    portfolioCardiganBunt,
    portfolioDenimJacket,
    portfolioDenimPants,
    portfolioLeatherJacket,
    portfolioZipHoodie,
    portfolioBlazerKhaki,
    portfolioTurtleneckGreen
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

        {/* Portfolio Carousel */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground font-display mb-6">100% individuelle Produktion</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">Von Knitwear, Denim und Basics bis zu High Fashion und Accessoires. Wir produzieren frei nach ihren Wünschen. Und beraten.</p>
        </div>
        <div className="mb-16 px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: Math.ceil(portfolioImages.length / 3) }).map((_, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="grid grid-cols-3 gap-4">
                    {portfolioImages.slice(slideIndex * 3, slideIndex * 3 + 3).map((image, index) => (
                      <div key={index} className="relative overflow-hidden group aspect-[3/4] flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`Portfolio image ${slideIndex * 3 + index + 1}`} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;