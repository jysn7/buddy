import { ReactNode } from "react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { Toaster } from "@/components/ui/sonner";
import { FooterWrapper } from "@/components/footer/FooterWrapper";

interface RootLayoutProps {
  children: ReactNode;
}

// Load Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bud-e - Your AI Study Planner",
  description: "AI-powered study timetable for students",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden bg-black text-white font-sans">
        <NavbarWrapper />
        <main className="relative z-10 flex-1">{children}</main>
        <FooterWrapper />
        <Toaster /> 
      </body>
    </html>
  );
}
