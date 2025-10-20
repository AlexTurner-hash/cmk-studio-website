import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Impressum - CMK Studio GmbH | Kontakt und rechtliche Informationen</title>
        <meta name="description" content="Impressum der CMK Studio GmbH - Herausgeber, Kontaktdaten und rechtliche Informationen zur Premium-Textilproduktion in Europa." />
      </Helmet>
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-black leading-none mb-6 font-display text-foreground text-center">
            Impressum
          </h1>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-clay/80 font-body">
              <p className="text-base mb-8">
                Das nachfolgende Impressum gilt für diese Website:
              </p>

              <h2 className="text-xl font-medium text-foreground mb-6">
                Herausgeber gem. §5 TMG
              </h2>

              <div className="space-y-3 text-base">
                <p className="font-medium text-foreground">CMK Studio GmbH</p>
                
                <div>
                  <p>Am Friedrichshain 34</p>
                  <p>10407 Berlin</p>
                </div>

                <div>
                  <p>Tel: 030 - 35050385</p>
                  <p>
                    Mail: <a 
                      href="mailto:service@cmk-studio.com"
                      className="text-accent hover:text-warm-fuchsia transition-colors duration-300"
                    >
                      service@cmk-studio.com
                    </a>
                  </p>
                </div>

                <div className="pt-6 border-t border-foreground/10">
                  <p>Geschäftsführerin: Claudia Kleinert</p>
                  <p>Handelsregister: HRB 246481 Amtsgericht Charlottenburg</p>
                  <p>UST-ID: DE 357 159 184</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-foreground/10">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Haftungsausschluss
                </h3>
                <p className="text-base leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Urheberrecht
                </h3>
                <p className="text-base leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;