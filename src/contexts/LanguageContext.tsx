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
    title: 'Häufig gestellte Fragen'
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
    description: 'With over 20 years of experience and a network of more than 100 specialized production facilities in Europe, we accompany you through the entire production process. We combine traditional craftsmanship with modern production methods and ensure that your vision is implemented under the highest quality and sustainability standards.'
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
    title: 'Frequently Asked Questions'
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
  }
};
