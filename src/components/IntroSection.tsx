import aubadeLogo from "@/assets/client-aubade.png";
import felinaLogo from "@/assets/client-felina.png";
import merzLogo from "@/assets/client-merz.png";
import blushLogo from "@/assets/client-blush.png";
import lilaLovesItLogo from "@/assets/logo-lila-loves-it.png";
import homeBoyLogo from "@/assets/logo-home-boy.png";
import priestereggLogo from "@/assets/logo-priesteregg.png";
import zeitFurBrotLogo from "@/assets/logo-zeit-fur-brot.png";
import coffeeFellowsLogo from "@/assets/logo-coffee-fellows.png";
import prinzenhausLogo from "@/assets/logo-prinzenhaus.png";

const IntroSection = () => {
  const clientLogos = [
    { src: aubadeLogo, name: "Aubade", type: "logo" },
    { src: felinaLogo, name: "Felina", type: "logo" },
    { src: merzLogo, name: "Merz b. Schwanen", type: "logo" },
    { src: blushLogo, name: "Blush Lingerie", type: "logo" },
    { src: zeitFurBrotLogo, name: "Zeit für Brot", type: "logo" },
    { src: prinzenhausLogo, name: "Prinzenhaus", type: "logo" },
    { src: homeBoyLogo, name: "Homeboy", type: "logo" },
    { name: "Maiami", type: "text" },
    { src: lilaLovesItLogo, name: "Lila loves it", type: "logo" },
    { src: priestereggLogo, name: "Priesteregg Hotel Resort", type: "logo" },
    { src: aubadeLogo, name: "Aubade", type: "logo" },
    { src: felinaLogo, name: "Felina", type: "logo" },
    { src: merzLogo, name: "Merz b. Schwanen", type: "logo" },
    { src: blushLogo, name: "Blush Lingerie", type: "logo" }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground font-display">
          Die Schnittstelle für jeden Schritt
        </h2>
        
        <p className="text-body-large text-clay/80 max-w-4xl mx-auto mb-16">
          Wir bündeln Beratung, Design, Produktion und Versand in einem Prozess mit persönlicher Betreuung. Wir stehen für klare Abläufe, transparente Kosten und verlässliche Ergebnisse.
        </p>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-horizontal-scroll whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 mx-6 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100"
              >
                {client.type === "logo" ? (
                  <img
                    src={client.src}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-foreground text-sm font-medium text-center px-2">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;