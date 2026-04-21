import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-kosten-transparenz.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsArticlesDE, insightsArticlesEN } from "@/translations/insights-articles";

const KostenTransparenz = () => {
  const { language } = useLanguage();
  const t: any = language === 'de' ? insightsArticlesDE.kostenTransparenz : insightsArticlesEN.kostenTransparenz;
  const s = t.sections;

  return (
    <>
      <title>{language === 'de' ? 'Kosten-Transparenz: Was kostet Modeproduktion wirklich? | CMK Studio' : 'Cost Transparency: What Does Fashion Production Really Cost? | CMK Studio'}</title>
      <meta name="description" content={t.subtitle} />

      <div className="min-h-screen">
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
                <span className="text-sm text-muted-foreground">{t.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-light mb-6 text-foreground font-display leading-tight">
                {t.title}
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">{t.subtitle}</p>
            </header>

            <div className="aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <img src={blogImage} alt={t.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              {/* hiddenCosts */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.hiddenCosts.title}</h2>
              {s.hiddenCosts.paragraphs.map((p: string, i: number) => (
                <p key={i} className={`${i === s.hiddenCosts.paragraphs.length - 1 ? 'mb-8' : 'mb-6'} font-body leading-relaxed text-muted-foreground`}>{p}</p>
              ))}

              {/* breakdown */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.breakdown.title}</h2>
              {s.breakdown.groups.map((g: any, i: number) => (
                <div key={i}>
                  <p className="mb-4 font-body leading-relaxed text-muted-foreground"><strong>{g.label}</strong></p>
                  <ul className={`${i === s.breakdown.groups.length - 1 ? 'mb-8' : 'mb-6'} space-y-2 text-muted-foreground font-body`}>
                    {g.bullets.map((b: string, j: number) => <li key={j}>• {b}</li>)}
                  </ul>
                </div>
              ))}

              {/* europeVsAsia */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.europeVsAsia.title}</h2>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.europeVsAsia.intro}</p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                {s.europeVsAsia.bullets.map((b: string, i: number) => <li key={i}>• {b}</li>)}
              </ul>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground"><strong>{s.europeVsAsia.conclusion}</strong></p>

              {/* moqs */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.moqs.title}</h2>
              {s.moqs.paragraphs.map((p: string, i: number) => (
                <p key={i} className={`${i === s.moqs.paragraphs.length - 1 ? 'mb-8' : 'mb-6'} font-body leading-relaxed text-muted-foreground`}>{p}</p>
              ))}

              {/* complexProducts */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.complexProducts.title}</h2>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.complexProducts.intro}</p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                {s.complexProducts.bullets.map((b: string, i: number) => <li key={i}>• {b}</li>)}
              </ul>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">{s.complexProducts.conclusion}</p>

              {/* costExplosion */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.costExplosion.title}</h2>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.costExplosion.intro}</p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                {s.costExplosion.bullets.map((b: string, i: number) => <li key={i}>• {b}</li>)}
              </ul>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground"><strong>{s.costExplosion.conclusion}</strong></p>

              {/* fairCalculation */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.fairCalculation.title}</h2>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.fairCalculation.intro}</p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                {s.fairCalculation.bullets.map((b: string, i: number) => <li key={i}>• {b}</li>)}
              </ul>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground"><strong>{s.fairCalculation.conclusion}</strong></p>

              {/* conclusion */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.conclusion.title}</h2>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">{s.conclusion.content}</p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">{t.ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 font-body">{t.ctaDescription}</p>
              <Button size="lg" asChild>
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Kostenkalkulation">{t.ctaButton}</a>
              </Button>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default KostenTransparenz;
