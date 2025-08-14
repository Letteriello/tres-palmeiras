"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  MapPin,
  Phone,
  Star,
  Wifi,
  Coffee,
  Car,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Waves,
  Mountain,
  Palmtree,
  Send,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const PHONE_E164 = "+5547999244703";
const DISPLAY_PHONE = "(47) 99924-4703";
const WHATS_APP_MSG_PREFIX = "Olá! Quero verificar disponibilidade na Home das Três Palmeiras";
const ADDRESS_TXT = "Rua da Lapa, 410 - Itacolomi, Balneário Piçarras - SC";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.number().min(1, "Mínimo 1 hóspede").max(20, "Máximo 20 hóspedes"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// URLs atualizadas baseadas no PRD
const AIRBNB_URL_1 = "https://www.airbnb.com.br/rooms/1284880991786538144";
const AIRBNB_URL_2 = "https://www.airbnb.com.br/rooms/1460380972205041492";
const AIRBNB_URL_3 = "https://www.airbnb.com.br/rooms/1476431266026749833";
const AIRBNB_URL_4 = "https://www.airbnb.com.br/rooms/1460371064397293846";
const AIRBNB_URL_5 = "https://www.airbnb.com.br/rooms/1460355916981670982";

function nightsBetween(range?: DateRange) {
  if (!range?.from || !range?.to) return 0;
  const ms = range.to.getTime() - range.from.getTime();
  return Math.max(0, Math.round(ms / 86400000));
}

function waLink(range: DateRange | undefined, guests: number) {
  const base = `https://wa.me/${PHONE_E164.replace("+", "")}`;
  const n = nightsBetween(range);
  const when = range?.from
    ? `${format(range.from, "dd/MM", { locale: ptBR })}${range?.to ? ` a ${format(range.to, "dd/MM", { locale: ptBR })}` : ""}`
    : "Datas a combinar";
  const message = `${WHATS_APP_MSG_PREFIX}

 Endereço: ${ADDRESS_TXT}
 Datas: ${when} (${n} noite${n === 1 ? "" : "s"})
 Hóspedes: ${guests}

Pode me enviar opções e valores?`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

function contactFormToWhatsApp(data: ContactFormData) {
  const msg = encodeURIComponent(
    `${WHATS_APP_MSG_PREFIX}\n\n` +
    `👤 Nome: ${data.name}\n` +
    `📧 Email: ${data.email}\n` +
    `📱 Telefone: ${data.phone}\n` +
    `📅 Check-in: ${data.checkIn || "A definir"}\n` +
    `📅 Check-out: ${data.checkOut || "A definir"}\n` +
    `👥 Hóspedes: ${data.guests}\n\n` +
    `💬 Mensagem:\n${data.message}\n\n` +
    `Aguardo retorno. Obrigado!`
  );
  return `https://wa.me/${PHONE_E164.replace("+", "")}?text=${msg}`;
}

// Structured Data para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://tres-palmeiras.com.br/#lodging",
      "name": "Home das Três Palmeiras",
      "description": "Hospedagem familiar em Balneário Piçarras, a 5 min da praia e 15 min do Beto Carrero World. Casa completa e quartos individuais.",
      "url": "https://tres-palmeiras.com.br",
      "telephone": "+5547999244703",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua da Lapa, 410 - Itacolomi",
        "addressLocality": "Balneário Piçarras",
        "addressRegion": "SC",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.7569,
        "longitude": -48.6694
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuito" },
        { "@type": "LocationFeatureSpecification", "name": "Estacionamento" },
        { "@type": "LocationFeatureSpecification", "name": "Cozinha equipada" },
        { "@type": "LocationFeatureSpecification", "name": "Perto da praia" },
        { "@type": "LocationFeatureSpecification", "name": "Perto do Beto Carrero World" }
      ],
      "starRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "priceRange": "$$",
      "checkinTime": "15:00",
      "checkoutTime": "11:00"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://tres-palmeiras.com.br/#business",
      "name": "Home das Três Palmeiras",
      "description": "Pousada familiar em Balneário Piçarras",
      "url": "https://tres-palmeiras.com.br",
      "telephone": "+5547999244703",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua da Lapa, 410 - Itacolomi",
        "addressLocality": "Balneário Piçarras",
        "addressRegion": "SC",
        "postalCode": "88380-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.7569,
        "longitude": -48.6694
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "sameAs": [
        "https://www.airbnb.com.br/users/show/558923022"
      ]
    }
  ]
};

