import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogImage1 from "@/assets/blog-erste-modekollektion.jpg";
import blogImage2 from "@/assets/blog-nachhaltige-produktion.jpg";

const InsightsPreviewSection = () => {
  const featuredPosts = [
    {
      id: "erste-modekollektion-planen",
      title: "Wie Sie Ihre erste Modekollektion planen",
      excerpt: "Von der ersten Idee bis zur fertigen Kollektion: Entdecken Sie die wichtigsten Schritte für eine erfolgreiche Modekollektion.",
      image: blogImage1,
      readTime: "8 min",
      category: "Startup-Guide"
    },
    {
      id: "nachhaltige-textilproduktion-europa",
      title: "Nachhaltige Textilproduktion in Europa",
      excerpt: "Warum europäische Fertigung der Schlüssel für nachhaltige Mode ist und welche Vorteile kurze Lieferketten bieten.",
      image: blogImage2,
      readTime: "6 min",
      category: "Nachhaltigkeit"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Expertenwissen rund um nachhaltige Textilproduktion, Kollektionsplanung und erfolgreiche Markenentwicklung.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300">
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
                
                <h3 className="text-xl font-light mb-3 text-foreground font-display group-hover:text-[hsl(var(--cream-tan-hover))] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 font-body leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="w-full"
                >
                  <Link to={`/insights/${post.id}`}>
                    Weiterlesen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/insights">
              Alle Insights ansehen
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreviewSection;