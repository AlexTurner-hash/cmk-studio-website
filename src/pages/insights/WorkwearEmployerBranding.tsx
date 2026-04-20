import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-workwear-employer-branding.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsArticlesDE, insightsArticlesEN } from "@/translations/insights-articles";

const WorkwearEmployerBranding = () => {
  const { language } = useLanguage();
  const t = language === 'de' ? insightsArticlesDE.workwearEmployerBranding : insightsArticlesEN.workwearEmployerBranding;
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Workwear als Employer Branding: Warum billige T-Shirt-Drucke nicht mehr reichen",
    "description": "Wie hochwertige, nachhaltige Arbeitskleidung zum Aushängeschild Ihres Unternehmens wird und warum Mitarbeiter heute Wert auf Komfort, Qualität und individuelle Details legen.",
    "image": blogImage,
    "datePublished": "2024-01-20",
    "dateModified": "2024-01-20",
    "author": {
      "@type": "Organization",
      "name": "CMK Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CMK Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cmk-studio.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cmk-studio.com/insights/workwear-employer-branding"
    },
    "articleSection": "Employer Branding",
    "keywords": ["Workwear", "Employer Branding", "Arbeitskleidung", "Corporate Fashion", "Nachhaltigkeit"],
    "timeRequired": "PT6M"
  };

  return (
    <>
      <title>{language === 'de' ? 'Workwear als Employer Branding - Hochwertige Arbeitskleidung | CMK Studio' : 'Workwear as Employer Branding - High-Quality Workwear | CMK Studio'}</title>
      <meta name="description" content={t.subtitle} />
      
      <div className="min-h-screen">
        <script type="application/ld+json">
          {JSON.stringify(blogPostSchema)}
        </script>
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
                alt="Hochwertige Workwear als Employer Branding - nachhaltige Arbeitskleidung"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Das Ende der T-Shirt-Ära
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Billige T-Shirts mit aufgedruckten Logos waren gestern. Moderne Mitarbeiter haben höhere 
                Ansprüche an ihre Arbeitskleidung und sehen diese als Spiegelbild der Unternehmenskultur. 
                Unternehmen, die noch auf günstige Online-Drucke setzen, verpassen eine wichtige Chance 
                im Employer Branding.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Hochwertige Workwear signalisiert Wertschätzung gegenüber den Mitarbeitern und zeigt, 
                dass das Unternehmen bereit ist, in Qualität zu investieren. Diese Botschaft kommt 
                sowohl intern als auch extern an.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Workwear als Visitenkarte
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Mitarbeiter sind die besten Botschafter eines Unternehmens. Wenn sie stolz auf ihre 
                Arbeitskleidung sind und diese auch in der Freizeit tragen, wird das Unternehmen 
                zur persönlichen Empfehlung. Hochwertige Workwear macht aus jedem Mitarbeiter einen 
                authentischen Markenbotschafter.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Besonders in kreativen und technischen Branchen ist die Kleidung ein wichtiger 
                Ausdruck der Unternehmensidentität. Startups und innovative Unternehmen nutzen 
                durchdachte Workwear, um ihre Kultur und Werte zu kommunizieren.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Qualität, die überzeugt
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Mitarbeiter merken sofort den Unterschied zwischen billiger Massenware und hochwertiger 
                Kleidung. Gute Passform, angenehme Materialien und durchdachte Details schaffen ein 
                positives Tragegefühl, das sich auf die Arbeitseinstellung auswirkt.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Nachhaltige Materialien wie Bio-Baumwolle oder recycelte Fasern zeigen außerdem, 
                dass das Unternehmen Verantwortung übernimmt. Diese Werte werden von modernen 
                Arbeitnehmern zunehmend geschätzt und erwartet.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Individualität statt Einheitsoptik
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Moderne Workwear muss nicht uniform aussehen. Verschiedene Schnitte, Farben und 
                Styles ermöglichen es Mitarbeitern, ihre Persönlichkeit auszudrücken und sich 
                gleichzeitig mit dem Unternehmen zu identifizieren.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Subtile Branding-Elemente wirken oft professioneller als große Logos. Ein kleines 
                Etikett, ein dezentes Logo oder spezielle Farbakzente können genauso wirkungsvoll 
                sein wie auffällige Aufdrucke.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Der ROI von hochwertiger Workwear
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Hochwertige Arbeitskleidung ist eine Investition, die sich mehrfach auszahlt. 
                Mitarbeiter fühlen sich wertgeschätzt, die Fluktuation sinkt und das Unternehmen 
                wird für potenzielle Bewerber attraktiver. Gleichzeitig steigt die Markensichtbarkeit.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Studien zeigen, dass Unternehmen mit durchdachter Corporate Fashion höhere 
                Mitarbeiterzufriedenheit und bessere Bewertungen auf Arbeitgeberportalen erzielen. 
                Die Investition in Qualität zahlt sich langfristig aus.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Nachhaltigkeit als Wettbewerbsvorteil
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                Nachhaltige Workwear spricht besonders die Generation Z und Millennials an, 
                die zunehmend Wert auf ethische Unternehmenspraktiken legen. Fair produzierte 
                Kleidung aus ökologischen Materialien wird zum Differenzierungsmerkmal.
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Transparenz in der Produktionskette und Zertifizierungen wie GOTS oder 
                Fair Trade ermöglichen es Unternehmen, ihre Nachhaltigkeitsstrategie 
                authentisch zu kommunizieren.
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                Die Zukunft der Corporate Fashion
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                Workwear wird zunehmend zum strategischen Instrument im Employer Branding. 
                Unternehmen, die heute in hochwertige, nachhaltige Arbeitskleidung investieren, 
                positionieren sich als attraktive Arbeitgeber und starke Marken. 
                Die Zeit der billigen T-Shirt-Drucke ist endgültig vorbei.
              </p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                Bereit für hochwertige Workwear?
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                Entwickeln Sie mit uns Arbeitskleidung, die Ihre Mitarbeiter stolz macht.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Workwear Kollektion">
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

export default WorkwearEmployerBranding;