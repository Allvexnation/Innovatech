"use client";
import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}
export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />
      {}
      <div className="relative w-full max-w-md sm:max-w-lg glass-card-dark border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl animate-fade-in-up z-10 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto scrollbar-hide">
        {}
        {title && (
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 sticky top-0 bg-dark-secondary/95 backdrop-blur-sm z-10 rounded-t-xl sm:rounded-t-2xl">
            <h2 className="heading-3-mobile sm:heading-3 text-text-light">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-text-light" />
            </button>
          </div>
        )}
        {}
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
