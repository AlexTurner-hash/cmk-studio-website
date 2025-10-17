import oekoTexLogo from "@/assets/oeko-tex-logo.png";
import gotsLogo from "@/assets/gots-logo.png";
import rwsLogo from "@/assets/rws-logo.png";
import bsciLogo from "@/assets/bsci-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SustainabilitySection = () => {
  const { t } = useLanguage();
  const certifications = [
    {
      logo: oekoTexLogo,
      name: "OEKO-TEX Standard 100"
    },
    {
      logo: gotsLogo,
      name: "GOTS"
    },
    {
      logo: rwsLogo,
      name: "Responsible Wool"
    },
    {
      logo: bsciLogo,
      name: "BSCI"
    }
  ];

  return (
    <section className="pt-0 pb-8 md:pb-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            {t('sustainabilitySection.title')}
          </h2>
          <div className="max-w-3xl mx-auto text-body-large">
            <p>
              {t('sustainabilitySection.description1')}
            </p>
            <p className="mt-4">
              {t('sustainabilitySection.description2')}
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center group">
                <img 
                  src={cert.logo}
                  alt={`${cert.name} Zertifizierung Logo`}
                  className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white" asChild>
            <Link to="/insights/nachhaltige-textilproduktion-europa">
              {t('sustainabilitySection.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;