"use client";
import { LucideSearch, LucideSparkles, LucideBell } from "lucide-react";

interface TopBarProps {
  generateTimetable: () => void;
}

export const TopBar = ({ generateTimetable }: TopBarProps) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 border-b border-zinc-800/30 bg-zinc-950/80 backdrop-blur-sm z-20 animate-enter delay-100">
      <h2 className="text-xl font-medium text-white tracking-tight">Study Dashboard</h2>
      <div className="flex items-center gap-6">
        <div className="relative hidden sm:block">
          <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-zinc-600 w-64 placeholder:text-zinc-600 transition-colors"
          />
        </div>
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-zinc-900 text-sm font-medium px-5 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(253,224,71,0.4)]"
          onClick={generateTimetable}
        >
          <LucideSparkles className="w-4 h-4" />
          Generate Guide
        </button>
        <button className="relative w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 transition-colors">
          <LucideBell className="w-5 h-5 text-zinc-400" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-yellow-300 rounded-full border border-zinc-950"></span>
        </button>
      </div>
    </header>
  );
};
