import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-due-diligence.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsArticlesDE, insightsArticlesEN } from "@/translations/insights-articles";

const DueDiligence = () => {
  const { language } = useLanguage();
  const t = language === 'de' ? insightsArticlesDE.dueDiligence : insightsArticlesEN.dueDiligence;
  
  return (
    <>
      <title>{language === 'de' ? 'Due Diligence Textil-Lieferketten: Compliance-Guide KMU | CMK Studio' : 'Due Diligence Textile Supply Chains: Compliance Guide SME | CMK Studio'}</title>
      <meta name="description" content={t.subtitle} />
      
      <div className="min-h-screen">
        <Navigation />
        
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Button variant="ghost" asChild className="mb-8">
              <a href="/insights" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                {t.backToInsights}
              </a>
            </Button>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-[hsl(var(--cream-tan-hover))] tracking-wide uppercase">
                  {t.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {t.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                {t.title}
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                {t.subtitle}
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Geschäftstreffen zur Lieferketten-Compliance in der Textilproduktion"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Was ist Due Diligence – und warum betrifft es Sie?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Due Diligence bedeutet "angemessene Sorgfaltspflicht". Im Kontext von Lieferketten: 
                Unternehmen müssen sicherstellen, dass in ihrer gesamten Wertschöpfungskette Menschenrechte 
                und Umweltstandards eingehalten werden.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Das deutsche Lieferkettengesetz (LkSG) gilt seit 2023 für Unternehmen ab 3.000 MitarbeiterInnen, 
                ab 2024 für Unternehmen ab 1.000 MitarbeiterInnen. Aber: Auch kleinere Unternehmen sind indirekt 
                betroffen, wenn sie für größere Auftraggeber produzieren oder liefern.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die 7 Kernanforderungen des Lieferkettengesetzes
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>1. Risikomanagement einrichten</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Unternehmen müssen ein System etablieren, um Risiken in der Lieferkette zu identifizieren 
                und zu bewerten. In der Textilbranche: Wo wird produziert? Welche Sub-Lieferanten gibt es? 
                Welche Risiken bestehen (Kinderarbeit, Umweltverschmutzung, etc.)?
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>2. Risikoanalyse durchführen</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Konkrete Bewertung der Lieferkette: Welche Produktionsschritte finden wo statt? 
                Welche Länder und Regionen sind Hochrisiko-Gebiete? Welche Materialien bergen besondere Risiken 
                (z.B. Baumwolle aus Usbekistan wegen Zwangsarbeit)?
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>3. Präventionsmaßnahmen ergreifen</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Vertragliche Vereinbarungen mit Lieferanten über Menschenrechts- und Umweltstandards. 
                Schulungen für MitarbeiterInnen und Lieferanten. Audits und Kontrollen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>4. Abhilfemaßnahmen etablieren</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Was passiert, wenn Verstöße festgestellt werden? Prozesse zur Behebung von Missständen müssen 
                definiert sein. Im Extremfall: Beendigung der Geschäftsbeziehung.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>5. Beschwerdeverfahren einrichten</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Betroffene müssen die Möglichkeit haben, Missstände zu melden – ohne Repressalien fürchten zu müssen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>6. Dokumentations- und Berichtspflicht</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Alle Schritte müssen dokumentiert werden. Jährlicher Bericht über die Erfüllung der Sorgfaltspflichten.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>7. Überprüfung der Wirksamkeit</strong>
              </p>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Regelmäßige Evaluierung: Funktionieren die Maßnahmen? Wo muss nachgebessert werden?
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Praktische Umsetzung für kleine Mode-Unternehmen
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die gesetzlichen Anforderungen klingen überwältigend – besonders für Startups und kleine Labels. 
                Aber Due Diligence ist weniger komplex, wenn man in Europa produziert und transparente Partner wählt.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Schritt 1: Mapping der Lieferkette</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Dokumentieren Sie jeden Produktionsschritt: Stofflieferant, Färberei, Schneiderei, Verpackung, 
                Logistik. Bei europäischer Produktion sind es oft 3-5 Partner. Bei Fernost-Produktion können es 
                15+ Sub-Lieferanten sein, die Sie möglicherweise gar nicht kennen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Schritt 2: Risikobewertung nach Ländern und Produktionsschritten</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Hochrisiko: Bangladesh, China (Xinjiang-Region), Usbekistan, Myanmar<br />
                Mittleres Risiko: Türkei, Indien, Vietnam<br />
                Niedriges Risiko: EU-Länder, die durch strenge Arbeits- und Umweltgesetze reguliert sind
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Schritt 3: Lieferantenverträge mit Compliance-Klauseln</strong>
              </p>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Standardisierte Vertragsklauseln zu Menschenrechten, Kinderarbeit, Umweltstandards. 
                Recht auf Audits. Konsequenzen bei Verstößen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Schritt 4: Regelmäßige Audits und Kontrollen</strong>
              </p>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Bei europäischen Partnern: Jährliche Besuche der Produktionsstätten, Gespräche mit Mitarbeitenden.<br />
                Bei Fernost-Partnern: Externe Audits durch spezialisierte Agenturen (z.B. SGS, Bureau Veritas).
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Warum europäische Produktion Due Diligence erleichtert
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                EU-Produktionsstätten unterliegen bereits strengen nationalen und europäischen Regelungen. 
                Arbeitsschutz, Mindestlöhne, Umweltauflagen sind gesetzlich vorgegeben und werden kontrolliert. 
                Das bedeutet: Der größte Teil der Due Diligence-Anforderungen ist automatisch erfüllt.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Beispiel: Eine portugiesische Näherei für Lingerie erfüllt durch portugiesisches Arbeitsrecht 
                bereits die Kernanforderungen des LkSG. Dokumentation ist deutlich einfacher. Audits können 
                Sie selbst durchführen, da Sie die Produktionsstätte problemlos besuchen können.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die unterschätzte Herausforderung: Material-Herkunft
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Selbst wenn Sie in Europa nähen lassen: Woher kommt der Stoff? Baumwolle aus Usbekistan? 
                Polyester aus China? Die Material-Lieferkette ist oft der blinde Fleck.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Pragmatische Lösungen:</strong>
              </p>
              <ul className="mb-8 space-y-2 text-muted-foreground font-body">
                <li>• Arbeiten Sie mit europäischen Stofflieferanten, die Herkunfts-Nachweise bieten</li>
                <li>• Nutzen Sie GOTS-zertifizierte Materialien (Herkunft dokumentiert)</li>
                <li>• Fordern Sie von Ihren Stofflieferanten Due Diligence-Dokumentation an</li>
                <li>• Bevorzugen Sie recycelte Materialien (geringeres Risiko in der Primärproduktion)</li>
              </ul>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Dokumentation: Was Sie wirklich brauchen
              </h2>
              
              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Minimale Compliance-Dokumentation für kleine Labels:</strong>
              </p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Liste aller Lieferanten (inkl. Adressen, Kontaktpersonen)</li>
                <li>• Verträge mit Compliance-Klauseln</li>
                <li>• Dokumentation der Produktionsbesuche / Audits</li>
                <li>• Material-Herkunftsnachweise</li>
                <li>• Prozessbeschreibung: Was tun bei festgestellten Verstößen?</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Das klingt nach viel Bürokratie – ist aber bei transparenten europäischen Partnern in 2-3 Stunden 
                pro Jahr abgedeckt. Bei komplexen Fernost-Lieferketten kann der Aufwand bei 20+ Stunden liegen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Was passiert bei Nicht-Erfüllung?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Kleinere Unternehmen unter den Schwellenwerten fallen nicht direkt unter das LkSG. Aber:
              </p>

              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                <li>• Ihre Auftraggeber (z.B. Handelsketten) können Due Diligence-Nachweise von Ihnen fordern</li>
                <li>• Bei nachgewiesenen Verstößen drohen Reputationsschäden und Kundenabwanderung</li>
                <li>• Die EU-Lieferkettenrichtlinie (CSDDD) wird die Anforderungen weiter verschärfen</li>
              </ul>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Proaktive Compliance zahlt sich aus: Sie können transparente Produktion als USP kommunizieren 
                und sind für zukünftige Gesetzesänderungen gewappnet.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Fazit: Due Diligence ist machbar – mit den richtigen Partnern
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Lieferketten-Compliance muss nicht zum bürokratischen Albtraum werden. Wer von Anfang an 
                auf transparente, europäische Partner setzt, erfüllt die meisten Anforderungen automatisch. 
                Dokumentation ist überschaubar, Audits sind praktikabel, Risiken sind minimal. Due Diligence 
                wird zum Wettbewerbsvorteil statt zur Last.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Compliance-Unterstützung für Ihre Lieferkette?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Wir helfen Ihnen, transparente Lieferketten aufzubauen und Due Diligence-Anforderungen zu erfüllen.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Due Diligence Compliance-Beratung">
                  Compliance-Beratung anfragen
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

export default DueDiligence;