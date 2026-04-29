import type { Metadata } from "next";
import { Navbar } from "@/app/components/landing/Navbar";
import { Services } from "@/app/components/landing/Services";
import { Footer } from "@/app/components/landing/Footer";
import { Breadcrumb } from "@/app/components/ui/Breadcrumb";
export const metadata: Metadata = {
  title: "Our Services - Innovatech IT Solution",
  description:
    "Innovatech IT Solution offers printing services, computer troubleshooting, and custom programming in Palawan. Affordable IT solutions for students including passport photos, laptop repairs, and software development.",
  openGraph: {
    title: "IT Services Palawan - Innovatech IT Solution",
    description:
      "Printing, troubleshooting, and programming services for students in Palawan. Affordable rates, expert support, fast service.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};
export default function ServicesPage() {
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
        name: "Our Services",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app"}/services`,
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Services", href: "/services" }]} />
          </div>
          <Services />
        </div>
        <Footer />
      </main>
    </>
  );
}
