"use client";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Send,
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
} from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Modal } from "@/app/components/ui/Modal";
import { isBusinessOpen } from "@/app/utils/formatters";
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0981-982-9768",
    href: "tel:09819829768",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Innovatechsolution.com",
    href: "mailto:contact@Innovatechsolution.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Puerto Princesa City, Palawan",
    href: "https://maps.google.com/?q=San+Jose+City+Palawan",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Innovatech",
    href: "https://facebook.com/Innovatech",
  },
];
const subjectOptions = [
  "General Inquiry",
  "Technical Support",
  "Sales",
  "Partnership",
  "Feedback",
  "Other",
];
export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    customSubject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const updateStatus = () => {
      setIsOpen(isBusinessOpen());
    };
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);
  const steps = [
    {
      field: "name",
      label: "Your Name",
      type: "text",
      placeholder: "John Doe",
    },
    {
      field: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
    },
    {
      field: "subject",
      label: "Subject",
      type: "select",
      placeholder: "Select a subject",
    },
    {
      field: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us more about your needs...",
    },
  ];
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setCurrentStep(0);
    setFormData({
      name: "",
      email: "",
      subject: "",
      customSubject: "",
      message: "",
    });
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(0);
  };
  const handleNext = () => {
    const currentField = steps[currentStep].field;
    const value = formData[currentField as keyof typeof formData];
    if (
      !value ||
      (currentField === "subject" &&
        value === "Other" &&
        !formData.customSubject)
    ) {
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentStep < steps.length - 1) {
      e.preventDefault();
      handleNext();
    }
  };
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const finalSubject =
        formData.subject === "Other"
          ? formData.customSubject
          : formData.subject;
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: finalSubject,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert(
          "Thank you for your message! We've sent you a confirmation email and will get back to you soon."
        );
        handleCloseModal();
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const isCurrentStepValid = () => {
    const currentField = steps[currentStep].field;
    const value = formData[currentField as keyof typeof formData];
    if (!value) return false;
    if (
      currentField === "subject" &&
      value === "Other" &&
      !formData.customSubject
    )
      return false;
    if (currentField === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return false;
    return true;
  };
  const renderStepContent = () => {
    const step = steps[currentStep];
    if (step.field === "subject") {
      return (
        <div className="space-y-4">
          <label className="label-text block text-text-light">
            {step.label}
          </label>
          <select
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors text-text-light"
            autoFocus
          >
            <option value="" className="bg-dark-secondary">
              Select a subject
            </option>
            {subjectOptions.map((option) => (
              <option key={option} value={option} className="bg-dark-secondary">
                {option}
              </option>
            ))}
          </select>
          {formData.subject === "Other" && (
            <div className="animate-fade-in-up">
              <Input
                label="Please specify"
                name="customSubject"
                value={formData.customSubject}
                onChange={(e) => handleChange("customSubject", e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter your custom subject"
                className="bg-white/5 border-white/10 text-text-light placeholder:text-text-light/40"
                autoFocus
              />
            </div>
          )}
        </div>
      );
    }
    if (step.field === "message") {
      return (
        <div>
          <label
            htmlFor="message"
            className="label-text block mb-2 text-text-light"
          >
            {step.label}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={6}
            placeholder={step.placeholder}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors text-text-light placeholder:text-text-light/40 resize-none"
            autoFocus
          />
        </div>
      );
    }
    return (
      <Input
        label={step.label}
        name={step.field}
        type={step.type}
        value={formData[step.field as keyof typeof formData]}
        onChange={(e) => handleChange(step.field, e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={step.placeholder}
        className="bg-white/5 border-white/10 text-text-light placeholder:text-text-light/40"
        autoFocus
      />
    );
  };
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-dark-bg to-dark-secondary text-text-light relative overflow-hidden"
    >
      {}
      <div className="absolute inset-0 grid-pattern-large opacity-10 pointer-events-none"></div>
      {}
      <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-primary-blue/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary-purple/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      {}
      <div className="absolute top-0 left-1/3 w-0.5 h-full grid-line-vertical"></div>
      <div className="absolute top-0 right-1/3 w-0.5 h-full grid-line-vertical-purple"></div>
      <div className="absolute top-1/2 left-0 w-full h-0.5 grid-line-horizontal-sky"></div>
      {}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-primary-blue/20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-primary-purple/20"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-1-mobile md:heading-1 mb-4 text-text-light">
            Get in Touch
          </h2>
          <p className="body-large text-text-light/80 max-w-2xl mx-auto px-4">
            Have questions or need assistance? We're here to help! Reach out to
            us anytime.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {}
          <div className="space-y-5">
            {}
            <div className="animate-fade-in-left p-5 rounded-xl bg-dark-card/50 border border-white/10">
              <h3 className="heading-4-mobile md:heading-4 text-text-light mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "Facebook" || item.label === "Location"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label === "Facebook" || item.label === "Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-blue/50 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue to-primary-purple p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-text-light/50 mb-0.5 uppercase tracking-wider font-medium">
                        {item.label}
                      </p>
                      <p className="text-text-light font-semibold truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {}
            <div
              className="animate-fade-in-left p-5 rounded-xl bg-dark-card/50 border border-white/10"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="heading-4-mobile md:heading-4 text-text-light">
                  Business Hours
                </h4>
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                    isOpen
                      ? "bg-green-500/20 border border-green-500/30"
                      : "bg-red-500/20 border border-red-500/30"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isOpen ? "bg-green-500" : "bg-red-500"
                    } animate-pulse`}
                  ></div>
                  <span
                    className={`text-xs font-semibold ${
                      isOpen ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isOpen ? "OPEN" : "CLOSED"}
                  </span>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-light/60">Monday - Friday</span>
                  <span className="text-text-light font-semibold">
                    8:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-light/60">Saturday</span>
                  <span className="text-text-light font-semibold">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-light/60">Sunday</span>
                  <span className="text-text-light font-semibold">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="pt-2 mt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-text-light/50 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Philippine Time (GMT+8)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="space-y-5">
            {}
            <div className="animate-fade-in-right p-5 rounded-xl bg-dark-card/50 border border-white/10">
              <h4 className="heading-4-mobile md:heading-4 text-text-light mb-3">
                Quick Contact
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:09819829768"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-blue/50 transition-all text-text-light hover:scale-[1.02] duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-blue to-primary-purple p-1.5 flex items-center justify-center">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <span className="text-sm font-medium">Call Us</span>
                </a>
                <a
                  href="mailto:contact@Innovatechsolution.com"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-blue/50 transition-all text-text-light hover:scale-[1.02] duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-blue to-primary-purple p-1.5 flex items-center justify-center">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <span className="text-sm font-medium">Email Us</span>
                </a>
              </div>
            </div>
            {}
            <div
              className="animate-fade-in-right p-5 rounded-xl bg-dark-card/50 border border-white/10 hover:border-primary-blue/30 transition-all duration-300"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-purple rounded-xl blur-xl opacity-40"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-purple p-3.5 flex items-center justify-center">
                    <Send className="w-full h-full text-white" />
                  </div>
                </div>
                <h4 className="heading-4-mobile md:heading-4 text-text-light mb-1.5">
                  Send us a Message
                </h4>
                <p className="body-text text-text-light/60 text-sm mb-3">
                  Fill out our contact form and we'll get back to you shortly
                </p>
                <Button
                  onClick={handleOpenModal}
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-sky-blue hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-blue/50 text-white font-bold rounded-xl py-3 transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    <Send className="w-4 h-4" />
                    <span>Open Contact Form</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Contact Us">
        <div className="space-y-6">
          {}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            {steps.map((step, index) => (
              <div key={step.field} className="flex items-center flex-1">
                <div
                  className={`flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 transition-all duration-300 ${
                    index < currentStep
                      ? "bg-gradient-to-br from-primary-blue to-primary-purple border-primary-blue scale-110"
                      : index === currentStep
                        ? "border-primary-blue text-primary-blue bg-primary-blue/10 scale-110 shadow-lg shadow-primary-blue/30"
                        : "border-white/20 text-white/40 scale-90"
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  ) : (
                    <span className="text-xs sm:text-sm font-semibold">
                      {index + 1}
                    </span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-1 sm:mx-2 transition-all duration-300 rounded-full ${
                      index < currentStep
                        ? "bg-gradient-to-r from-primary-blue to-primary-purple"
                        : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          {}
          <div className="text-center mb-4">
            <p className="text-xs sm:text-sm text-text-light/60 mb-1">
              Step {currentStep + 1} of {steps.length}
            </p>
            <h3 className="text-base sm:text-lg font-semibold text-text-light">
              {steps[currentStep].label}
            </h3>
          </div>
          {}
          <div className="min-h-[140px] sm:min-h-[180px] mb-4">
            <div className="animate-fade-in">{renderStepContent()}</div>
          </div>
          {}
          <div className="flex gap-2 sm:gap-3 pt-2">
            {currentStep > 0 && (
              <Button
                onClick={handleBack}
                variant="outline"
                size="md"
                className="flex-1 border-white/20 text-text-light hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
            )}
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
                variant="primary"
                size="md"
                className="flex-1 bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-sky-blue disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-blue/30 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isCurrentStepValid() || isSubmitting}
                isLoading={isSubmitting}
                variant="primary"
                size="md"
                className="flex-1 bg-gradient-to-r from-primary-blue to-primary-purple hover:from-primary-purple hover:to-sky-blue hover:shadow-lg hover:shadow-primary-blue/30 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
              >
                {!isSubmitting && <Send className="w-4 h-4" />}
                <span>{isSubmitting ? "Sending..." : "Send"}</span>
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </section>
  );
}
