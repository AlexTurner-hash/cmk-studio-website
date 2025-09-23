import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
const TestimonialsSection = () => {
  const testimonials = [{
    quote: "CMK liefert Top-Qualität aus Europa; nachhaltig, völlig individualisiert und zu wettbewerbsfähigen Preisen. Und das alles mit persönlicher Betreuung. Das können die Großen so eben nicht.",
    client: "Tanja Rietdorf",
    company: "ehem. Coffee Fellows"
  }, {
    quote: "Claudias Erfahrung mit Fashion-Labels jeder Größe und in jeder Phase, gepaart mit ihrem eigenen Background als Modedesignerin ist selten. Ihr Input ist einfach wertvoll.",
    client: "Gitta und Peter Plotnicki",
    company: "Merz b. Schwanen"
  }, {
    quote: "Wenn man Founderin ist, will man sich auf seine Vision konzentrieren. Ein Partner der versteht, was man will, und Ideen zuverlässig umsetzen kann, ist ein echtes Geschenk.",
    client: "Steffi Diem",
    company: "Lila Loves It"
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
  return <section className="py-20" style={{backgroundColor: '#f1f0e2'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="heading-section text-foreground mb-4 text-3xl font-medium">Was unsere Kunden sagen:</h2>
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
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
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