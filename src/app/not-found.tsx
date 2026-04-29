import type { Metadata } from "next";
import { NotFoundPage } from "@/app/components/landing/404";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <NotFoundPage />
    </main>
  );
}
