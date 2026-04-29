import { Navbar } from "@/app/components/landing/Navbar";
import { Hero } from "@/app/components/landing/Hero";
import { MissionVision } from "@/app/components/landing/MissionVision";
import { Services } from "@/app/components/landing/Services";
import { About } from "@/app/components/landing/About";
import { Clients } from "@/app/components/landing/Clients";
import { FAQ } from "@/app/components/landing/FAQ";
import { Contact } from "@/app/components/landing/Contact";
import { Credits } from "@/app/components/landing/Credits";
import { Footer } from "@/app/components/landing/Footer";
export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Innovatech IT Solution",
    alternateName: "Innovatech",
    description:
      "Innovatech IT Solution - Your trusted partner for affordable printing, computer troubleshooting, and custom programming services in Palawan. Expert IT support for students.",
    url: baseUrl,
    image: "https://res.cloudinary.com/diddn2pzb/image/upload/Tech-Assist-Banner_zcyu0c.jpg",
    telephone: "+63-981-982-9768",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palawan",
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
        closes: "18:00",
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
    sameAs: [
      "https://facebook.com/Innovatech"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Printing Services",
            description: "Professional printing and photocopying services including passport photos, ID photos, and document printing"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Computer Troubleshooting",
            description: "Expert technical support for laptops, phones, tablets, software fixes, and hardware diagnostics"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Programming Services",
            description: "Custom software development including student management systems, inventory systems, and personal websites"
          }
        }
      ]
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <MissionVision />
        <div id="about">
          <About />
        </div>
        <div id="clients">
          <Clients />
        </div>
        <div id="services">
          <Services />
        </div>
        <FAQ />
        <div id="contact">
          <Contact />
        </div>
        <Credits />
        <Footer />
      </main>
    </>
  );
}
