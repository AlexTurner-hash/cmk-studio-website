import ProductCategoryTemplate from "@/components/ProductCategoryTemplate";
import productionImage from "@/assets/production-spa-leisure.jpg";

const SpaLeisure = () => {
  const sections = [
    {
      title: "Luxus-Textilien für Spa-Resorts und Hotels",
      content: [
        "Spa & Leisure Textilien sind mehr als nur funktionale Produkte – sie sind ein entscheidender Teil der Gästeerfahrung in Luxus-Resorts und Premium-Hotels. Unsere Expertise liegt in der Herstellung hochwertiger Textilien, die Komfort, Eleganz und die Werte Ihres Hauses perfekt verkörpern.",
        "Von ultra-weichen Handtüchern bis hin zu exklusiven Yoga-Collections für den Hotelshop – wir schaffen Textilien, die das Wellness-Erlebnis Ihrer Gäste auf ein neues Level heben."
      ]
    },
    {
      title: "Premium Spa-Textilien",
      content: [
        "<strong>Luxus-Handtücher:</strong> Aus feinster ägyptischer Baumwolle oder nachhaltigen Bambusfasern, mit außergewöhnlicher Saugfähigkeit und dauerhafter Flauschigkeit",
        "<strong>Bademäntel der Extraklasse:</strong> Weiche Frottee-, Waffel- oder Velours-Qualitäten mit perfekter Passform und eleganten Details",
        "<strong>Wellness-Accessoires:</strong> Spa-Slippers, Haartücher, Saunakappen und weitere Textilien für das komplette Wellness-Erlebnis",
        "<strong>Pool & Beach:</strong> Hochwertige Strandtücher, Poolkissen und Cabana-Textilien in Resort-Qualität"
      ]
    },
    {
      title: "Yoga & Leisure Fashion für Hotelshops",
      content: [
        "Exklusive Yoga- und Leisure-Collections, die perfekt zur Atmosphäre Ihres Resorts passen und als begehrte Souvenirs in Ihrem Hotelshop verkauft werden können:",
        "<strong>Yoga-Bekleidung:</strong> Premium Leggings, Tops und Sets aus nachhaltigen Performance-Materialien mit Resort-Branding",
        "<strong>Leisure Wear:</strong> Komfortable Loungewear, Kaftans und Entspannungskleidung für die perfekte Urlaubsgarderobe",
        "<strong>Beach & Pool Fashion:</strong> Elegante Cover-ups, Sarongs und Strand-Accessoires",
        "<strong>Meditation & Wellness:</strong> Spezialkleidung für Yoga-Retreats und Wellness-Programme"
      ]
    },
    {
      title: "Organische Materialien & Nachhaltigkeit",
      content: [
        "In der Wellness-Branche spielen Nachhaltigkeit und hautfreundliche Materialien eine zentrale Rolle. Unsere Bio-Textilien unterstützen das umweltbewusste Image Ihres Resorts:",
        "<strong>GOTS-zertifizierte Bio-Baumwolle:</strong> Höchste Standards für organische Materialien ohne Schadstoffe",
        "<strong>Bambus-Viskose:</strong> Natürlich antibakteriell, hypoallergen und seidig weich",
        "<strong>Recycelte Fasern:</strong> Umweltfreundliche Optionen aus recycelten PET-Flaschen für Sportbekleidung",
        "<strong>Tencel & Modal:</strong> Nachhaltige Cellulosefasern mit hervorragenden Feuchtigkeitseigenschaften"
      ]
    },
    {
      title: "Logo-Veredelung & Branding",
      content: [
        "Dezente und hochwertige Logo-Veredelung, die die Exklusivität Ihres Resorts unterstreicht, ohne aufdringlich zu wirken:",
        "<strong>Edle Stickereien:</strong> Ton-in-Ton Stickereien oder diskrete Farbakzente, die Eleganz ausstrahlen",
        "<strong>Gewebte Labels:</strong> Hochwertige Markenlabels als Qualitätsmerkmal und Erinnerung",
        "<strong>Digitaldruck:</strong> Für komplexere Designs und Farbverläufe in Premium-Qualität",
        "<strong>Prägedrucke:</strong> Erhöhte Logos für einen luxuriösen, tastbaren Effekt"
      ]
    },
    {
      title: "Qualität als Reputation",
      content: [
        "Unsere außergewöhnliche Verarbeitungsqualität und die Auswahl der feinsten Materialien stellen sicher, dass jede Berührung ein positives Erlebnis wird und zur positiven Reputation Ihres Resorts beiträgt.",
        "Erfahren Sie mehr über unsere <a href='/insights/nachhaltige-textilproduktion-europa' class='text-[hsl(var(--bronze))] hover:text-[hsl(var(--clay))] underline'>nachhaltigen Produktionsmethoden in Europa</a> in unserem Interview mit Gründerin Claudia Kleinert."
      ]
    },
    {
      title: "Von exklusiven Unikaten bis zur Hotelkette",
      content: [
        "<strong>Boutique-Hotels:</strong> Individuelle, handgefertigte Textilien mit einzigartigen Details",
        "<strong>Luxury Resorts:</strong> Komplette Spa-Ausstattungen mit durchgängigem Design-Konzept", 
        "<strong>Hotelketten:</strong> Skalierbare Produktion mit konsistenter Qualität über alle Standorte",
        "<strong>Wellness-Zentren:</strong> Spezialisierte Textilien für Spa-Behandlungen und Therapiebereiche"
      ]
    },
    {
      title: "Warum CMK.Studio für Spa & Leisure?",
      content: [
        "Mit unserer Expertise in der Premium-Textilproduktion verstehen wir die besonderen Anforderungen der Hospitality-Branche. Wir wissen, dass jedes Detail zählt, wenn es um das Gästeerlebnis geht.",
        "Von der Materialauswahl über die Verarbeitung bis hin zur finalen Qualitätskontrolle – wir produzieren Spa & Leisure Textilien, die das Niveau Ihres Resorts perfekt widerspiegeln und unvergessliche Erinnerungen schaffen."
      ]
    }
  ];

  return (
    <ProductCategoryTemplate
      title="Spa & Leisure Produktion bei CMK"
      description="Premium Spa-Textilien und exklusive Yoga-Fashion für Luxus-Resorts und Hotels – höchste Qualität für unvergessliche Wellness-Erlebnisse."
      productionImage={productionImage}
      productionImageAlt="Spa & Leisure Produktion - Yoga-Klasse in Luxus-Resort"
      sections={sections}
      ctaText="Spa & Leisure Projekt starten"
      slug="spa-leisure"
    />
  );
};

export default SpaLeisure;