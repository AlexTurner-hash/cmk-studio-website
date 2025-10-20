import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-produktionszeiten.jpg";

const Produktionszeiten = () => {
  return (
    <>
      <title>Produktionszeiten Textil realistisch planen - Timeline-Guide | CMK Studio</title>
      <meta name="description" content="Realistische Produktionszeiten für jede Produktkategorie: T-Shirts, Lingerie, Swimwear, Knitwear, Workwear. Timeline-Planung, Bottlenecks vermeiden, Europa vs. Fernost Vergleich." />
      
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
                  Planung
                </span>
                <span className="text-sm text-muted-foreground">
                  10 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                Produktionszeiten realistisch planen: Timeline-Guide für jede Produktkategorie
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Von T-Shirt bis Lingerie: Wie lange dauert Textilproduktion wirklich? Ein detaillierter Timeline-Guide 
                mit realistischen Zahlen statt Wunschdenken.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Timeline-Infografik für Textilproduktion mit Produktionsschritten"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Warum fast alle Startups ihre Timeline unterschätzen
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                "Wir wollen im November launchen, also müssen wir im Oktober produzieren" – dieser Satz fällt 
                in fast jedem Erstgespräch. Die Realität: Bis zur Produktion vergehen Monate. Und die Produktion 
                selbst ist nur ein kleiner Teil der Gesamtzeit.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Das Problem: Startups planen rückwärts vom Launch-Datum und unterschätzen systematisch jeden 
                einzelnen Schritt. Dann kommt Panik, Qualität leidet, oder der Launch muss verschoben werden.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die 7 Phasen jeder Textilproduktion
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Bevor ein einziges Teil genäht wird, durchläuft jede Kollektion diese Phasen:
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Phase 1: Design & Konzeption (2-4 Wochen)</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Skizzen, Moodboards, Farbkonzepte, erste Material-Recherche. Bei einfachen Basics schneller, 
                bei komplexen Designs länger.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Phase 2: Technische Entwicklung (2-3 Wochen)</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Schnittmuster erstellen, Gradierung (Größen), Tech-Packs erstellen. Diese Phase wird oft unterschätzt – 
                aber ohne saubere Tech-Packs kann kein Produzent arbeiten.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Phase 3: Materialbeschaffung (3-6 Wochen)</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Stoffe bestellen, Farben freigeben, Qualität prüfen. Bei Standard-Materialien schneller, 
                bei Custom-Entwicklungen (z.B. spezielle Drucke, Stickereien) deutlich länger.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Phase 4: Prototyping (3-5 Wochen)</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Erste Muster nähen, Passform prüfen, Anpassungen vornehmen. Rechnen Sie mit 2-3 Prototyp-Runden. 
                Jede Runde: 7-10 Tage.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Phase 5: Pre-Production (1-2 Wochen)</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Finale Freigabe, Produktions-Setup, Materialzuschnitt. Diese Phase wird oft vergessen – 
                aber auch hier lauern Verzögerungen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Phase 6: Produktion (2-4 Wochen)</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Nähen, Qualitätskontrolle, Verpackung. Die eigentliche Produktion ist oft der schnellste Teil – 
                wenn alles vorbereitet ist.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Phase 7: Logistik & Delivery (1-3 Wochen)</strong>
              </p>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Transport zur Lagerstätte / zu Ihnen. In Europa: 3-7 Tage. Aus Fernost per Luftfracht: 7-14 Tage. 
                Per Seefracht: 6-8 Wochen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Realistische Timelines nach Produktkategorie
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Basic T-Shirts & Sweats (Europa):</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Gesamtdauer: 10-14 Wochen<br />
                Design & Tech: 3 Wochen | Material: 3 Wochen | Prototyping: 3 Wochen | 
                Produktion: 2 Wochen | Logistik: 1 Woche
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Basic T-Shirts & Sweats (Fernost):</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Gesamtdauer: 16-24 Wochen<br />
                Längere Kommunikationswege, langsameres Prototyping, Seefracht-Logistik. 
                Der Preisvorteil wird durch Zeitnachteil erkauft.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Lingerie (Europa):</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Gesamtdauer: 14-18 Wochen<br />
                Design & Tech: 4 Wochen | Material: 4 Wochen (Spitzen, elastische Stoffe) | 
                Prototyping: 4 Wochen (komplexe Passform) | Produktion: 3 Wochen | Logistik: 1 Woche
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Swimwear (Europa):</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Gesamtdauer: 12-16 Wochen<br />
                Ähnlich wie Lingerie, aber Materialien sind standardisierter. Passform-Entwicklung 
                ist kritisch – rechnen Sie mit 3-4 Prototyp-Runden.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Knitwear / Strick (Europa):</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Gesamtdauer: 16-22 Wochen<br />
                Design & Tech: 4 Wochen | Strick-Setup: 3 Wochen | Material: 4 Wochen | 
                Prototyping: 4 Wochen | Produktion: 4 Wochen | Logistik: 1 Woche<br />
                Strickware ist aufwendig – Maschinenprogrammierung, komplexe Finishing-Prozesse.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Workwear / Corporate Fashion (Europa):</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Gesamtdauer: 12-16 Wochen<br />
                Plus: Zeit für Corporate-Approvals, Logo-Entwicklung, Testing. Workwear braucht oft 
                spezielle Zertifizierungen – das verlängert Material-Beschaffung.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Leather Goods / Accessories (Europa):</strong>
              </p>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Gesamtdauer: 10-14 Wochen<br />
                Leder-Qualität variiert stark – Material-Auswahl ist zeitintensiv. Aber Produktion selbst 
                ist oft schneller als bei Textilien.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die versteckten Zeitfresser: Was wirklich Zeit kostet
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Zeitfresser #1: Entscheidungs-Latenz</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Sie bekommen Prototypen – aber Feedback dauert eine Woche. Farb-Freigaben ziehen sich. 
                Interne Abstimmungen dauern. Jede Verzögerung addiert sich.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Zeitfresser #2: Material-Verfügbarkeit</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Der perfekte Stoff ist ausverkauft. Nachproduktion dauert 6 Wochen. Oder: Die Wunschfarbe 
                existiert nicht – Custom-Färbung nötig (+4 Wochen).
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Zeitfresser #3: Passform-Probleme</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Der Prototyp sitzt nicht. Schnittmuster muss angepasst werden. Neue Prototyp-Runde. 
                Das kann 2-3 Wochen kosten – pro Runde.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Zeitfresser #4: Produktionsauslastung</strong>
              </p>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Gute Produzenten sind ausgelastet. Wenn Sie im September für Dezember-Lieferung anfragen, 
                kann es zu spät sein. Produktionsslots müssen oft Monate im Voraus gebucht werden.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Europa vs. Fernost: Der Zeit-Vergleich
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die verbreitete Annahme: "Fernost ist schneller, weil größere Kapazitäten." Stimmt das?
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Realität:</strong>
              </p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• <strong>Kommunikation:</strong> Zeitverschiebung, Sprachbarrieren verlängern jede Entscheidung</li>
                <li>• <strong>Prototyping:</strong> Muster per Luftfracht dauern 7-10 Tage one-way. Jede Runde kostet 2-3 Wochen</li>
                <li>• <strong>Qualitätskontrolle:</strong> Probleme werden erst spät erkannt – oft nach Produktion</li>
                <li>• <strong>Logistik:</strong> Seefracht 6-8 Wochen. Luftfracht 7-14 Tage, aber teuer</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Ergebnis:</strong> Fernost-Produktion dauert oft 6-10 Wochen länger als Europa – 
                trotz schnellerer reiner Produktionszeit. Der Zeitvorteil Europas liegt in kurzen Wegen, 
                schneller Kommunikation und Flexibilität bei Problemen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Timeline-Optimierung: Wie Sie Zeit sparen
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Tipp #1: Parallel-Prozesse statt sequenziell</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Material-Bestellung und Schnittmuster-Entwicklung können parallel laufen. Design-Finalisierung 
                während Material-Beschaffung. Nutzen Sie Wartezeiten produktiv.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Tipp #2: Stock-Materials statt Custom</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Lagerware ist sofort verfügbar. Custom-Färbungen, -Drucke, -Stickereien verlängern die Timeline 
                um Wochen. Für den ersten Launch: Keep it simple.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Tipp #3: Erfahrene Partner = weniger Iterationen</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Ein guter Produzent erkennt Passform-Probleme früh und schlägt Lösungen vor. Das spart 
                1-2 Prototyp-Runden = 3-6 Wochen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Tipp #4: Puffer einplanen</strong>
              </p>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Planen Sie immer 20-30% Puffer ein. Wenn die Timeline 12 Wochen beträgt, kalkulieren Sie mit 
                15-16 Wochen. Lieber früh fertig als zu spät.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Express-Produktion: Geht es auch schneller?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Ja – aber zu einem Preis. Express-Produktion bedeutet:
              </p>

              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Aufpreise von 20-40% auf Produktionskosten</li>
                <li>• Nutzung von Lager-Materialien (weniger Auswahl)</li>
                <li>• Möglicherweise Kompromisse bei Passform-Optimierung</li>
                <li>• Höheres Fehlerrisiko</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Realistisch:</strong> Basic T-Shirts in 6-7 Wochen. Komplexe Produkte (Lingerie, Knitwear) 
                kaum beschleunigbar. Express ist für Notfälle, nicht für Standard-Planung.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Fazit: Zeit ist Ihre wertvollste Ressource
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Realistische Timeline-Planung ist der Unterschied zwischen erfolgreichem Launch und Desaster. 
                Rechnen Sie mit 12-16 Wochen für einfache Kollektionen, 16-24 Wochen für komplexe Produkte. 
                Planen Sie Puffer ein. Arbeiten Sie mit erfahrenen Partnern, die Bottlenecks kennen und vermeiden. 
                Dann wird Ihr Launch-Termin realistisch statt Wunschdenken.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Realistische Timeline für Ihr Projekt?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Wir erstellen eine detaillierte Timeline mit allen Produktionsschritten für Ihre Kollektion.
              </p>
              <Button size="lg" asChild>
                <a href="#contact">
                  Timeline-Planung anfragen
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

export default Produktionszeiten;