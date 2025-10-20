import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Loader2, MessageCircle } from "lucide-react";

// Factory function to create validation schema with translations
const createContactFormSchema = (t: any) => z.object({
  firstName: z
    .string()
    .trim()
    .min(1, t('contactForm.validationFirstName'))
    .max(50, t('contactForm.validationFirstNameMax'))
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, t('contactForm.validationFirstNameRegex')),
  lastName: z
    .string()
    .trim()
    .min(1, t('contactForm.validationLastName'))
    .max(50, t('contactForm.validationLastNameMax'))
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, t('contactForm.validationLastNameRegex')),
  email: z
    .string()
    .trim()
    .email(t('contactForm.validationEmail'))
    .max(255, t('contactForm.validationEmailMax'))
    .toLowerCase(),
  company: z
    .string()
    .trim()
    .max(100, t('contactForm.validationCompanyMax'))
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, t('contactForm.validationMessageMin'))
    .max(2000, t('contactForm.validationMessageMax')),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const contactFormSchema = createContactFormSchema(t);
  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Client-side rate limiting: 1 submission per 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      toast({
        title: "Zu viele Anfragen",
        description: "Bitte warten Sie 30 Sekunden zwischen Anfragen.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare WhatsApp message
      const whatsappMessage = `*Neue Kontaktanfrage von CMK Studio Website*

*Name:* ${data.firstName} ${data.lastName}
*E-Mail:* ${data.email}
${data.company ? `*Firma:* ${data.company}` : ''}

*Nachricht:*
${data.message}`;

      // CMK Studio WhatsApp number (replace with actual number)
      const phoneNumber = "4903035050385"; // Format: country code + number without + or spaces
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new window
      window.open(whatsappUrl, '_blank');

      toast({
        title: t('contactForm.success'),
        description: "Ihre Nachricht wird in WhatsApp geöffnet. Bitte senden Sie sie dort ab.",
      });
      
      form.reset();
      setLastSubmitTime(now);
    } catch (error) {
      console.error("Error preparing message:", error);
      toast({
        title: t('contactForm.error'),
        description: t('contactForm.errorDescription'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground font-display font-light">{t('contactForm.send')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contactForm.firstName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contactForm.firstName')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contactForm.lastName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('contactForm.lastName')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contactForm.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contactForm.email')} type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contactForm.company')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contactForm.company')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contactForm.message')}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('contactForm.messagePlaceholder')} 
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="btn-accent w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('contactForm.sending')}
                      </>
                    ) : (
                      t('contactForm.send')
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
              <Mail className="w-5 h-5 text-[hsl(var(--bronze))]" />
              <a 
                href="mailto:service@cmk-studio.com" 
                className="text-foreground hover:text-accent transition-colors"
              >
                service@cmk-studio.com
              </a>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
              <Phone className="w-5 h-5 text-[hsl(var(--bronze))]" />
              <a 
                href="tel:+4903035050385" 
                className="text-foreground hover:text-accent transition-colors"
              >
                030 - 35050385
              </a>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
              <MessageCircle className="w-5 h-5 text-[hsl(var(--bronze))]" />
              <a 
                href="https://wa.me/4903035050385" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                WhatsApp: 030 - 35050385
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;