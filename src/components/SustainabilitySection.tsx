import oekoTexLogo from "@/assets/oeko-tex-logo.png";
import gotsLogo from "@/assets/gots-logo.png";
import rwsLogo from "@/assets/rws-logo.png";
import bsciLogo from "@/assets/bsci-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContent } from "@/hooks/useContent";

const SustainabilitySection = () => {
  const { content, loading } = useContent();
  
  if (loading) return null;
  
  const sustainability = content.sustainability || {};
  
  const logoMap: Record<string, string> = {
    "oeko-tex-logo.png": oekoTexLogo,
    "gots-logo.png": gotsLogo,
    "rws-logo.png": rwsLogo,
    "bsci-logo.png": bsciLogo
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            {sustainability.title}
          </h2>
          <div className="max-w-3xl mx-auto text-body-large">
            <p>
              {sustainability.description1}
            </p>
            <p className="mt-4">
              {sustainability.description2}
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {(sustainability.certifications || []).map((cert: any, index: number) => (
              <div key={index} className="flex items-center justify-center group">
                <img 
                  src={logoMap[cert.imageName]}
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
              {sustainability.ctaText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;