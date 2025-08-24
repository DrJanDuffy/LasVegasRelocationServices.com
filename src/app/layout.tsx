import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navigation from "@/components/Navigation";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Las Vegas Relocation Services | Dr. Jan Duffy | Berkshire Hathaway",
    template: "%s | Las Vegas Relocation Services",
  },
  description:
    "Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team. Expert assistance for your move to Las Vegas.",
  keywords: [
    "Las Vegas relocation",
    "Dr. Jan Duffy",
    "Berkshire Hathaway",
    "relocation services",
    "Las Vegas moving",
    "corporate relocation",
    "residential relocation",
    "international relocation",
    "military relocation",
    "Las Vegas real estate",
    "moving to Las Vegas",
    "relocation consultant",
    "Las Vegas moving company",
    "corporate moving services",
    "family relocation Las Vegas",
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Berkshire Hathaway Services Relocation Services Team",
  publisher: "Las Vegas Relocation Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lasvegasrelocationservices.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lasvegasrelocationservices.com",
    siteName: "Las Vegas Relocation Services",
    title: "Las Vegas Relocation Services | Dr. Jan Duffy | Berkshire Hathaway",
    description:
      "Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team.",
    images: [
      {
        url: "https://lasvegasrelocationservices.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Las Vegas Relocation Services - Professional relocation experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Relocation Services | Dr. Jan Duffy",
    description:
      "Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team.",
    images: ["https://lasvegasrelocationservices.com/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business Services",
  classification: "Relocation Services",
  other: {
    "format-detection": "telephone=no, address=no, email=no",
    "theme-color": "#2563eb",
    "msapplication-TileColor": "#2563eb",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Las Vegas Relocation Services",
              description:
                "Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team.",
              url: "https://lasvegasrelocationservices.com",
              logo: "https://lasvegasrelocationservices.com/logo.png",
              image: "https://lasvegasrelocationservices.com/og-image.jpg",
              telephone: "(702) 707-7273",
              email: "DrJan@LasVegasRelocationServices.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 Las Vegas Blvd",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89101",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1699,
                longitude: -115.1398,
              },
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-15:00",
              priceRange: "$$",
              currenciesAccepted: "USD",
              paymentAccepted: "Cash, Credit Card, Check",
              areaServed: {
                "@type": "City",
                name: "Las Vegas",
                sameAs: "https://en.wikipedia.org/wiki/Las_Vegas",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 36.1699,
                  longitude: -115.1398,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Relocation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Relocation",
                      description:
                        "Complete home relocation services including packing, moving, and settling into your new Las Vegas home.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Corporate Relocation",
                      description:
                        "Comprehensive corporate relocation solutions for businesses and their employees moving to Las Vegas.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "International Relocation",
                      description:
                        "Expert international relocation services for clients moving to Las Vegas from abroad.",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Jennifer Martinez",
                  },
                  reviewBody:
                    "Dr. Duffy and her team made our corporate relocation to Las Vegas incredibly smooth. Their attention to detail and local market knowledge exceeded our expectations.",
                },
              ],
              employee: [
                {
                  "@type": "Person",
                  name: "Dr. Jan Duffy",
                  jobTitle: "Lead Relocation Specialist",
                  description:
                    "Dr. Duffy brings over 15 years of relocation expertise and deep knowledge of the Las Vegas market.",
                },
              ],
              foundingDate: "2009",
              numberOfEmployees: "15",
              award: [
                "Berkshire Hathaway Quality Standards",
                "BBB Accredited Business",
                "15+ Years of Excellence",
              ],
            }),
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Las Vegas Relocation Services",
              description: "Professional relocation services in Las Vegas",
              url: "https://lasvegasrelocationservices.com",
              telephone: "(702) 707-7273",
              email: "DrJan@LasVegasRelocationServices.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 Las Vegas Blvd",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89101",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1699,
                longitude: -115.1398,
              },
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-15:00",
              priceRange: "$$",
              currenciesAccepted: "USD",
              paymentAccepted: "Cash, Credit Card, Check",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <PerformanceMonitor />
        <Navigation />
        {children}
        <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX"}
        />
        <MicrosoftClarity
          projectId={process.env.NEXT_PUBLIC_CLARITY_ID || ""}
          enabled={!!process.env.NEXT_PUBLIC_CLARITY_ID}
        />
      </body>
    </html>
  );
}
