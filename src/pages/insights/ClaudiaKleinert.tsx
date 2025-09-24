import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import claudiaPortrait from "@/assets/claudia-kleinert-portrait.jpg";
import blushStore from "@/assets/claudia-kleinert-blush-store.jpg";

const ClaudiaKleinert = () => {
  return (
    <>
      <title>Claudia Kleinert - Gründerin und Geschäftsführerin | CMK.Studio</title>
      <meta name="description" content="Lernen Sie Claudia Kleinert kennen: Die erfolgreiche Berliner Dessous-Designerin mit über 35 Jahren Erfahrung in Design, Produktion und Vertrieb." />
      
      <div className="min-h-screen">
        <Navigation />
        
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-8">
              <a href="/insights" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Zurück zu Insights
              </a>
            </Button>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-[hsl(var(--cream-tan-hover))] tracking-wide uppercase">
                  Porträt
                </span>
                <span className="text-sm text-muted-foreground">
                  5 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                Claudia Kleinert: Die Gründerin
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Die erfolgreiche Berliner Dessous-Designerin („blush Lingerie") stellt ihre langjährige 
                Erfahrung in Design und Produktion mit CMK.Studio auch anderen Modeschaffenden zur Verfügung.
              </p>
            </header>

            {/* Featured Image */}
            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={claudiaPortrait} 
                alt="Claudia Kleinert, Gründerin und Geschäftsführerin von CMK.Studio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Eine Karriere, die Geschichte schreibt
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Claudia Kleinert ist Gründerin und Geschäftsführerin von CMK.Studio. Seit über 35 Jahren ist sie mit viel Begeisterung und Engagement erfolgreich in den Bereichen Mode Design, Produktmanagement, Vertrieb und Textilproduktion tätig.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Ihre Reise in der Modebranche begann mit einer klaren Vision: hochwertige Textilproduktion mit europäischen Standards zu verbinden und dabei nachhaltige Prozesse zu etablieren. Diese Vision hat sie über die Jahrzehnte kontinuierlich weiterentwickelt und perfektioniert.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Partnerschaften mit führenden Marken
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Mit ihrem Know-how hat Claudia viele namhafte Firmen unterstützt, darunter Puma, Homeboy, Aubade, Felina, blush Lingerie und Merz B Schwanen. Diese Zusammenarbeit mit etablierten Marken zeigt ihre Fähigkeit, sowohl innovative Start-ups als auch traditionelle Unternehmen erfolgreich zu beraten und zu begleiten.
              </p>

              <div className="aspect-[16/9] my-12 rounded-lg overflow-hidden">
                <img 
                  src={blushStore} 
                  alt="blush Lingerie Store - eine der erfolgreichen Partnerschaften von Claudia Kleinert" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Berlin als Inspirationsquelle
              </h2>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                CMK.Studio hat seinen Sitz im Zentrum von Berlin und ist täglich inspiriert vom pulsierenden Leben in der Hauptstadt. Diese urbane Energie fließt in jeden Aspekt der Arbeit ein – von der kreativen Konzeption bis zur strategischen Umsetzung.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Persönliche Betreuung als Erfolgsgeheimnis
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Nach einer Kennenlernphase betreut Claudia ihre Kunden persönlich und findet mit ihnen gemeinsam individuelle Wünsche und Ideen. Im zweiten Schritt kommt das Team mit an Bord und beginnt mit der Umsetzung der Produkte. Der gesamte Produktionsprozess wird direkt von ihr persönlich geplant und überwacht.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Mit großer Sorgfalt wählt sie die passenden Produktionsstätten für jeden Auftrag aus. In den vielen Jahren gemeinsamer Zusammenarbeit sind nicht nur tiefe Partnerschaften mit den Produzenten entstanden, sondern auch Freundschaften. Langjährige Erfahrungen ermöglichen es ihr, Risiken im Voraus abzuschätzen, rechtzeitig zu erkennen und zu umgehen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Werte, die den Unterschied machen
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                In ihrem gemeinsamen Tun und Handeln legt Claudia großen Wert auf Transparenz, Fairness, Innovation, ein positives Miteinander und Nachhaltigkeit. Diese Werte sind nicht nur Leitlinien, sondern werden täglich gelebt und umgesetzt.
              </p>

              <blockquote className="border-l-4 border-[hsl(var(--cream-tan-hover))] pl-6 my-8 italic text-xl text-foreground">
                "Nachhaltigkeit spielt bei uns in allen Abläufen eine große Rolle. Wichtig ist uns dabei, dass wir das Thema vor allem auch nach den Wünschen unserer Kunden umsetzen."
              </blockquote>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die Zukunft der Textilproduktion
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Unter Claudias Führung setzt CMK.Studio neue Maßstäbe in der europäischen Textilproduktion. Über 90% der Produktionsstätten befinden sich in Europa, was ermöglicht, bei der Lieferung fertiger Ware auf Flugzeugtransporte zu verzichten und damit CO2-Emissionen erheblich zu reduzieren.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Besonders am Herzen liegt ihr die Langlebigkeit der Kleidungsstücke, die produziert werden – je länger Kleidungsstücke getragen werden, umso weniger oft müssen sie ersetzt werden. Eine hochwertige Materialauswahl und Verarbeitung sowie eine strenge Qualitätssicherung bilden die Grundlage für die Langlebigkeit ihrer Textilien.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Bereit für Ihr nächstes Projekt?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Lassen Sie sich von Claudia Kleinert und ihrem Team beraten und entdecken Sie die Möglichkeiten europäischer Textilproduktion.
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

export default ClaudiaKleinert;