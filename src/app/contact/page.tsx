import type { Metadata } from "next";
import { Navbar } from "@/app/components/landing/Navbar";
import { Contact } from "@/app/components/landing/Contact";
import { Footer } from "@/app/components/landing/Footer";
import { Breadcrumb } from "@/app/components/ui/Breadcrumb";
export const metadata: Metadata = {
  title: "Contact Us - Innovatech IT Solution",
  description:
    "Contact Innovatech IT Solution in Puerto Princesa City, Palawan. Call +63-981-982-9768 or email us for printing, troubleshooting, and programming services. We're here to help students!",
  openGraph: {
    title: "Contact Innovatech IT Solution - Palawan IT Services",
    description:
      "Get in touch with Innovatech IT Solution. Located in Puerto Princesa City, Palawan. Phone: +63-981-982-9768",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};
export default function ContactPage() {
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
        name: "Contact Us",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app"}/contact`,
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }]} />
          </div>
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
