import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, UtensilsCrossed, Waves, Phone } from "lucide-react";
import romanticDinner from "@/assets/romantic-dinner.jpg";
import spaCouples from "@/assets/spa-couples.jpg";
import bridalDay from "@/assets/room/bathtub-1.jpg";

const Experiences = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre as experiências disponíveis na Home das Três Palmeiras."
  );
  const whatsappNumber = "554799244703";

  const experiences = [
    {
      icon: UtensilsCrossed,
      title: "Jantar Romântico à Luz de Velas",
      description: "Desfrute de um jantar privativo especialmente preparado para vocês, em um ambiente intimista com vista privilegiada.",
      image: romanticDinner,
      badge: "Sob Consulta",
    },
    {
      icon: Waves,
      title: "Massagem para Casais",
      description: "Relaxe com nossa massagem exclusiva com cromoterapia e pedras quentes, perfeita para renovar as energias a dois.",
      image: spaCouples,
      badge: "Serviço Premium",
    },
    {
      icon: Sparkles,
      title: "Dia da Noiva - Serviços de Beleza",
      description: "Pacote especial de beleza e bem-estar para noivas, incluindo cabelo, maquiagem e cuidados relaxantes antes do grande dia.",
      image: bridalDay,
      badge: "Exclusivo",
    },
  ];

  return (
    <section id="experiencias" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-base">
            Experiências Exclusivas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Momentos Únicos para Casais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalize sua estadia com experiências românticas inesquecíveis
          </p>
          <p className="text-sm text-muted-foreground mt-3 italic">
            * Serviços não inclusos na hospedagem - valores sob consulta via WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group"
            >
              {/* Image or Icon Background */}
              <div className="relative h-56 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                {experience.image ? (
                  <>
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </>
                ) : (
                  <experience.icon className="w-20 h-20 text-primary/30 group-hover:text-primary/50 transition-smooth" />
                )}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 shadow-lg"
                >
                  {experience.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <experience.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="romantic" 
            size="lg"
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            className="min-w-[300px]"
          >
            <Phone className="w-5 h-5" />
            Consultar Experiências
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
