import { useEffect, useRef, useState } from "react";
import factoryImage from "@/assets/textile-factory.jpg";

const FactoryImageSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Zoom-out effect - only on desktop
    if (!isMobile && imageRef.current && containerRef.current) {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (imageRef.current && containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              
              // Check if element is in viewport
              if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculate progress (0 when entering viewport, 1 when leaving)
                const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (windowHeight + rect.height))));
                
                // Zoom out from 1.15 to 1.0 as user scrolls past
                const scale = 1.15 - (progress * 0.15);
                imageRef.current.style.transform = `scale(${scale})`;
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
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section id="work" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Full width image */}
        <div className="mb-16">
          <div ref={containerRef} className="relative overflow-hidden shadow-elegant">
            <img 
              ref={imageRef}
              src={factoryImage} 
              alt="Modern textile manufacturing facility" 
              className="w-full h-96 md:h-[500px] object-cover will-change-transform transition-transform duration-100" 
              width="1920"
              height="500"
              loading="lazy"
              decoding="async"
              style={{ transform: 'scale(1.15)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryImageSection;
