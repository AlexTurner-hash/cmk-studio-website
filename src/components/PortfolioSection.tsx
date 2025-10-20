import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

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

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Check if section is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              // Calculate scroll progress through section (0 to 1)
              const progress = Math.max(0, Math.min(1, 
                (windowHeight - rect.top) / (windowHeight + rect.height)
              ));
              
              // Apply zoom to all visible images
              imagesRef.current.forEach((img) => {
                if (img) {
                  // Zoom from 1.0 to 1.08 as user scrolls through section
                  const scale = 1 + (progress * 0.08);
                  img.style.transform = `scale(${scale})`;
                }
              });
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(portfolioImages.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(portfolioImages.length / 4)) % Math.ceil(portfolioImages.length / 4));
  };

  return (
    <section ref={sectionRef} id="portfolio" className="relative bg-background overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[hsl(var(--cream-tan-hover))] text-white p-3 hover:bg-[hsl(var(--clay))] transition-colors duration-300"
        aria-label="Previous images"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[hsl(var(--cream-tan-hover))] text-white p-3 hover:bg-[hsl(var(--clay))] transition-colors duration-300"
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
              <div className="grid grid-cols-4 h-screen">
                {portfolioImages
                  .slice(slideIndex * 4, slideIndex * 4 + 4)
                  .map((image, index) => {
                    const globalIndex = slideIndex * 4 + index;
                    return (
                      <div key={index} className="relative overflow-hidden group">
                        <img
                          ref={(el) => { imagesRef.current[globalIndex] = el; }}
                          src={image}
                          alt={`Portfolio image ${globalIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale will-change-transform"
                          style={{ transform: 'scale(1)' }}
                        />
                      </div>
                    );
                  })}
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
            className={`w-3 h-3 transition-colors duration-300 ${
              currentSlide === index ? 'bg-[hsl(var(--cream-tan-hover))]' : 'bg-[hsl(var(--cream-tan-hover))]/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;