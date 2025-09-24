import headerImage from "@/assets/hero-consultation-warm.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={headerImage} alt="Warm fashion design consultation meeting between CMK.Studio team and client in bright, welcoming studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/25"></div>
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="btn-accent">
            Projekt starten
          </a>
          <a 
            href={headerImage} 
            download="cmk-studio-titelbild.jpg"
            className="btn-secondary text-sm"
          >
            Titelbild herunterladen
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;