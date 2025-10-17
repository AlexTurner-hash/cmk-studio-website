import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import blogImage1 from "@/assets/blog-erste-modekollektion-new.jpg";
import blogImage2 from "@/assets/blog-workwear-employer-branding.jpg";
import blogImage3 from "@/assets/blog-luxury-hospitality-collections.jpg";

const InsightsPreviewSection = () => {
  const { t } = useLanguage();
  
  const postImages = [blogImage1, blogImage2, blogImage3];
  const postIds = ["erste-modekollektion-planen", "workwear-employer-branding", "luxury-hospitality-collections"];
  const readTimes = ["8", "6", "7"];
  
  const featuredPosts = (t('insightsPreview.posts') as unknown as any[]).map((post: any, index: number) => ({
    id: postIds[index],
    title: post.title,
    excerpt: post.excerpt,
    image: postImages[index],
    readTime: `${readTimes[index]} ${t('insightsPreview.readTime')}`,
    category: post.category
  }));

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            {t('insightsPreview.title')}
          </h2>
          <p className="text-body-large max-w-3xl mx-auto">
            {t('insightsPreview.subtitle')}
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
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-light mb-3 text-foreground font-display group-hover:text-[hsl(var(--bronze))] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 font-body leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                 <Link 
                  to={`/insights/${post.id}`}
                  className="text-[hsl(var(--bronze))] hover:text-[hsl(var(--bronze))]/80 transition-colors duration-200 font-medium mt-auto"
                >
                  {t('insights.readMore')}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to all Insights */}
        <div className="text-center">
          <Link to="/insights">
            <Button size="lg" className="bg-bronze hover:bg-warm-fuchsia transition-all">
              {t('insightsPreview.viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreviewSection;