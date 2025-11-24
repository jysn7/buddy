"use client";
import { LucideList, LucideCalendar, LucideChevronLeft, LucideChevronRight } from "lucide-react";

export const ScheduleTab = () => {
  return (
    <div className="hidden-section animate-enter">
      <div className="flex flex-col xl:flex-row gap-6 pb-10">
        {/* Module Sidebar List */}
        <div className="w-full xl:w-1/3 bg-zinc-900 border border-zinc-800 rounded-[24px] p-6 h-fit">
          <h3 className="text-white font-medium mb-4 flex items-center gap-2">
            <LucideList className="w-4 h-4 text-yellow-300" />
            Active Subjects
          </h3>
          <div id="moduleListSide" className="space-y-3 min-h-[200px]">
            <div className="text-zinc-500 text-sm text-center py-10 italic border border-dashed border-zinc-800 rounded-xl">
              No modules added yet.
            </div>
          </div>
        </div>

        {/* Calendar Output */}
        <div className="w-full xl:w-2/3 bg-zinc-900 border border-zinc-800 rounded-[24px] p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white font-medium flex items-center gap-2">
              <LucideCalendar className="w-4 h-4 text-yellow-300" />
              Study Plan
            </h3>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-zinc-800 rounded">
                <LucideChevronLeft className="w-4 h-4 text-zinc-400" />
              </button>
              <span className="text-sm text-zinc-400 font-medium">October 2023</span>
              <button className="p-1 hover:bg-zinc-800 rounded">
                <LucideChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-zinc-800 rounded-lg overflow-hidden border border-zinc-800">
            <div className="bg-zinc-900 p-3 text-center text-xs text-zinc-500 font-medium">Mon</div>
            <div className="bg-zinc-900 p-3 text-center text-xs text-zinc-500 font-medium">Tue</div>
            <div className="bg-zinc-900 p-3 text-center text-xs text-zinc-500 font-medium">Wed</div>
            <div className="bg-zinc-900 p-3 text-center text-xs text-zinc-500 font-medium">Thu</div>
            <div className="bg-zinc-900 p-3 text-center text-xs text-zinc-500 font-medium">Fri</div>
            <div className="bg-zinc-900 p-3 text-center text-xs text-yellow-300/80 font-medium">Sat</div>
            <div className="bg-zinc-900 p-3 text-center text-xs text-yellow-300/80 font-medium">Sun</div>

            <div id="calendarGrid" className="contents">
              {/* JS injected */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
