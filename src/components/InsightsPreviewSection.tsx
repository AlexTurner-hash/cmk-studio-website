import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogImage1 from "@/assets/blog-erste-modekollektion-new.jpg";
import blogImage2 from "@/assets/blog-workwear-employer-branding.jpg";
import blogImage3 from "@/assets/blog-luxury-hospitality-collections.jpg";

const InsightsPreviewSection = () => {
  const featuredPosts = [
    {
      id: "erste-modekollektion-planen",
      title: "Wie Sie Ihre erste Modekollektion planen – ein Leitfaden für Startups und Creator",
      excerpt: "Von der ersten Idee bis zur fertigen Kollektion: Entdecken Sie die wichtigsten Schritte für eine erfolgreiche Modekollektion und vermeiden Sie typische Anfängerfehler.",
      image: blogImage1,
      readTime: "8 min",
      category: "Startup-Guide"
    },
    {
      id: "workwear-employer-branding",
      title: "Workwear als Employer Branding: Warum billige T-Shirt-Drucke nicht mehr reichen",
      excerpt: "Erfahren Sie, wie hochwertige, nachhaltige Arbeitskleidung zum Aushängeschild Ihres Unternehmens wird und warum Mitarbeiter heute Wert auf Komfort, Qualität und individuelle Details legen.",
      image: blogImage2,
      readTime: "6 min",
      category: "Employer Branding"
    },
    {
      id: "luxury-hospitality-collections",
      title: "Luxus zum Mitnehmen: Wie Hotels und Spas mit exklusiven Kollektionen neue Umsätze generieren",
      excerpt: "Von Yoga-Apparel bis zu Premium-Badtextilien: Erfahren Sie, wie High-End-Hotels und Spa-Resorts durch hochwertige Eigenmarken ihre Gäste begeistern.",
      image: blogImage3,
      readTime: "7 min",
      category: "Hospitality"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Insights
          </h2>
          <p className="text-body-large max-w-3xl mx-auto">
            Expertenwissen rund um nachhaltige Textilproduktion, Kollektionsplanung und erfolgreiche Markenentwicklung.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[16/9] overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[hsl(var(--bronze))] tracking-wide uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime} Lesezeit
                  </span>
                </div>
                
                <h3 className="text-xl font-light mb-3 text-foreground font-display group-hover:text-[hsl(var(--bronze))] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 font-body leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/insights/${post.id}`}
                  className="text-[hsl(var(--bronze))] hover:text-[hsl(var(--bronze))]/80 transition-colors duration-200 font-medium mt-auto"
                >
                  Weiterlesen
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white" asChild>
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