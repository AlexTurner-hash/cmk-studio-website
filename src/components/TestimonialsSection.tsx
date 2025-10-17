import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import testimonialStefanie from "@/assets/testimonial-stefanie-diem.jpg";
import testimonialMerz from "@/assets/testimonial-merz.jpg";
import testimonialLena from "@/assets/testimonial-lena-mantler.jpg";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const testimonialImages = [testimonialMerz, testimonialLena, testimonialStefanie];
  const testimonials = (t('testimonialsAbout.testimonials') as unknown as any[]).map((testimonial: any, index: number) => ({
    ...testimonial,
    image: testimonialImages[index]
  }));

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
        <div className="max-w-5xl mx-auto bg-white rounded-lg p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground font-display text-center">
            {t('testimonialsAbout.title')}
          </h2>
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
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start py-4">
                    {/* Image */}
                    {testimonial.image && (
                      <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                        <div className="w-full h-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.client}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Quote Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <blockquote className="text-lg md:text-xl font-extralight tracking-wide leading-relaxed font-body mb-6 italic text-muted-foreground">
                        „{testimonial.quote}"
                      </blockquote>
                      
                      <div className="text-right">
                        <div className="text-base font-medium text-foreground font-body">
                          {testimonial.client}
                        </div>
                        {testimonial.company && (
                          <div className="text-muted-foreground text-base font-body mt-1">
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
                  index + 1 === current ? 'bg-foreground' : 'bg-muted-foreground/30'
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