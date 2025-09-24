import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-lingerie.jpg";

const Lingerie = () => {
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
                Lingerie-Produktion bei CMK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Präzision, Eleganz und Komfort – CMK.Studio ist spezialisiert auf die anspruchsvolle Produktion hochwertiger Dessous und Intimate Apparel.
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
                alt="Spezialisierte Lingerie-Produktion mit Präzisionsmaschinen"
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
                Lingerie: Meisterwerk der Präzision
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Lingerie-Produktion ist eine der anspruchsvollsten Disziplinen der Textilherstellung. Bei CMK.Studio verfügen wir über jahrelange Spezialisierung in diesem Bereich und die technische Ausstattung, um auch komplexeste Dessous-Designs in höchster Qualität zu realisieren.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Spezialisierte Expertise für Intimate Apparel
                </h3>

                <p>
                  Lingerie erfordert mehr als nur Näh-Know-how. Es ist eine Kombination aus technischem Verständnis, ästhetischem Gespür und jahrelanger Erfahrung mit den besonderen Anforderungen von Intimate Apparel.
                </p>

                <p>
                  <strong>Unsere Kernkompetenzen:</strong>
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Präzise Größengraduierung für perfekte Passformen in allen Cup-Größen</li>
                  <li>Komplexe Schnittführung und 3D-Konstruktion für optimalen Sitz</li>
                  <li>Verarbeitung empfindlichster Materialien wie Spitze, Seide und Tüll</li>
                  <li>Spezialisierte Nähtechniken für nahtlose Übergänge</li>
                  <li>Integration funktionaler Elemente wie Bügel, Polsterungen und Verschlüsse</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  High-Tech Präzision trifft Handwerkskunst
                </h3>

                <p>
                  Moderne Lingerie-Produktion vereint computergesteuerte Präzision mit traditioneller Handwerkskunst:
                </p>

                <p>
                  <strong>Technologische Innovation:</strong> Ultraschall-Schweißmaschinen für nahtlose Verarbeitung, computergesteuerte Spitze-Applikationsmaschinen und 3D-Bodyscanning für optimale Passform-Entwicklung.
                </p>

                <p>
                  <strong>Handwerkliche Veredelung:</strong> Komplexe Spitzenverarbeitung, handgesetzte Strasssteine und Perlen, sowie manuelle Qualitätskontrolle für jeden Artikel.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Materialvielfalt für jeden Lingerie-Stil
                </h3>

                <p>
                  Von zarter Spitze bis zu funktionalen Sport-BHs – unser Material-Portfolio umfasst das gesamte Spektrum moderner Lingerie:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Spitzen & Embroideries:</strong> Französische Spitze, italienische Stickereien, Guipure und Stretch-Lace</li>
                  <li><strong>Seide & Satin:</strong> Naturseide, Mikrofaser-Satin und Charmeuse für luxuriöse Haptik</li>
                  <li><strong>Funktionsmaterialien:</strong> Feuchtigkeitsregulierende Fasern und antimikrobielle Treatments</li>
                  <li><strong>Seamless Materials:</strong> Nahtlose Gestricke für unsichtbare Lingerie</li>
                  <li><strong>Sustainable Options:</strong> Bio-Baumwolle, Tencel und recycelte Mikrofasern</li>
                  <li><strong>Technical Components:</strong> Memory-Foam Polsterungen, flexible Bügel und innovative Verschlusssysteme</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Von Couture bis zur Serie
                </h3>

                <p>
                  Unsere Produktionskapazitäten decken alle Bereiche der Lingerie-Herstellung ab:
                </p>

                <p>
                  <strong>Haute Couture Lingerie:</strong> Handgefertigte Unikate mit komplexesten Details, maßgeschneiderte Anfertigungen und limitierte Luxus-Editionen.
                </p>

                <p>
                  <strong>Premium Ready-to-Wear:</strong> Hochwertige Kollektionen mit maschineller Effizienz und handwerklichen Finishing-Details.
                </p>

                <p>
                  <strong>Commercial Production:</strong> Skalierbare Produktion für Mainstream-Brands mit konsistenter Qualität und wettbewerbsfähigen Preisen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Spezialisierte Produktkategorien
                </h3>

                <p>
                  Unser Lingerie-Portfolio umfasst alle Kategorien des Intimate Apparel:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Bras:</strong> Von T-Shirt BHs bis zu komplexen Balconette-Designs</li>
                  <li><strong>Panties:</strong> Strings, Hipster, High-Waist und nahtlose Varianten</li>
                  <li><strong>Shapewear:</strong> Bodyforming-Unterwäsche mit Komfort-Technologien</li>
                  <li><strong>Loungewear:</strong> Komfortable Sets für zuhause</li>
                  <li><strong>Nachtwäsche:</strong> Von eleganten Negligés bis zu funktionalen Pyjamas</li>
                  <li><strong>Bridal Lingerie:</strong> Besondere Dessous für den schönsten Tag</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Qualität und Compliance
                </h3>

                <p>
                  Lingerie unterliegt besonderen Qualitäts- und Sicherheitsstandards. Wir erfüllen alle relevanten Normen:
                </p>

                <p>
                  <strong>Oeko-Tex Standard 100:</strong> Schadstoffprüfung für alle hautkontaktierenden Materialien.
                </p>

                <p>
                  <strong>EU-Konformität:</strong> Alle Produkte entsprechen den EU-Richtlinien für Textilien.
                </p>

                <p>
                  <strong>Fit-Tests:</strong> Umfangreiche Passform-Tests mit verschiedenen Körpertypen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Warum CMK.Studio für Lingerie?
                </h3>

                <p>
                  Mit über einem Jahrzehnt Erfahrung in der Lingerie-Produktion und einem Team spezialisierter Fachkräfte sind wir der ideale Partner für anspruchsvolle Dessous-Projekte. Von der ersten Skizze bis zur finalen Kollektion – wir entwickeln Lingerie, die überzeugt.
                </p>

                <p>
                  Unsere Expertise erstreckt sich von klassischen Dessous über funktionale Sportunterwäsche bis hin zu innovativen Shapewear-Lösungen. Egal ob Start-up oder etablierte Marke – wir realisieren Ihre Lingerie-Vision mit höchster Präzision und Qualität.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Link 
                  to="/kontakt" 
                  className="btn-accent"
                >
                  Lingerie-Projekt besprechen
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

export default Lingerie;