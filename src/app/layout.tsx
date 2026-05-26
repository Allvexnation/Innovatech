import type { Metadata } from "next";
import "@/app/globals.css";
export const metadata: Metadata = {
  title: {
    default: "Innovatech - Student Friendly IT Services",
    template: "%s | Innovatech",
  },
  description:
    "Student-friendly IT services in Palawan. Affordable printing, troubleshooting, and IT consultation for students.",
  keywords: [
    "IT services Palawan",
    "student IT support",
    "printing services",
    "computer troubleshooting",
    "IT consultation",
    "Innovatech",
    "STI Palawan",
    "",
    "",
  ],
  authors: [{ name: "Innovatech IT Solution" }],
  creator: "Innovatech IT Solution",
  publisher: "Innovatech IT Solution",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Innovatech",
    title: "Innovatech - Student Friendly IT Services",
    description:
      "Student-friendly IT services in Palawan. Affordable printing, troubleshooting, and IT consultation.",
    images: [
      {
        url: "https://res.cloudinary.com/dbob1wota/image/upload/innovatech-slotuions-banner_m5lz5b.jpg",
        width: 1200,
        height: 630,
        alt: "Innovatech IT Solution - Student Friendly IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovatech - Student Friendly IT Services",
    description:
      "Student-friendly IT services in Palawan. Affordable printing, troubleshooting, and IT consultation.",
    images: ["https://res.cloudinary.com/dbob1wota/image/upload/innovatech-slotuions-banner_m5lz5b.jpg"],
  },
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
  verification: {
    google: "n4IbAxGUI2dQJHsZ3ov6QvBI4ChZQ__1xzUOYbMtGuk",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app";
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Innovatech IT Solution",
    description:
      "Student-friendly IT services including printing, troubleshooting, and IT consultation in Palawan",
    url: baseUrl,
    telephone: "+63-981-982-9768",
    email: "contact@Innovatechsolution.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Puerto Princesa City",
      addressLocality: "Puerto Princesa City",
      addressRegion: "Palawan",
      postalCode: "3121",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.4897,
      longitude: 120.9726,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "₱₱",
    areaServed: [
      {
        "@type": "City",
        name: "Palawan",
      },
      {
        "@type": "City",
        name: "Puerto Princesa City",
      },
    ],
    sameAs: ["https://facebook.com/Innovatech"],
    image: "https://res.cloudinary.com/dbob1wota/image/upload/innovatech-slotuions-banner_m5lz5b.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="geo.region" content="PH-NUE" />
        <meta name="geo.placename" content="Puerto Princesa City, Palawan" />
        <meta name="geo.position" content="15.4897;120.9726" />
        <meta name="ICBM" content="15.4897, 120.9726" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
