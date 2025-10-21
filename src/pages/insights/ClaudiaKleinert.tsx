import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsArticlesDE, insightsArticlesEN } from "@/translations/insights-articles";
import claudiaPortrait from "@/assets/claudia-kleinert-portrait.jpg";
import blushStore from "@/assets/claudia-kleinert-blush-store.jpg";

const ClaudiaKleinert = () => {
  const { language } = useLanguage();
  const t = language === 'de' ? insightsArticlesDE.claudiaKleinert : insightsArticlesEN.claudiaKleinert;
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Claudia Kleinert",
    "jobTitle": "Gründerin und Geschäftsführerin",
    "worksFor": {
      "@type": "Organization",
      "name": "CMK Studio"
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
      <title>{t.title} | CMK Studio</title>
      <meta name="description" content={t.subtitle} />
      
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
                {t.backToInsights}
              </a>
            </Button>

            {/* Article Header */}
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

            {/* Featured Image */}
            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img src={claudiaPortrait} alt="Claudia Kleinert, Gründerin und Geschäftsführerin von CMK Studio" className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{t.sections.fromDesignerToConsultant.title}</h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{t.sections.fromDesignerToConsultant.content1}</p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.fromDesignerToConsultant.content2}
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.practicalExperience.title}
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{t.sections.practicalExperience.content1}</p>

              <div className="aspect-[16/9] my-12 rounded-lg overflow-hidden">
                <img src={blushStore} alt="blush Lingerie Store - Claudia Kleinerts eigene Dessous-Marke" className="w-full h-full object-cover" />
              </div>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">{t.sections.practicalExperience.content2}</p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.workingMethod.title}
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.workingMethod.content1}
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.workingMethod.content2}
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.europeanProduction.title}
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.europeanProduction.content1}
              </p>

              <blockquote className="border-l-4 border-[hsl(var(--cream-tan-hover))] pl-6 my-8 italic text-xl text-foreground">
                {t.sections.europeanProduction.quote}
              </blockquote>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.knowledgeTransfer.title}
              </h2>

              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.knowledgeTransfer.content1}
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.knowledgeTransfer.content2}
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                {t.ctaTitle}
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                {t.ctaDescription}
              </p>
              <Button size="lg" asChild>
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Beratung">
                  {t.ctaButton}
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