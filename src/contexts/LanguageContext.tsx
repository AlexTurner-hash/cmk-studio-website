import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    const translations = language === 'de' ? translationsDE : translationsEN;
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translationsDE = {
  nav: {
    home: 'Start',
    services: 'Leistungen',
    about: 'Über uns',
    insights: 'Insights',
    contact: 'Kontakt'
  },
  hero: {
    title1: 'Ihre Kollektion.',
    title2: 'Unsere Produktion.',
    subtitle: 'CMK.Studio verbindet Beratung, Design, nachhaltige Produktion und Logistik in Europa – damit Marken, Creator und Unternehmen Kollektionen effizient, hochwertig und transparent realisieren können.',
    cta: 'Projekt starten'
  },
  intro: {
    title: 'Textilproduktion neu gedacht',
    subtitle: 'Wir sind Ihr verlässlicher Partner für die Realisierung von Modekolektionen – von der ersten Idee bis zur fertigen Kollektion.',
    description: 'Mit über 20 Jahren Erfahrung und einem Netzwerk spezialisierter Produktionsstätten in Europa begleiten wir Sie durch den gesamten Produktionsprozess. Wir verbinden traditionelles Handwerk mit modernen Produktionsmethoden und stellen sicher, dass Ihre Vision unter höchsten Qualitäts- und Nachhaltigkeitsstandards umgesetzt wird.'
  },
  services: {
    title: 'Unsere Expertise',
    consulting: {
      title: 'Beratung & Design',
      description: 'Von der ersten Skizze bis zum fertigen Schnittmuster – wir begleiten Sie bei jedem Schritt.'
    },
    production: {
      title: 'Produktion',
      description: 'Hochwertige Fertigung in europäischen Manufakturen mit kurzen Lieferwegen.'
    },
    quality: {
      title: 'Qualitätskontrolle',
      description: 'Jedes Stück wird sorgfältig geprüft, bevor es Ihr Lager erreicht.'
    },
    logistics: {
      title: 'Logistik',
      description: 'Effiziente Lieferung direkt zu Ihnen oder Ihren Kunden.'
    }
  },
  categories: {
    title: 'Produktkategorien',
    subtitle: 'Spezialisierte Fertigung für jede Kategorie',
    viewDetails: 'Details ansehen'
  },
  whyUs: {
    title: 'Warum CMK.Studio?',
    experience: {
      title: 'Über 20 Jahre Erfahrung',
      description: 'Langjähriges Know-how in der Textilproduktion'
    },
    network: {
      title: '100+ Produktionsstätten',
      description: 'Spezialisiertes Netzwerk in ganz Europa'
    },
    sustainable: {
      title: 'Nachhaltig & Regional',
      description: 'Kurze Wege, faire Bedingungen, hohe Standards'
    },
    flexible: {
      title: 'Flexible Stückzahlen',
      description: 'Von Kleinserien bis zur Großproduktion'
    }
  },
  about: {
    title: 'Über CMK.Studio',
    description: 'Claudia Maria Kleinert gründete CMK.Studio aus der Überzeugung, dass nachhaltige und transparente Textilproduktion in Europa nicht nur möglich, sondern notwendig ist.'
  },
  sustainability: {
    title: 'Nachhaltigkeit',
    commitment: 'Unser Engagement',
    description: 'Wir glauben an eine Textilindustrie, die Verantwortung übernimmt – für Mensch und Umwelt.'
  },
  testimonials: {
    title: 'Was unsere Kunden sagen'
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Wie lange dauert die Produktion?',
        answer: 'Je nach Projekt zwischen 4 und 12 Wochen, abhängig von Material, Auflage und Komplexität.'
      },
      {
        question: 'Welche Produkte können hergestellt werden?',
        answer: 'Von T-Shirts über Hoodies bis hin zu Caps, Taschen und Workwear – die Bandbreite reicht von Streetwear bis Corporate Clothing.'
      },
      {
        question: 'Kümmert ihr euch auch um den Versand?',
        answer: 'Ja. Wir übernehmen Fulfillment, Verpackung, Etikettierung, Zoll und weltweiten Versand.'
      },
      {
        question: 'Ist nachhaltige Produktion teurer?',
        answer: 'Nicht zwingend. Die Kosten hängen von Material und Produktionsstandort ab. Wir beraten transparent zu Preis-Leistungs-Verhältnissen.'
      },
      {
        question: 'Was unterscheidet CMK.Studio von klassischen Produzenten?',
        answer: 'Wir sind kein reiner Produzent, sondern strategischer Partner mit Branchen-Expertise. Von Kollektionsplanung über Design und Schnittentwicklung bis zu Produktion, Qualitätskontrolle und Logistik – alles aus einer Hand, mit einem Ansprechpartner.'
      },
      {
        question: 'Welche Produktkategorien produziert ihr?',
        answer: 'Unsere Expertise umfasst Lingerie & Swimwear, Premium Workwear & Corporate Fashion, Hospitality-Kollektionen, hochwertige Streetwear sowie Knitwear. Besonders Knitwear erfordert spezialisiertes Know-how – von der Garnauswahl über Maschinenprogrammierung bis zur Passform entwickeln wir alles von feinen Cashmere-Pieces bis zu innovativer Performance-Knitwear.'
      },
      {
        question: 'Wie unterstützt ihr bei Due Diligence und Transparenz-Anforderungen?',
        answer: 'Wir dokumentieren die gesamte Lieferkette transparent – von Materialherkunft bis Fertigung. Alle Partner sind GOTS-, OEKO-TEX-, BSCI- oder RWS-zertifiziert. Ideal für Due Diligence-Prozesse, Investoren-Prüfungen und die Vorbereitung auf den EU Digital Product Pass ab 2027.'
      },
      {
        question: 'Kann Workwear wirklich ein Employer Branding Tool sein?',
        answer: 'Absolut. Hochwertige, nachhaltige Arbeitskleidung mit durchdachten Details wird zum Aushängeschild Ihres Unternehmens. Mitarbeiter erwarten heute mehr als bedruckte Standard-T-Shirts – sie wollen Komfort, Qualität und ein Design, das sie gerne tragen. Das stärkt Identifikation und Arbeitgeberattraktivität.'
      },
      {
        question: 'Wie findet die Kommunikation und Betreuung statt?',
        answer: 'Wir betreuen Sie persönlich durch alle Projektphasen. Neben Telefon und E-Mail sind wir auch per Video-Chat erreichbar. In Berlin und dem Rhein-Main-Gebiet bieten wir gerne auch Vor-Ort-Termine an.'
      }
    ]
  },
  insights: {
    title: 'Insights & Expertise',
    subtitle: 'Erfahren Sie mehr über unsere Projekte und Expertise',
    readMore: 'Weiterlesen'
  },
  contact: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Lassen Sie uns über Ihr Projekt sprechen',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Nachricht senden'
  },
  footer: {
    about: 'Über uns',
    services: 'Leistungen',
    categories: 'Kategorien',
    legal: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutz'
  },
  contactForm: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Sprechen Sie mit uns über Ihr Projekt – und starten Sie Ihre Produktion mit einem erfahrenen Partner.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    company: 'Firma (optional)',
    message: 'Nachricht',
    messagePlaceholder: 'Erzählen Sie uns von Ihrem Projekt...',
    send: 'Nachricht senden',
    sending: 'Wird gesendet...',
    success: 'Vielen Dank für Ihre Nachricht!',
    successDescription: 'Wir melden uns schnellstmöglich bei Ihnen.',
    error: 'Fehler beim Senden',
    errorDescription: 'Bitte versuchen Sie es später erneut.',
    validationFirstName: 'Vorname ist erforderlich',
    validationFirstNameMax: 'Vorname darf maximal 50 Zeichen lang sein',
    validationFirstNameRegex: 'Nur Buchstaben, Leerzeichen und Bindestriche erlaubt',
    validationLastName: 'Nachname ist erforderlich',
    validationLastNameMax: 'Nachname darf maximal 50 Zeichen lang sein',
    validationLastNameRegex: 'Nur Buchstaben, Leerzeichen und Bindestriche erlaubt',
    validationEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    validationEmailMax: 'E-Mail darf maximal 255 Zeichen lang sein',
    validationCompanyMax: 'Firmenname darf maximal 100 Zeichen lang sein',
    validationMessageMin: 'Nachricht muss mindestens 10 Zeichen lang sein',
    validationMessageMax: 'Nachricht darf maximal 2000 Zeichen lang sein'
  },
  insightsPreview: {
    title: 'Insights',
    subtitle: 'Expertenwissen rund um nachhaltige Textilproduktion, Kollektionsplanung und erfolgreiche Markenentwicklung.',
    viewAll: 'Alle Insights ansehen',
    readTime: 'min',
    posts: [
      {
        title: 'Wie Sie Ihre erste Modekollektion planen – ein Leitfaden für Startups und Creator',
        excerpt: 'Von der ersten Idee bis zur fertigen Kollektion: Entdecken Sie die wichtigsten Schritte für eine erfolgreiche Modekollektion und vermeiden Sie typische Anfängerfehler.',
        category: 'Startup-Guide'
      },
      {
        title: 'Workwear als Employer Branding: Warum billige T-Shirt-Drucke nicht mehr reichen',
        excerpt: 'Erfahren Sie, wie hochwertige, nachhaltige Arbeitskleidung zum Aushängeschild Ihres Unternehmens wird und warum Mitarbeiter heute Wert auf Komfort, Qualität und individuelle Details legen.',
        category: 'Employer Branding'
      },
      {
        title: 'Luxus zum Mitnehmen: Wie Hotels und Spas mit exklusiven Kollektionen neue Umsätze generieren',
        excerpt: 'Von Yoga-Apparel bis zu Premium-Badtextilien: Erfahren Sie, wie High-End-Hotels und Spa-Resorts durch hochwertige Eigenmarken ihre Gäste begeistern.',
        category: 'Hospitality'
      }
    ]
  },
  testimonialsAbout: {
    title: 'Über uns',
    testimonials: [
      {
        quote: 'Unglaublich zuverlässig, freundlich und mit großem Fachwissen in Sachen Bekleidung und Produktion. Das Verständnis für Materialien, insbesondere Strickwaren, ist wirklich wertvoll.',
        client: 'Gitta und Peter Plotnicki',
        company: 'Merz b. Schwanen'
      },
      {
        quote: '...versteht Streetwear genauso wie High Fashion und spricht auch die Sprache von Creators. CMK macht aus Moods und Ideen eine fertige Kollektion und guidet einen durch den gesamten Prozess.',
        client: 'Lena Mantler',
        company: 'Model, Creator, mánt'
      },
      {
        quote: 'Als Unternehmerin muss man sich auf seine Ziele und diversen Projekte konzentrieren. Ein Partner wie CMK setzt unsere Werte und unsere Ansprüche an Qualität und Verlässlichkeit um. Das ist ein echtes Geschenk.',
        client: 'Stefanie Diem',
        company: 'lila loves it'
      }
    ]
  }
};

