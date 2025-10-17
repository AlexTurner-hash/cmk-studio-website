import factoryImage from "@/assets/textile-factory.jpg";

const FactoryImageSection = () => {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Full width image */}
        <div className="mb-16">
          <div className="relative overflow-hidden shadow-elegant">
            <img 
              src={factoryImage} 
              alt="Modern textile manufacturing facility" 
              className="w-full h-96 md:h-[500px] object-cover" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryImageSection;
