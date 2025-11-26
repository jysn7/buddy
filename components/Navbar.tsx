"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, GripVertical, AudioWaveform, Aperture } from "lucide-react";

interface NavbarProps {
  hide?: boolean;
}

export default function Navbar({ hide }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (hide) return null;

  const toggle = () => setOpen((prev) => !prev);

  const links = [
    { label: "Methodology", href: "/methodology" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-zinc-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group select-none">
            <div className="w-8 h-8 bg-zinc-950/5 flex items-center justify-center  group-hover:scale-105 transition-transform">
              <Aperture className="w-6 h-6 spin-slow text-yellow-400 stroke-[1.5]" />
            </div>
            <span className="text-base font-medium text-white tracking-tight group-hover:text-yellow-400 transition-colors">bud-e</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative hover:text-white transition-colors ${
                  pathname === link.href ? "text-white" : ""
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
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
            <GripVertical className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR MENU */}
      <div
        id="public-mobile-menu"
        className={`fixed inset-0 z-60 transform transition-transform duration-300 md:hidden bg-zinc-950 border-r border-zinc-800 w-72 
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 cursor-pointer group select-none">
            <div className="w-8 h-8 bg-zinc-950/5 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Aperture className="w-6 h-6 spin-slow text-yellow-400 stroke-[1.5]" />
            </div>
            <span className="text-base font-medium text-white tracking-tight group-hover:text-yellow-400 transition-colors">bud-e</span>
          </Link>
            <button onClick={toggle} className="text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 text-sm font-medium text-zinc-400">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggle}
                className={`text-left hover:text-white transition-colors ${
                  pathname === link.href ? "text-white font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
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
          className="fixed inset-0 z-55 bg-black/50 backdrop-blur-sm md:hidden fade-in"
        />
      )}
    </>
  );
}
