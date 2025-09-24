import oekoTexLogo from "@/assets/oeko-tex-logo.png";

const SustainabilitySection = () => {
  const certifications = Array(4).fill({
    logo: oekoTexLogo
  });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Mehr als Produktion: Verantwortung.
          </h2>
          <p className="text-lg md:text-xl text-clay/70 max-w-4xl mx-auto leading-relaxed font-body">
            Wir arbeiten mit geprüften Fabriken, nachhaltigen Materialien und transparenten Prozessen. So entstehen Kollektionen, die nicht nur heute wirken, sondern auch morgen Bestand haben.
          </p>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-center group">
              <img 
                src={cert.logo}
                alt={`Certification logo ${index + 1}`}
                className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;