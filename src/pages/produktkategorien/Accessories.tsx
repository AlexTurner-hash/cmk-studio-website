import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-accessories.jpg";
const Accessories = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-8">
          <Link to="/#produktkategorien" className="inline-flex items-center gap-2 text-[hsl(var(--bronze))] hover:text-[hsl(var(--clay))] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Zurück zu den Produktkategorien
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground font-display">
                Accessoires-Produktion bei CMK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Von feinster Handarbeit bis zur Präzisionsfertigung – Accessoires, die Kollektionen vollenden und Marken definieren.
              </p>
            </div>
          </div>
        </section>

        {/* Production Image */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <img src={productionImage} alt="Moderne Accessoires-Produktion mit Präzisionsmaschinen und Handarbeit" className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-elegant" />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Accessoires: Das Detail macht den Unterschied
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Accessoires sind mehr als nur Ergänzungen – sie sind die Details, die eine Kollektion definieren und einer Marke ihre Identität verleihen. Bei CMK.Studio verstehen wir die Bedeutung jedes einzelnen Elements und produzieren Accessoires mit der Präzision und Leidenschaft, die sie verdienen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Präzision in jedem Detail
                </h3>

                <p>
                  Accessoire-Produktion erfordert höchste Präzision und Aufmerksamkeit für Details. Unsere Kombination aus modernster Technologie und erfahrener Handwerkskunst ermöglicht es uns, auch komplexeste Designs zu realisieren:
                </p>

                <p>
                  <strong>Micro-Precision Manufacturing:</strong> CNC-Fräsen für Metallteile, Laserschnitt für filigrane Komponenten und 3D-Druck für Prototyping und Kleinserien.
                </p>

                <p>
                  <strong>Artisan Craftsmanship:</strong> Handwerkliche Veredelung, individuelle Gravuren und manuelle Montage für höchste Qualitätsstandards.
                </p>

                <p>
                  <strong>Quality Control:</strong> Jedes Accessoire durchläuft mehrfache Qualitätsprüfungen, um perfekte Funktionalität und Ästhetik sicherzustellen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Materialvielfalt für jeden Stil
                </h3>

                <p>
                  Von natürlichen bis zu innovativen Materialien – unser Portfolio deckt alle Möglichkeiten moderner Accessoire-Produktion ab:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Metalle:</strong> Edelstahl, Messing, Aluminium und edle Legierungen in verschiedenen Oberflächenbehandlungen</li>
                  <li><strong>Textilien:</strong> Hochwertige Stoffe, technische Gewebe und nachhaltige Materialien</li>
                  <li><strong>Leder:</strong> Premium-Leder in allen Varianten und Oberflächenbehandlungen</li>
                  <li><strong>Kunststoffe:</strong> Von robusten Polymeren bis zu biodegradierbaren Alternativen</li>
                  <li><strong>Naturmaterialien:</strong> Holz, Horn, Muschel und andere nachhaltige Optionen</li>
                  <li><strong>Smart Materials:</strong> Funktionale Materialien mit besonderen Eigenschaften</li>
                  <li><strong>Recycled Materials:</strong> Upcycelte Komponenten für nachhaltige Kollektionen</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Von Handmade bis High-Tech
                </h3>

                <p>
                  Unsere Produktionskapazitäten decken das gesamte Spektrum der Accessoire-Fertigung ab:
                </p>

                <p>
                  <strong>Handcrafted Luxus:</strong> Komplett handgefertigte Unikate und limitierte Editionen für Premium-Brands und Couture-Kollektionen.
                </p>

                <p>
                  <strong>Semi-Automated Production:</strong> Kombination aus maschineller Effizienz und handwerklichen Details für optimale Balance zwischen Qualität und Wirtschaftlichkeit.
                </p>

                <p>
                  <strong>Mass Production:</strong> Vollautomatisierte Fertigung für große Stückzahlen ohne Kompromisse bei Qualität und Detailtreue.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Spezialisierte Produktkategorien
                </h3>

                <p>
                  Unser Accessoire-Portfolio umfasst alle Bereiche der Mode- und Lifestyle-Accessoires:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Taschen & Kleinlederwaren:</strong> Handtaschen, Portemonnaies, Kartenetuis und Reiseartikel</li>
                  <li><strong>Gürtel & Hosenträger:</strong> Klassische und moderne Designs in verschiedenen Materialien</li>
                  
                  <li><strong>Kopfbedeckungen:</strong> Mützen, Hüte, Caps und saisonale Kopfwear</li>
                  <li><strong>Schals & Tücher:</strong> Von feinen Seidenschals bis zu warmen Winterschals</li>
                  
                  
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Innovative Verarbeitungstechniken
                </h3>

                <p>
                  Moderne Accessoire-Produktion nutzt fortschrittlichste Verfahren:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Laser Engraving:</strong> Präzise Gravuren und Schnitte für personalisierte Details</li>
                  <li><strong>3D-Printing:</strong> Rapid Prototyping und Kleinserien-Produktion komplexer Formen</li>
                  <li><strong>Ultrasonic Welding:</strong> Nahtlose Verbindungen ohne Klebstoffe oder Nähte</li>
                  <li><strong>Digital Printing:</strong> Hochauflösende Drucke auf verschiedenste Materialien</li>
                  <li><strong>Electroplating:</strong> Oberflächenveredelung mit edlen Metallen</li>
                  <li><strong>Embossing & Debossing:</strong> Präge- und Tiefdrucktechniken für taktile Effekte</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Customization & Personalisierung
                </h3>

                <p>
                  In der heutigen Zeit ist Individualisierung ein wichtiger Aspekt der Accessoire-Produktion:
                </p>

                <p>
                  <strong>Brand Customization:</strong> Individuelle Anpassung an Corporate Design und Markenidentität.
                </p>

                <p>
                  <strong>Personal Engraving:</strong> Gravuren, Monogramme und persönliche Botschaften.
                </p>

                <p>
                  <strong>Color Matching:</strong> Exakte Farbanpassung an bestehende Kollektionen.
                </p>

                <p>
                  <strong>Limited Editions:</strong> Exklusive Varianten für besondere Anlässe und Kooperationen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Nachhaltigkeit in der Accessoire-Produktion
                </h3>

                <p>
                  Verantwortungsvolle Accessoire-Produktion bedeutet bewusste Material- und Prozesswahl:
                </p>

                <p>
                  <strong>Sustainable Materials:</strong> Recycelte Metalle, pflanzlich gegerbte Leder und biologisch abbaubare Kunststoffe.
                </p>

                <p>
                  <strong>Circular Design:</strong> Accessoires, die für Reparierbarkeit und Recycling konzipiert sind.
                </p>

                <p>
                  <strong>Local Production:</strong> Kurze Lieferketten durch regionale Lieferanten und Partner.
                </p>

                <p>
                  <strong>Zero-Waste Approach:</strong> Minimierung von Produktionsabfällen durch optimierte Prozesse.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Qualitätsstandards & Testing
                </h3>

                <p>
                  Accessoires müssen hohen Beanspruchungen standhalten:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Durability Testing:</strong> Belastungstests für Langlebigkeit und Funktionalität</li>
                  <li><strong>Material Compatibility:</strong> Verträglichkeitsprüfung aller verwendeten Materialien</li>
                  <li><strong>Color Fastness:</strong> Tests auf Farbechtheit und UV-Beständigkeit</li>
                  <li><strong>Safety Standards:</strong> Erfüllung aller relevanten Sicherheitsnormen</li>
                  <li><strong>Functionality Tests:</strong> Prüfung aller beweglichen Teile und Verschlüsse</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  CMK.Studio Accessoire-Expertise
                </h3>

                <p>
                  Mit einem Netzwerk spezialisierter Handwerker und modernster Produktionstechnologie realisieren wir Accessoire-Projekte von der ersten Idee bis zur Serienproduktion. Ob zeitlose Klassiker oder innovative Designs – wir entwickeln Accessoires, die Kollektionen vervollständigen und Marken definieren.
                </p>

                <p>
                  Unsere Expertise umfasst traditionelle Handwerkstechniken ebenso wie modernste Fertigungsverfahren. Von der Materialauswahl über Design-Entwicklung bis zur finalen Qualitätskontrolle – jedes Accessoire entsteht mit der Sorgfalt und Leidenschaft, die echte Qualität verdient.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Link to="/kontakt" className="btn-accent">
                  Accessoires-Projekt besprechen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Accessories;