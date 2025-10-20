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
            CMK Studio. Wir freuen uns auf ein Gespräch.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          <a 
            href="mailto:service@cmk-studio.com" 
            className="btn-accent flex items-center justify-center space-x-3 w-full md:w-auto px-8 py-4"
          >
            <Mail className="w-5 h-5" />
            <span>Email senden</span>
          </a>

          <a 
            href="tel:+4903035050385" 
            className="btn-accent flex items-center justify-center space-x-3 w-full md:w-auto px-8 py-4"
          >
            <Phone className="w-5 h-5" />
            <span>Anrufen</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;