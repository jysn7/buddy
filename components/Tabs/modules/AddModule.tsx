"use client";
export const AddModule = () => (
  <div className="bg-zinc-800 rounded-4xl p-6 relative overflow-hidden flex flex-col justify-between h-72 border border-zinc-700/30">
    <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
    <div className="flex justify-between items-center relative z-10">
      <span className="px-3 py-1 rounded-full border border-zinc-600 text-xs text-zinc-300 bg-zinc-900/50">Add Subject</span>
      <span className="text-zinc-500 text-xs font-mono">NEW</span>
    </div>
    <div className="relative z-10 flex flex-col gap-3 my-auto">
      <input type="text" placeholder="Subject Name (e.g. Physics)" className="bg-zinc-900/80 border border-zinc-700 text-zinc-200 text-sm rounded-xl p-3 w-full focus:ring-1 focus:ring-yellow-300 focus:border-yellow-300 outline-none placeholder:text-zinc-600 transition-all"/>
      <input type="date" className="bg-zinc-900/80 border border-zinc-700 text-zinc-400 text-sm rounded-xl p-3 w-full focus:ring-1 focus:ring-yellow-300 outline-none transition-all"/>
    </div>
    <div className="relative z-10 bg-zinc-900/50 backdrop-blur-md p-1.5 rounded-2xl border border-zinc-700 flex items-center justify-between pl-4">
      <span className="text-sm font-medium text-zinc-300">Add to list</span>
      <button className="w-10 h-10 bg-zinc-700 hover:bg-zinc-600 rounded-xl flex items-center justify-center text-white transition-colors">+</button>
    </div>
  </div>
);
