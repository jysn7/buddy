import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

interface RootLayoutProps {
  children: ReactNode;
  hideNavbar?: boolean;
}

export const metadata = {
  title: "Wise - AI Study Planner",
  description: "AI-powered study timetable for students",
};

export default function RootLayout({ children, hideNavbar }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative overflow-hidden bg-black text-white">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-300/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[120px]" />
        </div>

        {/* Navbar */}
        <Navbar hide={hideNavbar} />

        {/* Main Content */}
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}
