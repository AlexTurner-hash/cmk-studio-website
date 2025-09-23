import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cmk-logo-white-new.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: "HOME", href: "#home" },
    { name: "ÜBER UNS", href: "/ueber-uns" },
    { name: "SERVICES", href: "#services" },
    { name: "INSIGHTS", href: "/insights" },
    { name: "WORK", href: "#work" },
    { name: "CONTACT", href: "#contact" },
    { name: "IMPRESSUM", href: "/impressum" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/20 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="CMK Studio" 
              className="h-6 w-auto"
            />
          </div>

          {/* Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 text-white hover:text-[hsl(var(--cream-tan-hover))] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </Button>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 mt-4 pb-4 bg-black/60 backdrop-blur-md">
            <div className="container mx-auto px-6 flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium tracking-tight transition-colors duration-200 uppercase font-body text-white hover:text-[hsl(var(--cream-tan-hover))]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;