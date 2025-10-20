import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-zertifizierungen-vergleich.jpg";

const Zertifizierungen = () => {
  return (
    <>
      <title>GOTS vs. OEKO-TEX vs. BSCI: Zertifizierungs-Guide | CMK Studio</title>
      <meta name="description" content="Welche Textil-Zertifizierung braucht Ihre Marke? Vergleich GOTS, OEKO-TEX, BSCI, RWS. Kosten, Anforderungen, Zielgruppen. Entscheidungshilfe für nachhaltige Mode." />
      
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
                  9 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                GOTS vs. OEKO-TEX vs. BSCI: Welche Zertifizierung braucht Ihre Marke wirklich?
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Nicht jedes Label braucht GOTS – aber jede Marke braucht die richtige Zertifizierung. 
                Ein strukturierter Vergleich für fundierte Entscheidungen.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Vergleich verschiedener Textil-Zertifizierungen mit Dokumenten"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Der Zertifizierungs-Dschungel: Warum Transparenz schwierig ist
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                "Wir produzieren nachhaltig" – dieser Satz steht auf fast jeder zweiten Fashion-Website. 
                Aber was heißt das konkret? Welche Standards werden eingehalten? Und wer kontrolliert das?
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Textil-Zertifizierungen schaffen Klarheit. Aber die Auswahl ist überwältigend: GOTS, OEKO-TEX, 
                BSCI, Fair Trade, Cradle to Cradle, RWS, GRSBLUESIGN®, und dutzende mehr. Jede Zertifizierung 
                prüft andere Aspekte, kostet unterschiedlich viel und richtet sich an verschiedene Zielgruppen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                GOTS: Der Gold-Standard für Bio-Textilien
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Was wird zertifiziert:</strong> Die gesamte textile Lieferkette – vom Anbau der Rohstoffe 
                bis zum fertigen Produkt. GOTS (Global Organic Textile Standard) ist die strengste und umfassendste 
                Zertifizierung.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Anforderungen:</strong>
              </p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Mindestens 70% bio-zertifizierte Naturfasern (GOTS "made with organic")</li>
                <li>• Mindestens 95% bio-zertifizierte Naturfasern (GOTS "organic")</li>
                <li>• Verbot gefährlicher Chemikalien</li>
                <li>• Soziale Mindeststandards (ILO-Kernarbeitsnormen)</li>
                <li>• Umweltkriterien in der gesamten Produktionskette</li>
                <li>• Jährliche Kontrollen durch unabhängige Zertifizierer</li>
              </ul>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Kosten:</strong> Zertifizierung pro Produktionsstätte: 2.000-5.000€ pro Jahr + Audit-Kosten. 
                Nur Betriebe können zertifiziert werden, nicht einzelne Marken.
              </p>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Für wen sinnvoll:</strong> Premium-Marken mit klarem Nachhaltigkeits-USP, Babybekleidung, 
                Naturkosmetik-Marken im Textilsegment.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Wichtig zu wissen:</strong> GOTS setzt voraus, dass Ihre Produzenten bereits zertifiziert sind. 
                Sie können als Startup nicht "einfach GOTS-zertifiziert produzieren lassen" – Sie müssen mit 
                bereits zertifizierten Betrieben arbeiten.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                OEKO-TEX Standard 100: Schadstoffgeprüfte Textilien
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Was wird zertifiziert:</strong> Schadstofffreiheit des fertigen Textils. OEKO-TEX prüft, 
                ob im fertigen Produkt gesundheitlich bedenkliche Substanzen enthalten sind.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Anforderungen:</strong>
              </p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Prüfung auf über 100 Schadstoffe</li>
                <li>• Grenzwerte strenger als gesetzliche Vorgaben</li>
                <li>• Verschiedene Produktklassen (Baby, Hautkontakt, nicht-direkter Kontakt)</li>
                <li>• Regelmäßige Stichproben</li>
              </ul>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Kosten:</strong> Deutlich günstiger als GOTS. Zertifizierung einzelner Artikel möglich. 
                300-1.500€ pro Jahr je nach Produktrange.
              </p>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Für wen sinnvoll:</strong> Fast alle Marken. OEKO-TEX ist ein sinnvoller Basis-Standard, 
                der gesundheitliche Unbedenklichkeit nachweist – ohne die komplexen Anforderungen von GOTS.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Wichtig zu wissen:</strong> OEKO-TEX sagt nichts über Bio-Anbau, faire Arbeitsbedingungen 
                oder ökologische Produktionsprozesse aus. Es ist rein eine Schadstoff-Prüfung.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                BSCI: Business Social Compliance Initiative
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Was wird zertifiziert:</strong> Soziale Standards in der Produktion. BSCI fokussiert sich 
                auf Arbeitsbedingungen, faire Löhne und Sicherheit.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Anforderungen:</strong>
              </p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Verbot von Kinderarbeit und Zwangsarbeit</li>
                <li>• Arbeitsschutz und Sicherheitsstandards</li>
                <li>• Faire Entlohnung</li>
                <li>• Vereinigungsfreiheit und Recht auf Kollektivverhandlungen</li>
                <li>• Regelmäßige Audits</li>
              </ul>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                <strong>Für wen sinnvoll:</strong> Besonders relevant für Marken, die in Risikoländern produzieren. 
                Europäische Produktion erfüllt BSCI-Standards meist automatisch durch gesetzliche Regelungen.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Wichtig zu wissen:</strong> BSCI ist keine Zertifizierung im engeren Sinn, sondern ein 
                Audit-System. Es gibt keine "BSCI-zertifizierten Produkte", nur geprüfte Produktionsstätten.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                RWS: Responsible Wool Standard
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Speziell für Wollprodukte: RWS zertifiziert artgerechte Tierhaltung und nachhaltige 
                Landwirtschaft. Relevant für Knitwear-Marken, die Woll-Kollektionen produzieren. 
                Ähnlich funktioniert RDS (Responsible Down Standard) für Daunenprodukte.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Decision Tree: Welche Zertifizierung für welche Marke?
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Sie sind ein Startup mit limitiertem Budget:</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                → Starten Sie mit OEKO-TEX Standard 100. Es ist bezahlbar, anerkannt und schafft Vertrauen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Sie produzieren Premium-Bio-Mode:</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                → GOTS ist Pflicht. Ihre Zielgruppe erwartet diesen Standard und ist bereit, dafür zu bezahlen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Sie produzieren in Fernost:</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                → Kombinieren Sie OEKO-TEX (Schadstofffreiheit) mit BSCI (soziale Standards). 
                Ihre Kunden wollen wissen, dass faire Bedingungen herrschen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Sie produzieren Workwear oder Hospitality-Kollektionen:</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                → OEKO-TEX ist ideal. B2B-Kunden achten auf Schadstofffreiheit, 
                GOTS ist hier oft überdimensioniert.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Sie produzieren Knitwear mit Wolle:</strong>
              </p>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                → Kombinieren Sie RWS (verantwortungsvolle Wolle) mit OEKO-TEX für ein rundes Nachhaltigkeits-Profil.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die versteckte Kosten-Falle: Warum "einfach zertifizieren" nicht funktioniert
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Viele Startups unterschätzen den Aufwand. GOTS-Zertifizierung bedeutet: Sie können nur mit 
                bereits zertifizierten Betrieben arbeiten. Wechseln Sie den Lieferanten, braucht auch dieser 
                eine GOTS-Zertifizierung. Das schränkt Ihre Optionen massiv ein und erhöht die Kosten.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Pragmatischer Ansatz:</strong> Starten Sie mit OEKO-TEX. Arbeiten Sie mit europäischen 
                Produzenten, die bereits hohe Sozial- und Umweltstandards erfüllen (auch ohne Zertifikat). 
                Kommunizieren Sie transparent, wo und wie Sie produzieren. Wenn Ihr Geschäft wächst, können Sie 
                auf GOTS upgraden.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Fazit: Zertifizierung ist Mittel, nicht Selbstzweck
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die beste Zertifizierung ist die, die zu Ihrer Marke, Ihrer Zielgruppe und Ihrem Budget passt. 
                GOTS ist beeindruckend, aber nicht für jede Marke notwendig oder finanzierbar. OEKO-TEX ist ein 
                solider Basis-Standard, der Vertrauen schafft. Entscheidend ist: Produzieren Sie verantwortungsvoll 
                und kommunizieren Sie transparent – mit oder ohne Label.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Die richtige Zertifizierung für Ihr Projekt?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Wir beraten Sie, welche Zertifizierung für Ihre Marke sinnvoll und realistisch ist.
              </p>
              <Button size="lg" asChild>
                <a href="/#contact">
                  Beratungsgespräch vereinbaren
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

export default Zertifizierungen;