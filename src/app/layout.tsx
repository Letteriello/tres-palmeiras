import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home das Três Palmeiras - Pousada em Balneário Piçarras | Perto do Beto Carrero",
  description: "Hospedagem familiar em Balneário Piçarras, a 5 min da praia e 15 min do Beto Carrero World. Casa completa e quartos individuais. Reserve já!",
  keywords: "pousada balneário piçarras, hospedagem beto carrero, casa temporada piçarras, airbnb piçarras, hotel piçarras, três palmeiras",
  authors: [{ name: "Home das Três Palmeiras" }],
  creator: "Home das Três Palmeiras",
  publisher: "Home das Três Palmeiras",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tres-palmeiras.com.br",
    siteName: "Home das Três Palmeiras",
    title: "Home das Três Palmeiras - Pousada em Balneário Piçarras",
    description: "Hospedagem familiar em Balneário Piçarras, a 5 min da praia e 15 min do Beto Carrero World. Casa completa e quartos individuais.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Home das Três Palmeiras - Pousada em Balneário Piçarras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home das Três Palmeiras - Pousada em Balneário Piçarras",
    description: "Hospedagem familiar a 5 min da praia e 15 min do Beto Carrero World",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://tres-palmeiras.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager - Comentado para desenvolvimento */}
        {/* 
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        */}
        
        {/* Google Analytics 4 - Comentado para desenvolvimento */}
        {/* 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                  'custom_parameter_1': 'whatsapp_click',
                  'custom_parameter_2': 'airbnb_click',
                  'custom_parameter_3': 'phone_click'
                }
              });
            `,
          }}
        />
        */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) - Comentado para desenvolvimento */}
        {/* 
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        */}
        
        {children}
        
        {/* Enhanced tracking scripts */}
        <Script
          id="enhanced-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // WhatsApp click tracking (mock para desenvolvimento)
              function trackWhatsAppClick(source) {
                console.log('WhatsApp click tracked:', source);
                // gtag('event', 'whatsapp_click', {
                //   event_category: 'engagement',
                //   event_label: source,
                //   value: 1
                // });
              }
              
              // Airbnb click tracking (mock para desenvolvimento)
              function trackAirbnbClick(property) {
                console.log('Airbnb click tracked:', property);
                // gtag('event', 'airbnb_click', {
                //   event_category: 'conversion',
                //   event_label: property,
                //   value: 1
                // });
              }
              
              // Phone click tracking (mock para desenvolvimento)
              function trackPhoneClick() {
                console.log('Phone click tracked');
                // gtag('event', 'phone_click', {
                //   event_category: 'engagement',
                //   event_label: 'phone_number',
                //   value: 1
                // });
              }
              
              // Form submission tracking (mock para desenvolvimento)
              function trackFormSubmission(formType) {
                console.log('Form submission tracked:', formType);
                // gtag('event', 'form_submit', {
                //   event_category: 'conversion',
                //   event_label: formType,
                //   value: 1
                // });
              }
              
              // Scroll depth tracking (mock para desenvolvimento)
              let scrollDepth = 0;
              window.addEventListener('scroll', function() {
                const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
                  scrollDepth = scrollPercent;
                  console.log('Scroll depth tracked:', scrollPercent + '%');
                  // gtag('event', 'scroll_depth', {
                  //   event_category: 'engagement',
                  //   event_label: scrollPercent + '%',
                  //   value: scrollPercent
                  // });
                }
              });
              
              // Make functions globally available
              window.trackWhatsAppClick = trackWhatsAppClick;
              window.trackAirbnbClick = trackAirbnbClick;
              window.trackPhoneClick = trackPhoneClick;
              window.trackFormSubmission = trackFormSubmission;
            `,
          }}
        />
      </body>
    </html>
  );
}
