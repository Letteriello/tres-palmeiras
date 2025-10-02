import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = "5547992447703";
  const message = encodeURIComponent(
    "Olá! Vim do site e gostaria de saber mais sobre a Pousada Home das Três Palmeiras."
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <Button
        variant="whatsapp"
        size="icon"
        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')}
        className="h-16 w-16 rounded-full shadow-glow hover:scale-110 transition-smooth group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-smooth" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
