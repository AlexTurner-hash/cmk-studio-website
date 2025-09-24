import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-knitwear.jpg";

const Knitwear = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/#produktkategorien" 
            className="inline-flex items-center gap-2 text-[hsl(var(--bronze))] hover:text-[hsl(var(--clay))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu den Produktkategorien
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground font-display">
                Knitwear-Produktion bei CMK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Vom klassischen Pullover bis zur High-Tech Performance-Strickware – computergesteuerte Präzision trifft auf traditionelle Strickkunst.
              </p>
            </div>
          </div>
        </section>

        {/* Production Image */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <img 
                src={productionImage} 
                alt="Moderne Knitwear-Produktion mit computergesteuerten Strickmaschinen"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Knitwear: Tradition trifft Innovation
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Strickwaren verbinden wie kaum ein anderes Textilprodukt Tradition mit modernster Technologie. Bei CMK.Studio nutzen wir computergesteuerte Strickmaschinen der neuesten Generation, um komplexeste Designs zu realisieren – von klassischen Pullovern bis zu innovativen Performance-Textilien.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Computergesteuerte Strick-Innovation
                </h3>

                <p>
                  Moderne Knitwear-Produktion ist High-Tech: Unsere CNC-gesteuerten Flachstrickmaschinen können komplexeste Muster, Strukturen und sogar dreidimensionale Formen in einem Arbeitsgang produzieren.
                </p>

                <p>
                  <strong>Vollautomatische Produktion:</strong> Von der digitalen Datei direkt zur fertigen Strickware – ohne Zwischenschritte, ohne Materialverschnitt.
                </p>

                <p>
                  <strong>Komplexe Konstruktionen:</strong> Nahtlose Pullover, integrierte Taschen und sogar komplette Kleidungsstücke entstehen direkt auf der Maschine.
                </p>

                <p>
                  <strong>Traditionelle Handarbeit:</strong> Linking (Zusammenfügen), Finishing und Veredelung erfolgen durch erfahrene Strick-Spezialisten.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Materialvielfalt von Luxus bis Performance
                </h3>

                <p>
                  Unser Garn-Portfolio umfasst das gesamte Spektrum moderner Strickwaren:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Natural Luxury Fibers:</strong> Kaschmir, Alpaka, Merino-Wolle und Seide</li>
                  <li><strong>Performance Yarns:</strong> Merinowolle mit Funktionseigenschaften, Coolmax und Dryarn</li>
                  <li><strong>Sustainable Options:</strong> Bio-Baumwolle, recycelte Wolle und Tencel</li>
                  <li><strong>Technical Blends:</strong> Wolle-Elasthan-Mischungen für optimale Passform</li>
                  <li><strong>Innovation Fibers:</strong> Antibakterielle Garne und temperaturreaktive Fasern</li>
                  <li><strong>Color Variations:</strong> Space-Dyed, Melange und Multicolor-Effektgarne</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Von handgelinkt bis vollautomatisch
                </h3>

                <p>
                  Je nach Anspruch und Stückzahl bieten wir verschiedene Produktionsverfahren:
                </p>

                <p>
                  <strong>Fully-Fashioned Knitwear:</strong> Komplett nahtlose Strickwaren direkt von der Maschine – maximale Effizienz bei optimaler Passform.
                </p>

                <p>
                  <strong>Cut & Sew Knitwear:</strong> Traditionelles Verfahren mit zugeschnittenen Strickteilen für komplexe Designs und Variabilität.
                </p>

                <p>
                  <strong>Hand-Linked Premium:</strong> Handwerkliche Verbindung einzelner Strickteile für höchste Qualität und individuelle Passformen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Spezialisierung auf komplexe Strukturen
                </h3>

                <p>
                  Moderne Strickmaschinen ermöglichen eine Vielfalt an Strukturen und Techniken:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Intarsia-Technik:</strong> Farbige Muster ohne Rückseiten-Fäden</li>
                  <li><strong>Fair Isle & Jacquard:</strong> Komplexe Mehrfarben-Muster</li>
                  <li><strong>Cable & Aran:</strong> Traditionelle Zopfmuster in moderner Interpretation</li>
                  <li><strong>Pointelle & Lochmuster:</strong> Filigrane durchbrochene Strukturen</li>
                  <li><strong>3D-Strukturen:</strong> Erhabene Muster und plastische Effekte</li>
                  <li><strong>Seamless Construction:</strong> Nahtlose Pullover und Kleider</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Produktkategorien unserer Knitwear-Expertise
                </h3>

                <p>
                  Von klassischen Basics bis zu innovativen Performance-Produkten:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Classic Knitwear:</strong> Pullover, Cardigans und Westen in zeitlosen Designs</li>
                  <li><strong>Fashion Knitwear:</strong> Trendige Strickwaren mit besonderen Details</li>
                  <li><strong>Performance Knitwear:</strong> Funktionale Strickwaren für Sport und Outdoor</li>
                  <li><strong>Luxury Cashmere:</strong> Hochwertige Strickwaren aus Edelgarnen</li>
                  <li><strong>Sustainable Knits:</strong> Umweltfreundliche Strickwaren aus nachhaltigen Fasern</li>
                  <li><strong>Technical Knits:</strong> Innovative Strickstrukturen für spezielle Anwendungen</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Qualität durch Präzision
                </h3>

                <p>
                  Strickwaren erfordern besondere Qualitätskontrolle:
                </p>

                <p>
                  <strong>Maschenqualität:</strong> Jede Masche wird auf Gleichmäßigkeit und Spannung geprüft.
                </p>

                <p>
                  <strong>Dimensionsstabilität:</strong> Ausführliche Tests auf Verzug und Formhaltung.
                </p>

                <p>
                  <strong>Pilling-Resistance:</strong> Prüfung der Oberflächenbeständigkeit bei Beanspruchung.
                </p>

                <p>
                  <strong>Care-Performance:</strong> Tests für optimale Pflegeeigenschaften.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Nachhaltigkeit in der Strickwarenproduktion
                </h3>

                <p>
                  Moderne Knitwear-Produktion kann besonders nachhaltig sein:
                </p>

                <p>
                  <strong>Zero-Waste Production:</strong> Fully-Fashioned Strickware produziert keinen Verschnitt.
                </p>

                <p>
                  <strong>Local Sourcing:</strong> Partnerschaften mit europäischen Garnproduzenten für kurze Transportwege.
                </p>

                <p>
                  <strong>Recycling Programs:</strong> Aufarbeitung von Retouren zu neuen Garnen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  CMK.Studio Knitwear-Kompetenz
                </h3>

                <p>
                  Mit modernsten Strickmaschinen und einem Team erfahrener Strick-Techniker realisieren wir Knitwear-Projekte von der ersten Idee bis zur Serienproduktion. Ob minimalistischer Cashmere-Pullover oder komplexes Performance-Knit – wir entwickeln die optimale Lösung für Ihre Strickwaren-Vision.
                </p>

                <p>
                  Unsere Expertise umfasst sowohl traditionelle als auch innovative Stricktechniken, nachhaltige Materialien und funktionale Performance-Features für moderne Knitwear-Kollektionen.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Link 
                  to="/kontakt" 
                  className="btn-accent"
                >
                  Knitwear-Projekt besprechen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Knitwear;