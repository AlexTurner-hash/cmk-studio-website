import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-nachhaltige-produktion.jpg";
import localTextileProducersImage from "@/assets/local-textile-producers-green.jpg";
import textileMachineryImage from "@/assets/textile-machinery-detail.jpg";
import cottonFieldImage from "@/assets/cotton-field-worker.jpg";
import textileFactoryImage from "@/assets/textile-factory-floor.jpg";

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
                  Interview
                </span>
                <span className="text-sm text-muted-foreground">
                  8 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                „Europa ist die Zukunft der nachhaltigen Textilproduktion"
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Ein Gespräch mit Claudia Kleinert über die Vorteile europäischer Fertigung, 
                kurze Lieferketten und warum Nachhaltigkeit wirtschaftlich sinnvoll ist.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/2fc892b4-8981-409e-b09c-3c37cecf8f68.png" 
                alt="Moderne Textilfabrik mit vielen Näharbeitsplätzen unter großem Industriedach - europäische Textilproduktion"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-[hsl(var(--cream-tan))] p-6 rounded-lg mb-8">
                <p className="text-sm text-muted-foreground mb-2 font-medium">Zur Person</p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  <strong>Claudia Kleinert</strong> ist Gründerin und Geschäftsführerin von CMK.Studio. 
                  Die studierte Modedesignerin brachte ihre eigene Dessous-Marke „blush Lingerie" erfolgreich 
                  auf den Markt und berät heute andere Modeschaffende bei der europäischen Textilproduktion.
                </p>
              </div>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Frau Kleinert, Sie setzen konsequent auf europäische Textilproduktion. Warum?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Claudia Kleinert:</strong> „Als ich vor Jahren meine eigene Marke aufgebaut habe, war mir schnell klar: 
                Wenn ich Qualität und Flexibilität haben möchte, führt kein Weg an Europa vorbei. Die Modeindustrie 
                befindet sich im größten Umbruch seit Jahrzehnten. Was früher als Kostenvorteil galt – die Produktion 
                in Asien – wird zunehmend zu einem Risikofaktor."
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                „Verbraucher werden bewusster, Regulierungen strenger und die Kosten für Transport steigen kontinuierlich. 
                Europäische Textilproduktion erlebt deshalb eine Renaissance – nicht nur wegen Nachhaltigkeitsauflagen, 
                sondern weil Marken die Vorteile von Nähe, Flexibilität und Transparenz neu entdecken."
              </p>

              <div className="aspect-[16/10] my-12 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/6768a154-e7fd-4913-a3ad-7586ed102089.png" 
                alt="Lokale Textilproduzenten arbeiten konzentriert an einer Maschine in einer gut beleuchteten europäischen Werkstatt"
                className="w-full h-full object-cover"
              />
              </div>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Was bedeuten kurze Lieferketten konkret für Ihre Kunden?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Claudia Kleinert:</strong> „Kurze Lieferketten bedeuten viel mehr als nur weniger CO2-Emissionen. 
                Sie ermöglichen eine völlig neue Art der Geschäftsführung: schnellere Reaktionen auf Marktveränderungen, 
                bessere Qualitätskontrolle und direktere Kommunikation mit Produktionspartnern."
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                „Ein konkretes Beispiel: Während asiatische Produzenten oft Mindestbestellmengen von 1.000+ Stück 
                pro Artikel verlangen, ermöglichen unsere europäischen Partner auch kleinere Auflagen ab 50 Stück. 
                Das ist besonders für Startups und Creator ein entscheidender Vorteil – sie können testen, 
                ohne sich finanziell zu übernehmen."
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Wie sieht es mit Qualitätsstandards aus?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Claudia Kleinert:</strong> „Europäische Produktionsstätten unterliegen strengeren Qualitäts- 
                und Umweltstandards. OEKO-TEX-Zertifizierungen, GOTS-Standards und faire Arbeitsbedingungen sind 
                hier Standard, nicht Ausnahme. Diese Transparenz wird für Marken immer wichtiger, da Verbraucher 
                zunehmend nach der Herkunft ihrer Kleidung fragen."
              </p>

              <div className="aspect-[4/3] my-12 rounded-lg overflow-hidden">
                <img 
                  src={cottonFieldImage} 
                  alt="Arbeiterin in einem Bio-Baumwollfeld - nachhaltige Materialgewinnung für die Textilproduktion"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                „Die Rückverfolgbarkeit der gesamten Lieferkette ist in Europa deutlich einfacher. 
                Von der Garnherstellung bis zum fertigen Produkt können alle Schritte dokumentiert 
                und überprüft werden – ein Marktvorteil, der immer relevanter wird. Unsere Kunden 
                können ihre Produktionsstätten besuchen, die Arbeiter treffen und sich selbst von 
                den Bedingungen überzeugen."
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Welche Rolle spielt Innovation in der europäischen Textilproduktion?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Claudia Kleinert:</strong> „Europäische Textilproduzenten investieren massiv in nachhaltige 
                Technologien: wassersparende Färbeverfahren, recycelte Materialien und energieeffiziente 
                Produktionsmethoden. Diese Innovationen machen nachhaltige Produktion nicht nur umweltfreundlicher, 
                sondern oft auch kostengünstiger."
              </p>

              <div className="aspect-[4/3] my-8 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/8861c531-eceb-4d48-a743-f9bfd5ebb8ed.png" 
                  alt="Moderne Textilmaschine verarbeitet recyceltes Denim - nachhaltige Materialverarbeitung in europäischer Produktion"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                „Digitalisierung spielt ebenfalls eine wichtige Rolle: Von der digitalen Musterentwicklung 
                bis zur automatisierten Qualitätskontrolle – europäische Produzenten nutzen Technologie, 
                um effizienter und präziser zu arbeiten. Besonders bei der Verarbeitung von recyceltem Denim 
                und anderen nachhaltigen Materialien ermöglichen uns moderne Maschinen, auch bei kleineren Auflagen 
                wirtschaftlich zu produzieren."
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Ist nachhaltige Produktion nicht grundsätzlich teurer?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Claudia Kleinert:</strong> „Das ist ein weit verbreiteter Mythos! Tatsächlich können 
                kurze Lieferketten, geringere Transportkosten und höhere Effizienz die Mehrkosten oft ausgleichen. 
                Hinzu kommen weiche Faktoren wie Markenimage und Kundenloyalität – nachhaltig produzierte Kleidung 
                erzielt oft höhere Margen."
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                „Besonders bei kleineren Auflagen ist europäische Produktion oft wirtschaftlicher als 
                asiatische Alternativen. Die Gesamtkosten sind entscheidend, nicht nur der reine Produktionspreis. 
                Wenn ich Transportkosten, Zölle, Qualitätsprobleme und das Risiko von Verzögerungen einrechne, 
                ist Europa oft die günstigere Alternative."
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Wie sehen Sie die Zukunft der Textilproduktion?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Claudia Kleinert:</strong> „Die Zukunft gehört flexiblen, transparenten und nachhaltigen 
                Produktionsmodellen. Marken, die bereits heute auf europäische Partner setzen, positionieren sich 
                optimal für die kommenden Herausforderungen. Der Trend zu 'Near-Shoring' und lokaler Produktion 
                wird sich weiter verstärken."
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                „Was mich besonders freut: Immer mehr junge Designer und Unternehmer verstehen, dass nachhaltige 
                Produktion nicht Verzicht bedeutet, sondern neue Möglichkeiten eröffnet. Sie können agiler auf 
                Marktveränderungen reagieren, direktere Beziehungen zu ihren Produktionspartnern aufbauen und 
                authentische Geschichten über ihre Produkte erzählen."
              </p>

              <div className="p-6 rounded-lg my-12">
                <blockquote className="text-lg italic text-foreground mb-4">
                  „Nachhaltige Produktion ist nicht nur ein Trend – es ist eine wirtschaftliche Notwendigkeit 
                  für die Zukunft der Modebranche."
                </blockquote>
                <cite className="text-sm text-muted-foreground">– Claudia Kleinert, Gründerin CMK.Studio</cite>
              </div>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Was raten Sie Designern, die mit nachhaltiger Produktion starten möchten?
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Claudia Kleinert:</strong> „Mein wichtigster Rat: Fangt klein an, aber fangt an! Viele 
                Designer träumen von der perfekten ersten Kollektion, aber es ist besser, mit wenigen, gut 
                durchdachten Teilen zu starten. Europäische Produktion macht das möglich – ihr könnt mit 
                50 oder 100 Stück pro Modell testen, lernen und euch dann steigern."
              </p>

              <div className="mt-12 mb-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/c5c83756-fb38-428c-9acb-577ef807c735.png" 
                      alt="Claudia Kleinert arbeitet konzentriert an Modezeichnungen in ihrem Büro - Gründerin von CMK.Studio"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-[hsl(var(--cream-tan))] p-6 rounded-lg h-full flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Zur Person</p>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      <strong>Claudia Kleinert</strong> ist Gründerin und Geschäftsführerin von CMK.Studio. 
                      Die studierte Modedesignerin brachte ihre eigene Dessous-Marke „blush Lingerie" erfolgreich 
                      auf den Markt und berät heute andere Modeschaffende bei der europäischen Textilproduktion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Interessiert an nachhaltiger europäischer Textilproduktion?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Sprechen Sie mit Claudia Kleinert über die Möglichkeiten für Ihr nächstes Projekt.
              </p>
              <Button size="lg" asChild>
                <a href="#contact">
                  Persönliches Gespräch vereinbaren
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