import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-lingerie-expertise.jpg";

const LingerieExpertise = () => {
  return (
    <>
      <title>Von der Idee zum Premium-Produkt: Lingerie-Entwicklung mit Expertise | CMK.Studio</title>
      <meta name="description" content="Wie die Erfolgsgeschichte von blush Lingerie zeigt, dass Lingerie-Expertise der Schlüssel zu außergewöhnlicher Produktqualität in allen Kategorien ist." />
      
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
                  Case Study
                </span>
                <span className="text-sm text-muted-foreground">
                  7 min Lesezeit
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                Von der Idee zum Premium-Produkt: Lingerie-Entwicklung mit Expertise
              </h1>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Die Erfolgsgeschichte von blush Lingerie zeigt, wie aus Leidenschaft für Details 
                und kompromissloser Qualität eine erfolgreiche Premium-Marke entsteht – 
                und warum diese Expertise auch Ihrem Projekt zugutekommt.
              </p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img 
                src={blogImage} 
                alt="Professionelles Lingerie-Design-Studio mit hochwertigen Materialien und Skizzen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Warum gerade Lingerie?
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Lingerie ist eine der anspruchsvollsten Produktkategorien in der Textilindustrie. 
                Hier treffen extreme Anforderungen aufeinander: Komplexe Passformen, die am Körper 
                perfekt sitzen müssen. Empfindliche Materialien wie Spitze, Satin und Tüll. 
                Technische Funktionalität gepaart mit ästhetischer Raffinesse.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Wer Lingerie beherrscht, beherrscht die Textilproduktion – denn die Detailgenauigkeit, 
                das Material-Know-how und die Passform-Expertise, die hier nötig sind, übertreffen 
                die meisten anderen Produktkategorien.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                blush Lingerie: Eine Erfolgsgeschichte
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Als Claudia Kleinert blush Lingerie gründete, stand eine Vision im Mittelpunkt: 
                Premium-Lingerie zu schaffen, die höchste Ansprüche an Qualität, Passform und Design erfüllt. 
                Doch der Weg vom Konzept zum fertigen Produkt war komplex.
              </p>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die Herausforderungen waren vielfältig:
              </p>

              <ul className="list-disc pl-6 space-y-3 mb-8 font-body leading-relaxed text-muted-foreground">
                <li>
                  <strong>Passform-Entwicklung:</strong> BHs müssen in zahlreichen Größen perfekt sitzen – 
                  ein millimetergenauer Prozess von Schnittentwicklung bis Fertigung
                </li>
                <li>
                  <strong>Material-Auswahl:</strong> Spitze, die nicht kratzt, Elasthan mit perfekter 
                  Rückstellkraft, Bügel mit exakter Formgebung
                </li>
                <li>
                  <strong>Produktionspartner-Auswahl:</strong> Nur wenige Fabriken beherrschen die 
                  komplexen Techniken für hochwertige Dessous
                </li>
                <li>
                  <strong>Qualitätskontrolle:</strong> Jedes Detail – von der Nahtführung bis zur 
                  Trägerverstellung – muss einwandfrei funktionieren
                </li>
              </ul>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die Learnings: Was Lingerie-Entwicklung lehrt
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Über Jahre hinweg entstand ein tiefes Verständnis für jeden Aspekt der Textilproduktion:
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Passform ist alles:</strong> Die Erfahrung, BHs zu entwickeln, die in über 
                50 Größen perfekt sitzen, schärft den Blick für Schnittführung, Gradierung und 
                Tragekomfort wie keine andere Produktkategorie.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Material-Expertise:</strong> Die Arbeit mit empfindlichen Materialien – 
                von französischer Leavers-Spitze bis zu funktionalem Mikrofaser-Jersey – vermittelt 
                ein Gespür für Stoffqualitäten, das sich auf jede Produktkategorie übertragen lässt.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Produktionspartner-Netzwerk:</strong> Die jahrelange Zusammenarbeit mit 
                spezialisierten europäischen Fabriken schuf ein Netzwerk von Produzenten, die 
                höchste Qualitätsstandards erfüllen – auch für andere Produktkategorien.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Wie diese Expertise Ihrem Projekt hilft
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die Erfahrung aus der Lingerie-Entwicklung fließt direkt in jedes Projekt von CMK.Studio ein:
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Unübertroffene Detailgenauigkeit:</strong> Wer gelernt hat, BH-Bügel millimetergenau 
                zu positionieren, wird bei der Entwicklung von T-Shirts, Jacken oder Workwear keine Details übersehen.
              </p>

              <p className="mb-4 font-body leading-relaxed text-muted-foreground">
                <strong>Passform-Kompetenz:</strong> Das Verständnis für Körperformen, Bewegung und Tragekomfort, 
                das in der Lingerie-Entwicklung essentiell ist, sorgt dafür, dass auch Streetwear, 
                Sportbekleidung oder Corporate Wear perfekt sitzen.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                <strong>Qualitätsstandards:</strong> Wer für Lingerie produziert, arbeitet mit den höchsten 
                Qualitätsansprüchen der Textilbranche. Diese Standards gelten auch für alle anderen Produktkategorien.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Von Lingerie zu allen Kategorien
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Die Expertise aus der Lingerie-Entwicklung ist wie ein Meisterbrief für Textilproduktion. 
                Wer die komplexesten Herausforderungen gemeistert hat, kann auch bei vermeintlich 
                "einfacheren" Kategorien wie Streetwear, Denim oder Workwear außergewöhnliche Qualität liefern.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Bei CMK.Studio profitieren alle Projekte von dieser Expertise: Ob Creator-Kollektion, 
                Corporate Wear oder Premium-Einzelhandel – die Detailgenauigkeit, Materialkenntnis und 
                Qualitätsstandards aus der Lingerie-Produktion machen den Unterschied.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Ihr Projekt in erfahrenen Händen
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die Erfolgsgeschichte von blush Lingerie ist mehr als eine Referenz – sie ist der Beweis, 
                dass höchste Ansprüche an Qualität, Design und Funktionalität erfolgreich umgesetzt werden können. 
                Diese Erfahrung steht nun auch Ihrem Projekt zur Verfügung.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Profitieren Sie von unserer Expertise
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Lassen Sie uns gemeinsam Ihre Vision mit höchster Qualität umsetzen.
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

export default LingerieExpertise;
