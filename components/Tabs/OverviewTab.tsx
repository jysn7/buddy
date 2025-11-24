"use client";
import { LucideArrowUpRight } from "lucide-react";

export const OverviewTab = () => {
  return (
    <div className="block">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {/* 1. Weekly Goal */}
        <div className="bg-yellow-300 rounded-[32px] p-6 flex flex-col justify-between relative overflow-hidden group h-72 animate-enter delay-100">
          <div className="flex justify-between items-start z-10">
            <h3 className="text-zinc-900 font-semibold text-lg tracking-tight">Weekly Goal</h3>
            <span className="text-zinc-900/60 text-xs cursor-pointer hover:text-zinc-900">More</span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-yellow-400/50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-zinc-900 drop-shadow-sm" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-semibold text-zinc-900 tracking-tight">24h</span>
              </div>
            </div>
          </div>
          <div className="z-10 space-y-2 mt-auto">
            <div className="flex items-center justify-between text-xs font-medium text-zinc-900">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-zinc-900 rounded-[2px]"></div><span>Completed</span></div>
              <span>78%</span>
            </div>
            <div className="flex items-center justify-between text-xs font-medium text-zinc-900/60">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-zinc-900/20 rounded-[2px]"></div><span>Remaining</span></div>
              <span>22%</span>
            </div>
          </div>
        </div>

        {/* 2. Add Module */}
        <div className="bg-zinc-800 rounded-[32px] p-6 relative overflow-hidden flex flex-col justify-between h-72 border border-zinc-700/30 animate-enter delay-200">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
          <div className="flex justify-between items-center relative z-10">
            <span className="px-3 py-1 rounded-full border border-zinc-600 text-xs text-zinc-300 bg-zinc-900/50">Add Subject</span>
            <span className="text-zinc-500 text-xs font-mono">NEW</span>
          </div>
          <div className="relative z-10 flex flex-col gap-3 my-auto">
            <input type="text" id="moduleName" placeholder="Subject Name (e.g. Physics)" className="bg-zinc-900/80 border border-zinc-700 text-zinc-200 text-sm rounded-xl p-3 w-full focus:ring-1 focus:ring-yellow-300 focus:border-yellow-300 outline-none placeholder:text-zinc-600 transition-all"/>
            <input type="date" id="examDate" className="bg-zinc-900/80 border border-zinc-700 text-zinc-400 text-sm rounded-xl p-3 w-full focus:ring-1 focus:ring-yellow-300 outline-none transition-all"/>
          </div>
          <div className="relative z-10 bg-zinc-900/50 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-700 flex items-center justify-between pl-4">
            <span className="text-sm font-medium text-zinc-300">Add to list</span>
            <button className="w-10 h-10 bg-zinc-700 hover:bg-zinc-600 rounded-xl flex items-center justify-center text-white transition-colors">
              +
            </button>
          </div>
        </div>

        {/* 3. Readiness */}
        <div className="bg-zinc-200 rounded-[32px] p-6 flex flex-col justify-between h-72 relative group animate-enter delay-300">
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

        {/* 4. Progress */}
        <div className="bg-zinc-800 rounded-[32px] p-6 h-72 flex flex-col relative border border-zinc-700/30 animate-enter delay-100">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-700/50 flex items-center justify-center"><i className="w-4 h-4 text-yellow-300">📊</i></div>
              <span className="font-semibold text-white">Progress</span>
            </div>
            <span className="text-zinc-500 text-xs">Details</span>
          </div>
          <div className="mb-auto">
            <span className="text-3xl font-medium text-white block tracking-tight">42 <span className="text-zinc-500 text-xl">Topics</span></span>
            <span className="text-xs text-zinc-500">Mastered this month</span>
          </div>
        </div>

        {/* 5. Focus Mode */}
        <div className="bg-zinc-800 rounded-[32px] p-0 h-72 relative overflow-hidden group md:col-span-2 lg:col-span-1 border border-zinc-700/30 animate-enter delay-200">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Focus"/>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
            <button className="w-full bg-yellow-300 text-zinc-950 font-semibold text-sm py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
              Enter Focus Mode 🎧
            </button>
          </div>
        </div>

        {/* 6. Session Duration */}
        <div className="bg-zinc-800 rounded-[32px] p-6 h-72 flex flex-col border border-zinc-700/30 animate-enter delay-300">
          <h3 className="text-white font-medium mb-6">Avg. Session Duration</h3>
          <div className="flex-1 flex items-end justify-between gap-3 px-2">
            <div className="w-full bg-zinc-700/30 rounded-t-lg h-[40%]"></div>
            <div className="w-full bg-yellow-300/10 rounded-t-lg h-[85%] relative group border border-yellow-300/50 overflow-hidden"></div>
            <div className="w-full bg-zinc-700/30 rounded-t-lg h-[30%]"></div>
            <div className="w-full bg-zinc-700/30 rounded-t-lg h-[50%]"></div>
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500 mt-3 px-1"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span></div>
        </div>

      </div>
    </div>
  );
};
