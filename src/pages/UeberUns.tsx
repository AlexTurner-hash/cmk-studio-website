import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/textile-factory.jpg";

const UeberUns = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Textile factory showcasing our production capabilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black leading-none mb-6 font-display">
            Über uns
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-warm-cream font-body">
            The Drop Factory – Ihr Partner für professionelle Textilproduktion
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground font-display text-center">
              Unsere Geschichte
            </h2>
            <div className="prose prose-lg mx-auto text-clay/80 font-body">
              <p className="text-lg leading-relaxed mb-6">
                The Drop Factory wurde mit der Vision gegründet, die Textilproduktion zu revolutionieren. 
                Als erfahrenes Team aus der Fashion-Industrie verstehen wir die Herausforderungen, 
                vor denen Marken, Designer und Unternehmen stehen – von der ersten Idee bis zum fertigen Produkt.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Unser Ansatz ist einfach: Ein Partner, ein Prozess, maximale Qualität. 
                Wir begleiten unsere Kunden von der ersten Skizze bis zum fertigen Drop und 
                sorgen dabei für höchste Standards in Qualität, Nachhaltigkeit und Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20" style={{ backgroundColor: 'hsl(44 29% 95%)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
              Unsere Werte
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-medium text-foreground text-xl mb-4 font-body">
                Qualität
              </h3>
              <p className="text-clay/70 text-lg font-body leading-relaxed">
                Höchste Standards in Material, Verarbeitung und Finish. 
                Jedes Stück durchläuft unsere strenge Qualitätskontrolle.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-foreground text-xl mb-4 font-body">
                Nachhaltigkeit
              </h3>
              <p className="text-clay/70 text-lg font-body leading-relaxed">
                Verantwortungsvolle Produktion mit zertifizierten Materialien 
                und umweltschonenden Produktionsprozessen.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-foreground text-xl mb-4 font-body">
                Partnership
              </h3>
              <p className="text-clay/70 text-lg font-body leading-relaxed">
                Langfristige Partnerschaften auf Augenhöhe. 
                Wir verstehen uns als Verlängerung Ihres Teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground font-display">
              Unsere Expertise
            </h2>
            <p className="text-lg text-clay/80 mb-12 font-body leading-relaxed">
              Mit jahrelanger Erfahrung in der Textilbranche und einem Netzwerk von 
              vertrauensvollen Produktionspartnern realisieren wir Projekte jeder Größenordnung – 
              von kleinen Capsule Collections bis hin zu großvolumigen Corporate Fashion Lines.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-medium text-foreground text-xl mb-4 font-body">
                  Produktionserfahrung
                </h3>
                <ul className="space-y-2 text-clay/70 font-body">
                  <li>• 10+ Jahre Branchenerfahrung</li>
                  <li>• Über 500 erfolgreich realisierte Projekte</li>
                  <li>• Internationale Produktionspartner</li>
                  <li>• Zertifizierte Qualitätsstandards</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground text-xl mb-4 font-body">
                  Spezialisierung
                </h3>
                <ul className="space-y-2 text-clay/70 font-body">
                  <li>• Fashion & Streetwear</li>
                  <li>• Corporate Clothing</li>
                  <li>• Hotel & Resort Textilien</li>
                  <li>• Sustainable Fashion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UeberUns;