import logo from "@/assets/cmk-logo-white-new.png";

const Footer = () => {
  return (
    <footer className="bg-clay text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <img src={logo} alt="CMK.Studio" className="h-6 mb-4" />
            <p className="text-white/70 text-sm leading-relaxed font-body">
              Ihr vertrauensvoller Partner für hochwertige Textilproduktion 
              und Fertigungsexzellenz.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-light mb-4 tracking-wide font-display">SERVICES</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Beratung</li>
              <li>Private Label</li>
              <li>Influencer Editionen</li>
              <li>Corporate Wear</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-light mb-4 tracking-wide font-display">UNTERNEHMEN</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Über uns</li>
              <li>Unser Team</li>
              <li>Karriere</li>
              <li>Nachhaltigkeit</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light mb-4 tracking-wide font-display">KONTAKT</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>hello@cmk-studio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Textile District</li>
              <li>Manufacturing City, MC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © 2024 CMK.Studio. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;