import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma reserva para casal. Vocês têm disponibilidade?"
  );
  const whatsappNumber = "5547999999999"; // Substituir pelo número real

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBeach})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border-2 border-secondary">
          <Heart className="w-5 h-5 text-secondary fill-secondary" />
          <span className="text-primary-foreground font-medium text-sm md:text-base">
            Ambiente Exclusivo para Casais • Adults Only
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Seu Refúgio Romântico
          <br />
          <span className="text-secondary">à Beira-Mar</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Descubra a tranquilidade perfeita em Balneário Piçarras. 
          <br className="hidden md:block" />
          Sem crianças, sem pets, apenas momentos únicos a dois.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="romantic" 
            size="xl"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            className="min-w-[280px]"
          >
            <Phone className="w-5 h-5" />
            Reserve Seu Refúgio
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => document.getElementById('acomodacoes')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-w-[280px] bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Conheça Nossas Suítes
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-secondary" />
            <span className="text-sm md:text-base">Avaliação 5★ Casais</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌴</span>
            <span className="text-sm md:text-base">200m da Praia</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-sm md:text-base">Ambiente Premium</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
