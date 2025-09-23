import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-micro-produktion.jpg";

const MicroProduktion = () => {
  return (
    <>
      <title>Micro-Produktion Modebranche - Kleine Auflagen große Wirkung | CMK.Studio</title>
      <meta name="description" content="Wie kleine Auflagen die Modebranche revolutionieren: Nachhaltiger, flexibler und kostengünstiger als Massenproduktion." />
      
      <div className="min-h-screen">
        <Navigation />
        
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8">
              <a href="/insights" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Zurück zu Insights
              </a>
            </Button>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-[hsl(var(--cream-tan-hover))] tracking-wide uppercase">
                  Trends
                </span>
                <span className="text-sm text-muted-foreground">
                  5 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                Kleine Auflagen, große Wirkung: Warum Micro-Produktion die Modebranche verändert
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Wie kleine Auflagen nachhaltiger, kostengünstiger und flexibler sein können als 
                Massenproduktion – ein Paradigmenwechsel in der Textilbranche.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Kleine Produktionsstätte mit hochwertigen Textilien in geringen Stückzahlen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Das Ende der Massenproduktion?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die Modebranche erlebt einen fundamentalen Wandel. Während traditionelle Hersteller 
                noch immer auf große Stückzahlen setzen, entdecken innovative Marken die Vorteile 
                der Micro-Produktion. Kleine Auflagen ermöglichen es, schneller auf Trends zu reagieren, 
                Risiken zu minimieren und nachhaltiger zu produzieren.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Dieser Paradigmenwechsel wird durch neue Technologien, veränderte Konsumentenerwartungen 
                und die Notwendigkeit nachhaltiger Geschäftsmodelle vorangetrieben. 
                Was früher als unwirtschaftlich galt, wird zur Chance für agile Unternehmen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Flexibilität als Wettbewerbsvorteil
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Micro-Produktion bedeutet extreme Flexibilität. Statt Monate im Voraus große Mengen 
                zu bestellen, können Marken schnell auf Marktveränderungen reagieren. 
                Ein neuer Trend? In wenigen Wochen kann eine kleine Testkollektion produziert werden. 
                Ein Design funktioniert nicht? Der Verlust bleibt überschaubar.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Diese Agilität ist besonders für Creator und kleine Marken wertvoll. 
                Sie können experimentieren, ohne ihr gesamtes Budget zu riskieren, 
                und erfolgreiche Designs schnell skalieren.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Nachhaltigkeit durch Bedarfsorientierung
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Einer der größten Vorteile der Micro-Produktion ist die Nachhaltigkeit. 
                Kleine Auflagen reduzieren Überproduktion und damit Textilabfälle drastisch. 
                Statt auf Verdacht zu produzieren und später zu vernichten, wird bedarfsorientiert gefertigt.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Zusätzlich ermöglichen kurze Lieferketten und lokale Produktion weitere 
                Nachhaltigkeitsvorteile: weniger Transport, bessere Arbeitsbedingungen 
                und höhere Transparenz in der gesamten Wertschöpfungskette.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Wirtschaftlichkeit neu gedacht
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Traditionell galten große Stückzahlen als Voraussetzung für wirtschaftliche Produktion. 
                Micro-Produktion dreht diese Logik um: Geringere Kapitalbindung, reduzierte Lagerkosten 
                und minimierte Verlustrisiken können die höheren Stückkosten mehr als ausgleichen.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Besonders für Premium-Marken und Nischenzielgruppen ist Micro-Produktion oft 
                wirtschaftlicher als Massenproduktion. Die Gesamtrentabilität steigt, 
                auch wenn der einzelne Artikel mehr kostet.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Technologie als Enabler
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Moderne Technologien machen Micro-Produktion erst möglich. 
                Digitale Designtools verkürzen Entwicklungszeiten, automatisierte Schnittlegung 
                reduziert Verschnitt und flexible Produktionsanlagen ermöglichen wirtschaftliche 
                Fertigung auch bei kleinen Stückzahlen.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                3D-Design und virtuelle Anproben eliminieren physische Prototypen, 
                während On-Demand-Produktion Lagerbestände überflüssig macht. 
                Diese Technologien revolutionieren die gesamte Wertschöpfungskette.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die neue Marktdynamik
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Micro-Produktion verändert auch die Marktdynamik. Kleine Marken können nun 
                mit großen Konzernen konkurrieren, da sie nicht mehr die Nachteile hoher 
                Mindestbestellmengen haben. Kreativität und Geschwindigkeit werden wichtiger 
                als pure Größe.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Gleichzeitig entstehen neue Geschäftsmodelle: Limited Editions, 
                Drop-Kulturen und personalisierte Mode werden durch Micro-Produktion 
                erst wirtschaftlich möglich.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Ausblick: Die Zukunft der Mode
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Micro-Produktion ist mehr als ein Trend – sie ist die Zukunft der Modebranche. 
                In einer Welt, die nach Nachhaltigkeit, Individualität und Flexibilität verlangt, 
                bietet sie die perfekte Antwort. Unternehmen, die jetzt umdenken und die Vorteile 
                kleiner Auflagen nutzen, werden die Gewinner von morgen sein.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Interessiert an Micro-Produktion?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Entdecken Sie die Möglichkeiten kleiner Auflagen für Ihr Projekt.
              </p>
              <Button size="lg" asChild>
                <a href="#contact">
                  Jetzt Projekt starten
                </a>
              </Button>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default MicroProduktion;