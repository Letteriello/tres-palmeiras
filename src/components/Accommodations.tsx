import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Waves, Wifi, Wind, Coffee, Sparkles, Phone, Tv, Snowflake, Bath } from "lucide-react";
import bedroom1 from "@/assets/room/bedroom-1.jpg";
import bedroom2 from "@/assets/room/bedroom-2.jpg";
import bedroom3 from "@/assets/room/bedroom-3.jpg";
import bathroom1 from "@/assets/room/bathroom-1.jpg";
import bathroom2 from "@/assets/room/bathroom-2.jpg";
import bathtub1 from "@/assets/room/bathtub-1.jpg";
import bathtub2 from "@/assets/room/bathtub-2.jpg";
import bathtub3 from "@/assets/room/bathtub-3.jpg";
import entrance from "@/assets/room/entrance.jpg";

const Accommodations = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o Quarto Vista das Três Palmeiras e fazer uma reserva."
  );
  const whatsappNumber = "5547992447703";

  const roomImages = [
    { src: bedroom2, alt: "Quarto com banheira de hidromassagem" },
    { src: bathtub1, alt: "Banheira de hidromassagem privativa" },
    { src: bedroom1, alt: "Suite com cama king size" },
    { src: bedroom3, alt: "Área de estar do quarto" },
    { src: bathtub2, alt: "Banheira romântica" },
    { src: bathtub3, alt: "Banheira com decoração" },
    { src: bathroom1, alt: "Banheiro moderno com box de vidro" },
    { src: bathroom2, alt: "Box de vidro amplo" },
    { src: entrance, alt: "Entrada da suite" },
  ];

  const amenities = [
    { icon: Bath, label: "Banheira de Hidromassagem" },
    { icon: Snowflake, label: "Ar Condicionado" },
    { icon: Tv, label: "TV a Cabo" },
    { icon: Wifi, label: "Wi-Fi de Alta Velocidade" },
    { icon: Coffee, label: "Frigobar" },
    { icon: Sparkles, label: "Decoração Sofisticada" },
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
            {/* Image Carousel */}
            <div className="relative h-80 md:h-auto bg-muted">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {roomImages.map((image, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="relative h-80 md:h-full">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="text-lg px-4 py-2 shadow-glow">
                  Suite Premium
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-between bg-card">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Suíte Romântica com Banheira de Hidromassagem
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nossa suíte premium oferece uma experiência completa de conforto e romance. 
                  Destaque para a banheira de hidromassagem no próprio quarto, ambiente elegante 
                  com decoração sofisticada, ar condicionado, TV a cabo, Wi-Fi de alta velocidade 
                  e frigobar. Perfeito para momentos inesquecíveis a dois.
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
