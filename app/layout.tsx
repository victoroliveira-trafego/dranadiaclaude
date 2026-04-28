import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const BASE_URL = "https://dranadiaodontopediatra.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Dra. Nadia Salem — Odontopediatra na Mooca, São Paulo",
  description:
    "Odontopediatra especialista em saúde bucal infantil na Mooca, SP. Atendimento humanizado para bebês, crianças e adolescentes. Agende pelo WhatsApp.",
  keywords: [
    "odontopediatra mooca",
    "dentista infantil mooca",
    "dentista para crianças são paulo",
    "odontopediatria são paulo",
    "Dra Nadia Salem",
  ],
  openGraph: {
    title: "Dra. Nadia Salem — Odontopediatra na Mooca, São Paulo",
    description:
      "Clínica especializada em atendimentos de bebês, crianças e adolescentes. Ambiente lúdico e acolhedor para uma experiência positiva.",
    locale: "pt_BR",
    type: "website",
    url: BASE_URL,
    siteName: "Dra. Nadia Salem — Odontopediatria",
    images: [
      {
        url: "/images/nadia-e-criancas.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Nadia Salem com crianças no consultório",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Nadia Salem — Odontopediatra na Mooca, São Paulo",
    description:
      "Clínica especializada em atendimentos de bebês, crianças e adolescentes. Ambiente lúdico e acolhedor.",
    images: ["/images/nadia-e-criancas.jpg"],
  },
  icons: {
    icon: "/images/logo-nadia.png",
    apple: "/images/logo-nadia.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Nadia Salem — Odontopediatria",
  description:
    "Odontopediatra especialista em saúde bucal infantil. Atendimento humanizado para bebês, crianças e adolescentes na Mooca, São Paulo.",
  url: BASE_URL,
  telephone: "+55-11-91314-1625",
  image: `${BASE_URL}/images/nadia-e-criancas.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Fernando Falcão, 1111 — Edifício Bernini, Sala 810",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "03162-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5545,
    longitude: -46.5974,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/dra_nadia_odontopediatra"],
  medicalSpecialty: "Pediatric Dentistry",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        {/* Google Tag Manager — substituir GTM-KMCCDBVZ pelo ID real */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMCCDBVZ');`,
          }}
        />
        {/* Schema.org — LocalBusiness / Dentist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-poppins bg-white text-brand-text antialiased">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMCCDBVZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
