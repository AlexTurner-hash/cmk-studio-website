import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      id: "designerinnen",
      title: "Designer:innen",
      description: "Unterstützung für unabhängige Designer bei der Umsetzung ihrer Visionen."
    }, {
      id: "modeunternehmen",
      title: "Modeunternehmen",
      description: "Strategische Beratung für etablierte Modeunternehmen."
    }]
  }];

  const portfolioImages = [
    // Influencer Fashion
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop&crop=center",
    // Corporate Fashion
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&crop=center",
    // Private Label
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop&crop=center"
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(portfolioImages.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.ceil(portfolioImages.length / 4)) % Math.ceil(portfolioImages.length / 4));
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">Wir machen Ideen tragbar.</h2>
          <p className="text-body-large text-clay/80 max-w-4xl mx-auto">Unsere Kunden sind vielfältig – von Creator bis Konzern. Gemeinsam haben sie den Anspruch, Kollektionen professionell umzusetzen – mit einem einzigen Ansprechpartner.</p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {serviceCategories.map(category => (
            <div key={category.id} className="text-center">
              <h3 className="text-xl md:text-2xl font-display leading-tight text-foreground mb-8 text-left font-semibold px-[16px] lg:text-2xl">{category.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map(item => (
                  <AccordionItem key={item.id} value={item.id} className="border-clay/20">
                    <AccordionTrigger className="text-left text-base md:text-lg font-body leading-relaxed font-normal text-foreground hover:text-[hsl(var(--cream-tan-hover))] transition-colors hover:no-underline data-[state=open]:bg-[hsl(var(--cream-tan-hover))] data-[state=open]:text-white px-4 py-3">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-[hsl(var(--cream-tan-hover))] text-white leading-relaxed font-body pt-2 pb-4 px-4 text-left">
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
                  <div className="grid grid-cols-4 h-96">
                    {portfolioImages.slice(slideIndex * 4, slideIndex * 4 + 4).map((image, index) => (
                      <div key={index} className="relative overflow-hidden group">
                        <img 
                          src={image} 
                          alt={`Portfolio image ${slideIndex * 4 + index + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-75 contrast-110 brightness-95" 
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
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-[hsl(var(--cream-tan-hover))]' : 'bg-[hsl(var(--cream-tan-hover))]/30'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;