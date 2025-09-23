import headerImage from "@/assets/header-image-new.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={headerImage} alt="Modern fashion studio workspace with garment samples and design materials" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="heading-hero text-white mb-6">
          <span className="block text-white">Ihre Kollektion. 
Unsere Produktion. 

        </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-body font-light leading-relaxed tracking-normal text-white/90 mb-12 max-w-4xl mx-auto">
          CMK.Studio verbindet Beratung, Design, nachhaltige Produktion und Logistik in Europa – damit Marken, Creator und Unternehmen Kollektionen effizient, hochwertig und transparent realisieren können.
        </p>

        {/* Get in Contact Button */}
        <div className="flex justify-center">
          <a href="#contact" className="btn-accent">
            Projekt starten
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;