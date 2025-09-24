import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productionImage from "@/assets/production-workwear.jpg";

const Workwear = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/#produktkategorien" 
            className="inline-flex items-center gap-2 text-[hsl(var(--bronze))] hover:text-[hsl(var(--clay))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu den Produktkategorien
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground font-display">
                Workwear-Produktion bei CMK
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Professionelle Berufsbekleidung für Gastronomie, Hotellerie und Unternehmen – 
                funktional, repräsentativ und auf höchstem Qualitätsniveau gefertigt.
              </p>
            </div>
          </div>
        </section>

        {/* Production Image */}
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <img 
              src={productionImage} 
              alt="Workwear Produktion - professionelle Berufsbekleidung"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-warm"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-12 max-w-4xl">
            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Funktionale Berufsbekleidung mit Stil
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-6">
                Workwear muss besonderen Anforderungen gerecht werden: Sie soll funktional und 
                strapazierfähig sein, gleichzeitig aber auch das professionelle Erscheinungsbild 
                des Unternehmens widerspiegeln. Unsere Expertise liegt in der perfekten Balance 
                zwischen Funktionalität und Design.
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Von hochwertigen Schürzen für Baristas bis hin zu eleganten Poloshirts für 
                Hotelangestellte – wir entwickeln maßgeschneiderte Lösungen für jeden Bereich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Materialvielfalt für jeden Einsatzbereich
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-4">
                <strong>Funktionsmaterialien:</strong> Atmungsaktive, pflegeleichte Gewebe für den täglichen Einsatz
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-4">
                <strong>Strapazierfähige Stoffe:</strong> Robuste Materialien für anspruchsvolle Arbeitsbedingungen
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-4">
                <strong>Nachhaltige Optionen:</strong> Bio-Baumwolle und recycelte Fasern für umweltbewusste Unternehmen
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                <strong>Spezialgewebe:</strong> Fleckenresistente, antibakterielle oder feuerhemmende Eigenschaften
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Von Einzelstücken bis zur Großserie
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-6">
                <strong>Prototyping:</strong> Entwicklung und Anpassung von Schnitten und Designs nach Ihren Vorgaben
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-6">
                <strong>Kleinserien:</strong> Flexible Produktion für Boutique-Hotels und spezialisierte Betriebe
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                <strong>Großserien:</strong> Effiziente Fertigung für Hotelketten und große Gastronomieunternehmen
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Produktkategorien
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-4">
                <strong>Gastronomie:</strong> Schürzen, Kochjacken, Servicekleidung für Restaurants und Cafés
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-4">
                <strong>Hotellerie:</strong> Rezeptionsuniformen, Housekeeping-Kleidung, Concierge-Outfits
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-4">
                <strong>Corporate Wear:</strong> Firmenuniformen, Poloshirts, Hemden mit Firmenbranding
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                <strong>Spezialkleidung:</strong> Arbeitskleidung für besondere Anforderungen und Branchen
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Corporate Identity durch Workwear
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-6">
                Professionelle Berufsbekleidung ist ein wichtiger Teil der Corporate Identity. 
                Wir unterstützen Sie bei der Entwicklung eines einheitlichen Erscheinungsbilds, 
                das Ihre Markenidentität perfekt widerspiegelt.
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Von der Farbauswahl über Schnittdetails bis hin zu individuellen Stickereien 
                und Drucken – jedes Detail wird sorgfältig auf Ihr Unternehmen abgestimmt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                Warum CMK.Studio für Workwear?
              </h2>
              <p className="text-body-large text-muted-foreground leading-relaxed mb-6">
                Mit jahrzehntelanger Erfahrung in der Textilproduktion verstehen wir die 
                besonderen Anforderungen an Berufsbekleidung. Unsere Expertise umfasst sowohl 
                die technischen Aspekte wie Passform und Funktionalität als auch die ästhetischen 
                Komponenten für ein professionelles Erscheinungsbild.
              </p>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Vertrauen Sie auf unsere Kompetenz für hochwertige Workwear, die Ihre Mitarbeiter 
                gerne tragen und die Ihr Unternehmen optimal repräsentiert.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 mb-16 text-center">
            <Link
              to="/kontakt"
              className="btn-accent"
            >
              Workwear-Projekt besprechen
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Workwear;