import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "@/assets/cmk-logo-white-new.png";
import logoBlack from "@/assets/cmk-logo-black-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  
  // Check if we're on insights page or any insights subpage
  const isInsightsPage = location.pathname.startsWith('/insights');
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header background change
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.about'), href: "/ueber-uns" },
    { name: t('nav.services'), href: "/#services" },
    { name: t('nav.insights'), href: "/insights" },
    { name: t('nav.contact'), href: "/#contact" },
    { name: language === 'de' ? "IMPRESSUM" : "IMPRINT", href: "/impressum" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Handle anchor links for homepage sections
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        // Already on homepage, just scroll to section
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to homepage with hash
        window.location.href = href;
      }
      return;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || isMenuOpen
        ? isScrolled
          ? 'bg-black/60 backdrop-blur-md'
          : 'bg-white'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  const element = document.getElementById("home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              <img 
                src={(isInsightsPage && !isScrolled && !isMenuOpen) ? logoBlack : (isScrolled ? logoWhite : (isMenuOpen ? logoBlack : logoWhite))} 
                alt="CMK Studio" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Language Switcher & Menu Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('de')}
                className={`text-sm transition-colors ${
                  language === 'de' 
                    ? `font-bold ${(isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled) ? 'text-black' : 'text-white'}` 
                    : `${(isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled) ? 'text-black/60' : 'text-white/60'} hover:${(isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled) ? 'text-black' : 'text-white'}`
                }`}
                aria-label="Switch to German"
              >
                DE
              </button>
              <span className={`${(isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled) ? 'text-black/40' : 'text-white/40'}`}>
                /
              </span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm transition-colors ${
                  language === 'en' 
                    ? `font-bold ${(isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled) ? 'text-black' : 'text-white'}` 
                    : `${(isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled) ? 'text-black/60' : 'text-white/60'} hover:${(isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled) ? 'text-black' : 'text-white'}`
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 transition-colors duration-300 ${
              (isInsightsPage && !isScrolled && !isMenuOpen) || (isMenuOpen && !isScrolled)
                ? 'text-black hover:text-black' 
                : 'text-white hover:text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={46} /> : <Menu size={46} />}
          </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div className={`absolute left-0 right-0 mt-4 pb-4 backdrop-blur-md ${
            isScrolled 
              ? 'bg-black/60' 
              : 'bg-white'
          }`}>
            <div className="container mx-auto px-6 flex flex-col space-y-3 pt-4">
              {navItems.map((item) => {
                // Handle anchor links differently
                if (item.href.startsWith("/#")) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-base font-light tracking-tight transition-all duration-200 uppercase text-left hover:font-bold ${
                        isScrolled 
                          ? 'text-white' 
                          : 'text-black'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                }
                
                // Regular page links
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-light tracking-tight transition-all duration-200 uppercase hover:font-bold ${
                      isScrolled 
                        ? 'text-white' 
                        : 'text-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;