"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideZap } from "lucide-react";

interface NavbarProps {
  hide?: boolean; // hide on dashboard
}

export const Navbar = ({ hide }: NavbarProps) => {
  if (hide) return null;

  const showDashboard = () => {
    console.log("Navigate to dashboard");
  };

  return (
    <nav className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-yellow-300 rounded-lg flex items-center justify-center text-zinc-900">
          <LucideZap className="w-5 h-5 fill-zinc-900" />
        </div>
        <span className="text-lg font-medium text-white tracking-tight">Wise</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/features" className="hover:text-white transition-colors">Features</Link>
        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
      </div>
      <Button
        variant="outline"
        className="text-sm font-medium bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-full border border-zinc-700 transition-all"
        onClick={showDashboard}
      >
        Log in
      </Button>
    </nav>
  );
};
