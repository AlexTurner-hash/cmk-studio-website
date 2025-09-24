import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-denim.jpg";

const Denim = () => {
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
                Denim Produktion
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Traditionelle Denim-Handwerkskunst trifft auf modernste Produktionstechnologie – für authentische Jeans mit perfekter Passform und Qualität.
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
                alt="Traditionelle Denim-Produktion mit modernen Maschinen"
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
                Denim: Wo Tradition auf Innovation trifft
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Denim ist zeitlos – und gleichzeitig ständig im Wandel. Bei CMK.Studio verbinden wir die bewährten Techniken der traditionellen Jeans-Herstellung mit innovativen Produktionsmethoden und nachhaltigen Materialien für Denim, das sowohl authentisch als auch zukunftsfähig ist.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Handwerkskunst meets High-Tech
                </h3>

                <p>
                  Unsere Denim-Produktion ist eine Symbiose aus traditioneller Handwerkskunst und modernster Technologie. Erfahrene Näher mit jahrzehntelanger Denim-Expertise arbeiten Hand in Hand mit computergesteuerten Laser-Systemen und automatisierten Waschstraßen.
                </p>

                <p>
                  <strong>Traditionelle Techniken:</strong> Handgesetzte Nieten, authentische Chainstitch-Säume und manuelle Distressing-Techniken für den perfekten Vintage-Look.
                </p>

                <p>
                  <strong>Moderne Präzision:</strong> Laser-Cutting für exakte Passformen, computergesteuerte Waschprogramme für reproduzierbare Finishes und 3D-Scanning für optimale Fit-Entwicklung.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Materialvielfalt für jeden Denim-Stil
                </h3>

                <p>
                  Von klassischem Raw Denim bis zu modernen Stretch-Varianten – unser Material-Portfolio deckt alle Facetten zeitgemäßer Denim-Mode ab:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Raw & Selvedge Denim:</strong> 12-21oz ungefärbte Gewebe für Premium-Jeans</li>
                  <li><strong>Stretch-Denim:</strong> Elasthan-Blends für Komfort ohne Kompromisse</li>
                  <li><strong>Eco-Denim:</strong> Bio-Baumwolle und recycelte Fasern für nachhaltigen Denim</li>
                  <li><strong>Technical Denim:</strong> Performance-Materialien für Active- und Work-Wear</li>
                  <li><strong>Colored Denim:</strong> Gefärbte Gewebe in allen erdenklichen Farbtönen</li>
                  <li><strong>Vintage-Reproductions:</strong> Historisch akkurate Gewebe für Heritage-Kollektionen</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Von handgefertigten Unikaten bis zur Serie
                </h3>

                <p>
                  Unsere Produktionskapazitäten reichen von einzelnen Prototypen bis zu großvolumigen Kollektionen:
                </p>

                <p>
                  <strong>Handcrafted Denim:</strong> Komplett handgefertigte Jeans mit individuellen Details, Maßanfertigungen und limitierte Editionen für Denim-Enthusiasten.
                </p>

                <p>
                  <strong>Semi-Automated Production:</strong> Kombiniert traditionelle Nähtechniken mit modernen Hilfsmitteln für optimale Effizienz bei erhaltener Handwerksqualität.
                </p>

                <p>
                  <strong>Industrial Production:</strong> Vollautomatische Produktionslinien für Mainstream-Kollektionen mit konsistenter Qualität und kurzen Lieferzeiten.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Spezialisierung auf Finishing & Waschungen
                </h3>

                <p>
                  Ein wesentlicher Teil unserer Denim-Expertise liegt im Finishing. Unsere hauseigene Waschanlage ermöglicht eine Vielzahl authentischer Treatments:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Stone Washing:</strong> Klassische Enzyme- und Bimsstein-Behandlungen</li>
                  <li><strong>Laser Treatments:</strong> Präzise Abnutzungseffekte ohne Chemikalien</li>
                  <li><strong>Hand Sanding:</strong> Individuelle Distressing für authentischen Vintage-Look</li>
                  <li><strong>Ozone Treatments:</strong> Umweltfreundliche Alternative zu Bleaching</li>
                  <li><strong>Resin Coating:</strong> Für spezielle Haptik und Optik</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Nachhaltige Denim-Produktion</h3>

                <p>
                  Denim-Produktion war lange mit hohem Wasser- und Chemikalienverbrauch verbunden. Wir setzen auf innovative, umweltfreundliche Verfahren:
                </p>

                <p>
                  <strong>Water Recycling:</strong> Geschlossene Kreisläufe reduzieren den Wasserverbrauch um bis zu 90%.
                </p>

                <p>
                  <strong>Eco-Friendly Chemicals:</strong> ZDHC-konforme Chemikalien und biologisch abbaubare Enzyme.
                </p>

                <p>
                  <strong>Energy Efficiency:</strong> Moderne Maschinen mit optimiertem Energieverbrauch und Wärmerückgewinnung.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  CMK.Studio Denim-Expertise
                </h3>

                <p>
                  Mit Partnerschaften zu führenden Denim-Mills und einem Team erfahrener Denim-Spezialisten realisieren wir Projekte von der ersten Skizze bis zur finalen Kollektion. Ob Heritage-Brand oder innovatives Startup – wir entwickeln die perfekte Denim-Lösung für Ihre Vision.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Link 
                  to="/kontakt" 
                  className="btn-accent"
                >
                  Denim-Projekt starten
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

export default Denim;