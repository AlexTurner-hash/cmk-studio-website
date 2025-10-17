import { Award, Leaf, MapPin } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const ValuesSection = () => {
  const { content, loading } = useContent();
  
  if (loading) return null;
  
  const valuesData = content.values || {};
  const values = valuesData.items || [];
  
  const iconMap: Record<string, any> = {
    MapPin,
    Leaf,
    Award
  };

  return (
    <section id="values" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            {valuesData.title}
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value: any, index: number) => {
            const IconComponent = iconMap[value.icon] || Award;
            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <IconComponent 
                    size={48} 
                    className="text-accent group-hover:text-warm-fuchsia transition-colors duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-clay text-sm tracking-wider font-body">
                  {value.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;