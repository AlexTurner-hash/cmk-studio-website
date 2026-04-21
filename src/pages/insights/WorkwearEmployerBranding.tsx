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
              {(['endOfTshirtEra','businessCard','qualityConvinces','individuality','roi','sustainability'] as const).map((key) => {
                const s = (t.sections as any)[key];
                return (
                  <div key={key}>
                    <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.title}</h2>
                    <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.content1}</p>
                    <p className="mb-8 font-body leading-relaxed text-muted-foreground">{s.content2}</p>
                  </div>
                );
              })}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{(t.sections as any).future.title}</h2>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">{(t.sections as any).future.content}</p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">
                {(t as any).ctaTitle}
              </h3>
              <p className="text-muted-foreground mb-6 font-body">
                {(t as any).ctaDescription}
              </p>
              <Button size="lg" asChild>
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Workwear Kollektion">
                  {(t as any).ctaButton}
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