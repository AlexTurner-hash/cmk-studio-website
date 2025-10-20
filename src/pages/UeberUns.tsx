import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/textile-factory.jpg";
import { Helmet } from "react-helmet-async";

const UeberUns = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Über uns | CMK Studio - Premium Textilproduktion Europa</title>
        <meta name="description" content="Lernen Sie CMK Studio kennen: Unabhängiger Partner für hochwertige Textilproduktion in Europa. Über 20 Jahre Erfahrung in Modedesign und nachhaltiger Fertigung." />
        <link rel="canonical" href="https://cmk.studio/ueber-uns" />
        
        <meta property="og:title" content="Über uns | CMK Studio - Premium Textilproduktion Europa" />
        <meta property="og:description" content="Lernen Sie CMK Studio kennen: Unabhängiger Partner für hochwertige Textilproduktion in Europa. Über 20 Jahre Erfahrung in Modedesign und nachhaltiger Fertigung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmk.studio/ueber-uns" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Über uns | CMK Studio" />
        <meta name="twitter:description" content="Lernen Sie CMK Studio kennen: Unabhängiger Partner für hochwertige Textilproduktion in Europa." />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Textile factory showcasing our production capabilities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black leading-none mb-6 font-display">Wer wir sind</h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-warm-cream font-body">CMK Studio – Unabhängiger Partner für europäische Textilproduktion</p>
        </div>
      </section>

      {/* About CMK Studio */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto text-clay/80 font-body">
              <p className="text-lg leading-relaxed mb-6">
                CMK Studio ist ein unabhängiger Partner für Marken, Creator und Unternehmen, die hochwertige Kollektionen in Europa produzieren möchten.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Mit über 20 Jahren Erfahrung in Modedesign und industrieller Fertigung verbinden wir kreative Beratung mit klaren Prozessen und nachhaltiger Produktion. Unser Ansatz: persönliche Betreuung, transparente Kosten und verlässliche Ergebnisse – von der ersten Skizze bis zum fertigen Produkt.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Wir arbeiten ausschließlich mit geprüften europäischen Produktionsstätten, die höchste Qualitätsstandards und faire Arbeitsbedingungen garantieren. So entstehen Kollektionen, die nicht nur heute funktionieren, sondern auch morgen Bestand haben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USP Block */}
      <section className="py-20" style={{
      backgroundColor: 'hsl(44 29% 95%)'
    }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[hsl(var(--cream-tan-hover))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-clay/80 font-body">Europäische Fertigung: kurze Wege, faire Standards</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[hsl(var(--cream-tan-hover))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-clay/80 font-body">Nachhaltige Materialien & Prozesse</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[hsl(var(--cream-tan-hover))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-clay/80 font-body">Komplettservice: Design, Produktion, Logistik</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-[hsl(var(--cream-tan-hover))] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-lg text-clay/80 font-body">Persönliche Beratung & Betreuung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <button className="bg-[hsl(var(--cream-tan))] hover:bg-[hsl(var(--cream-tan-hover))] text-foreground px-8 py-3 text-lg font-medium transition-colors duration-300 font-body">
              Jetzt Kollektion starten
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default UeberUns;