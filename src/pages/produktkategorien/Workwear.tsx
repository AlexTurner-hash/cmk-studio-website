import ProductCategoryTemplate from "@/components/ProductCategoryTemplate";
import productionImage from "@/assets/production-workwear.jpg";

const Workwear = () => {
  const sections = [
    {
      title: "Funktionale Berufsbekleidung mit Stil",
      content: [
        "Workwear muss besonderen Anforderungen gerecht werden: Sie soll funktional und strapazierfähig sein, gleichzeitig aber auch das professionelle Erscheinungsbild des Unternehmens widerspiegeln. Unsere Expertise liegt in der perfekten Balance zwischen Funktionalität und Design.",
        "Von hochwertigen Schürzen für Baristas bis hin zu eleganten Poloshirts für Hotelangestellte – wir entwickeln maßgeschneiderte Lösungen für jeden Bereich."
      ]
    },
    {
      title: "Materialvielfalt für jeden Einsatzbereich",
      content: [
        "<strong>Funktionsmaterialien:</strong> Atmungsaktive, pflegeleichte Gewebe für den täglichen Einsatz",
        "<strong>Strapazierfähige Stoffe:</strong> Robuste Materialien für anspruchsvolle Arbeitsbedingungen",
        "<strong>Nachhaltige Optionen:</strong> Bio-Baumwolle und recycelte Fasern für umweltbewusste Unternehmen",
        "<strong>Spezialgewebe:</strong> Fleckenresistente, antibakterielle oder feuerhemmende Eigenschaften"
      ]
    },
    {
      title: "Von Einzelstücken bis zur Großserie",
      content: [
        "<strong>Prototyping:</strong> Entwicklung und Anpassung von Schnitten und Designs nach Ihren Vorgaben",
        "<strong>Kleinserien:</strong> Flexible Produktion für Boutique-Hotels und spezialisierte Betriebe",
        "<strong>Großserien:</strong> Effiziente Fertigung für Hotelketten und große Gastronomieunternehmen"
      ]
    },
    {
      title: "Produktkategorien",
      content: [
        "<strong>Gastronomie:</strong> Schürzen, Kochjacken, Servicekleidung für Restaurants und Cafés",
        "<strong>Hotellerie:</strong> Rezeptionsuniformen, Housekeeping-Kleidung, Concierge-Outfits",
        "<strong>Corporate Wear:</strong> Firmenuniformen, Poloshirts, Hemden mit Firmenbranding",
        "<strong>Spezialkleidung:</strong> Arbeitskleidung für besondere Anforderungen und Branchen"
      ]
    },
    {
      title: "Corporate Identity durch Workwear",
      content: [
        "Professionelle Berufsbekleidung ist ein wichtiger Teil der Corporate Identity. Wir unterstützen Sie bei der Entwicklung eines einheitlichen Erscheinungsbilds, das Ihre Markenidentität perfekt widerspiegelt.",
        "Von der Farbauswahl über Schnittdetails bis hin zu individuellen Stickereien und Drucken – jedes Detail wird sorgfältig auf Ihr Unternehmen abgestimmt."
      ]
    },
    {
      title: "Warum CMK.Studio für Workwear?",
      content: [
        "Mit jahrzehntelanger Erfahrung in der Textilproduktion verstehen wir die besonderen Anforderungen an Berufsbekleidung. Unsere Expertise umfasst sowohl die technischen Aspekte wie Passform und Funktionalität als auch die ästhetischen Komponenten für ein professionelles Erscheinungsbild.",
        "Vertrauen Sie auf unsere Kompetenz für hochwertige Workwear, die Ihre Mitarbeiter gerne tragen und die Ihr Unternehmen optimal repräsentiert."
      ]
    }
  ];

  return (
    <ProductCategoryTemplate
      title="Workwear-Produktion bei CMK"
      description="Professionelle Berufsbekleidung für Gastronomie, Hotellerie und Unternehmen – funktional, repräsentativ und auf höchstem Qualitätsniveau gefertigt."
      productionImage={productionImage}
      productionImageAlt="Workwear Produktion - professionelle Berufsbekleidung"
      sections={sections}
      ctaText="Workwear-Projekt besprechen"
      slug="workwear"
    />
  );
};

export default Workwear;