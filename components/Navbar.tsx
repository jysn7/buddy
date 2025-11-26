"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, X } from "lucide-react";

interface NavbarProps {
  hide?: boolean;
}

export default function Navbar({ hide }: NavbarProps) {
  const [open, setOpen] = useState(false);

  if (hide) return null;

  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-zinc-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/#landing-page" className="flex items-center gap-2 cursor-pointer group select-none">
            <div className="w-8 h-8 bg-linear-to-br from-yellow-200 to-yellow-400 rounded-lg flex items-center justify-center text-zinc-900 shadow-lg shadow-yellow-300/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-zinc-900 stroke-[1.5]" />
            </div>
            <span className="text-base font-medium text-white tracking-tight">Wise</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-3">
            <Link
              href="/auth/signin"
              className="text-sm cursor-pointer font-medium text-zinc-300 hover:text-white px-3 py-2 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm cursor-pointer font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggle} className="md:hidden text-zinc-300 hover:text-white transition">
            <Zap className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* ----------------------------------------------------------- */}
      {/* MOBILE SIDEBAR MENU (unchanged layout - fully preserved) */}
      {/* ----------------------------------------------------------- */}
      <div
        id="public-mobile-menu"
        className={`fixed inset-0 z-[60] transform transition-transform duration-300 md:hidden bg-zinc-950 border-r border-zinc-800 w-64 
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center">
                <Zap className="w-3 h-3 fill-zinc-900 stroke-[1.5]" />
              </div>
              <span className="font-medium text-white">Wise</span>
            </div>
            <button onClick={toggle} className="text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 text-sm font-medium text-zinc-400">
            <Link href="/methodology" onClick={toggle} className="text-left hover:text-white">Methodology</Link>
            <Link href="/pricing" onClick={toggle} className="text-left hover:text-white">Pricing</Link>
            <Link href="/about" onClick={toggle} className="text-left hover:text-white">About</Link>
            <Link href="/contact" onClick={toggle} className="text-left hover:text-white">Contact</Link>
          </div>

          {/* Bottom Auth */}
          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-zinc-800">
            <Link href="/auth/signin" onClick={toggle} className="w-full py-2.5 text-center text-sm font-medium text-white bg-zinc-900 rounded-lg">
              Log in
            </Link>
            <Link href="/auth/signup" onClick={toggle} className="w-full py-2.5 text-center text-sm font-medium text-zinc-950 bg-white rounded-lg">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          id="public-menu-backdrop"
          onClick={toggle}
          className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm md:hidden fade-in"
        />
      )}
    </>
  );
}
