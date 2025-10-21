import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsArticlesDE, insightsArticlesEN } from "@/translations/insights-articles";
import blogImage from "@/assets/blog-erste-modekollektion.jpg";

const ErsteModekollektion = () => {
  const { language } = useLanguage();
  const t = language === 'de' ? insightsArticlesDE.ersteModekollektion : insightsArticlesEN.ersteModekollektion;
  
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Wie Sie Ihre erste Modekollektion planen – ein Leitfaden für Startups und Creator",
    "description": "Kompletter Leitfaden für Ihre erste Modekollektion: Von der Ideenfindung über Design bis zur Produktion. Professionelle Beratung in Berlin und Rhein-Main.",
    "image": blogImage,
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "author": {
      "@type": "Organization",
      "name": "CMK Studio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CMK Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cmk.studio/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cmk.studio/insights/erste-modekollektion-planen"
    },
    "articleSection": "Startup-Guide",
    "keywords": ["Modekollektion", "Fashion Startup", "Textilproduktion", "Design", "Berlin"],
    "timeRequired": "PT8M"
  };

  return (
    <>
      <title>{t.title} | CMK Studio</title>
      <meta name="description" content={t.subtitle} />
      
      <div className="min-h-screen">
        <script type="application/ld+json">
          {JSON.stringify(blogPostSchema)}
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
              <img 
                src={blogImage} 
                alt="Modedesign Skizzen und Stoffproben auf einem Arbeitstisch"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.basics.title}
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.basics.content1}
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.basics.content2}
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.marketAnalysis.title}
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.marketAnalysis.content1}
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.marketAnalysis.content2}
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.budgetPlanning.title}
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.budgetPlanning.content1}
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.budgetPlanning.content2}
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.designPrototyping.title}
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.designPrototyping.content1}
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.designPrototyping.content2}
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.productionQuality.title}
              </h2>
              
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">
                {t.sections.productionQuality.content1}
              </p>

              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.productionQuality.content2}
              </p>

              <h2 className="text-2xl font-light mb-4 text-foreground font-display">
                {t.sections.conclusion.title}
              </h2>
              
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">
                {t.sections.conclusion.content}
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
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Erste Modekollektion">
                  {t.ctaButton}
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

export default ErsteModekollektion;