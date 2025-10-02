import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina & Carlos",
      location: "São Paulo, SP",
      rating: 5,
      text: "Lugar perfeito para casais! A tranquilidade e privacidade são incomparáveis. O quarto com hidromassagem e a vista para o mar tornaram nossa lua de mel inesquecível. Voltaremos com certeza!",
      initials: "MC",
    },
    {
      name: "Juliana & Roberto",
      location: "Curitiba, PR",
      rating: 5,
      text: "A melhor escolha para nosso aniversário de casamento. O ambiente adults only faz toda diferença - pura tranquilidade. A proximidade da praia e o atendimento personalizado nos conquistaram completamente.",
      initials: "JR",
    },
    {
      name: "Camila & Eduardo",
      location: "Florianópolis, SC",
      rating: 5,
      text: "Experiência maravilhosa! A pousada é exatamente como prometido: romântica, sofisticada e tranquila. O jantar à luz de velas foi um momento mágico. Recomendamos para todos os casais que buscam privacidade.",
      initials: "CE",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Nossos Casais Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiências reais de casais que viveram momentos especiais conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-elegant transition-smooth"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Avatar className="h-12 w-12 bg-gradient-romantic">
                  <AvatarFallback className="bg-transparent text-primary-foreground font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 rounded-full border border-accent/20">
            <Star className="w-6 h-6 text-secondary fill-secondary" />
            <span className="text-lg font-semibold">
              Avaliação 5★ • 100% Casais Satisfeitos
            </span>
            <Star className="w-6 h-6 text-secondary fill-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
