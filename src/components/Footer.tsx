import { Heart, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌴</span>
              <h3 className="text-xl font-bold">Home das Três Palmeiras</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Seu refúgio romântico à beira-mar em Balneário Piçarras. 
              Ambiente exclusivo para casais adultos.
            </p>
            <div className="flex items-center gap-2 mt-4 text-secondary">
              <Heart className="w-5 h-5 fill-secondary" />
              <span className="font-semibold">Adults Only • Pet Free</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('acomodacoes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Acomodações
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('experiencias')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Experiências Românticas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('localizacao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Localização
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contato & Reservas
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  R. Lapa, 410 - Itacolomi<br />
                  Balneário Piçarras - SC, 88380-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">(47) 9924-4703</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Home das Três Palmeiras. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Pousada boutique romântica em Balneário Piçarras • Adults Only • Pet Free
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
