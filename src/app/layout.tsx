import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const siteUrl = "https://eva-studio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | EVA Studio",
    default: "EVA | Studio Créatif Vidéo IA à Reims",
  },
  description:
    "EVA Studio — Vidéos IA, storytelling visuel, concepts créatifs et visuels produit haut de gamme. Découvrez une nouvelle ère de production visuelle à Reims.",
  keywords: ["vidéo IA", "studio créatif", "production vidéo", "AI", "Reims", "EVA Studio", "visuels produit"],
  authors: [{ name: "EVA Studio", url: siteUrl }],
  creator: "EVA Studio",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "EVA Studio",
    title: "EVA — The Future of Visual Creation",
    description:
      "AI-powered cinematic studio. We transform your concepts into unforgettable visual experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EVA Studio — AI Visual Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVA — The Future of Visual Creation",
    description:
      "AI-powered cinematic studio. We transform your concepts into unforgettable visual experiences.",
    images: ["/og-image.jpg"],
    creator: "@eva_studio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EVA Studio",
  description:
    "Studio de création visuelle IA — vidéos cinématographiques, visuels produit et storytelling.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Reims",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-3-00-00-00-00",
    email: "hello@eva-studio.com",
    contactType: "customer service",
    availableLanguage: ["French", "English", "Arabic"],
  },
  sameAs: [
    "https://www.facebook.com/eva-studio",
    "https://www.instagram.com/eva_studio",
    "https://www.linkedin.com/company/eva-studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
