import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import testimonialStefanie from "@/assets/testimonial-stefanie-diem.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Als Unternehmerin muss man sich auf seine Ziele und diversen Projekte konzentrieren. Ein Partner wie CMK setzt unsere Werte und unsere Ansprüche an Qualität und Verlässlichkeit um. Das ist ein echtes Geschenk.",
      client: "Stefanie Diem",
      company: "lila loves it",
      image: testimonialStefanie
    },
    {
      quote: "Claudias Erfahrung mit Fashion-Labels jeder Größe, gepaart mit ihrem Background als Designerin, ist selten. Ihr Input ist einfach wertvoll.",
      client: "Maiami",
      company: "",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
    },
    {
      quote: "CMK liefert Top-Qualität aus Europa, völlig individualisiert und zu wettbewerbsfähigen Preisen. Und das mit persönlicher Betreuung – das können die Großen nicht.",
      client: "Merz b. Schwanen",
      company: "",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
    }
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-advance every 12 seconds
    const interval = setInterval(() => {
      if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 12000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-[hsl(var(--bronze))] rounded-lg p-8 md:p-12">
          <Carousel 
            className="w-full" 
            setApi={setApi} 
            opts={{
              align: "start",
              loop: true
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center py-4">
                    {/* Image */}
                    {testimonial.image && (
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="aspect-square overflow-hidden rounded-lg">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.client}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Quote Content */}
                    <div className={`flex-1 ${!testimonial.image ? 'text-center max-w-3xl mx-auto' : ''}`}>
                      <blockquote className="text-lg md:text-xl font-light tracking-wide leading-relaxed font-body mb-6 italic text-white">
                        „{testimonial.quote}"
                      </blockquote>
                      
                      <div className={!testimonial.image ? 'text-center' : ''}>
                        <div className="text-base font-medium text-white font-body">
                          {testimonial.client}
                        </div>
                        {testimonial.company && (
                          <div className="text-white/70 text-base font-body mt-1">
                            {testimonial.company}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Dot indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button 
                key={index} 
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index + 1 === current ? 'bg-white' : 'bg-white/30'
                }`} 
                onClick={() => api?.scrollTo(index)} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;