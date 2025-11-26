"use client";
export const SessionDuration = () => (
  <div className="bg-zinc-800 rounded-4xl p-6 h-72 flex flex-col border border-zinc-700/30">
    <h3 className="text-white font-medium mb-6">Avg. Session Duration</h3>
    <div className="flex-1 flex items-end justify-between gap-3 px-2">
      <div className="w-full bg-zinc-700/30 rounded-t-lg h-[40%]"></div>
      <div className="w-full bg-yellow-300/10 rounded-t-lg h-[85%] relative group border border-yellow-300/50 overflow-hidden"></div>
      <div className="w-full bg-zinc-700/30 rounded-t-lg h-[30%]"></div>
      <div className="w-full bg-zinc-700/30 rounded-t-lg h-[50%]"></div>
    </div>
    <div className="flex justify-between text-[10px] text-zinc-500 mt-3 px-1"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span></div>
  </div>
);
