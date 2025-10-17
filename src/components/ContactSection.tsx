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
import { Mail, Phone, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// Validation schema with security-focused constraints
const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Vorname ist erforderlich")
    .max(50, "Vorname darf maximal 50 Zeichen lang sein")
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, "Nur Buchstaben, Leerzeichen und Bindestriche erlaubt"),
  lastName: z
    .string()
    .trim()
    .min(1, "Nachname ist erforderlich")
    .max(50, "Nachname darf maximal 50 Zeichen lang sein")
    .regex(/^[a-zA-ZäöüÄÖÜß\s-]+$/, "Nur Buchstaben, Leerzeichen und Bindestriche erlaubt"),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein")
    .max(255, "E-Mail darf maximal 255 Zeichen lang sein")
    .toLowerCase(),
  company: z
    .string()
    .trim()
    .max(100, "Firmenname darf maximal 100 Zeichen lang sein")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .max(2000, "Nachricht darf maximal 2000 Zeichen lang sein"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const { toast } = useToast();

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
      // Initialize EmailJS with public key
      // Users need to set up EmailJS account and replace these values
      const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        toast({
          title: "Konfiguration erforderlich",
          description: "Bitte konfigurieren Sie EmailJS in ContactSection.tsx",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Send email via EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          company: data.company || "Nicht angegeben",
          message: data.message,
          to_name: "CMK.Studio",
        },
        publicKey
      );

      if (result.status === 200) {
        toast({
          title: "Nachricht gesendet!",
          description: "Vielen Dank für Ihre Anfrage. Wir melden uns bald bei Ihnen.",
        });
        form.reset();
        setLastSubmitTime(now);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
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
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vorname</FormLabel>
                          <FormControl>
                            <Input placeholder="Vorname" {...field} />
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
                          <FormLabel>Nachname</FormLabel>
                          <FormControl>
                            <Input placeholder="Nachname" {...field} />
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
                        <FormLabel>E-Mail Adresse</FormLabel>
                        <FormControl>
                          <Input placeholder="E-Mail Adresse" type="email" {...field} />
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
                        <FormLabel>Unternehmen (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Unternehmen" {...field} />
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
                        <FormLabel>Nachricht</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Erzählen Sie uns von Ihrem Projekt..." 
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
                        Wird gesendet...
                      </>
                    ) : (
                      "Jetzt anfragen"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;