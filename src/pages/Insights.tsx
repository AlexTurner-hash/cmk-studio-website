import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogImage1 from "@/assets/blog-erste-modekollektion-new.jpg";
import blogImage2 from "@/assets/blog-nachhaltige-produktion.jpg";
import blogImage3 from "@/assets/blog-private-label-regional.jpg";
import blogImage5 from "@/assets/blog-workwear-employer-branding.jpg";
import blogImage6 from "@/assets/blog-luxury-hospitality-collections.jpg";
import blogImage7 from "@/assets/blog-creators-influencers-new.jpg";
import blogImage8 from "@/assets/blog-qualitaet-nachhaltigkeit.jpg";
import blogImage9 from "@/assets/blog-lingerie-expertise-new.jpg";
import blogImage10 from "@/assets/blog-spezialisierung-expertise.jpg";
import blogImageKosten from "@/assets/blog-kosten-transparenz.jpg";
import blogImageZert from "@/assets/blog-zertifizierungen-vergleich.jpg";
import blogImageDue from "@/assets/blog-due-diligence.jpg";
import blogImageTech from "@/assets/blog-tech-zu-fashion.jpg";
import blogImageZeit from "@/assets/blog-produktionszeiten.jpg";
import claudiaPortrait from "@/assets/claudia-kleinert-portrait.jpg";

const blogPosts = [
  {
    id: "claudia-kleinert",
    title: "Claudia Kleinert: Die Gründerin",
    excerpt: "Von der studierten Modedesignerin zur erfolgreichen Unternehmerin: Wie die Gründerin von 'blush Lingerie' ihr Praxiswissen durch CMK.Studio anderen Modeschaffenden zugänglich macht.",
    image: claudiaPortrait,
    readTime: "5 min",
    category: "Portrait"
  },
  {
    id: "nachhaltige-textilproduktion-europa",
    title: "Europa ist die Zukunft der nachhaltigen Textilproduktion",
    excerpt: "Im Interview erklärt Claudia Kleinert, warum europäische Fertigung wirtschaftlich sinnvoll ist, wie kurze Lieferketten Flexibilität ermöglichen und weshalb Nachhaltigkeit kein Kostennachteil sein muss.",
    image: "/lovable-uploads/2fc892b4-8981-409e-b09c-3c37cecf8f68.png",
    readTime: "8 min",
    category: "Interview"
  },
  {
    id: "kosten-transparenz-modeproduktion",
    title: "Kosten-Transparenz: Was kostet die Produktion einer Modekollektion wirklich?",
    excerpt: "Realistische Zahlen statt Wunschdenken: Ein detaillierter Einblick in die tatsächlichen Kosten der Modeproduktion – von Material über Fertigung bis Logistik. Europa vs. Fernost im Vergleich.",
    image: blogImageKosten,
    readTime: "10 min",
    category: "Kalkulation"
  },
  {
    id: "erste-modekollektion-planen",
    title: "Wie Sie Ihre erste Modekollektion planen – ein Leitfaden für Startups und Creator",
    excerpt: "Von der ersten Idee bis zur fertigen Kollektion: Entdecken Sie die wichtigsten Schritte für eine erfolgreiche Modekollektion und vermeiden Sie typische Anfängerfehler.",
    image: blogImage1,
    readTime: "8 min",
    category: "Startup-Guide"
  },
  {
    id: "zertifizierungen-vergleich",
    title: "GOTS vs. OEKO-TEX vs. BSCI: Welche Zertifizierung braucht Ihre Marke wirklich?",
    excerpt: "Nicht jedes Label braucht GOTS – aber jede Marke braucht die richtige Zertifizierung. Ein strukturierter Vergleich für fundierte Entscheidungen mit Decision Tree.",
    image: blogImageZert,
    readTime: "9 min",
    category: "Nachhaltigkeit"
  },
  {
    id: "produktionszeiten-timeline",
    title: "Produktionszeiten realistisch planen: Timeline-Guide für jede Produktkategorie",
    excerpt: "Von T-Shirt bis Lingerie: Wie lange dauert Textilproduktion wirklich? Ein detaillierter Timeline-Guide mit realistischen Zahlen für alle Produktkategorien.",
    image: blogImageZeit,
    readTime: "10 min",
    category: "Planung"
  },
  {
    id: "due-diligence-lieferketten",
    title: "Due Diligence in Textil-Lieferketten: Compliance-Guide für KMUs",
    excerpt: "Das deutsche Lieferkettengesetz betrifft auch kleinere Unternehmen. Ein praktischer Leitfaden für transparente, konforme Textilproduktion mit Checklisten.",
    image: blogImageDue,
    readTime: "11 min",
    category: "Compliance"
  },
  {
    id: "tech-startup-merchandise",
    title: "Von der Tech-Firma zum Fashion-Label: So entwickeln erfolgreiche Startups Merchandise",
    excerpt: "Tech-Startups entdecken Fashion als Umsatzquelle und Community-Builder. Wie der Sprung von Code zu Kleidung gelingt – ohne Fashion-Background. Case Studies.",
    image: blogImageTech,
    readTime: "9 min",
    category: "Startup-Guide"
  },
  {
    id: "private-label-bekleidung-eigenmarken",
    title: "Private Label für regionale Händler: Wie mittelständische Modehäuser mit Eigenmarken punkten",
    excerpt: "Erfahren Sie, wie familiengeführte Modehäuser und regionale Handelsketten durch maßgeschneiderte Eigenmarken ihre Stammkundschaft stärken und sich gegen die Online-Konkurrenz behaupten können.",
    image: blogImage3,
    readTime: "7 min",
    category: "Einzelhandel"
  },
  {
    id: "qualitaet-nachhaltigkeit",
    title: "Langlebigkeit statt Fast Fashion: Warum hochwertige Qualität die nachhaltigste Investition ist",
    excerpt: "Ein gut verarbeitetes Teil, das 10 Jahre hält, ist nachhaltiger als 10 billige Teile. Warum Cost-per-Wear die ehrlichere Rechnung ist.",
    image: blogImage8,
    readTime: "6 min",
    category: "Nachhaltigkeit"
  },
  {
    id: "lingerie-expertise",
    title: "Von der Idee zum Premium-Produkt: Lingerie-Entwicklung mit Expertise",
    excerpt: "Die Erfolgsgeschichte von blush Lingerie zeigt, wie aus Leidenschaft für Details eine erfolgreiche Premium-Marke entsteht – und warum diese Expertise auch Ihrem Projekt zugutekommt.",
    image: blogImage9,
    readTime: "7 min",
    category: "Case Study"
  },
  {
    id: "spezialisierung-expertise",
    title: "Spezialisierung zahlt sich aus: Warum Nischen-Expertise in der Textilproduktion entscheidend ist",
    excerpt: "Von Lingerie über Workwear bis Swimwear: Warum jede Produktkategorie eigenes Know-how braucht und generalistische Produzenten oft nicht ausreichen.",
    image: blogImage10,
    readTime: "7 min",
    category: "Expertise"
  },
  {
    id: "workwear-employer-branding",
    title: "Workwear als Employer Branding: Warum billige T-Shirt-Drucke nicht mehr reichen",
    excerpt: "Erfahren Sie, wie hochwertige, nachhaltige Arbeitskleidung zum Aushängeschild Ihres Unternehmens wird und warum Mitarbeiter heute Wert auf Komfort, Qualität und individuelle Details legen.",
    image: blogImage5,
    readTime: "6 min",
    category: "Employer Branding"
  },
  {
    id: "luxury-hospitality-collections",
    title: "Luxus zum Mitnehmen: Wie Hotels und Spas mit exklusiven Kollektionen neue Umsätze generieren",
    excerpt: "Von Yoga-Apparel bis zu Premium-Badtextilien: Erfahren Sie, wie High-End-Hotels und Spa-Resorts durch hochwertige Eigenmarken ihre Gäste begeistern und zusätzliche Erlösquellen erschließen.",
    image: blogImage6,
    readTime: "7 min",
    category: "Hospitality"
  },
  {
    id: "creators-influencers-fashion-produktion",
    title: "Von der Idee zur Kollektion: Wie Creator und Influencer den Sprung in die Modeproduktion schaffen",
    excerpt: "Creator haben die Kreativität und Community, aber oft fehlt das Fashion-Know-how. Erfahren Sie, wie kleine Drops, schnelle Turnaround-Zeiten und maximale Flexibilität die neue Ära der Modeproduktion prägen.",
    image: blogImage7,
    readTime: "6 min",
    category: "Creator Economy"
  }
];