export default function LandingPage() {
  const [date, setDate] = useState<DateRange | undefined>({ from: undefined, to: undefined });
  const [guests, setGuests] = useState<number>(2);
  const nights = nightsBetween(date);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      setDate({ from: today, to: tomorrow });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Pular para o conteúdo principal
      </a>
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <main id="main-content">
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-100 via-amber-100 to-sky-100" role="banner" aria-labelledby="hero-title">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 sm:py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 id="hero-title" className="text-3xl sm:text-5xl font-bold text-slate-900 mb-4">
                <span className="bg-gradient-to-r from-emerald-700 via-amber-600 to-sky-700 bg-clip-text text-transparent">
                  Home das Três Palmeiras
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
                Sua base tranquila em Balneário Piçarras. Perto da praia e do Beto Carrero. 
                Opções para famílias e casais.
              </p>
            </motion.div>

            {/* Booking Widget */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mx-auto max-w-4xl relative rounded-2xl">
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-200" />
                <Card className="rounded-2xl border-emerald-100 bg-white/90 backdrop-blur relative" role="form" aria-labelledby="booking-form-title">
                  <CardContent className="p-4 sm:p-6">
                    <h2 id="booking-form-title" className="sr-only">Formulário de reserva</h2>
                    <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                      <DateField label="Check-in / Check-out" date={date} setDate={setDate} />
                      <div>
                        <Label className="mb-1 block">Hóspedes</Label>
                        <Select value={guests.toString()} onValueChange={(v) => setGuests(parseInt(v))} aria-label="Número de hóspedes">
                          <SelectTrigger aria-describedby="guests-description">
                            <SelectValue />
                            <span id="guests-description" className="sr-only">Selecione o número de hóspedes para sua reserva</span>
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                              <SelectItem key={n} value={n.toString()}>
                                {n} {n === 1 ? "hóspede" : "hóspedes"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col justify-end">
                        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300">
                          <a 
                            href={waLink(date, guests)} 
                            target="_blank" 
                            rel="noreferrer noopener"
                            aria-label={`Consultar disponibilidade no WhatsApp para ${guests} hóspede${guests > 1 ? 's' : ''} ${date?.from ? `de ${format(date.from, 'dd/MM/yyyy', { locale: ptBR })}` : ''} ${date?.to ? `até ${format(date.to, 'dd/MM/yyyy', { locale: ptBR })}` : ''}`}
                          >
                            <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
                            Consultar no WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                    {nights > 0 && (
                      <div className="mt-3 text-center text-sm text-slate-600">
                        {nights} noite{nights === 1 ? "" : "s"}  {guests} hóspede{guests === 1 ? "" : "s"}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-8 sm:py-12" aria-labelledby="features-title">
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <h2 id="features-title" className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Por que escolher a Home das Três Palmeiras?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <FeatureCard icon={<MapPin className="h-5 w-5 text-emerald-600" />} title="Localização privilegiada" color="emerald">
              A 5 min da praia e 15 min do Beto Carrero World
            </FeatureCard>
            <FeatureCard icon={<Wifi className="h-5 w-5 text-amber-600" />} title="Wi-Fi gratuito" color="amber">
              Internet de alta velocidade em todos os ambientes
            </FeatureCard>
            <FeatureCard icon={<Car className="h-5 w-5 text-sky-600" />} title="Estacionamento" color="sky">
              Vaga disponível (confirmar na reserva)
            </FeatureCard>
            <FeatureCard icon={<Coffee className="h-5 w-5 text-emerald-600" />} title="Cozinha equipada" color="emerald">
              Prepare suas refeições com comodidade
            </FeatureCard>
            <FeatureCard icon={<ShieldCheck className="h-5 w-5 text-amber-600" />} title="Ambiente seguro" color="amber">
              Bairro tranquilo e residencial
            </FeatureCard>
            <FeatureCard icon={<Star className="h-5 w-5 text-sky-600" />} title="Avaliações 5 estrelas" color="sky">
              Hóspedes satisfeitos recomendam
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 sm:py-12" aria-labelledby="contact-title">
        <div className="mx-auto max-w-4xl px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 id="contact-title" className="text-xl sm:text-2xl font-bold mb-2">Entre em contato</h2>
            <p className="text-slate-600">Envie sua solicitação e responderemos rapidamente via WhatsApp</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Accommodations */}
      <section className="bg-emerald-50 py-8 sm:py-12" aria-labelledby="accommodations-title">
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <h2 id="accommodations-title" className="text-xl sm:text-2xl font-bold text-emerald-800 mb-6 sm:mb-8">Nossas acomodações</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AccommodationCard 
              name="Casa das Três Palmeiras" 
              summary="Casa inteira  até 8 hóspedes  4 quartos  3 banheiros" 
              url={AIRBNB_URL_1}
              highlight={true}
            />
            <AccommodationCard 
              name="Quarto Lírio" 
              summary="Quarto/Suíte" 
              url={AIRBNB_URL_2}
            />
            <AccommodationCard 
              name="Quarto Vintage" 
              summary="Quarto/Suíte" 
              url={AIRBNB_URL_3}
            />
            <AccommodationCard 
              name="Costela de Adão" 
              summary="Quarto/Suíte" 
              url={AIRBNB_URL_4}
            />
            <AccommodationCard 
              name="Suíte Vista para Três Palmeiras (Barra Velha)" 
              summary="Suíte (cidade vizinha)" 
              url={AIRBNB_URL_5}
            />
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-8 sm:py-12" aria-labelledby="attractions-title">
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <h2 id="attractions-title" className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Atrações próximas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <AttractionCard 
              icon={<Sparkles className="h-5 w-5 text-emerald-600" />}
              title="Beto Carrero World"
              description="15 min de carro  Maior parque temático da América Latina"
            />
            <AttractionCard 
              icon={<Waves className="h-5 w-5 text-sky-600" />}
              title="Praia de Piçarras"
              description="5 min a pé  Praia tranquila ideal para famílias"
            />
            <AttractionCard 
              icon={<Mountain className="h-5 w-5 text-amber-600" />}
              title="Morro da Cruz"
              description="20 min de carro  Vista panorâmica da região"
            />
            <AttractionCard 
              icon={<Palmtree className="h-5 w-5 text-emerald-600" />}
              title="Centro de Piçarras"
              description="10 min a pé  Restaurantes e comércio local"
            />
          </div>
        </div>
      </section>

      </main>
      {/* Footer */}
      <footer className="bg-white border-t pb-24 sm:pb-0" role="contentinfo" aria-labelledby="footer-title">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 justify-between">
          <div>
            <div id="footer-title" className="text-base sm:text-lg font-semibold">Home das Três Palmeiras</div>
            <div className="text-sm text-slate-600 flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4 text-emerald-600" /> {ADDRESS_TXT}
            </div>
            <div className="text-sm text-slate-600 flex items-center gap-2 mt-1">
              <Phone className="h-4 w-4 text-emerald-600" /> {DISPLAY_PHONE}
            </div>
            <div className="text-xs text-slate-500 mt-2">
               {new Date().getFullYear()} Home das Três Palmeiras  Balneário Piçarras/SC
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300">
              <a 
                href={waLink(date, guests)} 
                target="_blank" 
                rel="noreferrer noopener"
                aria-label="Entrar em contato via WhatsApp"
              >
                <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" /> WhatsApp
              </a>
            </Button>
            <Button variant="outline" asChild className="border-emerald-200 focus:ring-4 focus:ring-emerald-300">
              <a 
                href={`tel:${PHONE_E164}`}
                aria-label={`Ligar para ${DISPLAY_PHONE}`}
              >
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" /> Ligar
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DateField({ label, date, setDate }: { label: string; date?: DateRange; setDate: (d?: DateRange) => void }) {
  const [open, setOpen] = useState(false);
  const display = date?.from
    ? date.to
      ? `${format(date.from, "dd/MM", { locale: ptBR })} - ${format(date.to, "dd/MM", { locale: ptBR })}`
      : format(date.from, "dd/MM", { locale: ptBR })
    : "Selecionar datas";

  const ariaLabel = date?.from
    ? date.to
      ? `Datas selecionadas: ${format(date.from, "dd 'de' MMMM", { locale: ptBR })} até ${format(date.to, "dd 'de' MMMM", { locale: ptBR })}`
      : `Data de entrada selecionada: ${format(date.from, "dd 'de' MMMM", { locale: ptBR })}`
    : "Clique para selecionar as datas de check-in e check-out";

  return (
    <div>
      <Label className="mb-1 block" htmlFor="date-picker">{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date-picker"
            variant="outline"
            className={cn("w-full justify-start text-left font-normal focus:ring-4 focus:ring-emerald-300", !date && "text-muted-foreground")}
            aria-label={ariaLabel}
            aria-expanded={open}
            aria-haspopup="dialog"
          >
            <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            {display}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start" role="dialog" aria-label="Seletor de datas">
          <Calendar
            mode="range"
            selected={date}
            onSelect={(v) => setDate(v)}
            numberOfMonths={2}
            locale={ptBR}
            disabled={(d) => d < new Date(new Date().toDateString())}
            className="[&_.rdp-months]:grid [&_.rdp-months]:grid-cols-1 sm:[&_.rdp-months]:grid-cols-2"
            aria-label="Calendário para seleção de datas de hospedagem"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function FeatureCard({ icon, title, children, color }: { icon: React.ReactNode; title: string; children: React.ReactNode; color: "emerald" | "amber" | "sky" }) {
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-100",
    amber: "bg-amber-50 border-amber-100",
    sky: "bg-sky-50 border-sky-100",
  }[color];
  return (
    <Card className={cn("rounded-2xl border focus-within:ring-4 focus-within:ring-emerald-300", colorClasses)} role="article">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-white shadow-sm border" aria-hidden="true">{icon}</div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-slate-700 mt-1">{children}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AccommodationCard({ name, summary, url, highlight = false }: { 
  name: string; 
  summary: string; 
  url: string; 
  highlight?: boolean;
}) {
  return (
    <Card className={cn("rounded-2xl border-emerald-100 focus-within:ring-4 focus-within:ring-emerald-300", highlight && "ring-2 ring-emerald-200")} role="article">
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-emerald-800">{name}</h3>
        <p className="text-sm text-slate-600">{summary}</p>
        {highlight && <span className="sr-only">Acomodação em destaque</span>}
      </CardHeader>
      <CardFooter className="pt-2">
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300" size="sm">
          <a 
            href={url} 
            target="_blank" 
            rel="noreferrer noopener"
            aria-label={`Reservar ${name} no Airbnb - abre em nova aba`}
          >
            Reservar no Airbnb <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function AttractionCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <Card className="rounded-2xl border-emerald-100 bg-white focus-within:ring-4 focus-within:ring-emerald-300" role="article">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100" aria-hidden="true">{icon}</div>
          <div>
            <h3 className="font-semibold text-emerald-800">{title}</h3>
            <p className="text-sm text-slate-700 mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
     register,
     handleSubmit,
     control,
     formState: { errors },
     reset,
   } = useForm<ContactFormData>({
     resolver: zodResolver(contactFormSchema),
     defaultValues: {
       guests: 2,
     },
   });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open WhatsApp with the form data
      const whatsappUrl = contactFormToWhatsApp(data);
      window.open(whatsappUrl, '_blank');
      
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="rounded-2xl border-emerald-100 bg-white">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                {...register("name")}
                className="mt-1"
                placeholder="Seu nome"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="mt-1"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                {...register("phone")}
                className="mt-1"
                placeholder="(47) 99999-9999"
              />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="checkIn">Check-in</Label>
              <Input
                id="checkIn"
                type="date"
                {...register("checkIn")}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="checkOut">Check-out</Label>
              <Input
                id="checkOut"
                type="date"
                {...register("checkOut")}
                className="mt-1"
              />
            </div>
          </div>

          <div>
             <Label htmlFor="guests">Número de hóspedes *</Label>
             <Controller
               name="guests"
               control={control}
               render={({ field }) => (
                 <Select
                   value={field.value?.toString()}
                   onValueChange={(value) => field.onChange(parseInt(value))}
                 >
                   <SelectTrigger className="mt-1">
                     <SelectValue placeholder="Selecione" />
                   </SelectTrigger>
                   <SelectContent>
                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                       <SelectItem key={n} value={n.toString()}>
                         {n} {n === 1 ? "hóspede" : "hóspedes"}
                       </SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
               )}
             />
             {errors.guests && (
               <p className="text-sm text-red-600 mt-1">{errors.guests.message}</p>
             )}
           </div>

          <div>
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              {...register("message")}
              className="mt-1"
              rows={4}
              placeholder="Conte-nos sobre sua viagem, preferências de acomodação, ou qualquer pergunta que tenha..."
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Enviar via WhatsApp
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
