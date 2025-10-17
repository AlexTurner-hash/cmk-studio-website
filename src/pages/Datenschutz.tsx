import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-black leading-none mb-6 font-display text-foreground text-center">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Datenschutz Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-clay/80 font-body space-y-8">
              
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Allgemeine Hinweise
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                  wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                  werden können.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Datenerfassung auf dieser Website
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie 
                  dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  <strong className="text-foreground">Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten 
                  handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung 
                  beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
                  Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  2. Hosting
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Externes Hosting
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
                  sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Datenschutz
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser 
                  Datenschutzerklärung.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten 
                  sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, 
                  welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Hinweis zur verantwortlichen Stelle
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-background/50 p-4 rounded-lg mb-4">
                  <p className="font-medium text-foreground">CMK Studio GmbH</p>
                  <p>Am Friedrichshain 34</p>
                  <p>10407 Berlin</p>
                  <p className="mt-2">
                    Tel: 030 - 35050385<br />
                    E-Mail: <a href="mailto:service@cmk-studio.com" className="text-accent hover:text-warm-fuchsia transition-colors">
                      service@cmk-studio.com
                    </a>
                  </p>
                </div>
                <p className="text-base leading-relaxed">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über 
                  die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Speicherdauer
                </h3>
                <p className="text-base leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre 
                  personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes 
                  Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
                  sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  4. Datenerfassung auf dieser Website
                </h2>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Cookies
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem 
                  Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) 
                  oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Wir verwenden ausschließlich technisch notwendige Cookies, um die Funktionalität unserer Website zu gewährleisten. 
                  Diese Cookies speichern beispielsweise den Status der Sidebar-Navigation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Server-Log-Dateien
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-base leading-relaxed">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten 
                  erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Kontaktformular
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive 
                  der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen 
                  bei uns gespeichert.
                </p>
                <p className="text-base leading-relaxed">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit 
                  der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
                  In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung 
                  der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">
                  5. Ihre Rechte
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-base">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                  <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                  <li>Widerspruch gegen die Verarbeitung einzulegen</li>
                  <li>Datenübertragbarkeit zu verlangen</li>
                </ul>
                <p className="text-base leading-relaxed">
                  Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft 
                  widerrufen. Bitte wenden Sie sich hierzu an die im Impressum angegebenen Kontaktdaten.
                </p>
              </div>

              <div className="pt-6 border-t border-foreground/10">
                <p className="text-sm text-clay/60">
                  Stand: Januar 2025
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

export default Datenschutz;
