import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ProductCategorySection {
  title: string;
  content: string[];
}

interface ProductCategoryTemplateProps {
  title: string;
  description: string;
  productionImage: string;
  productionImageAlt: string;
  sections: ProductCategorySection[];
  ctaText: string;
  slug: string;
}

const ProductCategoryTemplate = ({
  title,
  description,
  productionImage,
  productionImageAlt,
  sections,
  ctaText,
  slug
}: ProductCategoryTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-8">
          <Link 
            to="/#produktkategorien" 
            className="inline-flex items-center gap-2 text-[hsl(var(--bronze))] hover:text-[hsl(var(--clay))] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu den Produktkategorien
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground font-display">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Production Image */}
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <img 
              src={productionImage} 
              alt={productionImageAlt}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-warm"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-12 max-w-4xl">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground font-display">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex} 
                    className={`text-body-large text-muted-foreground leading-relaxed ${
                      pIndex < section.content.length - 1 ? 'mb-6' : ''
                    }`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link 
              to="/kontakt" 
              className="btn-accent"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCategoryTemplate;