import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'hsl(44 29% 95%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            {t('contactForm.title')}
          </h2>
          <p className="text-lg md:text-xl text-clay/70 max-w-3xl mx-auto leading-relaxed font-body">
            {t('contactForm.subtitle')}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
          <a 
            href="mailto:service@cmk-studio.com" 
            className="flex items-center space-x-4 p-6 bg-background rounded-lg w-full hover:shadow-lg transition-shadow"
          >
            <Mail className="w-6 h-6 text-[hsl(var(--bronze))]" />
            <span className="text-foreground text-lg">service@cmk-studio.com</span>
          </a>

          <a 
            href="tel:+4903035050385" 
            className="flex items-center space-x-4 p-6 bg-background rounded-lg w-full hover:shadow-lg transition-shadow"
          >
            <Phone className="w-6 h-6 text-[hsl(var(--bronze))]" />
            <span className="text-foreground text-lg">030 - 35050385</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;