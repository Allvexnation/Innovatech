import type { Metadata } from "next";
import { Navbar } from "@/app/components/landing/Navbar";
import { Clients } from "@/app/components/landing/Clients";
import { Footer } from "@/app/components/landing/Footer";
import { Breadcrumb } from "@/app/components/ui/Breadcrumb";
export const metadata: Metadata = {
  title: "Our Partners - Innovatech IT Solution",
  description:
    "Innovatech IT Solution proudly serves students at STI Palawan, , and  in Palawan. Trusted IT partner for educational institutions.",
  openGraph: {
    title: "Our Partners - Innovatech IT Solution Palawan",
    description:
      "Innovatech IT Solution serves STI Palawan, , and  students.",
    url: "/clients",
  },
  alternates: {
    canonical: "/clients",
  },
};
export default function ClientsPage() {
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
        name: "Our Partners",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app"}/clients`,
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Partners", href: "/clients" }]} />
          </div>
          <Clients />
        </div>
        <Footer />
      </main>
    </>
  );
}
