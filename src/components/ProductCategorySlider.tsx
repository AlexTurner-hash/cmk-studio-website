import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import streetwearImage from "@/assets/category-streetwear.jpg";
import denimImage from "@/assets/category-denim.jpg";
import lingerieImage from "@/assets/category-lingerie.jpg";
import swimwearImage from "@/assets/category-swimwear.jpg";
import knitwearImage from "@/assets/category-knitwear.jpg";
import leatherImage from "@/assets/category-leather.jpg";
import accessoriesImage from "@/assets/category-accessories.jpg";

const ProductCategorySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "Streetwear", image: streetwearImage, slug: "streetwear" },
    { name: "Denim", image: denimImage, slug: "denim" },
    { name: "Lingerie", image: lingerieImage, slug: "lingerie" },
    { name: "Swimwear", image: swimwearImage, slug: "swimwear" },
    { name: "Knitwear", image: knitwearImage, slug: "knitwear" },
    { name: "Leder", image: leatherImage, slug: "leather" },
    { name: "Accessoires", image: accessoriesImage, slug: "accessories" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280; // Width of one category card plus gap
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Unsere Produktkategorien
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Von Streetwear bis Luxus-Accessoires – wir produzieren hochwertige Kollektionen für alle Bereiche der Modebranche.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 shadow-elegant hover:bg-background transition-all duration-200 hover:shadow-lg"
            aria-label="Vorherige Kategorien"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 shadow-elegant hover:bg-background transition-all duration-200 hover:shadow-lg"
            aria-label="Nächste Kategorien"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/produktkategorien/${category.slug}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-64 bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={`${category.name} Produktkategorie - hochwertige Textilproduktion`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySlider;