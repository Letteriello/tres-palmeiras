import { Button } from "@/components/ui/button";
import { Heart, Phone } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import { useState } from "react";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma reserva na Home das Três Palmeiras."
  );
  // Sistema de reserva: estados para datas e adultos
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);

  // Formata data YYYY-MM-DD para DD/MM/YYYY
  const formatDate = (isoDate: string) => {
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  };

  const whatsappNumber = "554799244703";

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
            Ambiente Exclusivo para Casais
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Sua Pousada
          <br />
          <span className="text-secondary">à Beira-Mar</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Descubra a tranquilidade perfeita em Balneário Piçarras. 
          <br className="hidden md:block" />
          Sem crianças, sem pets, apenas momentos únicos a dois.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Campos de Check-in / Check-out / Adultos */}
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
            <div className="flex flex-col">
              <label className="text-primary-foreground font-medium mb-1 text-sm">Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="px-4 py-3 rounded-md border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:border-secondary focus:outline-none"
                aria-label="Data de check-in"
                lang="pt-BR"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-primary-foreground font-medium mb-1 text-sm">Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="px-4 py-3 rounded-md border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:border-secondary focus:outline-none"
                aria-label="Data de check-out"
                lang="pt-BR"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-primary-foreground font-medium mb-1 text-sm">Adultos</label>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="px-4 py-3 rounded-md border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-secondary focus:outline-none"
                aria-label="Quantidade de adultos"
              >
                <option value={1} className="bg-primary text-white">1 adulto</option>
                <option value={2} className="bg-primary text-white">2 adultos</option>
                <option value={3} className="bg-primary text-white">3 adultos</option>
                <option value={4} className="bg-primary text-white">4 adultos</option>
              </select>
            </div>
          </div>

          <Button 
            variant="romantic" 
            size="xl"
            onClick={() => {
              // Validação básica das entradas
              if (!checkIn || !checkOut) {
                alert("Erro: informe as datas de check-in e check-out.");
                return;
              }
              const inDate = new Date(checkIn);
              const outDate = new Date(checkOut);
              if (isNaN(inDate.getTime()) || isNaN(outDate.getTime())) {
                alert("Erro: datas inválidas. Verifique os campos.");
                return;
              }
              if (outDate <= inDate) {
                alert("Erro: a data de check-out deve ser após a data de check-in.");
                return;
              }
              if (adults < 1) {
                alert("Erro: informe pelo menos 1 adulto.");
                return;
              }

              // Construção da mensagem para WhatsApp com dados reais
              const message = encodeURIComponent(
                `Olá! Gostaria de verificar disponibilidade. Adultos: ${adults}. Check-in: ${formatDate(checkIn)}. Check-out: ${formatDate(checkOut)}.`
              );
              window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
            }}
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
