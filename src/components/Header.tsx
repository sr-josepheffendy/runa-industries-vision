
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ID" : "EN");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-runaEarth z-10">
            Runa
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-runaEarth hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-runaEarth hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-runaEarth hover:text-primary transition-colors">
              Our Services
            </Link>
            <Link to="/industries" className="text-runaEarth hover:text-primary transition-colors">
              Industries
            </Link>
            <Link to="/why-runa" className="text-runaEarth hover:text-primary transition-colors">
              Why Runa?
            </Link>
            <Link to="/careers" className="text-runaEarth hover:text-primary transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-runaEarth hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-runaEarth hover:bg-primary/10">
              <Globe className="h-5 w-5 mr-1" />
              <span>{language}</span>
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 text-runaEarth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col h-full justify-center items-center space-y-8 py-8">
            <Link to="/" className="text-2xl text-runaEarth hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-2xl text-runaEarth hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" className="text-2xl text-runaEarth hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Our Services
            </Link>
            <Link to="/industries" className="text-2xl text-runaEarth hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Industries
            </Link>
            <Link to="/why-runa" className="text-2xl text-runaEarth hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Why Runa?
            </Link>
            <Link to="/careers" className="text-2xl text-runaEarth hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <Link to="/contact" className="text-2xl text-runaEarth hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center space-x-4 mt-6">
              <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-runaEarth hover:bg-primary/10">
                <Globe className="h-5 w-5 mr-1" />
                <span>{language}</span>
              </Button>
              <Link to="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90" onClick={() => setIsMenuOpen(false)}>
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
