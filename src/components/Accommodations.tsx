import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Wifi, Wind, Coffee, Sparkles, Phone } from "lucide-react";
import roomVista from "@/assets/room-vista.jpg";

const Accommodations = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o Quarto Vista das Três Palmeiras e fazer uma reserva."
  );
  const whatsappNumber = "5547999999999";

  const amenities = [
    { icon: Waves, label: "Hidromassagem Privativa" },
    { icon: Wind, label: "Varanda com Vista" },
    { icon: Wifi, label: "Wi-Fi Premium" },
    { icon: Coffee, label: "Café da Manhã Especial" },
    { icon: Sparkles, label: "Decoração Romântica" },
  ];

  return (
    <section id="acomodacoes" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-base">
            Acomodações Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quarto Vista das Três Palmeiras
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossa suíte premium, projetada para proporcionar momentos inesquecíveis
          </p>
        </div>

        <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-80 md:h-auto">
              <img 
                src={roomVista} 
                alt="Quarto Vista das Três Palmeiras - Suíte romântica com hidromassagem e vista para o mar"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-lg px-4 py-2 shadow-glow">
                  Suite Premium
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-between bg-card">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Experiência Única para Casais
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Desfrute de uma estadia sofisticada em nosso quarto principal, equipado com 
                  hidromassagem privativa, varanda com vista privilegiada e toda comodidade que 
                  vocês merecem. Localizado a apenas 200 metros da praia e próximo ao Parque 
                  Linear Orla de Balneário Piçarras.
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <amenity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{amenity.label}</span>
                    </div>
                  ))}
                </div>

                {/* Policy Badge */}
                <div className="bg-accent/20 border-l-4 border-accent p-4 rounded-r-lg mb-8">
                  <p className="text-sm font-medium text-accent-foreground">
                    ✨ Política Exclusiva: Ambiente dedicado apenas a casais adultos, 
                    garantindo sua privacidade e tranquilidade absoluta.
                  </p>
                </div>
              </div>

              <Button 
                variant="romantic" 
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                className="w-full"
              >
                <Phone className="w-5 h-5" />
                Consultar Disponibilidade
              </Button>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            💝 Decoração romântica e tratamento especial para lua de mel disponível sob consulta via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
