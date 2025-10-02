import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import claudiaPortrait from "@/assets/claudia-kleinert-portrait.jpg";
import blushStore from "@/assets/claudia-kleinert-blush-store.jpg";
const ClaudiaKleinert = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Claudia Kleinert",
    "jobTitle": "Gründerin und Geschäftsführerin",
    "worksFor": {
      "@type": "Organization",
      "name": "CMK.Studio"
    },
    "description": "Erfolgreiche Berliner Dessous-Designerin und Gründerin von blush Lingerie mit langjähriger Erfahrung in Design, Produktion und Vertrieb",
    "knowsAbout": ["Lingerie Design", "Textilproduktion", "Modedesign", "Fashion Consulting", "Europäische Produktion"],
    "alumniOf": "blush Lingerie",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Berlin",
      "addressCountry": "DE"
    },
    "image": claudiaPortrait,
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Fashion Consultant & Designer"
    }
  };

  return <>
      <title>Claudia Kleinert - Gründerin und Geschäftsführerin | CMK.Studio</title>
      <meta name="description" content="Lernen Sie Claudia Kleinert kennen: Die erfolgreiche Berliner Dessous-Designerin mit langjähriger Erfahrung in Design, Produktion und Vertrieb." />
      
      <div className="min-h-screen">
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
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
              <img src={claudiaPortrait} alt="Claudia Kleinert, Gründerin und Geschäftsführerin von CMK.Studio" className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">Von der Designerin zur Beraterin</h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">Claudia Kleinert begann ihre Laufbahn als studierte Modedesignerin und baute schon in ihren ersten Stationen Erfahrung in der industriellen Schnittstelle von Fashiondesign und Textilproduktion auf. Diese spezifische Expertise macht sie heute anderen Modeschaffenden durch CMK.Studio zugänglich.</p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Ihr Weg führte sie durch verschiedene Bereiche der Modebranche: vom Design über die Produktentwicklung bis hin zum Aufbau von Produktionspartnerschaften in Europa. Diese vielseitige Erfahrung bildet das Fundament ihrer heutigen Beratungstätigkeit.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Erfahrungen aus der Praxis
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">Durch ihre Arbeit mit Marken wie Puma, Homeboy, Aubade, Felina und Merz B Schwanen hat Claudia die Herausforderungen von Textilproduktion in jedem Reifegrad einer Marke kennengelernt. Von Start-ups bis zu etablierten Unternehmen – jedes Projekt hat seine eigene Dynamik und erfordert eigene Lösungsansätze.</p>

              <div className="aspect-[16/9] my-12 rounded-lg overflow-hidden">
                <img src={blushStore} alt="blush Lingerie Store - Claudia Kleinerts eigene Dessous-Marke" className="w-full h-full object-cover" />
              </div>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">Mit ihrem Berliner Fashion Start Up blush Lingerie entwickelte sie eine eigene, international erfolgreiche Dessous-Marke aus dem Stand - und forderte große industrielle Wettbewerber heraus. Sie betreute alle Aspekte der Markenführung – von der Produktentwicklung über die Produktion bis zu Marketing Vertrieb. Diese Erfahrung als kreative Unternehmerin ist für andere DesignerInnen von unschätzbarem Wert.</p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Arbeitsweise bei CMK.Studio
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Bei CMK.Studio führt Claudia zunächst persönliche Gespräche mit Interessenten, um deren Vorstellungen und Ziele zu verstehen. Dabei geht es darum, realistische Erwartungen zu entwickeln und passende Lösungsansätze zu finden.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Die Auswahl der Produktionspartner erfolgt projektspezifisch. Claudia arbeitet mit einem Netzwerk europäischer Produzenten zusammen, das sie über Jahre aufgebaut hat. Dabei stehen nicht nur Kosten im Vordergrund, sondern auch Qualität, Liefertreue und Kommunikation.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Fokus auf europäische Produktion
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Ein Großteil der Projekte wird in europäischen Produktionsstätten umgesetzt. Das bringt praktische Vorteile mit sich: kürzere Kommunikationswege, ähnliche Zeitzone und die Möglichkeit, Produktionsstätten persönlich zu besuchen.
              </p>

              <blockquote className="border-l-4 border-[hsl(var(--cream-tan-hover))] pl-6 my-8 italic text-xl text-foreground">
                "Jedes Projekt ist anders. Wichtig ist, dass wir gemeinsam eine Lösung finden, die zu den spezifischen Anforderungen und Möglichkeiten passt."
              </blockquote>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Wissenstransfer an die nächste Generation
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                CMK.Studio versteht sich als Brücke zwischen erfahrenen Produktionspartnern und neuen Modeschaffenden. Claudia teilt ihr Wissen über Materialkunde, Produktionsabläufe und Qualitätskontrolle mit Designern und Unternehmern, die eigene Projekte umsetzen möchten.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Dabei geht es nicht nur um die technische Umsetzung, sondern auch um realistische Einschätzungen von Kosten, Zeitaufwand und Marktchancen. Diese Einordnung hilft bei der Projektplanung und reduziert typische Anfängerfehler in der Textilproduktion.
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
    </>;
};
export default ClaudiaKleinert;