import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-qualitaet-nachhaltigkeit.jpg";

const QualitaetNachhaltigkeit = () => {
  return (
    <>
      <title>Langlebigkeit statt Fast Fashion - Qualität als Nachhaltigkeit | CMK Studio</title>
      <meta name="description" content="Warum hochwertige Qualität die nachhaltigste Investition ist: Ein gut verarbeitetes Teil, das 10 Jahre hält, schlägt 10 billige Fast-Fashion-Teile." />
      
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
                  6 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                Langlebigkeit statt Fast Fashion: Warum hochwertige Qualität die nachhaltigste Investition ist
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Ein gut verarbeitetes Teil, das 10 Jahre hält, ist nachhaltiger als 10 billige Teile. 
                Warum Qualität die ehrlichste Form von Nachhaltigkeit ist.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Nahaufnahme hochwertiger Materialien und Verarbeitung bei Premium-Textilien"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die Illusion von günstiger Kleidung
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Ein T-Shirt für 5 Euro, eine Jeans für 20 Euro – Fast Fashion verspricht Mode für jeden Geldbeutel. 
                Doch der wahre Preis dieser Kleidung zeigt sich erst mit der Zeit: Nach wenigen Wäschen verliert 
                das Shirt seine Form, die Jeans bekommt Löcher, die Farben verblassen. Was zunächst wie ein 
                Schnäppchen aussah, entpuppt sich als Wegwerfware.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die Rechnung ist einfach: Wer jede Saison neue Basics kaufen muss, zahlt am Ende mehr als für ein 
                hochwertiges Teil, das Jahre überdauert. Doch es geht nicht nur um Geld – es geht um Ressourcen, 
                Umwelt und echte Wertschätzung für Kleidung.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Cost-per-Wear: Die ehrlichere Rechnung
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Statt nur auf den Kaufpreis zu schauen, sollten wir Cost-per-Wear berechnen: Was kostet ein 
                Kleidungsstück pro Tragevorgang? Ein hochwertiger Pullover für 200 Euro, der 10 Jahre lang 
                50 Mal pro Jahr getragen wird, kostet 40 Cent pro Tragevorgang. Ein Fast-Fashion-Pullover 
                für 30 Euro, der eine Saison hält und 20 Mal getragen wird, kostet 1,50 Euro pro Tragevorgang.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Diese Perspektive verändert alles: Qualität ist nicht teuer – sie ist wirtschaftlich sinnvoll. 
                Und sie ist die ehrlichste Form von Nachhaltigkeit, denn das nachhaltigste Kleidungsstück ist 
                das, das nicht im Müll landet.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Was macht hochwertige Qualität aus?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Qualität erkennt man nicht am Preis, sondern an konkreten Details:
              </p>

              <ul className="list-disc pl-6 space-y-3 mb-8 font-body leading-relaxed text-muted-foreground">
                <li>
                  <strong>Hochwertige Materialien:</strong> Langstapelige Baumwolle, hochwertige Wolle oder 
                  technische Fasern mit langer Lebensdauer
                </li>
                <li>
                  <strong>Sorgfältige Verarbeitung:</strong> Saubere Nähte, verstärkte Belastungspunkte, 
                  hochwertige Verschlüsse und Knöpfe
                </li>
                <li>
                  <strong>Durchdachte Konstruktion:</strong> Passform, die auch nach vielen Wäschen sitzt, 
                  Schnitte, die Bewegungsfreiheit ermöglichen
                </li>
                <li>
                  <strong>Reparierbarkeit:</strong> Kleidung, die sich ausbessern lässt, statt nach dem ersten 
                  Defekt weggeworfen zu werden
                </li>
              </ul>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Der Paradigmenwechsel: Von Quantität zu Qualität
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Wir erleben gerade einen fundamentalen Wandel im Konsumverhalten. Immer mehr Menschen 
                investieren lieber in ein hochwertiges Teil als in drei billige. Sie kaufen bewusster, 
                tragen länger und schätzen Handwerk und Materialien wieder.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Dieser Trend ist nicht nur ethisch und ökologisch sinnvoll – er verändert auch die Beziehung 
                zu Kleidung. Wer in Qualität investiert, pflegt seine Kleidung anders, trägt sie mit mehr 
                Wertschätzung und entwickelt einen persönlichen Stil statt jeder Saison neue Trends zu jagen.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Nachhaltigkeit beginnt bei der Produktion
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Echte Qualität entsteht nicht durch Marketing, sondern in der Produktion. Erfahrene 
                Produktionspartner, die faire Arbeitsbedingungen bieten und handwerkliches Können hochhalten, 
                sind die Basis für langlebige Kleidung.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Transparente Lieferketten, kontrollierte Materialherkunft und sorgfältige Qualitätsprüfung 
                in jeder Phase – das sind keine "Nice-to-haves", sondern Voraussetzungen für Kleidung, 
                die hält, was sie verspricht.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die Renaissance der Wertarbeit
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                In einer Welt voller Wegwerfware wird Qualität wieder zum Distinktionsmerkmal. 
                Marken, die auf Langlebigkeit setzen, gewinnen loyale Kunden, die bereit sind, 
                mehr zu zahlen – weil sie verstehen, dass sie am Ende weniger ausgeben.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die nachhaltigste Kollektion ist nicht die mit dem grünsten Marketing, sondern die, 
                die nicht im Müll landet. Hochwertige Qualität ist gelebte Nachhaltigkeit – 
                authentisch, messbar und ehrlich.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Qualität für Ihre Marke
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Lassen Sie uns gemeinsam Kollektionen entwickeln, die bleiben.
              </p>
              <Button size="lg" asChild>
                <a href="/#contact">
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

export default QualitaetNachhaltigkeit;
