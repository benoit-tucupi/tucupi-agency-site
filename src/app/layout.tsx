import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tucupi Studio — Agence No-Code & AI",
  description:
    "Tucupi Studio conçoit vos MVPs No-Code, automatisations n8n et intégrations IA sur mesure. Basé à Issy-les-Moulineaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-forest text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
