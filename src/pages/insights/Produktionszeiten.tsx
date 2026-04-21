import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogImage from "@/assets/blog-produktionszeiten.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { insightsArticlesDE, insightsArticlesEN } from "@/translations/insights-articles";

const Produktionszeiten = () => {
  const { language } = useLanguage();
  const t: any = language === 'de' ? insightsArticlesDE.produktionszeiten : insightsArticlesEN.produktionszeiten;
  const s = t.sections;

  const renderItems = (items: { label: string; text: string }[]) => (
    <>
      {items.map((it, i) => (
        <div key={i}>
          <p className="mb-4 font-body leading-relaxed text-muted-foreground">
            <strong>{it.label}</strong>
          </p>
          <p className="mb-6 font-body leading-relaxed text-muted-foreground">{it.text}</p>
        </div>
      ))}
    </>
  );

  return (
    <>
      <title>{language === 'de' ? 'Produktionszeiten Textil realistisch planen - Timeline-Guide | CMK Studio' : 'Realistic Textile Production Timelines - Timeline Guide | CMK Studio'}</title>
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
              <img
                src={blogImage}
                alt={t.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {/* underestimatedTimeline */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.underestimatedTimeline.title}</h2>
              {s.underestimatedTimeline.paragraphs.map((p: string, i: number) => (
                <p key={i} className={`${i === s.underestimatedTimeline.paragraphs.length - 1 ? 'mb-8' : 'mb-6'} font-body leading-relaxed text-muted-foreground`}>{p}</p>
              ))}

              {/* sevenPhases */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.sevenPhases.title}</h2>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.sevenPhases.intro}</p>
              {renderItems(s.sevenPhases.items)}

              {/* timelinesByCategory */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.timelinesByCategory.title}</h2>
              {renderItems(s.timelinesByCategory.items)}

              {/* hiddenTimeEaters */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.hiddenTimeEaters.title}</h2>
              {renderItems(s.hiddenTimeEaters.items)}

              {/* europeVsAsia */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.europeVsAsia.title}</h2>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.europeVsAsia.intro}</p>
              <p className="mb-4 font-body leading-relaxed text-muted-foreground"><strong>{s.europeVsAsia.realityLabel}</strong></p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                {s.europeVsAsia.bullets.map((b: string, i: number) => <li key={i}>• {b}</li>)}
              </ul>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">{s.europeVsAsia.conclusion}</p>

              {/* timelineOptimization */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.timelineOptimization.title}</h2>
              {renderItems(s.timelineOptimization.items)}

              {/* expressProduction */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.expressProduction.title}</h2>
              <p className="mb-6 font-body leading-relaxed text-muted-foreground">{s.expressProduction.intro}</p>
              <ul className="mb-6 space-y-2 text-muted-foreground font-body">
                {s.expressProduction.bullets.map((b: string, i: number) => <li key={i}>• {b}</li>)}
              </ul>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">{s.expressProduction.conclusion}</p>

              {/* conclusion */}
              <h2 className="text-2xl font-light mb-4 text-foreground font-display">{s.conclusion.title}</h2>
              <p className="mb-8 font-body leading-relaxed text-muted-foreground">{s.conclusion.content}</p>
            </div>

            <div className="mt-16 p-8 bg-[hsl(var(--cream-tan))] rounded-lg text-center">
              <h3 className="text-xl font-light mb-4 text-foreground font-display">{t.ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 font-body">{t.ctaDescription}</p>
              <Button size="lg" asChild>
                <a href="mailto:service@cmk-studio.com?subject=*Anfrage* Timeline-Planung">{t.ctaButton}</a>
              </Button>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default Produktionszeiten;
