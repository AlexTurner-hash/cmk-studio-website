import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-nachhaltige-produktion.jpg";

const NachhaltigeTextilproduktion = () => {
  return (
    <>
      <title>Nachhaltige Textilproduktion Europa - Chancen für Marken | CMK.Studio</title>
      <meta name="description" content="Entdecken Sie die Vorteile nachhaltiger Textilproduktion in Europa: Kurze Lieferketten, faire Standards und Qualität für Ihre Marke." />
      
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
                  Nachhaltigkeit
                </span>
                <span className="text-sm text-muted-foreground">
                  6 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                Nachhaltige Textilproduktion in Europa: Chancen für Marken und Creator
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Warum europäische Fertigung der Schlüssel für nachhaltige Mode ist und welche Vorteile 
                kurze Lieferketten für Ihre Marke haben.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Moderne europäische Textilfabrik mit nachhaltigen Produktionsmethoden"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Der Wandel in der Modeindustrie
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die Modeindustrie befindet sich im größten Umbruch seit Jahrzehnten. Verbraucher werden bewusster, 
                Regulierungen strenger und die Kosten für Transport und Kommunikation steigen kontinuierlich. 
                Was früher als Kostenvorteil galt – die Produktion in Asien – wird zunehmend zu einem Risikofaktor.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Europäische Textilproduktion erlebt eine Renaissance. Nicht nur wegen strengerer Nachhaltigkeitsauflagen, 
                sondern weil Marken und Creator die Vorteile von Nähe, Flexibilität und Transparenz neu entdecken.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Kurze Lieferketten: Mehr als nur Nachhaltigkeit
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Kurze Lieferketten bedeuten nicht nur weniger CO2-Emissionen. Sie ermöglichen auch eine völlig 
                neue Art der Geschäftsführung: schnellere Reaktionen auf Marktveränderungen, bessere Qualitätskontrolle 
                und direktere Kommunikation mit Produktionspartnern.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Während asiatische Produzenten oft Mindestbestellmengen von 1.000+ Stück pro Artikel verlangen, 
                ermöglichen europäische Partner auch kleinere Auflagen. Das ist besonders für Startups und Creator 
                ein entscheidender Vorteil.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Qualitätsstandards und Transparenz
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Europäische Produktionsstätten unterliegen strengeren Qualitäts- und Umweltstandards. 
                OEKO-TEX-Zertifizierungen, GOTS-Standards und faire Arbeitsbedingungen sind hier Standard, 
                nicht Ausnahme. Diese Transparenz wird für Marken immer wichtiger, da Verbraucher zunehmend 
                nach der Herkunft ihrer Kleidung fragen.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die Rückverfolgbarkeit der gesamten Lieferkette ist in Europa deutlich einfacher. 
                Von der Garnherstellung bis zum fertigen Produkt können alle Schritte dokumentiert 
                und überprüft werden – ein Marktvorteil, der immer relevanter wird.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Innovation und Technologie
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Europäische Textilproduzenten investieren massiv in nachhaltige Technologien: 
                wassersparende Färbeverfahren, recycelte Materialien und energieeffiziente Produktionsmethoden. 
                Diese Innovationen machen nachhaltige Produktion nicht nur umweltfreundlicher, sondern oft 
                auch kostengünstiger.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Digitalisierung spielt ebenfalls eine wichtige Rolle: Von der digitalen Musterentwicklung 
                bis zur automatisierten Qualitätskontrolle – europäische Produzenten nutzen Technologie, 
                um effizienter und präziser zu arbeiten.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die Wirtschaftlichkeit nachhaltiger Produktion
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Ein weit verbreiteter Mythos ist, dass nachhaltige Produktion grundsätzlich teurer ist. 
                Tatsächlich können kurze Lieferketten, geringere Transportkosten und höhere Effizienz 
                die Mehrkosten oft ausgleichen. Hinzu kommen weiche Faktoren wie Markenimage und Kundenloyalität.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Besonders bei kleineren Auflagen ist europäische Produktion oft wirtschaftlicher als 
                asiatische Alternativen. Die Gesamtkosten (Total Cost of Ownership) sind entscheidend, 
                nicht nur der reine Produktionspreis.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Ausblick: Die Zukunft der Textilproduktion
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die Zukunft gehört flexiblen, transparenten und nachhaltigen Produktionsmodellen. 
                Marken, die bereits heute auf europäische Partner setzen, positionieren sich optimal 
                für die kommenden Herausforderungen. Der Trend zu "Near-Shoring" und lokaler Produktion 
                wird sich weiter verstärken – nicht nur aus Nachhaltigkeitsgründen, sondern aus 
                wirtschaftlicher Notwendigkeit.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Interessiert an nachhaltiger Textilproduktion?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Erfahren Sie mehr über unsere nachhaltigen Produktionsmöglichkeiten in Europa.
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

export default NachhaltigeTextilproduktion;