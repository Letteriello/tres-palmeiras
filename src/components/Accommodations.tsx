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
import { Waves, Wifi, Wind, Coffee, Sparkles, Phone, Tv, Snowflake, Bath, Users, Car, Utensils, Home, Flower } from "lucide-react";

const Accommodations = () => {
  const whatsappNumber = "554799244703";

  const accommodations = [
    {
      id: "quarto-vista-das-tres-palmeiras",
      title: "Quarto Vista das Três Palmeiras",
      subtitle: "Suíte Romântica com Banheira de Hidromassagem",
      description: "Nossa suíte premium oferece uma experiência completa de conforto e romance. Destaque para a banheira de hidromassagem no próprio quarto, ambiente elegante com decoração sofisticada, ar condicionado, TV a cabo, Wi-Fi de alta velocidade e frigobar. Perfeito para momentos inesquecíveis a dois.",
      badge: "Suite Premium",
      policy: "Política Exclusiva: Ambiente dedicado apenas a casais adultos, garantindo sua privacidade e tranquilidade absoluta.",
      images: [
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.14.59_57cb689f.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.14.59_9e870b4c.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.15.00_776b1445.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.15.00_8f12c5b1.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.15.00_bbee1778.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.15.01_30f74754.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.15.01_33ef549b.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.15.01_447f5111.jpg",
        "/images/accommodations/quarto-vista-das-tres-palmeiras/Imagem do WhatsApp de 2025-09-28 à(s) 16.15.01_5126b2c2.jpg"
      ],
      amenities: [
        { icon: Bath, label: "Banheira de Hidromassagem" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Tv, label: "TV a Cabo" },
        { icon: Wifi, label: "Wi-Fi de Alta Velocidade" },
        { icon: Coffee, label: "Frigobar" },
        { icon: Sparkles, label: "Decoração Sofisticada" }
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre o Quarto Vista das Três Palmeiras e fazer uma reserva."
    },
    {
      id: "quarto-lirio",
      title: "Quarto Lírio",
      subtitle: "Refúgio Natural Sustentável",
      description: "Um refúgio natural com apelo sustentável, construído propositalmente para quem gosta de sentir o cheiro da terra, ouvir o cantar dos pássaros e acordar com a paisagem emoldurada pela janela do quarto. Ideal para casais que buscam tranquilidade e conexão com a natureza.",
      badge: "Eco-Friendly",
      policy: "Ambiente natural e sustentável, perfeito para relaxamento e conexão com a natureza.",
      images: [
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.31_0cca793b.jpg",
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.31_5afe2190.jpg",
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.31_690cae1a.jpg",
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.31_a2e95a9a.jpg",
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.31_a7602045.jpg",
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.32_2fd1f9ef.jpg",
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.32_35f881e0.jpg",
        "/images/accommodations/quarto-lirio/images/Imagem do WhatsApp de 2025-09-28 à(s) 17.26.32_60138d63.jpg"
      ],
      amenities: [
        { icon: Flower, label: "Vista Natural" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Car, label: "Estacionamento" },
        { icon: Utensils, label: "Cozinha Compartilhada" },
        { icon: Users, label: "Até 2 Hóspedes" }
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre o Quarto Lírio e fazer uma reserva."
    },
    {
      id: "quarto-costela-de-adao",
      title: "Quarto Costela de Adão",
      subtitle: "Experiência Única de Conforto",
      description: "Relaxe e viva uma experiência inesquecível no Quarto Costela de Adão. Um espaço que une estilo e conforto, com decoração charmosa e detalhes pensados para transformar sua estadia em puro prazer. Ambiente natural com construção sustentável.",
      badge: "Experiência Única",
      policy: "Espaço charmoso e único, ideal para quem busca uma experiência diferenciada.",
      images: [
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.43_05dea116.jpg",
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.43_92c67c20.jpg",
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.43_a09cee25.jpg",
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.43_e0436dd9.jpg",
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.44_077fba2d.jpg",
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.44_2f8e0f99.jpg",
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.44_773a7101.jpg",
        "/images/accommodations/quarto-costela-de-adao/Imagem do WhatsApp de 2025-09-28 à(s) 17.15.44_e27e7cf0.jpg"
      ],
      amenities: [
        { icon: Home, label: "Decoração Charmosa" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Car, label: "Estacionamento" },
        { icon: Utensils, label: "Cozinha Compartilhada" },
        { icon: Users, label: "Até 2 Hóspedes" }
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre o Quarto Costela de Adão e fazer uma reserva."
    },
    {
      id: "quarto-vintage",
      title: "Quarto Vintage",
      subtitle: "Hospedagem Aconchegante Perto da Praia",
      description: "Quarto privado com estilo vintage, localizado perto da Praia de Palmas. Oferece banheiro compartilhado e lavabo exclusivo no espaço externo. Ambiente moderno e elegante, perfeito para relaxar e criar boas memórias durante suas férias de verão.",
      badge: "Estilo Vintage",
      policy: "Ambiente vintage e aconchegante, ideal para uma estadia relaxante perto da praia.",
      images: [
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.43_0e5d7c56.jpg",
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.43_836047a1.jpg",
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.44_0ab370f2.jpg",
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.44_13d7acc5.jpg",
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.44_3b792fd8.jpg",
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.44_4b411a87.jpg",
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.44_e22f8e53.jpg",
        "/images/accommodations/quarto-vintage/Imagem do WhatsApp de 2025-09-28 à(s) 16.58.44_f993ba74.jpg"
      ],
      amenities: [
        { icon: Sparkles, label: "Estilo Vintage" },
        { icon: Tv, label: "TV" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Car, label: "Estacionamento" },
        { icon: Waves, label: "Perto da Praia" }
      ],
      whatsappMessage: "Olá! Gostaria de saber mais sobre o Quarto Vintage e fazer uma reserva."
    },
    {
      id: "espaco-gourmet",
      title: "Espaço Gourmet",
      subtitle: "Casa Completa para Grupos e Famílias",
      description: "Casa espaçosa próxima à Praia de Palmas, perfeita para famílias ou grupos de amigos. Oferece 4 quartos confortáveis, incluindo 1 suíte com banheiro privativo, garagem para até 4 veículos, cozinha equipada, sala ampla e área externa ideal para lazer e descanso.",
      badge: "Casa Completa",
      policy: "Ideal para grupos e famílias, oferecendo espaço amplo e todas as comodidades necessárias.",
      images: [
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.21_caa94791.jpg",
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.21_fc5f6ed0.jpg",
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.22_1d6e7d53.jpg",
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.22_c2de0af3.jpg",
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.23_598ddf57.jpg",
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.23_848d66bb.jpg",
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.23_e38a4ad9.jpg",
        "/images/accommodations/espaco-gourmet/Imagem do WhatsApp de 2025-09-28 à(s) 17.36.23_ee8f9000.jpg"
      ],
      amenities: [
        { icon: Home, label: "4 Quartos" },
        { icon: Car, label: "Garagem para 4 Carros" },
        { icon: Utensils, label: "Cozinha Equipada" },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Snowflake, label: "Ar Condicionado" },
        { icon: Waves, label: "Próximo à Praia" }
      ],
      whatsappMessage: "Olá! Gostaria de saber mais informações sobre a locação da casa completa e verificar disponibilidade."
    }
  ];

  return (
    <section id="acomodacoes" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-base">
            Acomodações Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossas Acomodações
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha a acomodação perfeita para sua estadia inesquecível
          </p>
        </div>

        <div className="grid gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={accommodation.id} className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth max-w-6xl mx-auto">
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
                      {accommodation.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex} className="h-full">
                          <div className="relative h-80 md:h-full">
                            <img 
                              src={image} 
                              alt={`${accommodation.title} - Imagem ${imageIndex + 1}`}
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
                      {accommodation.badge}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between bg-card">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {accommodation.title}
                    </h3>
                    <h4 className="text-lg text-primary mb-4 font-medium">
                      {accommodation.subtitle}
                    </h4>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {accommodation.description}
                    </p>

                    {/* Amenities */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {accommodation.amenities.map((amenity, amenityIndex) => (
                        <div key={amenityIndex} className="flex items-center gap-3">
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
                        {accommodation.policy}
                      </p>
                    </div>
                  </div>

                  <Button 
                    variant="romantic" 
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(accommodation.whatsappMessage)}`, '_blank')}
                    className="w-full"
                  >
                    <Phone className="w-5 h-5" />
                    Consultar Disponibilidade
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Decoração romântica e tratamento especial para lua de mel disponível sob consulta via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
