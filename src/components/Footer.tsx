import logo from "@/assets/cmk-logo-white-new.png";
import { useContent } from "@/hooks/useContent";

const Footer = () => {
  const { content, loading } = useContent();
  
  if (loading) return null;
  
  const footer = content.footer || {};
  
  return (
    <footer className="bg-clay text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <img src={logo} alt="CMK.Studio" className="h-6 mb-4" />
            <p className="text-white/70 text-sm leading-relaxed font-body">
              {footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-light mb-4 tracking-wide font-display">NAVIGATION</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="/insights" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="/glossar" className="hover:text-white transition-colors">Glossar</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light mb-4 tracking-wide font-display">KONTAKT</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:service@cmk-studio.com" className="hover:text-white transition-colors">
                  service@cmk-studio.com
                </a>
              </li>
              <li>030 - 35050385</li>
              <li>Am Friedrichshain 34</li>
              <li>10407 Berlin</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2025 CMK Studio GmbH. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;