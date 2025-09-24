import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import claudiaPortrait from "@/assets/claudia-kleinert-portrait.jpg";
import blushStore from "@/assets/claudia-kleinert-blush-store.jpg";

const ClaudiaKleinert = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black leading-none mb-6 font-display text-foreground text-center">
            Claudia Kleinert: Die Visionärin hinter CMK.Studio
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Mit über 35 Jahren Erfahrung in der Modebranche revolutioniert sie die europäische Textilproduktion
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img 
              src={claudiaPortrait} 
              alt="Claudia Kleinert, Gründerin und Geschäftsführerin von CMK.Studio"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-clay/80 font-body">
              
              <h2 className="text-3xl font-medium text-foreground mb-6 font-display">
                Eine Karriere, die Geschichte schreibt
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                Claudia Kleinert ist Gründerin und Geschäftsführerin von CMK.Studio. Seit über 35 Jahren ist sie mit viel Begeisterung und Engagement erfolgreich in den Bereichen Mode Design, Produktmanagement, Vertrieb und Textilproduktion tätig.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Ihre Reise in der Modebranche begann mit einer klaren Vision: hochwertige Textilproduktion mit europäischen Standards zu verbinden und dabei nachhaltige Prozesse zu etablieren. Diese Vision hat sie über die Jahrzehnte kontinuierlich weiterentwickelt und perfektioniert.
              </p>

              <h2 className="text-3xl font-medium text-foreground mb-6 font-display">
                Partnerschaften mit führenden Marken
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                Mit ihrem Know-how hat Claudia viele namhafte Firmen unterstützt, darunter Puma, Homeboy, Aubade, Felina, blush Lingerie und Merz B Schwanen. Diese Zusammenarbeit mit etablierten Marken zeigt ihre Fähigkeit, sowohl innovative Start-ups als auch traditionelle Unternehmen erfolgreich zu beraten und zu begleiten.
              </p>

              <div className="my-12">
                <img 
                  src={blushStore} 
                  alt="blush Lingerie Store - eine der erfolgreichen Partnerschaften von Claudia Kleinert"
                  className="w-full rounded-lg shadow-elegant"
                />
                <p className="text-sm text-muted-foreground text-center mt-4 italic">
                  blush Lingerie - eine der erfolgreichen Partnerschaften von Claudia Kleinert
                </p>
              </div>

              <h2 className="text-3xl font-medium text-foreground mb-6 font-display">
                Berlin als Inspirationsquelle
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                CMK.Studio hat seinen Sitz im Zentrum von Berlin und ist täglich inspiriert vom pulsierenden Leben in der Hauptstadt. Diese urbane Energie fließt in jeden Aspekt der Arbeit ein – von der kreativen Konzeption bis zur strategischen Umsetzung.
              </p>

              <h2 className="text-3xl font-medium text-foreground mb-6 font-display">
                Persönliche Betreuung als Erfolgsgeheimnis
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                Nach einer Kennenlernphase betreut Claudia ihre Kunden persönlich und findet mit ihnen gemeinsam individuelle Wünsche und Ideen. Im zweiten Schritt kommt das Team mit an Bord und beginnt mit der Umsetzung der Produkte. Der gesamte Produktionsprozess wird direkt von ihr persönlich geplant und überwacht.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Mit großer Sorgfalt wählt sie die passenden Produktionsstätten für jeden Auftrag aus. In den vielen Jahren gemeinsamer Zusammenarbeit sind nicht nur tiefe Partnerschaften mit den Produzenten entstanden, sondern auch Freundschaften. Langjährige Erfahrungen ermöglichen es ihr, Risiken im Voraus abzuschätzen, rechtzeitig zu erkennen und zu umgehen.
              </p>

              <h2 className="text-3xl font-medium text-foreground mb-6 font-display">
                Werte, die den Unterschied machen
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                In ihrem gemeinsamen Tun und Handeln legt Claudia großen Wert auf Transparenz, Fairness, Innovation, ein positives Miteinander und Nachhaltigkeit. Diese Werte sind nicht nur Leitlinien, sondern werden täglich gelebt und umgesetzt.
              </p>

              <blockquote className="border-l-4 border-[hsl(var(--cream-tan-hover))] pl-6 my-8 italic text-xl text-foreground">
                "Nachhaltigkeit spielt bei uns in allen Abläufen eine große Rolle. Wichtig ist uns dabei, dass wir das Thema vor allem auch nach den Wünschen unserer Kunden umsetzen."
              </blockquote>

              <h2 className="text-3xl font-medium text-foreground mb-6 font-display">
                Die Zukunft der Textilproduktion
              </h2>

              <p className="text-lg leading-relaxed mb-8">
                Unter Claudias Führung setzt CMK.Studio neue Maßstäbe in der europäischen Textilproduktion. Über 90% der Produktionsstätten befinden sich in Europa, was ermöglicht, bei der Lieferung fertiger Ware auf Flugzeugtransporte zu verzichten und damit CO2-Emissionen erheblich zu reduzieren.
              </p>

              <p className="text-lg leading-relaxed mb-12">
                Besonders am Herzen liegt ihr die Langlebigkeit der Kleidungsstücke, die produziert werden – je länger Kleidungsstücke getragen werden, umso weniger oft müssen sie ersetzt werden. Eine hochwertige Materialauswahl und Verarbeitung sowie eine strenge Qualitätssicherung bilden die Grundlage für die Langlebigkeit ihrer Textilien.
              </p>

              {/* CTA Section */}
              <div className="bg-[hsl(var(--cream-tan))]/10 rounded-lg p-8 text-center mt-12">
                <h3 className="text-2xl font-medium text-foreground mb-4 font-display">
                  Bereit für Ihr nächstes Projekt?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Lassen Sie sich von Claudia Kleinert und ihrem Team beraten und entdecken Sie die Möglichkeiten europäischer Textilproduktion.
                </p>
                <a 
                  href="#contact" 
                  className="btn-accent inline-flex items-center"
                >
                  Jetzt Projekt starten
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClaudiaKleinert;