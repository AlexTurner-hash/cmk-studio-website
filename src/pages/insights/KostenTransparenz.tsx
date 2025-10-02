import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-kosten-transparenz.jpg";

const KostenTransparenz = () => {
  return (
    <>
      <title>Kosten-Transparenz: Was kostet Modeproduktion wirklich? | CMK.Studio</title>
      <meta name="description" content="Realistische Kostenübersicht für Modekollektion-Produktion: Materialkosten, Fertigung, MOQs, Kalkulation. Vergleich Europa vs. Fernost mit konkreten Zahlen." />
      
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
                  Kalkulation
                </span>
                <span className="text-sm text-muted-foreground">
                  10 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                Kosten-Transparenz: Was kostet die Produktion einer Modekollektion wirklich?
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Realistische Zahlen statt Wunschdenken: Ein detaillierter Einblick in die tatsächlichen Kosten 
                der Modeproduktion – von Material über Fertigung bis Logistik.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Kostenkalkulation für Modeproduktion mit Dokumenten und Stoffproben"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die versteckten Kosten: Warum 5€ pro Teil selten realistisch sind
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                "Ich habe gehört, man kann T-Shirts für 5€ produzieren lassen" – dieser Satz fällt in fast jedem 
                Erstgespräch mit Fashion-Startups. Die Realität sieht anders aus. Ein qualitativ hochwertiges 
                Basic-T-Shirt in Europa kostet zwischen 12-18€ in der Produktion. Aber warum diese Diskrepanz?
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die 5€-Kalkulation ignoriert systematisch Entwicklungskosten, Prototyping, Qualitätskontrollen, 
                Zertifizierungen und realistische Materialpreise für nachhaltige Stoffe. Wer mit dieser Kalkulation 
                startet, landet unweigerlich bei Billigproduzenten mit fragwürdigen Standards.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Kostenaufschlüsselung: T-Shirt-Produktion im Detail
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Material (40-45% der Kosten):</strong>
              </p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• GOTS-zertifizierte Bio-Baumwolle: 6-8€/kg</li>
                <li>• Nackenband, Etiketten, Verpackung: 0,80-1,20€</li>
                <li>• Schnittmuster und Gradierung: einmalig 200-400€</li>
              </ul>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Fertigung (35-40% der Kosten):</strong>
              </p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Zuschnitt: 0,50-0,80€ pro Teil</li>
                <li>• Nähen: 3-5€ pro Teil (abhängig von Komplexität)</li>
                <li>• Qualitätskontrolle: 0,40-0,60€ pro Teil</li>
              </ul>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Zusatzkosten (15-20% der Kosten):</strong>
              </p>
              <ul className="mb-8 space-y-2 text-muted-foreground font-body">
                <li>• Prototyping: 3-5 Muster à 80-120€</li>
                <li>• Logistik innerhalb Europas: 1-2€ pro Teil</li>
                <li>• Projektmanagement und Koordination: 8-12% Aufschlag</li>
              </ul>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Europa vs. Fernost: Der ehrliche Kostenvergleich
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Ein Basic-T-Shirt aus Bangladesh kostet tatsächlich 3-5€ in der Produktion. Aber diese Rechnung 
                ignoriert versteckte Kosten, die erst später sichtbar werden:
              </p>

              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Internationale Logistik: 2-4€ pro Teil (Luft) oder 8-12 Wochen (See)</li>
                <li>• Zollabwicklung und Import: 1-2€ pro Teil + Zeitaufwand</li>
                <li>• Qualitätsprobleme: 10-15% Ausschuss sind normal</li>
                <li>• Nachbestellungen: Minimum Order Quantities von 1000+ Stück</li>
                <li>• Fehlende Reaktionsfähigkeit: Korrek­turen dauern Monate</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Real Total Cost of Ownership:</strong> Das 5€-T-Shirt aus Fernost kostet am Ende 
                oft 10-14€ – plus monatelange Wartezeiten, Qualitätsprobleme und Zero Flexibilität.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Mindestbestellmengen (MOQs): Der unterschätzte Kostenfaktor
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Fernost-Produzenten arbeiten mit MOQs von 500-1000 Stück pro Farbe und Größe. Ein T-Shirt in 
                4 Farben und 5 Größen bedeutet also: 20 Varianten × 500 Stück = 10.000 Teile Mindestbestellung. 
                Bei 5€ Produktion = 50.000€ Kapitalbindung.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Europäische Micro-Production startet bei 50-100 Stück pro Variante. Gleiche Kollektion: 
                20 Varianten × 50 Stück = 1.000 Teile. Bei 14€ Produktion = 14.000€ Kapitalbindung. 
                Der höhere Stückpreis wird durch drastisch niedrigere MOQs kompensiert.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Komplexe Produkte: Warum Lingerie und Swimwear besonders sind
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die Kostenstruktur ändert sich dramatisch bei technisch anspruchsvollen Kategorien:
              </p>

              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• <strong>Lingerie:</strong> 18-35€ Produktionskosten (Spezial-Materialien, aufwendige Verarbeitung)</li>
                <li>• <strong>Swimwear:</strong> 15-28€ (technische Stoffe, aufwendige Passform-Entwicklung)</li>
                <li>• <strong>Workwear:</strong> 20-45€ (Zertifizierungen, Sicherheitsstandards, Langlebigkeit)</li>
                <li>• <strong>Knitwear:</strong> 25-60€ (spezialisierte Strickereien, aufwendige Finishing-Prozesse)</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Bei diesen Kategorien macht europäische Produktion nicht nur qualitativ, sondern auch wirtschaftlich Sinn: 
                Kürzere Entwicklungszyklen, weniger Prototyp-Runden, sofortige Korrekturmöglichkeiten.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die versteckte Kostenexplosion: Was passiert bei Problemen?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Ein reales Beispiel: Ein Startup produziert 2000 Swimwear-Teile in China für 8€/Stück. 
                Nach Ankunft in Europa stellt sich heraus: Die Passform stimmt nicht. Lösungsoptionen:
              </p>

              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• <strong>Option A:</strong> Neue Produktion (8-12 Wochen, 16.000€ + Logistik)</li>
                <li>• <strong>Option B:</strong> Lokale Änderungsschneiderei (4-8€ pro Teil = 8.000-16.000€ Zusatzkosten)</li>
                <li>• <strong>Option C:</strong> Mit Rabatten verkaufen (Imageschaden + Verlusgeschäft)</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Hätte die Produktion in Europa stattgefunden:</strong> Problem nach 2 Teilen erkannt, 
                Schnitt korrigiert, Produktion fortgesetzt. Mehrkosten: 0€. Zeitverlust: 3 Tage statt 12 Wochen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Faire Kalkulation: So planen Sie realistisch
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Eine realistische Gesamtkalkulation für eine kleine Fashion-Kollektion (4 Styles, 500 Teile):
              </p>

              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Entwicklung und Design: 2.000-4.000€</li>
                <li>• Prototyping (3-5 Runden): 1.500-3.000€</li>
                <li>• Materialkosten: 3.500-6.000€</li>
                <li>• Produktion: 6.000-9.000€</li>
                <li>• Qualitätskontrolle und Verpackung: 800-1.200€</li>
                <li>• Logistik: 600-1.000€</li>
                <li>• Projektmanagement: 1.200-1.800€</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Gesamtkosten: 15.600 - 26.000€</strong> für 500 hochwertige Teile. 
                Das sind 31-52€ pro Teil – was bei einem Verkaufspreis von 90-150€ eine gesunde Marge ermöglicht.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Fazit: Ehrliche Kalkulation ist der Grundstein für Erfolg
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Unrealistische Kalkulationen sind die häufigste Ursache für gescheiterte Fashion-Startups. 
                Wer mit 5€-Produktionskosten plant, wird entweder bei der Qualität oder bei der Marge massive 
                Abstriche machen müssen. Realistische Planung mit fairen, transparenten Kostenstrukturen 
                schafft die Basis für nachhaltiges Wachstum – nicht nur ökologisch, sondern auch wirtschaftlich.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Realistische Kalkulation für Ihr Projekt?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Wir erstellen eine transparente, detaillierte Kostenkalkulation für Ihre Kollektion.
              </p>
              <Button size="lg" asChild>
                <a href="#contact">
                  Kostenlose Kalkulation anfragen
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

export default KostenTransparenz;