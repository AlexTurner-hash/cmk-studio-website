import { Link } from "react-router-dom";
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
  const categories = [
    { name: "Streetwear", image: streetwearImage, slug: "streetwear" },
    { name: "Denim", image: denimImage, slug: "denim" },
    { name: "Lingerie", image: lingerieImage, slug: "lingerie" },
    { name: "Swimwear", image: swimwearImage, slug: "swimwear" },
    { name: "Knitwear", image: knitwearImage, slug: "knitwear" },
    { name: "Leder", image: leatherImage, slug: "leather" },
    { name: "Accessoires", image: accessoriesImage, slug: "accessories" },
    { name: "Workwear", image: workwearImage, slug: "workwear" },
    { name: "Hospitality", image: spaLeisureImage, slug: "spa-leisure" },
  ];

  return (
    <section className="pb-16 md:pb-20 lg:pb-24 pt-8 md:pt-12 lg:pt-16 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Unser Angebot
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Von Streetwear bis Luxus-Accessoires – wir produzieren hochwertige Kollektionen für alle Bereiche der Modebranche.
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
                  src={category.image}
                  alt={`${category.name} Produktkategorie - hochwertige Textilproduktion`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
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