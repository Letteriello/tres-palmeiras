import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import outdoorDining from "@/assets/gallery/outdoor-dining.jpg";
import coveredLounge from "@/assets/gallery/covered-lounge.jpg";
import waterGarden from "@/assets/gallery/water-garden.jpg";
import rusticBar from "@/assets/gallery/rustic-bar.jpg";
import outdoorKitchen from "@/assets/gallery/outdoor-kitchen.jpg";
import diningRoom from "@/assets/gallery/dining-room.jpg";
import livingArea from "@/assets/gallery/living-area.jpg";
import outdoorLoungeDay from "@/assets/gallery/outdoor-lounge-day.jpg";
import gardenEvening from "@/assets/gallery/garden-evening.jpg";
import facade from "@/assets/gallery/facade.jpg";

const Gallery = () => {
  const images = [
    { src: outdoorDining, alt: "Área Externa com Mesa e Cadeiras", title: "Espaço Gourmet" },
    { src: coveredLounge, alt: "Varanda Coberta com Sofá", title: "Área de Relaxamento" },
    { src: waterGarden, alt: "Jardim com Espelho d'Água", title: "Jardim Zen" },
    { src: rusticBar, alt: "Bar com Decoração Rústica", title: "Bar Rústico" },
    { src: outdoorKitchen, alt: "Churrasqueira e Área Gourmet", title: "Cozinha Externa" },
    { src: diningRoom, alt: "Sala de Jantar", title: "Sala de Jantar" },
    { src: livingArea, alt: "Sala de Estar e Cozinha", title: "Área Social" },
    { src: outdoorLoungeDay, alt: "Varanda com Vista", title: "Varanda Panorâmica" },
    { src: gardenEvening, alt: "Jardim ao Entardecer", title: "Jardim Iluminado" },
    { src: facade, alt: "Fachada da Pousada", title: "Nossa Pousada" },
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conheça Nossos Espaços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ambientes cuidadosamente projetados para momentos inesquecíveis
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden group">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-white font-semibold text-lg">
                              {image.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Deslize para ver mais fotos dos nossos espaços
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
