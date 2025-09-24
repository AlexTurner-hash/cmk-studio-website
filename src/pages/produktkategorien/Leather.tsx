import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-leather.jpg";

const Leather = () => {
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
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground font-display">
                Leder Produktion
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Traditionelle Lederhandwerkskunst trifft auf moderne Präzisionsfertigung – für Lederwaren von zeitloser Eleganz und kompromissloser Qualität.
              </p>
            </div>
          </div>
        </section>

        {/* Production Image */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <img 
                src={productionImage} 
                alt="Premium Leder-Produktion mit traditionellen und modernen Techniken"
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
                Leder: Handwerk meets Innovation
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Lederverarbeitung ist eine der ältesten Handwerkskünste der Menschheit. Bei CMK.Studio verbinden wir diese jahrhundertealte Tradition mit modernsten Produktionstechniken, um Lederwaren zu schaffen, die sowohl handwerkliche Perfektion als auch zeitgemäße Innovation verkörpern.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Handwerkskunst trifft Präzisionstechnik
                </h3>

                <p>
                  Moderne Lederproduktion kombiniert traditionelle Handwerkstechniken mit computergesteuerten Präzisionswerkzeugen:
                </p>

                <p>
                  <strong>CNC-Lederschnitt:</strong> Millimetergenaue Zuschnitte durch computergesteuerte Schneideanlagen, die Materialverschwendung minimieren und perfekte Passgenauigkeit gewährleisten.
                </p>

                <p>
                  <strong>Traditionelle Handarbeit:</strong> Kanten färben, Punzieren, Prägen und Finishing werden von erfahrenen Lederhandwerkern ausgeführt, die ihr Handwerk über Jahre perfektioniert haben.
                </p>

                <p>
                  <strong>Moderne Nähmaschinen:</strong> Spezialisierte Industrienähmaschinen für verschiedene Lederstärken und -arten, von feinem Lammleder bis zu robustem Rindsleder.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Vielfalt der Lederarten und -qualitäten
                </h3>

                <p>
                  Unser Leder-Portfolio umfasst das gesamte Spektrum hochwertiger Lederwaren:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Vollleder:</strong> Premium-Rindsleder in verschiedenen Stärken und Oberflächenbehandlungen</li>
                  <li><strong>Exotische Leder:</strong> Straußen-, Krokodil- und Schlangenleder für Luxus-Accessoires</li>
                  <li><strong>Velours & Nubuk:</strong> Samtweiche Rauleder für elegante Bekleidung</li>
                  <li><strong>Lamm- & Ziegenleder:</strong> Weiche, flexible Leder für hochwertige Handschuhe und Jacken</li>
                  <li><strong>Performance Leather:</strong> Behandelte Leder mit speziellen Eigenschaften wie Wasserdichtheit</li>
                  <li><strong>Sustainable Leather:</strong> Pflanzlich gegerbte und umweltfreundlich produzierte Leder</li>
                  <li><strong>Vintage & Distressed:</strong> Gealterte Leder mit authentischem Charakter</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Von Handmade bis zur Präzisionsserie
                </h3>

                <p>
                  Je nach Anforderung bieten wir verschiedene Produktionsansätze:
                </p>

                <p>
                  <strong>Artisan Handcraft:</strong> Komplett handgefertigte Einzelstücke und kleine Serien für Luxus-Brands und individuelle Kundenwünsche.
                </p>

                <p>
                  <strong>Semi-Automated Production:</strong> Kombination aus maschineller Präzision und handwerklichen Details für optimale Effizienz bei erhaltener Individualität.
                </p>

                <p>
                  <strong>Industrial Precision:</strong> Hochvolumige Produktion mit computergesteuerten Verfahren für konsistente Qualität bei großen Stückzahlen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Spezialisierte Verarbeitungstechniken
                </h3>

                <p>
                  Unsere Leder-Expertise umfasst alle traditionellen und modernen Verarbeitungstechniken:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Kantenbearbeitung:</strong> Schleifen, Färben und Versiegeln für perfekte Kanten</li>
                  <li><strong>Prägetechniken:</strong> Von subtilen Strukturen bis zu komplexen Mustern</li>
                  <li><strong>Punzieren & Gravieren:</strong> Individuelle Verzierungen und Branding</li>
                  <li><strong>Applikationen:</strong> Nieten, Schnallen und andere Metallbeschläge</li>
                  <li><strong>Färbetechniken:</strong> Hand-Coloration und Patina-Effekte</li>
                  <li><strong>Laminierung:</strong> Verbund mit anderen Materialien für Funktionalität</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Produktkategorien unserer Leder-Expertise
                </h3>

                <p>
                  Von Bekleidung bis zu Accessoires – unser Spektrum umfasst alle Bereiche der Lederverarbeitung:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Lederbekleidung:</strong> Jacken, Mäntel, Hosen und Röcke in verschiedenen Stilrichtungen</li>
                  <li><strong>Taschen & Koffer:</strong> Von eleganten Handtaschen bis zu robusten Reisekoffern</li>
                  <li><strong>Schuhe & Stiefel:</strong> Klassische und moderne Schuhmodelle</li>
                  <li><strong>Gürtel & Accessoires:</strong> Feine Lederwaren für den täglichen Gebrauch</li>
                  <li><strong>Handschuhe:</strong> Von eleganten Dress-Handschuhen bis zu funktionalen Work-Gloves</li>
                  <li><strong>Möbel & Interieur:</strong> Hochwertige Lederbezüge und Polsterungen</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Nachhaltigkeit in der Lederproduktion
                </h3>

                <p>
                  Verantwortungsvolle Lederproduktion bedeutet für uns mehr als nur Qualität:
                </p>

                <p>
                  <strong>Vegetable Tanning:</strong> Pflanzliche Gerbung als umweltfreundliche Alternative zu Chromgerbung.
                </p>

                <p>
                  <strong>Waste Minimization:</strong> Optimierte Schnittmuster reduzieren Lederabfall auf ein Minimum.
                </p>

                <p>
                  <strong>Local Sourcing:</strong> Bevorzugung europäischer Gerbereien für kurze Transportwege.
                </p>

                <p>
                  <strong>Circular Approach:</strong> Upcycling von Lederresten zu kleineren Accessoires.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Qualitätssicherung und Standards
                </h3>

                <p>
                  Leder erfordert besondere Qualitätskontrolle und Sorgfalt:
                </p>

                <p>
                  <strong>Material Selection:</strong> Sorgfältige Auswahl und Klassifizierung jeder Lederhaut nach Qualität und Verwendungszweck.
                </p>

                <p>
                  <strong>Strength Testing:</strong> Prüfung von Reißfestigkeit, Dehnbarkeit und Abriebresistenz.
                </p>

                <p>
                  <strong>Color Fastness:</strong> Tests auf Farbechtheit und Lichtstabilität.
                </p>

                <p>
                  <strong>Care Instructions:</strong> Detaillierte Pflegeanleitungen für langanhaltende Schönheit.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  CMK.Studio Leder-Kompetenz
                </h3>

                <p>
                  Mit einem Team erfahrener Lederhandwerker und modernster Produktionstechnologie realisieren wir Lederprojekte von der ersten Skizze bis zur finalen Kollektion. Ob traditionelle Handwerkskunst oder innovative Designs – wir entwickeln Lederwaren, die überzeugen.
                </p>

                <p>
                  Unsere Expertise erstreckt sich von klassischen Lederartikeln über moderne Fashion-Pieces bis hin zu funktionalen Technical-Leather-Produkten. Jedes Projekt wird mit der Sorgfalt und Leidenschaft umgesetzt, die echtes Lederhandwerk verdient.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Link 
                  to="/kontakt" 
                  className="btn-accent"
                >
                  Leder-Projekt starten
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

export default Leather;