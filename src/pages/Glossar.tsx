import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Glossar = () => {
  const glossaryTerms = [
    {
      term: "Private Label",
      definition: "Eigenmarken, die von einem Unternehmen unter eigenem Namen vertrieben werden, aber von externen Herstellern produziert werden. Ermöglicht Markenaufbau ohne eigene Produktionsstätten."
    },
    {
      term: "MOQ (Minimum Order Quantity)",
      definition: "Mindestbestellmenge, die ein Hersteller für eine Produktionscharge voraussetzt. Variiert je nach Produktkomplexität und Produktionsstandort zwischen 50 und 1000 Teilen."
    },
    {
      term: "Prototyping",
      definition: "Erstellung von Mustern und Prototypen vor der Serienproduktion zur Optimierung von Passform, Material und Design."
    },
    {
      term: "GOTS (Global Organic Textile Standard)",
      definition: "Weltweit führender Standard für die Verarbeitung von Textilien aus biologisch erzeugten Naturfasern. Definiert umwelttechnische Anforderungen und Sozialkriterien."
    },
    {
      term: "OEKO-TEX Standard 100",
      definition: "Unabhängiges Prüf- und Zertifizierungssystem für textile Roh-, Zwischen- und Endprodukte auf Schadstoffe."
    },
    {
      term: "BSCI (Business Social Compliance Initiative)",
      definition: "Initiative zur Verbesserung der Arbeitsbedingungen in globalen Lieferketten durch einheitliche Verhaltenskodizes."
    },
    {
      term: "Due Diligence",
      definition: "Sorgfaltspflicht zur Prüfung von Lieferketten auf Menschenrechts- und Umweltrisiken, gesetzlich vorgeschrieben durch das Lieferkettensorgfaltspflichtengesetz."
    },
    {
      term: "CMT (Cut-Make-Trim)",
      definition: "Produktionsmodell, bei dem der Auftraggeber die Materialien stellt und der Hersteller nur Schnitt, Fertigung und Finishing übernimmt."
    },
    {
      term: "FOB (Free on Board)",
      definition: "Lieferbedingung, bei der der Verkäufer die Ware bis zur Verladung am Verschiffungshafen verantwortet. Danach übernimmt der Käufer Kosten und Risiko."
    },
    {
      term: "Lead Time",
      definition: "Produktionsvorlaufzeit vom Auftragseingang bis zur fertigen Ware. Beträgt in Europa typischerweise 8-12 Wochen, in Asien 12-16 Wochen."
    },
    {
      term: "Tech Pack",
      definition: "Technisches Datenblatt mit allen produktionsrelevanten Informationen: Maße, Materialien, Konstruktionsdetails, Farben und Veredelungen."
    },
    {
      term: "Grading",
      definition: "Größenstaffelung eines Schnitts für verschiedene Konfektionsgrößen unter Beibehaltung der Proportionen."
    },
    {
      term: "Sampling",
      definition: "Musterherstellung zur Freigabe vor Serienproduktion. Umfasst Proto-Sample, Fit-Sample und Pre-Production-Sample."
    },
    {
      term: "Kollektion",
      definition: "Zusammenhängende Produktgruppe mit einheitlicher Designsprache, die gemeinsam entwickelt und vermarktet wird."
    },
    {
      term: "Workwear",
      definition: "Arbeitskleidung für verschiedene Branchen. Kombiniert Funktionalität mit Employer Branding und Corporate Identity."
    },
    {
      term: "Lingerie",
      definition: "Dessous und Unterwäsche. Erfordert höchste technische Expertise in Schnitt, Passform und Materialauswahl."
    },
    {
      term: "Streetwear",
      definition: "Urbane Freizeitmode mit Wurzeln in Skateboard-, Hip-Hop- und Surfkultur. Verbindet Komfort mit modischem Anspruch."
    },
    {
      term: "Nachhaltige Produktion",
      definition: "Textilproduktion unter Berücksichtigung ökologischer und sozialer Standards. Umfasst faire Arbeitsbedingungen, umweltfreundliche Materialien und transparente Lieferketten."
    },
    {
      term: "Employer Branding",
      definition: "Strategischer Aufbau einer Arbeitgebermarke. Hochwertige Corporate Fashion wird zum sichtbaren Ausdruck der Unternehmenskultur."
    },
    {
      term: "Circular Fashion",
      definition: "Kreislaufwirtschaft in der Modeindustrie. Produkte werden so gestaltet, dass Materialien nach Gebrauch wiederverwertet werden können."
    },
    {
      term: "Deadstock",
      definition: "Überschüssige oder nicht verwendete Lagerware. Kann nachhaltig durch Upcycling oder Zweitvermarktung eingesetzt werden."
    },
    {
      term: "Finishing",
      definition: "Endbearbeitung textiler Produkte: Waschen, Färben, Bedrucken, Besticken oder Beschichten für gewünschte Eigenschaften."
    },
    {
      term: "Quality Control (QC)",
      definition: "Systematische Qualitätsprüfung während und nach der Produktion zur Sicherstellung definierter Standards."
    },
    {
      term: "Trims",
      definition: "Kurzwaren und Zutaten wie Knöpfe, Reißverschlüsse, Etiketten, Bänder und Applikationen."
    },
    {
      term: "Pattern Making",
      definition: "Schnittkonstruktion für Textilprodukte. Basis für Passform und technische Umsetzbarkeit eines Designs."
    }
  ];

  const definitionListSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Textilproduktion Glossar - Fachbegriffe von CMK Studio",
    "description": "Umfassendes Glossar wichtiger Fachbegriffe aus Textilproduktion, nachhaltiger Mode und Fashion-Business",
    "hasDefinedTerm": glossaryTerms.map(term => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.definition
    }))
  };

  return (
    <>
      <title>Glossar Textilproduktion - Fachbegriffe von A-Z | CMK Studio</title>
      <meta name="description" content="Umfassendes Glossar mit den wichtigsten Fachbegriffen aus Textilproduktion, nachhaltiger Mode und Fashion-Business. Verständlich erklärt von Experten." />
      
      <div className="min-h-screen bg-background">
        <script type="application/ld+json">
          {JSON.stringify(definitionListSchema)}
        </script>
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Header */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground font-display">
                Glossar: Textilproduktion von A-Z
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                Die wichtigsten Fachbegriffe aus Textilproduktion, nachhaltiger Mode und Fashion-Business – 
                verständlich erklärt für Startups, Creator und Unternehmen.
              </p>
            </header>

            {/* Glossary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {glossaryTerms.map((item, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-light mb-3 text-[hsl(var(--bronze))] font-display">
                      {item.term}
                    </h2>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {item.definition}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-2xl font-light mb-4 text-foreground font-display">
                Fragen zu Ihrem Projekt?
              </h3>
              <p className="text-muted-foreground mb-6 font-body max-w-2xl mx-auto">
                Lassen Sie sich von unseren Experten beraten und profitieren Sie von 
                jahrelanger Erfahrung in der europäischen Textilproduktion.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background hover:bg-foreground/90 rounded-md font-medium transition-colors"
              >
                Jetzt Beratung anfragen
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Glossar;