import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import portfolioTurtleneck from "@/assets/portfolio-turtleneck.png";
import portfolioBlazer from "@/assets/portfolio-blazer.png";
import portfolioPullover from "@/assets/portfolio-pullover.png";
import portfolioCardigan from "@/assets/portfolio-cardigan.png";
import portfolioHose from "@/assets/portfolio-hose.png";
import portfolioHemd from "@/assets/portfolio-hemd.png";
import portfolioSchuerze from "@/assets/portfolio-schuerze.png";
import portfolioCargo from "@/assets/portfolio-cargo.png";
import portfolioPuffer from "@/assets/portfolio-puffer.png";
import portfolioHoodie from "@/assets/portfolio-hoodie.png";
import portfolioBasecap from "@/assets/portfolio-basecap.png";
import portfolioMuetze from "@/assets/portfolio-muetze.png";
import portfolioSweater from "@/assets/portfolio-sweater.png";
const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const serviceCategories = [{
    id: "corporates",
    title: "Unternehmen",
    items: [{
      id: "mitarbeiter-bekleidung",
      title: "Mitarbeiter-Bekleidung",
      description: "Professionelle Workwear und Uniformen für Ihr Unternehmen."
    }, {
      id: "private-labels",
      title: "Private Labels",
      description: "Exklusive Kollektionen unter Ihrem Label."
    }, {
      id: "hotel-resort",
      title: "Hotels & Resorts",
      description: "Elegante Hospitality-Bekleidung für Hotels und Resorts."
    }]
  }, {
    id: "creators",
    title: "Creator",
    items: [{
      id: "fashion-drops",
      title: "Fashion Drops",
      description: "Limitierte Fashion-Releases für Influencer und Content Creator."
    }, {
      id: "merch",
      title: "Merch",
      description: "Hochwertiges Merchandise für Ihre Community."
    }, {
      id: "kollektionen",
      title: "Kollektionen",
      description: "Umfassende Kollektionen für Creator und Influencer."
    }]
  }, {
    id: "consulting",
    title: "Beratung für",
    items: [{
      id: "fashion-startups",
      title: "Startups",
      description: "Beratung und Unterstützung für Fashion-Startups."
    }, {
      id: "consultancies",
      title: "Consultancies",
      description: "Kompetenz für Unternehmensberatungen bei Due Diligence Prozessen und strategischen Analysen."
    }, {
      id: "modeunternehmen",
      title: "Modeunternehmen",
      description: "Strategische Beratung für etablierte Modeunternehmen."
    }]
  }];

  const portfolioImages = [
    portfolioTurtleneck,
    portfolioBlazer,
    portfolioPullover,
    portfolioCardigan,
    portfolioHose,
    portfolioHemd,
    portfolioSchuerze,
    portfolioCargo,
    portfolioPuffer,
    portfolioHoodie,
    portfolioBasecap,
    portfolioMuetze,
    portfolioSweater
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(portfolioImages.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.ceil(portfolioImages.length / 4)) % Math.ceil(portfolioImages.length / 4));
  };

  return (
    <section id="services" className="pb-8 md:pb-12 lg:pb-16 pt-8 md:pt-12 lg:pt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">Wir machen Ideen tragbar.</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">Unsere KundInnen sind unterschiedlich – von Creator bis Konzern. Gemeinsam haben sie den Anspruch, Kollektionen professionell umzusetzen – mit einem einzigen Ansprechpartner.</p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {serviceCategories.map(category => (
            <div key={category.id} className="text-center">
              <h3 className="text-xl md:text-2xl font-display leading-tight text-[hsl(var(--bronze))] mb-8 text-left font-semibold px-[16px] lg:text-2xl uppercase tracking-wide">{category.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map(item => (
                  <AccordionItem key={item.id} value={item.id} className="border-clay/20">
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

        {/* Portfolio Section */}
        <div className="relative mb-16 overflow-hidden">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 hover:bg-black hover:text-white transition-colors duration-300 rounded-full" 
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-3 hover:bg-black hover:text-white transition-colors duration-300 rounded-full" 
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mosaic Grid */}
          <div className="relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(portfolioImages.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-4 h-96 gap-4 p-4 bg-white">
                    {portfolioImages.slice(slideIndex * 4, slideIndex * 4 + 4).map((image, index) => (
                      <div key={index} className="relative overflow-hidden group bg-white p-6 flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={`Portfolio image ${slideIndex * 4 + index + 1}`} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {Array.from({ length: Math.ceil(portfolioImages.length / 4) }).map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)} 
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-[hsl(var(--bronze))]' : 'bg-[hsl(var(--bronze))]/30'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;