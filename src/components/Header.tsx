import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Acomodações", id: "acomodacoes" },
    { label: "Experiências", id: "experiencias" },
    { label: "Galeria", id: "galeria" },
    { label: "Localização", id: "localizacao" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="flex gap-1">
              <span className="text-3xl group-hover:scale-110 transition-smooth">🌴</span>
              <span className="text-3xl group-hover:scale-110 transition-smooth delay-75">🌴</span>
              <span className="text-3xl group-hover:scale-110 transition-smooth delay-100">🌴</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary leading-tight">
                Home das Três Palmeiras
              </h1>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Heart className="w-3 h-3 text-secondary fill-secondary" />
                Refúgio Romântico
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary"
              >
                {item.label}
              </Button>
            ))}
            <Button 
              variant="romantic" 
              onClick={() => scrollToSection('contato')}
              className="ml-4"
            >
              Reservar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-foreground hover:text-primary"
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                variant="romantic" 
                onClick={() => scrollToSection('contato')}
                className="mt-2"
              >
                Reservar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
