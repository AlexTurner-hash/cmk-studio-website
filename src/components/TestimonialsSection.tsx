import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "Claudias Erfahrung mit Fashion-Labels jeder Größe, gepaart mit ihrem Background als Designerin, ist selten. Ihr Input ist einfach wertvoll.",
    client: "Maiami",
    company: ""
  }, {
    quote: "CMK liefert Top-Qualität aus Europa, völlig individualisiert und zu wettbewerbsfähigen Preisen. Und das mit persönlicher Betreuung – das können die Großen nicht.",
    client: "Merz b. Schwanen",
    company: ""
  }];
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
  return <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">Kundenstimmen</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Carousel className="w-full" setApi={setApi} opts={{
          align: "start",
          loop: true
        }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem key={index}>
                  <div className="text-center py-4 px-8">
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl font-light tracking-wide leading-relaxed font-body mb-6 italic text-clay">
                      „{testimonial.quote}"
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="mt-6">
                      <div className="text-base font-medium text-clay font-body">
                        {testimonial.client}
                      </div>
                      <div className="text-clay/70 text-base font-body mt-1">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
          
          {/* Dot indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({
            length: count
          }).map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-colors duration-200 ${index + 1 === current ? 'bg-[hsl(var(--cream-tan-hover))]' : 'bg-[hsl(var(--cream-tan-hover))]/30'}`} onClick={() => api?.scrollTo(index)} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;