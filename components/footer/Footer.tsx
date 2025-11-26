"use client";

import Link from "next/link";
import { Aperture } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 mt-auto bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Aperture className="w-3 h-3 text-yellow-400 spin-slow" />
          <p className="text-[10px] text-zinc-600">© 2025 bud-e AI. All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-[10px] text-zinc-500">
          <Link href="/legal" className="hover:text-yellow-400 transition-colors">
            Terms
          </Link>
          <Link href="/legal" className="hover:text-yellow-400 transition-colors">
            Privacy
          </Link>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-yellow-400 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
