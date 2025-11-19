import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import blogImage from "@/assets/blog-erste-modekollektion-new.jpg";

const FeaturedInsightSection = () => {
  const { t } = useLanguage();
  
  const featuredArticle = {
    id: "erste-modekollektion-planen",
    title: t('insightsPreview.posts.0.title'),
    excerpt: t('insightsPreview.posts.0.excerpt'),
    image: blogImage,
    category: t('insightsPreview.posts.0.category'),
    readTime: `8 ${t('insightsPreview.readTime')}`
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to={`/insights/${featuredArticle.id}`}
            className="group grid md:grid-cols-2 gap-8 items-center hover:opacity-95 transition-opacity"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width="800"
                height="600"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-[hsl(var(--bronze))] tracking-wide uppercase">
                  {t('insightsPreview.featured')}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-[hsl(var(--bronze))] tracking-wide uppercase">
                  {featuredArticle.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-light text-foreground font-display group-hover:text-[hsl(var(--bronze))] transition-colors">
                {featuredArticle.title}
              </h2>

              <p className="text-body-large text-muted-foreground leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <Button 
                variant="ghost" 
                className="group/btn p-0 h-auto text-[hsl(var(--bronze))] hover:text-[hsl(var(--bronze))]/80 hover:bg-transparent"
              >
                {t('insights.readMore')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightSection;
