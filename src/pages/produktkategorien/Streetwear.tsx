import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-streetwear.jpg";

const Streetwear = () => {
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
                Streetwear-Produktion bei CMK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Von urbanen Basics bis zu limitierten Drops – moderne Streetwear-Produktion vereint traditionelle Handwerkskunst mit innovativer Technologie.
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
                alt="Moderne Streetwear-Produktion mit High-Tech Maschinen"
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
                Streetwear: Wo Kultur auf Handwerk trifft
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Streetwear ist mehr als Mode – es ist ein kultureller Ausdruck, der authentische Handwerkskunst mit urbaner Ästhetik verbindet. Bei CMK.Studio verstehen wir die DNA der Streetwear und produzieren Kollektionen, die sowohl die Straße als auch das Atelier respektieren.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Moderne Fabrikation trifft traditionelles Handwerk
                </h3>

                <p>
                  Unsere Streetwear-Produktion kombiniert computergesteuerte Schneidemaschinen mit handwerklicher Veredelung. Von der präzisen Lasercut-Technologie für komplexe Designs bis zur manuellen Verarbeitung von Details – jedes Piece durchläuft einen sorgfältig orchestrierten Produktionsprozess.
                </p>

                <p>
                  <strong>High-Tech Maschinen für Präzision:</strong> Unsere CNC-gesteuerten Schneideanlagen ermöglichen millimetergenaue Cuts, während programmierbare Nähmaschinen für gleichbleibende Qualität bei großen Stückzahlen sorgen.
                </p>

                <p>
                  <strong>Handmade Details für Authentizität:</strong> Distressing, Custom-Prints und besondere Veredelungen werden von erfahrenen Handwerkern ausgeführt, die das Gespür für streetwear-typische Ästhetik mitbringen.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Vielfalt der Materialien und Customization
                </h3>

                <p>
                  Von robusten Canvas-Geweben über technische Performance-Materialien bis hin zu nachhaltigen Bio-Baumwollen – unsere Materialauswahl deckt das gesamte Spektrum moderner Streetwear ab:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Heavy Cotton Jersey:</strong> 240-400gsm für Premium-Hoodies und Sweats</li>
                  <li><strong>Technical Fabrics:</strong> Ripstop-Nylons und wasserdichte Membranen für Tech-Wear</li>
                  <li><strong>Vintage-inspired Fabrics:</strong> Enzyme-washed Denim und garment-dyed Baumwollen</li>
                  <li><strong>Sustainable Options:</strong> Recycelte Polyester und GOTS-zertifizierte Bio-Baumwolle</li>
                  <li><strong>Custom Prints:</strong> Von Siebdruck über DTG bis zu Sublimationsdruck</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Von Handmade bis High-Tech
                </h3>

                <p>
                  Unser Produktionsspektrum reicht von komplett handgefertigten Einzelstücken bis zu vollautomatisierten Serienproduktionen:
                </p>

                <p>
                  <strong>Handmade Specials:</strong> Limitierte Pieces mit individuellen Distressing-Techniken, handapplizierte Patches und Custom-Stickereien – perfekt für exklusive Drops und Kollaborationen.
                </p>

                <p>
                  <strong>Semi-Automated Production:</strong> Kombiniert maschinelle Effizienz mit handwerklichen Finishing-Details für die optimale Balance zwischen Qualität und Skalierbarkeit.
                </p>

                <p>
                  <strong>High-Volume Automation:</strong> Computergesteuerte Produktionslinien für große Kollektionen, ohne Kompromisse bei Qualität und Detailtreue.
                </p>

                <h3 className="text-xl font-semibold text-foreground font-display mt-8 mb-4">
                  Warum CMK.Studio für Streetwear?
                </h3>

                <p>
                  Mit über 15 Jahren Erfahrung in der Textilproduktion verstehen wir die spezifischen Anforderungen der Streetwear-Kultur. Wir produzieren für etablierte Brands genauso wie für aufstrebende Designer und Content Creator, die authentische Streetwear mit Qualität und Substanz schaffen wollen.
                </p>

                <p>
                  Ob limitierte Drops, saisonale Kollektionen oder permanente Basics – wir entwickeln gemeinsam mit Ihnen die perfekte Produktionsstrategie für Ihre Streetwear-Vision.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <Link 
                  to="/#contact" 
                  className="btn-accent"
                >
                  Jetzt Streetwear-Projekt starten
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

export default Streetwear;