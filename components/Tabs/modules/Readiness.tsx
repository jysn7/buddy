"use client";
import { LucideArrowUpRight } from "lucide-react";
export const Readiness = () => (
  <div className="bg-zinc-200 rounded-4xl p-6 flex flex-col justify-between h-72 relative group">
    <div className="flex justify-between items-start">
      <h3 className="text-zinc-900 font-semibold text-lg tracking-tight">Readiness</h3>
      <button className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center -mt-2 -mr-2 rotate-45 group-hover:rotate-0 transition-transform">
        <LucideArrowUpRight className="w-4 h-4" />
      </button>
    </div>
    <div className="flex gap-2 justify-center my-4">
      <div className="w-12 h-16 bg-zinc-300/50 rounded-xl flex flex-col items-center justify-center gap-1"><span className="text-[10px] text-zinc-500">Mon</span><span className="text-sm font-semibold text-zinc-900">2</span></div>
      <div className="w-12 h-16 bg-yellow-300 rounded-xl flex flex-col items-center justify-center gap-1 shadow-lg scale-110"><span className="text-[10px] text-zinc-900">Tue</span><span className="text-sm font-semibold text-zinc-900">3</span></div>
      <div className="w-12 h-16 bg-zinc-300/50 rounded-xl flex flex-col items-center justify-center gap-1"><span className="text-[10px] text-zinc-500">Wed</span><span className="text-sm font-semibold text-zinc-900">4</span></div>
    </div>
    <div className="flex items-end justify-between mt-auto">
      <span className="text-5xl font-medium text-zinc-900 tracking-tighter">82%</span>
      <div className="flex flex-col items-end text-xs font-medium"><span className="text-zinc-500">-10%</span><span className="text-zinc-400">Since last mock</span></div>
    </div>
  </div>
);
