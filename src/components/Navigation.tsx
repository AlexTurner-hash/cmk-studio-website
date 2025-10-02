import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
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
      isScrolled 
        ? 'bg-[hsl(var(--muted-foreground))]' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={(isInsightsPage && !isScrolled) ? logoBlack : logoWhite} 
                alt="CMK Studio" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Search, Language Switcher & Menu Button */}
          <div className="flex items-center gap-4">
            {/* Search Field */}
            <div className={`relative hidden md:flex items-center border rounded-md px-3 py-1 ${
              (isInsightsPage && !isScrolled) 
                ? 'border-black/30' 
                : 'border-white/30'
            }`}>
              <Search 
                size={16} 
                className={`${(isInsightsPage && !isScrolled) ? 'text-black/60' : 'text-white/60'}`}
              />
              <input
                type="text"
                placeholder="Suche"
                className={`bg-transparent border-none outline-none ml-2 w-32 text-sm placeholder:text-sm ${
                  (isInsightsPage && !isScrolled) 
                    ? 'text-black placeholder:text-black/40' 
                    : 'text-white placeholder:text-white/40'
                }`}
              />
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('de')}
                className={`text-sm transition-colors ${
                  language === 'de' 
                    ? `font-bold ${(isInsightsPage && !isScrolled) ? 'text-black' : 'text-white'}` 
                    : `${(isInsightsPage && !isScrolled) ? 'text-black/60' : 'text-white/60'} hover:${(isInsightsPage && !isScrolled) ? 'text-black' : 'text-white'}`
                }`}
              >
                DE
              </button>
              <span className={`${(isInsightsPage && !isScrolled) ? 'text-black/40' : 'text-white/40'}`}>
                /
              </span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm transition-colors ${
                  language === 'en' 
                    ? `font-bold ${(isInsightsPage && !isScrolled) ? 'text-black' : 'text-white'}` 
                    : `${(isInsightsPage && !isScrolled) ? 'text-black/60' : 'text-white/60'} hover:${(isInsightsPage && !isScrolled) ? 'text-black' : 'text-white'}`
                }`}
              >
                EN
              </button>
            </div>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 transition-colors duration-300 ${
              (isInsightsPage && !isScrolled) 
                ? 'text-black hover:text-[hsl(var(--bronze))]' 
                : 'text-white hover:text-[hsl(var(--bronze))]'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={46} /> : <Menu size={46} />}
          </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 mt-4 pb-4 bg-black/60 backdrop-blur-md">
            <div className="container mx-auto px-6 flex flex-col space-y-3 pt-4">
              {navItems.map((item) => {
                // Handle anchor links differently
                if (item.href.startsWith("/#")) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-base font-medium tracking-tight transition-colors duration-200 uppercase font-body text-white hover:text-[hsl(var(--bronze))] text-left"
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
                    className="text-base font-medium tracking-tight transition-colors duration-200 uppercase font-body text-white hover:text-[hsl(var(--bronze))]"
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