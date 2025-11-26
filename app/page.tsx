"use client";

import TiltedDashboard from "@/components/landingpage/TiltedDashboard";
import UniLogos from "@/components/landingpage/UniLogos";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-zinc-950 pt-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20 mask-radial"></div>
        {/* Dynamic Geometric Background */}
        <div className="geo-shape scroll-rotate opacity-20 border border-zinc-800 rounded-full w-[800px] h-[800px] top-0 right-10 " data-speed="0.02"></div>
        <div className="geo-shape scroll-rotate opacity-20 border border-zinc-800 rounded-full w-[800px] h-[800px] -bottom-72 -left-32 " data-speed="0.02"></div>
        <div className="geo-shape scroll-rotate opacity-10 border border-yellow-500/20 rounded-full w-[600px] h-[600px] top-0 right-22" data-speed="-0.03"></div>
        <div className="geo-shape absolute top-1/3 left-10 w-24 h-24 bg-yellow-400/5 blur-3xl rounded-full"></div>
      </div>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start text-center px-4 pt-10 pb-20">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[10px] font-medium text-zinc-300 mb-8 animate-enter delay-100 shadow-xl backdrop-blur-sm cursor-default hover:border-yellow-500/50 transition-colors">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-500"></span>
          </span>
          <span className="text-zinc-500">v2.0:</span> Now with Neural Reranking
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-8 max-w-4xl leading-[0.95] animate-enter delay-200">
          Your brain,<br />
          <span className="text-zinc-500">supercharged.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-zinc-400 max-w-xl mb-10 font-light leading-relaxed animate-enter delay-300">
          The only intelligent scheduler that adapts to your circadian rhythm.{" "}
          <span className="text-yellow-400/80">bud-e</span> dynamically remaps
          your study blocks when life gets in the way.
        </p>

        {/* CTA Buttons */}
        <div className="flex cursor-pointer flex-col sm:flex-row gap-4 w-full sm:w-auto animate-enter delay-400 mb-20">
          <Link
            href="/auth/signup"
            className="group px-8 py-3 shadow-[0_0_50px_-5px_rgba(255,255,255,0.6)] bg-white text-zinc-950 font-bold rounded-full transition-all hover:bg-yellow-400 flex items-center justify-center gap-2 text-xs"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 stroke-2" />
          </Link>

          <Link
            href="/methodology"
            className="px-8 py-3 cursor-pointer  bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 font-medium rounded-full transition-all flex items-center justify-center text-xs"
          >
            See the Logic
          </Link>
        </div>

        {/* Titled Dashboard */}
        <TiltedDashboard />
      
        {/* University Logos */}
        <UniLogos />
      </main>

    </div>
  );
}
