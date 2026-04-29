import type { Metadata } from "next";
import { Navbar } from "@/app/components/landing/Navbar";
import { About } from "@/app/components/landing/About";
import { Footer } from "@/app/components/landing/Footer";
import { Breadcrumb } from "@/app/components/ui/Breadcrumb";
export const metadata: Metadata = {
  title: "About Us - Innovatech IT Solution",
  description:
    "Learn about Innovatech IT Solution - your trusted partner for student-friendly IT services in Palawan. Discover our mission, vision, and commitment to affordable technology solutions for students.",
  openGraph: {
    title: "About Innovatech IT Solution - Student IT Services Palawan",
    description:
      "Learn about Innovatech IT Solution and our commitment to providing affordable printing, troubleshooting, and programming services to students in Palawan.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};
export default function AboutPage() {
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
        name: "About Us",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://Innovatech-solution.vercel.app"}/about`,
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />
          </div>
          <About />
        </div>
        <Footer />
      </main>
    </>
  );
}