const Insights = () => {
  return (
    <>
      <title>Insights - CMK.Studio | Expertenwissen für Textilproduktion</title>
      <meta name="description" content="Entdecken Sie Expertenwissen zu nachhaltiger Textilproduktion, Modekollektion-Planung und Private Label. Praktische Tipps für Startups, Creator und Unternehmen." />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-light mb-6 text-foreground font-display">
                Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Expertenwissen rund um nachhaltige Textilproduktion, Kollektionsplanung 
                und erfolgreiche Markenentwicklung.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                  <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-[hsl(var(--cream-tan-hover))] tracking-wide uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime} Lesezeit
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-light mb-3 text-foreground font-display group-hover:text-[hsl(var(--cream-tan-hover))] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 font-body leading-relaxed flex-grow line-clamp-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4">
                      <a 
                        href={`/insights/${post.id}`}
                        className="text-[hsl(var(--cream-tan-hover))] hover:text-[hsl(var(--cream-tan-hover))]/80 transition-colors duration-200 font-medium"
                      >
                        Weiterlesen
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[hsl(var(--cream-tan))]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-foreground font-display">
              Bereit für Ihr eigenes Projekt?
            </h2>
            <p className="text-muted-foreground mb-8 font-body">
              Starten Sie Ihre Kollektion mit einem erfahrenen Partner an Ihrer Seite.
            </p>
            <a href="#contact" className="btn-accent inline-block">
              Jetzt Projekt starten
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Insights;