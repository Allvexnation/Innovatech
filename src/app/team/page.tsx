import type { Metadata } from "next";
import { Navbar } from "@/app/components/landing/Navbar";

import { Footer } from "@/app/components/landing/Footer";
import { Breadcrumb } from "@/app/components/ui/Breadcrumb";
export const metadata: Metadata = {
  title: "Our Team - Innovatech IT Solution",
  description:
    "Meet the expert team at Innovatech IT Solution in Palawan. Dedicated IT professionals providing printing, troubleshooting, and programming services to students across Puerto Princesa City.",
  openGraph: {
    title: "Our Team - Innovatech IT Solution Palawan",
    description:
      "Meet the dedicated team behind Innovatech IT Solution. Expert IT professionals serving students in Palawan.",
    url: "/team",
  },
  alternates: {
    canonical: "/team",
  },
};
export default function TeamPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Team",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app"}/team`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <div className="container mx-auto px-4 sm:px-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Team", href: "/team" }]} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
