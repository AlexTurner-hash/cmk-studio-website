import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/cmk-logo-white-new.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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
    { name: "HOME", href: "/" },
    { name: "ÜBER UNS", href: "/ueber-uns" },
    { name: "SERVICES", href: "/#services" },
    { name: "INSIGHTS", href: "/insights" },
    { name: "CONTACT", href: "/#contact" },
    { name: "IMPRESSUM", href: "/impressum" },
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
                src={logo} 
                alt="CMK Studio" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-white hover:text-[hsl(var(--bronze))] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={46} /> : <Menu size={46} />}
          </Button>
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