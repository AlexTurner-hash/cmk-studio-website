import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQSection = () => {
  const faqs = [{
    question: "Wie lange dauert die Produktion?",
    answer: "Je nach Projekt zwischen 4 und 12 Wochen, abhängig von Material, Auflage und Komplexität."
  }, {
    question: "Kann man kleine Auflagen produzieren lassen?",
    answer: "Ja – wir bieten Kleinserien und Drops ab geringen Stückzahlen an, ideal für Creator oder Startups."
  }, {
    question: "Welche Produkte können hergestellt werden?",
    answer: "Von T-Shirts über Hoodies bis hin zu Caps, Taschen und Workwear – die Bandbreite reicht von Streetwear bis Corporate Clothing."
  }, {
    question: "Kümmert ihr euch auch um den Versand?",
    answer: "Ja. Wir übernehmen Fulfillment, Verpackung, Etikettierung, Zoll und weltweiten Versand."
  }, {
    question: "Ist nachhaltige Produktion teurer?",
    answer: "Nicht zwingend. Die Kosten hängen von Material und Produktionsstandort ab. Wir beraten transparent zu Preis-Leistungs-Verhältnissen."
  }];
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