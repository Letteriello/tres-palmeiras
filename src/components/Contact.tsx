import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "554799244703";
  const reservationMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma reserva para casal. Vocês têm disponibilidade para [datas]?"
  );
  const infoMessage = encodeURIComponent(
    "Olá! Gostaria de receber mais informações sobre a Pousada Home das Três Palmeiras."
  );

  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Reserve Seu Refúgio Romântico
          </h2>
          <p className="text-xl text-muted-foreground">
            Entre em contato conosco e garanta momentos inesquecíveis a dois
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-elegant text-center">
          {/* WhatsApp Primary CTA */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4">
              Atendimento Personalizado para Casais
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale conosco via WhatsApp e tire todas suas dúvidas. 
              <br className="hidden md:block" />
              Nossa equipe está pronta para criar uma experiência única para vocês.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${reservationMessage}`, '_blank')}
                className="min-w-[250px]"
              >
                <MessageCircle className="w-5 h-5" />
                Fazer Reserva
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${infoMessage}`, '_blank')}
                className="min-w-[250px]"
              >
                <Phone className="w-5 h-5" />
                Solicitar Informações
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-border"></div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Telefone / WhatsApp</h4>
                <p className="text-muted-foreground">(47) 9924-4703</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Atendimento personalizado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Endereço</h4>
                <p className="text-muted-foreground">R. Lapa, 410 - Itacolomi</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Balneário Piçarras - SC, 88380-000
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-10 pt-10 border-t border-border">
            <h4 className="font-semibold mb-4">Siga-nos no Instagram</h4>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://www.instagram.com/home_das_tres_palmeiras/', '_blank')}
            >
              <Instagram className="w-5 h-5" />
              @home_das_tres_palmeiras
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Dados Protegidos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>Atendimento 5 Estrelas</span>
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            💝 Reservas diretas via WhatsApp garantem o melhor atendimento e condições especiais
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
