import headerImage from "@/assets/hero-consultation-warm.jpg";
import { useContent } from "@/hooks/useContent";

const HeroSection = () => {
  const { content, loading } = useContent();
  
  if (loading) return null;
  
  const hero = content.hero || {};
  
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={headerImage} alt={hero.imageAlt || ""} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="heading-hero text-white mb-6">
          <span className="block text-white">
            {hero.title1}
            <br />
            {hero.title2}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-body font-light leading-relaxed tracking-normal text-white/90 mb-12 max-w-4xl mx-auto">
          {hero.subtitle}
        </p>

        {/* Get in Contact Button */}
        <div className="flex justify-center">
          <a href="#contact" className="btn-accent">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;