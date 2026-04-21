import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-luxury-hospitality-collections.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsArticlesDE, insightsArticlesEN } from "@/translations/insights-articles";

const LuxuryHospitalityCollections = () => {
  const { language } = useLanguage();
  const t = language === 'de' ? insightsArticlesDE.luxuryHospitalityCollections : insightsArticlesEN.luxuryHospitalityCollections;
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Luxus zum Mitnehmen: Wie Hotels und Spas mit exklusiven Kollektionen neue Umsätze generieren",
    "description": "Premium Hotel und Spa Kollektionen für Resorts im Rhein-Main-Gebiet: Von Yoga-Apparel bis Badtextilien. Hochwertige Eigenmarken für exklusive Gästeerlebnisse.",
    "image": blogImage,
    "datePublished": "2024-01-25",
    "dateModified": "2024-01-25",
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
      "@id": "https://cmk-studio.com/insights/luxury-hospitality-collections"
    },
    "articleSection": "Hospitality",
    "keywords": ["Luxus Hotels", "Spa Kollektionen", "Hotel Merchandise", "Rhein-Main", "Premium Textilien"],
    "timeRequired": "PT7M"
  };

  return (
    <>
      <title>{language === 'de' ? 'Luxus Hotel & Spa Kollektionen Rhein-Main | CMK Studio' : 'Luxury Hotel & Spa Collections Rhine-Main | CMK Studio'}</title>
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
                alt="Luxuriöse Hotel Spa Boutique mit Premium Kollektionen zum Mitnehmen"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {(['moreThanMerch','yogaApparel','premiumBath','psychology','sustainability','digitalMeetsPhysical','roi'] as const).map((key) => {
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
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Hospitality Kollektion">
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

export default LuxuryHospitalityCollections;