const translationsEN = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    insights: 'Insights',
    contact: 'Contact'
  },
  hero: {
    title1: 'Your Collection.',
    title2: 'Our Production.',
    subtitle: 'CMK.Studio combines consulting, design, sustainable production and logistics in Europe – enabling brands, creators and companies to realize collections efficiently, with high quality and transparency.',
    cta: 'Start Project'
  },
  intro: {
    title: 'Textile Production Reimagined',
    subtitle: 'We are your reliable partner for realizing fashion collections – from the initial idea to the finished collection.',
    description: 'With over 20 years of experience and a network of specialized production facilities in Europe, we accompany you through the entire production process. We combine traditional craftsmanship with modern production methods and ensure that your vision is implemented under the highest quality and sustainability standards.'
  },
  services: {
    title: 'Our Expertise',
    consulting: {
      title: 'Consulting & Design',
      description: 'From the first sketch to the finished pattern – we guide you through every step.'
    },
    production: {
      title: 'Production',
      description: 'High-quality manufacturing in European workshops with short delivery routes.'
    },
    quality: {
      title: 'Quality Control',
      description: 'Every piece is carefully inspected before it reaches your warehouse.'
    },
    logistics: {
      title: 'Logistics',
      description: 'Efficient delivery directly to you or your customers.'
    }
  },
  categories: {
    title: 'Product Categories',
    subtitle: 'Specialized manufacturing for every category',
    viewDetails: 'View Details'
  },
  whyUs: {
    title: 'Why CMK.Studio?',
    experience: {
      title: 'Over 20 Years Experience',
      description: 'Long-standing expertise in textile production'
    },
    network: {
      title: '100+ Production Facilities',
      description: 'Specialized network throughout Europe'
    },
    sustainable: {
      title: 'Sustainable & Regional',
      description: 'Short distances, fair conditions, high standards'
    },
    flexible: {
      title: 'Flexible Quantities',
      description: 'From small series to large-scale production'
    }
  },
  about: {
    title: 'About CMK.Studio',
    description: 'Claudia Maria Kleinert founded CMK.Studio with the conviction that sustainable and transparent textile production in Europe is not only possible, but necessary.'
  },
  sustainability: {
    title: 'Sustainability',
    commitment: 'Our Commitment',
    description: 'We believe in a textile industry that takes responsibility – for people and the environment.'
  },
  testimonials: {
    title: 'What Our Clients Say'
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How long does production take?',
        answer: 'Depending on the project, between 4 and 12 weeks, depending on material, quantity and complexity.'
      },
      {
        question: 'What products can be manufactured?',
        answer: 'From T-shirts to hoodies to caps, bags and workwear – the range extends from streetwear to corporate clothing.'
      },
      {
        question: 'Do you also handle shipping?',
        answer: 'Yes. We handle fulfillment, packaging, labeling, customs and worldwide shipping.'
      },
      {
        question: 'Is sustainable production more expensive?',
        answer: 'Not necessarily. Costs depend on material and production location. We provide transparent advice on value for money.'
      },
      {
        question: 'What sets CMK.Studio apart from traditional manufacturers?',
        answer: 'We are not just a manufacturer, but a strategic partner with industry expertise. From collection planning to design and pattern development to production, quality control and logistics – all from one source, with one contact person.'
      },
      {
        question: 'What product categories do you produce?',
        answer: 'Our expertise includes Lingerie & Swimwear, Premium Workwear & Corporate Fashion, Hospitality Collections, high-quality streetwear and knitwear. Knitwear in particular requires specialized know-how – from yarn selection to machine programming to fit, we develop everything from fine cashmere pieces to innovative performance knitwear.'
      },
      {
        question: 'How do you support due diligence and transparency requirements?',
        answer: 'We transparently document the entire supply chain – from material origin to production. All partners are GOTS, OEKO-TEX, BSCI or RWS certified. Ideal for due diligence processes, investor reviews and preparation for the EU Digital Product Pass from 2027.'
      },
      {
        question: 'Can workwear really be an employer branding tool?',
        answer: 'Absolutely. High-quality, sustainable workwear with thoughtful details becomes the flagship of your company. Employees today expect more than printed standard T-shirts – they want comfort, quality and a design they like to wear. This strengthens identification and employer attractiveness.'
      },
      {
        question: 'How does communication and support work?',
        answer: 'We support you personally through all project phases. In addition to phone and email, we are also available via video chat. In Berlin and the Rhine-Main area, we are happy to offer on-site appointments.'
      }
    ]
  },
  insights: {
    title: 'Insights & Expertise',
    subtitle: 'Learn more about our projects and expertise',
    readMore: 'Read More'
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Let\'s talk about your project',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message'
  },
  footer: {
    about: 'About',
    services: 'Services',
    categories: 'Categories',
    legal: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy'
  },
  contactForm: {
    title: 'Get in Touch',
    subtitle: 'Talk to us about your project – and start your production with an experienced partner.',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Thank you for your message!',
    successDescription: 'We will get back to you as soon as possible.',
    error: 'Error sending message',
    errorDescription: 'Please try again later.',
    validationFirstName: 'First name is required',
    validationFirstNameMax: 'First name must be less than 50 characters',
    validationFirstNameRegex: 'Only letters, spaces and hyphens allowed',
    validationLastName: 'Last name is required',
    validationLastNameMax: 'Last name must be less than 50 characters',
    validationLastNameRegex: 'Only letters, spaces and hyphens allowed',
    validationEmail: 'Please enter a valid email address',
    validationEmailMax: 'Email must be less than 255 characters',
    validationCompanyMax: 'Company name must be less than 100 characters',
    validationMessageMin: 'Message must be at least 10 characters long',
    validationMessageMax: 'Message must be less than 2000 characters'
  },
  insightsPreview: {
    title: 'Insights',
    subtitle: 'Expert knowledge on sustainable textile production, collection planning and successful brand development.',
    viewAll: 'View All Insights',
    readTime: 'min',
    posts: [
      {
        title: 'How to Plan Your First Fashion Collection – A Guide for Startups and Creators',
        excerpt: 'From the initial idea to the finished collection: Discover the most important steps for a successful fashion collection and avoid typical beginner mistakes.',
        category: 'Startup Guide'
      },
      {
        title: 'Workwear as Employer Branding: Why Cheap T-Shirt Prints Are No Longer Enough',
        excerpt: 'Learn how high-quality, sustainable workwear becomes the flagship of your company and why employees today value comfort, quality and individual details.',
        category: 'Employer Branding'
      },
      {
        title: 'Luxury to Go: How Hotels and Spas Generate New Revenue with Exclusive Collections',
        excerpt: 'From yoga apparel to premium bath textiles: Learn how high-end hotels and spa resorts delight their guests with high-quality private labels.',
        category: 'Hospitality'
      }
    ]
  },
  testimonialsAbout: {
    title: 'About Us',
    testimonials: [
      {
        quote: 'Incredibly reliable, friendly and with great expertise in clothing and production. The understanding of materials, especially knitwear, is really valuable.',
        client: 'Gitta and Peter Plotnicki',
        company: 'Merz b. Schwanen'
      },
      {
        quote: '...understands streetwear as well as high fashion and also speaks the language of creators. CMK turns moods and ideas into a finished collection and guides you through the entire process.',
        client: 'Lena Mantler',
        company: 'Model, Creator, mánt'
      },
      {
        quote: 'As an entrepreneur, you have to focus on your goals and various projects. A partner like CMK implements our values and our demands for quality and reliability. That is a real gift.',
        client: 'Stefanie Diem',
        company: 'lila loves it'
      }
    ]
  }
};
