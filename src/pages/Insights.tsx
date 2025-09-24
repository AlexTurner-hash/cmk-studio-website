import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogImage1 from "@/assets/blog-erste-modekollektion-new.jpg";
import blogImage2 from "@/assets/blog-nachhaltige-produktion.jpg";
import blogImage3 from "@/assets/blog-private-label.jpg";
import blogImage4 from "@/assets/blog-micro-produktion-premium.jpg";
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
    id: "erste-modekollektion-planen",
    title: "Wie Sie Ihre erste Modekollektion planen – ein Leitfaden für Startups und Creator",
    excerpt: "Von der ersten Idee bis zur fertigen Kollektion: Entdecken Sie die wichtigsten Schritte für eine erfolgreiche Modekollektion und vermeiden Sie typische Anfängerfehler.",
    image: blogImage1,
    readTime: "8 min",
    category: "Startup-Guide"
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
    id: "private-label-bekleidung-eigenmarken",
    title: "Private Label Bekleidung: Warum Eigenmarken für Unternehmen immer wichtiger werden",
    excerpt: "Erfahren Sie, wie Unternehmen mit maßgeschneiderter Bekleidung ihre Markenidentität stärken und sich vom Wettbewerb abheben können.",
    image: blogImage3,
    readTime: "7 min",
    category: "Business"
  },
  {
    id: "micro-produktion-modebranche",
    title: "Kleine Auflagen, große Wirkung: Warum Micro-Produktion die Modebranche verändert",
    excerpt: "Wie kleine Auflagen nachhaltiger, kostengünstiger und flexibler sein können als Massenproduktion – ein Paradigmenwechsel in der Textilbranche.",
    image: blogImage4,
    readTime: "5 min",
    category: "Trends"
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
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-[hsl(var(--cream-tan-hover))] tracking-wide uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime} Lesezeit
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-light mb-3 text-foreground font-display group-hover:text-[hsl(var(--cream-tan-hover))] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 font-body leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="w-full"
                    >
                      <a href={`/insights/${post.id}`}>
                        Weiterlesen
                      </a>
                    </Button>
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
            <Button size="lg" asChild>
              <a href="#contact">
                Jetzt Projekt starten
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Insights;