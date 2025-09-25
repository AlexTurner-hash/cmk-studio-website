import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-swimwear-realistic.jpg";

const Swimwear = () => {
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
                Swimwear-Produktion bei CMK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Technische Perfektion trifft Design-Innovation – CMK.Studio verfügt über außergewöhnliche Expertise in der hochwertigen Swimwear-Produktion.
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
                alt="High-Tech Swimwear-Produktion mit spezialisierten Maschinen"
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
                Swimwear: Technische Meisterleistung
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Swimwear-Produktion gehört zu den technisch anspruchsvollsten Bereichen der Textilherstellung. Bei CMK.Studio haben wir uns auf diese Spezialdisziplin fokussiert und verfügen über die Expertise und Ausstattung, um Bademode auf höchstem Niveau zu produzieren.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Einzigartige Expertise in Bademode
                </h3>

                <p>
                  Swimwear erfordert ein tiefes Verständnis für Materialwissenschaft, Konstruktionstechnik und die besonderen Anforderungen, die Wasser, Chlor und UV-Strahlung an Textilien stellen. Unsere Spezialisierung in diesem Bereich macht uns zu einem der wenigen Anbieter, die wirklich hochwertige Bademode produzieren können.
                </p>

                <p>
                  <strong>Unsere Swimwear-Kompetenzen:</strong>
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Konstruktion für optimale Passform auch im nassen Zustand</li>
                  <li>Spezialisierte Nähtechniken für wasserdichte Verbindungen</li>
                  <li>Kompetenz in Kompressions-Technologien für Performance-Swimwear</li>
                  <li>Expertise in nachhaltigen Swimwear-Materialien</li>
                  <li>Verarbeitung technischer Features wie UV-Schutz und Quick-Dry</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  High-Tech Produktion für Performance
                </h3>

                <p>
                  Moderne Swimwear-Produktion erfordert spezialisierte Maschinen und Verfahren:
                </p>

                <p>
                  <strong>Ultrasonic Welding:</strong> Wasserdichte Nähte durch Ultraschall-Schweißtechnologie, die ohne Löcher auskommt und maximale Dichtigkeit gewährleistet.
                </p>

                <p>
                  <strong>Heat-Sealing Equipment:</strong> Thermische Versiegelung für nahtlose Übergänge und professionelle Kantenverarbeitung.
                </p>

                <p>
                  <strong>Compression Testing:</strong> Spezielle Testverfahren für Kompressions-Swimwear und Performance-Eigenschaften.
                </p>

                <p>
                  <strong>Handcrafted Details:</strong> Komplexe Schnürungen, handapplizierten Verzierungen und individuelle Anpassungen durch erfahrene Spezialisten.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Materialien für höchste Ansprüche
                </h3>

                <p>
                  Swimwear-Materialien müssen extremen Bedingungen standhalten. Unser Portfolio umfasst die neuesten Entwicklungen:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Lycra Xtra Life:</strong> Chlorresistente Fasern mit 5-10x längerer Lebensdauer</li>
                  <li><strong>Vita by LYCRA:</strong> Bio-basierte Elastan-Fasern für nachhaltige Bademode</li>
                  <li><strong>Repreve® by UNIFI:</strong> Swimwear aus recycelten PET-Flaschen</li>
                  <li><strong>ECONYL®:</strong> Regeneriertes Nylon aus Meeresabfällen und Fischernetzen</li>
                  <li><strong>UPF 50+ Materials:</strong> Integrierter UV-Schutz für Surf- und Sportswear</li>
                  <li><strong>Quick-Dry Fabrics:</strong> Schnelltrocknende Technologien für aktive Swimwear</li>
                  <li><strong>Compression Textiles:</strong> Graduierte Kompression für Performance-Schwimmanzüge</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Von Handmade bis zur Hightech-Serie
                </h3>

                <p>
                  Unser Produktionsspektrum deckt alle Bereiche der Swimwear-Herstellung ab:
                </p>

                <p>
                  <strong>Couture Swimwear:</strong> Handgefertigte Luxus-Bademode mit individuellen Details, Swarovski-Kristallen und maßgeschneiderten Passformen.
                </p>

                <p>
                  <strong>Performance Swimwear:</strong> Technische Schwimmanzüge für Wettkampfsport mit computeroptimierter Hydrodynamik und Kompressionseigenschaften.
                </p>

                <p>
                  <strong>Commercial Collections:</strong> Skalierbare Produktion für Mainstream-Brands mit konsistenter Qualität und wettbewerbsfähigen Preisen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Produktkategorien & Spezialisierungen
                </h3>

                <p>
                  Unser Swimwear-Portfolio umfasst alle Segmente der Bademode:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fashion Swimwear:</strong> Bikinis, Badeanzüge und Tankinis in allen Stilrichtungen</li>
                  <li><strong>Performance Swimwear:</strong> Wettkampf-Schwimmanzüge und Training-Bademode</li>
                  <li><strong>Active Swimwear:</strong> Surf-, Kite- und Wassersport-Bekleidung</li>
                  <li><strong>Luxury Swimwear:</strong> High-End Bademode mit Premium-Materials und Details</li>
                  <li><strong>Sustainable Swimwear:</strong> Umweltfreundliche Kollektionen aus recycelten Materialien</li>
                  <li><strong>Plus-Size Swimwear:</strong> Spezialisierte Passformen für alle Körpertypen</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Nachhaltigkeit in der Swimwear-Produktion
                </h3>

                <p>
                  Die Swimwear-Industrie war lange Zeit auf umweltschädliche Materialien angewiesen. Wir setzen auf innovative, nachhaltige Lösungen:
                </p>

                <p>
                  <strong>Ocean-Positive Materials:</strong> Verwertung von Meeresplastik zu hochwertigen Swimwear-Stoffen.
                </p>

                <p>
                  <strong>Closed-Loop Recycling:</strong> Swimwear-to-Swimwear Recycling für echte Kreislaufwirtschaft.
                </p>

                <p>
                  <strong>Bio-Based Fibers:</strong> Pflanzliche Elastan-Alternativen für reduzierte Umweltauswirkungen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Qualitätssicherung & Testing
                </h3>

                <p>
                  Swimwear unterliegt besonderen Qualitätsanforderungen:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chlor-Resistance Testing:</strong> Beständigkeitsprüfung gegen Poolchemikalien</li>
                  <li><strong>UV-Protection Testing:</strong> Verifikation des Sonnenschutz-Faktors</li>
                  <li><strong>Fit-in-Water Testing:</strong> Passform-Tests im nassen Zustand</li>
                  <li><strong>Color-Fastness Testing:</strong> Farbechtheit gegen Salzwasser und UV-Strahlung</li>
                  <li><strong>Stretch & Recovery Testing:</strong> Elastizität und Rückstellkraft der Materialien</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  CMK.Studio Swimwear-Expertise
                </h3>

                <p>
                  Unsere Spezialisierung auf Swimwear macht uns zu einem der wenigen europäischen Anbieter mit echter Expertise in diesem anspruchsvollen Segment. Von der Materialauswahl über die Konstruktion bis zur finalen Qualitätsprüfung – wir beherrschen alle Aspekte hochwertiger Swimwear-Produktion.
                </p>

                <p>
                  Ob luxuriöse Resort-Kollektionen, technische Performance-Swimwear oder nachhaltige Eco-Collections – wir entwickeln gemeinsam mit Ihnen die perfekte Bademode für Ihre Zielgruppe.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Link 
                  to="/kontakt" 
                  className="btn-accent"
                >
                  Swimwear-Projekt starten
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

export default Swimwear;