import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQSection = () => {
  const faqs = [
    {
      question: "Wie lange dauert die Produktion?",
      answer: "Je nach Projekt zwischen 4 und 12 Wochen, abhängig von Material, Auflage und Komplexität."
    },
    {
      question: "Welche Produkte können hergestellt werden?",
      answer: "Von T-Shirts über Hoodies bis hin zu Caps, Taschen und Workwear – die Bandbreite reicht von Streetwear bis Corporate Clothing."
    },
    {
      question: "Kümmert ihr euch auch um den Versand?",
      answer: "Ja. Wir übernehmen Fulfillment, Verpackung, Etikettierung, Zoll und weltweiten Versand."
    },
    {
      question: "Ist nachhaltige Produktion teurer?",
      answer: "Nicht zwingend. Die Kosten hängen von Material und Produktionsstandort ab. Wir beraten transparent zu Preis-Leistungs-Verhältnissen."
    },
    {
      question: "Was unterscheidet CMK.Studio von klassischen Produzenten?",
      answer: "Wir sind kein reiner Produzent, sondern strategischer Partner mit Branchen-Expertise. Von Kollektionsplanung über Design und Schnittentwicklung bis zu Produktion, Qualitätskontrolle und Logistik – alles aus einer Hand, mit einem Ansprechpartner."
    },
    {
      question: "Welche Produktkategorien produziert ihr?",
      answer: "Unsere Expertise umfasst Lingerie & Swimwear, Premium Workwear & Corporate Fashion, Hospitality-Kollektionen, hochwertige Streetwear sowie Knitwear. Besonders Knitwear erfordert spezialisiertes Know-how – von der Garnauswahl über Maschinenprogrammierung bis zur Passform entwickeln wir alles von feinen Cashmere-Pieces bis zu innovativer Performance-Knitwear."
    },
    {
      question: "Wie unterstützt ihr bei Due Diligence und Transparenz-Anforderungen?",
      answer: "Wir dokumentieren die gesamte Lieferkette transparent – von Materialherkunft bis Fertigung. Alle Partner sind GOTS-, OEKO-TEX-, BSCI- oder RWS-zertifiziert. Ideal für Due Diligence-Prozesse, Investoren-Prüfungen und die Vorbereitung auf den EU Digital Product Pass ab 2027."
    },
    {
      question: "Kann Workwear wirklich ein Employer Branding Tool sein?",
      answer: "Absolut. Hochwertige, nachhaltige Arbeitskleidung mit durchdachten Details wird zum Aushängeschild Ihres Unternehmens. Mitarbeiter erwarten heute mehr als bedruckte Standard-T-Shirts – sie wollen Komfort, Qualität und ein Design, das sie gerne tragen. Das stärkt Identifikation und Arbeitgeberattraktivität."
    },
    {
      question: "Wie findet die Kommunikation und Betreuung statt?",
      answer: "Wir betreuen Sie persönlich durch alle Projektphasen. Neben Telefon und E-Mail sind wir auch per Video-Chat erreichbar. In Berlin und dem Rhein-Main-Gebiet bieten wir gerne auch Vor-Ort-Termine an."
    }
  ];
  return <section className="section-padding" style={{
    backgroundColor: 'hsl(44 29% 95%)'
  }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">Häufige Fragen</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-clay/20">
                <AccordionTrigger className="text-left text-base md:text-lg font-body leading-relaxed font-normal text-foreground hover:text-[hsl(var(--bronze))] transition-colors hover:no-underline data-[state=open]:bg-[hsl(var(--bronze))] data-[state=open]:text-white px-4 py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-[hsl(var(--bronze))] text-white leading-relaxed font-body pt-2 pb-4 px-4 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;