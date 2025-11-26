import { ReactNode } from "react";
// ...existing code...
import "./globals.css";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import ToasterProvider from "@/components/ToasterProvider";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Wise - AI Study Planner",
  description: "AI-powered study timetable for students",
};

export default function RootLayout({ children }: RootLayoutProps) {
  // Navbar visibility logic must move to a client component if dynamic
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative overflow-x-hidden bg-black text-white">
        <NavbarWrapper />
        <main className="relative z-10 flex-1">{children}</main>
        <ToasterProvider />
      </body>
    </html>
  );
}
