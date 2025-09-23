import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioImages = [
    // Influencer Fashion
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&crop=center",
    
    // Corporate Fashion
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=center",
    
    // Private Label
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop&crop=center"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(portfolioImages.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(portfolioImages.length / 4)) % Math.ceil(portfolioImages.length / 4));
  };

  return (
    <section id="portfolio" className="relative bg-background overflow-hidden">
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
                  .map((image, index) => (
                    <div key={index} className="relative overflow-hidden group">
                      <img
                        src={image}
                        alt={`Portfolio image ${slideIndex * 4 + index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
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