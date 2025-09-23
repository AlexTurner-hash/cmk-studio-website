import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'hsl(44 29% 95%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
            Bereit für Ihre Kollektion?
          </h2>
          <p className="text-lg md:text-xl text-clay/70 max-w-3xl mx-auto leading-relaxed font-body">
            Sprechen Sie mit uns über Ihr Projekt – und starten Sie Ihre Produktion mit einem erfahrenen Partner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground font-display font-light">Nachricht senden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Vorname" />
                <Input placeholder="Nachname" />
              </div>
              <Input placeholder="E-Mail Adresse" type="email" />
              <Input placeholder="Unternehmen (Optional)" />
              <Textarea 
                placeholder="Erzählen Sie uns von Ihrem Projekt..." 
                className="min-h-[120px]"
              />
              <button className="btn-accent w-full">
                Jetzt anfragen
              </button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
              <Mail className="w-5 h-5 text-[hsl(var(--cream-tan-hover))]" />
              <a 
                href="mailto:hello@cmk-studio.com" 
                className="text-foreground hover:text-accent transition-colors"
              >
                hello@cmk-studio.com
              </a>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
              <Phone className="w-5 h-5 text-[hsl(var(--cream-tan-hover))]" />
              <a 
                href="tel:+15551234567" 
                className="text-foreground hover:text-accent transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;