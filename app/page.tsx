"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// ...existing code...

export default function LandingPage() {
  return (
    <div
      id="landing-page"
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid mask-radial"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-linear-to-b from-yellow-300/10 via-transparent to-transparent blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-yellow-300/5 rounded-full blur-[96px]"></div>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8 animate-enter delay-100 shadow-xl backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          <span className="text-zinc-400">New:</span> Focus Mode V2.0
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 max-w-5xl leading-none animate-enter delay-200">
          Study smarter, <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-yellow-200 via-yellow-300 to-yellow-600">
            not harder.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed animate-enter delay-300">
          The intelligent timetable generator that adapts to your learning speed.
          Input your modules, set your exams, and let AI structure your success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-enter delay-400">
          <Button
            className="group relative px-10 py-6 bg-white text-zinc-950 font-medium rounded-full transition-all hover:bg-zinc-200 shadow-[0_0_50px_-5px_rgba(255,255,255,0.6)] flex items-center justify-center gap-2 text-base"
          >
            Start Planning Free
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>


          <Button className="px-10 py-6 bg-zinc-900/50 hover:bg-zinc-900 text-white border border-zinc-800 font-medium rounded-full transition-all backdrop-blur-md flex items-center justify-center">
            Live Demo
          </Button>
        </div>

        <div className="mt-24 w-full max-w-6xl relative animate-enter delay-300">
          <div className="absolute -inset-1 bg-linear-to-t from-yellow-300/20 to-zinc-800/20 rounded-4xl blur-2xl opacity-30"></div>

          <div className="relative bg-zinc-900 border border-zinc-800/50 rounded-3xl shadow-2xl overflow-hidden aspect-video md:aspect-21/9 group">
            <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="h-full w-full bg-zinc-950 p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-8 border-b border-zinc-900 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                </div>
                <div className="h-2 w-32 bg-zinc-900 rounded-full"></div>
              </div>

              <div className="flex-1 grid grid-cols-4 gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                <div className="col-span-1 bg-zinc-900 rounded-xl border border-zinc-800/50"></div>
                <div className="col-span-2 bg-zinc-900 rounded-xl border border-zinc-800/50 flex items-center justify-center">
                  <div className="text-zinc-800 font-bold text-6xl tracking-tighter">WISE</div>
                </div>
                <div className="col-span-1 bg-zinc-900 rounded-xl border border-zinc-800/50"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
