import factoryImage from "@/assets/textile-factory.jpg";
import { useContent } from "@/hooks/useContent";

const AboutSection = () => {
  const { content, loading } = useContent();
  
  if (loading) return null;
  
  const about = content.about || {};
  const services = about.services || [];
  
  return <section id="work" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Full width image */}
        <div className="mb-16">
          <div className="relative overflow-hidden shadow-elegant">
            <img src={factoryImage} alt={about.imageAlt || ""} className="w-full h-96 md:h-[500px] object-cover" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display text-center">{about.title}</h2>
          <div className="space-y-6 text-lg md:text-xl text-clay/70 leading-relaxed font-body">
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {services.map((service: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-[hsl(var(--bronze))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;