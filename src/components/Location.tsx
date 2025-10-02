import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, UtensilsCrossed, Palmtree, Music } from "lucide-react";

const Location = () => {
  const attractions = [
    {
      icon: Palmtree,
      title: "Praia de Balneário Piçarras",
      distance: "200m",
      description: "Praia tranquila perfeita para caminhadas românticas ao pôr do sol",
    },
    {
      icon: MapPin,
      title: "Parque Linear Orla",
      distance: "Próximo",
      description: "Área de lazer à beira-mar, ideal para passeios relaxantes a dois",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurantes Sofisticados",
      distance: "5-10 min",
      description: "Opções gastronômicas românticas com vista para o mar",
    },
    {
      icon: Music,
      title: "Vida Noturna Elegante",
      distance: "Centro",
      description: "Bares e lounges com ambiente intimista para casais",
    },
  ];

  const openGoogleMaps = () => {
    const address = "R. Lapa, 410 - Itacolomi, Balneário Piçarras - SC, 88380-000";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  const openWaze = () => {
    const address = "R. Lapa, 410 - Itacolomi, Balneário Piçarras - SC, 88380-000";
    window.open(`https://waze.com/ul?q=${encodeURIComponent(address)}&navigate=yes`, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-base">
            Localização Privilegiada
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            No Coração de Balneário Piçarras
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estrategicamente localizada para aproveitar o melhor da região
          </p>
        </div>

        {/* Map */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-elegant">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.123456789!2d-48.6717!3d-26.7683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ2JzA2LjAiUyA0OMKwNDAnMTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr&q=R.%20Lapa,%20410%20-%20Itacolomi,%20Balneário%20Piçarras%20-%20SC,%2088380-000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Home das Três Palmeiras - R. Lapa, 410 - Itacolomi, Balneário Piçarras"
          ></iframe>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="default" 
            size="lg"
            onClick={openGoogleMaps}
            className="min-w-[200px]"
          >
            <Navigation className="w-5 h-5" />
            Abrir no Google Maps
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={openWaze}
            className="min-w-[200px]"
          >
            <Navigation className="w-5 h-5" />
            Abrir no Waze
          </Button>
        </div>

        {/* Nearby Attractions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elegant transition-smooth text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <attraction.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{attraction.title}</h3>
              <Badge variant="secondary" className="mb-3">
                {attraction.distance}
              </Badge>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {attraction.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Address Info */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 shadow-elegant">
            <div className="flex items-center gap-3 text-left">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg mb-1">R. Lapa, 410 - Itacolomi</p>
                <p className="text-muted-foreground">
                  Balneário Piçarras - SC, 88380-000
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
