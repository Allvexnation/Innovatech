"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Innovatech IT Solution offer?",
    answer:
      "Innovatech IT Solution offers three main services: Professional printing services (passport photos, ID photos, documents), computer troubleshooting (laptop repairs, phone issues, software fixes), and custom programming services (student management systems, websites, custom applications).",
  },
  {
    question: "Where is Innovatech IT Solution located?",
    answer:
      "We are located in Puerto Princesa City, Palawan, Philippines. We serve students from STI Palawan, , and .",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We offer student-friendly pricing designed to be affordable. Printing services start at budget-friendly rates, troubleshooting services vary by issue complexity, and programming services are quoted based on project requirements. Contact us for specific pricing.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We're open Monday to Friday from 8:00 AM to 8:00 PM, Saturday from 9:00 AM to 6:00 PM, and Sunday from 10:00 AM to 4:00 PM. We're here when students need us most!",
  },
  {
    question: "Do you offer programming services for student projects?",
    answer:
      "Yes! We specialize in helping students with programming projects including student management systems, inventory systems, calculators, shopping systems, personal websites, and custom applications using technologies like Next.js, React, TypeScript, PHP, Java, and more.",
  },
  {
    question: "Can you help with urgent printing needs?",
    answer:
      "Absolutely! We understand students often have urgent deadlines. We offer fast printing services for documents, passport photos, driver's license photos, national ID photos, and school documents with quick turnaround times.",
  },
  {
    question: "What types of computer problems can you fix?",
    answer:
      "We can troubleshoot and fix laptop repairs, phone issues, tablet problems, software fixes, hardware diagnostics, system optimization, virus removal, and general technical support for all your devices.",
  },
  {
    question: "How can I contact Innovatech IT Solution?",
    answer:
      "You can reach us by phone at +63-981-982-9768, email us at contact@Innovatechsolution.com, or visit our office in Puerto Princesa City, Palawan. You can also use the contact form on our website.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-1-mobile md:heading-1 text-text-light mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Got questions about Innovatech IT Solution? We've got answers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="heading-4-mobile md:heading-4 text-text-light pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="body-text text-text-muted">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
