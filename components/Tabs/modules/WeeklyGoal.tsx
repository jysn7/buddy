"use client";
export const WeeklyGoal = () => (
  <div className="bg-yellow-300 rounded-4xl p-6 flex flex-col justify-between relative overflow-hidden h-72">
    <div className="flex justify-between items-start z-10">
      <h3 className="text-zinc-900 font-semibold text-lg tracking-tight">Weekly Goal</h3>
      <span className="text-zinc-900/60 text-xs">More</span>
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
);
