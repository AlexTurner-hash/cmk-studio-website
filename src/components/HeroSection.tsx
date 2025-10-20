import { useEffect, useRef, useState } from "react";
import headerImage from "@/assets/hero-consultation-warm.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Parallax effect - only on desktop
    if (!isMobile && imageRef.current) {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (imageRef.current) {
              const scrolled = window.scrollY;
              const heroHeight = imageRef.current.parentElement?.offsetHeight || 0;
              
              // Only apply effect while hero is visible
              if (scrolled < heroHeight) {
                // Slower movement: 0.3 multiplier creates subtle parallax
                // Max displacement: ±30px (controlled by heroHeight limit)
                const translateY = Math.min(scrolled * 0.3, 30);
                imageRef.current.style.transform = `translateY(${translateY}px)`;
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'translateY(0px)' }}
      >
        <img 
          src={headerImage} 
          alt="Warm fashion design consultation meeting between CMK Studio team and client in bright, welcoming studio" 
          className="w-full h-full object-cover scale-110" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content - Static positioning for subtle contrast */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="heading-hero text-white mb-6">
          <span className="block text-white">
            {t('hero.title1')}
            <br />
            {t('hero.title2')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-body font-light leading-relaxed tracking-normal text-white/90 mb-12 max-w-4xl mx-auto">
          {t('hero.subtitle')}
        </p>

        {/* Get in Contact Button */}
        <div className="flex justify-center">
          <a href="#contact" className="btn-accent">
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;