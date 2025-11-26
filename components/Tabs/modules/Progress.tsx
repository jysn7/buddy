"use client";
export const Progress = () => (
  <div className="bg-zinc-800 rounded-4xl p-6 h-72 flex flex-col relative border border-zinc-700/30">
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
);
