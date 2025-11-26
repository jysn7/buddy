"use client";

import { Zap, Shield, Smile } from "lucide-react";

export default function AboutView() {
  return (
    <div
      id="about-view"
      className="hidden-section min-h-screen pt-32 pb-20 relative bg-zinc-950 overflow-hidden"
    >
      {/* Geo shapes */}
      <div
        className="geo-shape scroll-zoom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-zinc-900 rounded-full"
        data-speed="0.01"
      ></div>
      <div
        className="geo-shape scroll-zoom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-zinc-800 rounded-full"
        data-speed="0.02"
      ></div>
      <div
        className="geo-shape scroll-zoom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-zinc-800/50 rounded-full"
        data-speed="0.03"
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950 via-zinc-950/50"></div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 relative z-10 animate-enter">
        <h2 className="text-4xl font-semibold text-white tracking-tight mb-8">
          Built for the obsessive.
        </h2>
        <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
          <p>
            <span className="text-yellow-400 font-normal">bud-e</span> started in a university library at 3 AM. We
            realized that students weren&#39;t struggling with the content, they were
            struggling with the <span className="text-white font-medium">strategy</span>.
          </p>
          <p>
            Most timetables are static. They don&#39;t account for burnout, sudden deadlines, or the fact that you might learn Physics faster than History. We needed a system that breathed.
          </p>
          <p>
            We built bud-e to be the brain behind the books. An adaptive system that treats your time as a finite resource, optimizing every hour for maximum retention using proven cognitive science.
          </p>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-16">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8 text-center">
            Trusted by students at
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">MIT</div>
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">STANFORD</div>
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">CAMBRIDGE</div>
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">ETH ZÜRICH</div>
          </div>
        </div>
        {/* Our DNA */}
        <div className="mt-20">
          <h3 className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest mb-8">Our DNA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-400 mb-4" />
              <h4 className="text-white text-sm font-medium mb-2">Speed First</h4>
              <p className="text-zinc-500 text-xs">
                Scheduling should take seconds, not hours. Keyboard shortcuts for everything.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg">
              <Shield className="w-5 h-5 text-yellow-400 mb-4" />
              <h4 className="text-white text-sm font-medium mb-2">Privacy Core</h4>
              <p className="text-zinc-500 text-xs">
                Your academic data is yours. We encrypt everything locally before sync.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg">
              <Smile className="w-5 h-5 text-yellow-400 mb-4" />
              <h4 className="text-white text-sm font-medium mb-2">Anti-Burnout</h4>
              <p className="text-zinc-500 text-xs">
                We aggressively schedule breaks. A tired brain learns nothing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
