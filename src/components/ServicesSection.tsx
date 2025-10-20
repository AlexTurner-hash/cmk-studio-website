import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import portfolioSlide1 from "@/assets/portfolio-slide-1.png";
import portfolioSlide2 from "@/assets/portfolio-slide-2.png";
import portfolioSlide3 from "@/assets/portfolio-slide-3.png";
import portfolioSlide4 from "@/assets/portfolio-slide-4.png";
const ServicesSection = () => {
  const {
    t
  } = useLanguage();
  const serviceCategories = t('servicesSection.categories') as unknown as any[];
  const portfolioImages = [portfolioSlide1, portfolioSlide2, portfolioSlide3, portfolioSlide4];
  return <section id="services" className="pb-8 md:pb-12 lg:pb-16 pt-4 md:pt-6 lg:pt-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">{t('servicesSection.title')}</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">{t('servicesSection.subtitle')}</p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {serviceCategories.map((category: any, idx: number) => <div key={idx} className="text-center">
              <h3 className="text-xl md:text-2xl font-display leading-tight text-[hsl(var(--bronze))] mb-8 text-left font-semibold px-[16px] lg:text-2xl tracking-wide">{category.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item: any, itemIdx: number) => <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`} className="border-clay/20">
                    <AccordionTrigger className="text-left text-base md:text-lg font-body leading-relaxed font-normal text-foreground hover:text-[hsl(var(--bronze))] transition-colors hover:no-underline data-[state=open]:bg-[hsl(var(--bronze))] data-[state=open]:text-white px-4 py-3">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-[hsl(var(--bronze))] text-white leading-relaxed font-body pt-2 pb-4 px-4 text-left">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>)}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <a href="#contact" className="btn-accent">
            Jetzt anfragen
          </a>
        </div>

        {/* Portfolio Carousel */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-light text-foreground font-display mb-4">100% individuelle Produktion</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">Von Knitwear, Denim und Basics bis zu High Fashion und Accessoires. Wir produzieren frei nach ihren Wünschen, statt nur Basics zu bedrucken. Und wir beraten, was möglich ist.</p>
        </div>
        <div className="mb-16">
          <Carousel opts={{
          align: "center",
          loop: true
        }} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioImages.map((image, index) => <CarouselItem key={index} className="basis-full">
                  <div className="flex items-start justify-center px-4 md:px-8">
                    <AspectRatio ratio={16 / 9} className="w-full">
                      <img src={image} alt={`Portfolio image ${index + 1}`} className="w-full h-full object-contain" loading="lazy" />
                    </AspectRatio>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default ServicesSection;