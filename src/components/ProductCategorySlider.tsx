import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import streetwearImage from "@/assets/category-streetwear.jpg";
import denimImage from "@/assets/category-denim.jpg";
import lingerieImage from "@/assets/category-lingerie.jpg";
import swimwearImage from "@/assets/category-swimwear.jpg";
import knitwearImage from "@/assets/category-knitwear.jpg";
import leatherImage from "@/assets/category-leather.jpg";
import accessoriesImage from "@/assets/category-accessories.jpg";
import workwearImage from "@/assets/category-workwear.jpg";
import spaLeisureImage from "@/assets/category-spa-leisure.jpg";

const ProductCategorySlider = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  
  const categoryImages = [
    streetwearImage, denimImage, lingerieImage, swimwearImage, 
    knitwearImage, leatherImage, accessoriesImage, workwearImage, spaLeisureImage
  ];
  
  const categories = (t('productCategories.categories') as unknown as any[]).map((cat: any, idx: number) => ({
    ...cat,
    image: categoryImages[idx]
  }));

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Check if section is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              // Calculate scroll progress through section (0 to 1)
              const progress = Math.max(0, Math.min(1, 
                (windowHeight - rect.top) / (windowHeight + rect.height)
              ));
              
              // Apply zoom to all images
              imagesRef.current.forEach((img) => {
                if (img) {
                  // Zoom from 1.0 to 1.06 as user scrolls through section
                  const scale = 1 + (progress * 0.06);
                  img.style.transform = `scale(${scale})`;
                }
              });
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="pb-16 md:pb-20 lg:pb-24 pt-8 md:pt-12 lg:pt-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            {t('productCategories.title')}
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            {t('productCategories.subtitle')}
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/produktkategorien/${category.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <img
                  ref={(el) => { imagesRef.current[index] = el; }}
                  src={category.image}
                  alt={`${category.name} Produktkategorie - hochwertige Textilproduktion`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                  loading="lazy"
                  style={{ transform: 'scale(1)' }}
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <h3 className="text-white text-lg md:text-xl font-semibold text-center px-4">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySlider;