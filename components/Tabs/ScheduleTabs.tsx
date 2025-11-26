"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

type WeeklyEvent = {
  height: string;
  color: string;
  dot?: string;
  label?: string;
  today?: boolean;
};


export const ScheduleTab = () => {
  const [view, setView] = useState<"daily" | "weekly">("daily");

  // ---------------------------
  // Dummy Data (Replace Later)
  // ---------------------------

  const dailyEvents = [
    {
      time: "09:00 - 10:00",
      title: "Linear Algebra",
      details: "Problem Set 4 • Room 302",
      color: "border-yellow-400 bg-zinc-950",
    },
    {
      time: "11:00 - 12:30",
      title: "Computer Architecture",
      details: "Deep Work • Project Phase 2",
      color: "border-zinc-600 bg-zinc-950",
    },
  ];

  const weeklyEvents: Record<string, WeeklyEvent[]> = {
  mon: [
    { height: "h-20", color: "bg-zinc-900 border-zinc-800", dot: "bg-blue-400", label: "9:00 AM" },
    { height: "h-32", color: "bg-yellow-400/10 border-yellow-400/20", dot: "bg-yellow-400", label: "Math" },
  ],
  tue: [
    { height: "h-24", color: "bg-zinc-900 border-zinc-800", label: "Physics" },
  ],
  wed: [
    { height: "h-24", color: "bg-white text-zinc-950 shadow-lg", label: "Linear Algebra Exam Prep", today: true },
    { height: "h-16", color: "bg-zinc-800 border-zinc-700", label: "Review" },
  ],
  thu: [
    { height: "h-20", color: "bg-zinc-900 border-zinc-800" },
    { height: "h-20", color: "bg-zinc-900 border-zinc-800" },
  ],
  fri: [
    { height: "h-32", color: "bg-zinc-900 border-zinc-800" },
  ],
  sat: [
    { height: "h-16", color: "bg-zinc-900 border-zinc-800 opacity-50" },
  ],
  sun: [],
};


  return (
    <div
      id="dash-schedule"
      className="dash-tab hidden-section p-6 md:p-10 max-w-6xl mx-auto animate-enter"
    >
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-medium text-white tracking-tight">
            Schedule
          </h1>
          <p className="text-zinc-400 text-sm mt-1">Manage your study blocks.</p>
        </div>

        {/* Daily / Weekly Toggle */}
        <div className="flex items-center gap-3 bg-zinc-900 p-1 rounded-lg border border-zinc-800 self-start">
          <button
            onClick={() => setView("daily")}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
              view === "daily"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Daily
          </button>

          <button
            onClick={() => setView("weekly")}
            className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
              view === "weekly"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Weekly
          </button>
        </div>
      </header>

      {/* DAILY VIEW */}
      {view === "daily" && (
        <div id="view-daily" className="schedule-view animate-enter">
          <div className="flex items-center justify-between mb-6 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
            <button className="p-1 hover:bg-zinc-800 rounded">
              <ChevronLeft className="w-4 h-4 text-zinc-400" />
            </button>
            <span className="text-sm font-medium text-white">
              October 24, 2023
            </span>
            <button className="p-1 hover:bg-zinc-800 rounded">
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </button>
          </div>

          <div className="relative border-l border-zinc-800 ml-3 space-y-8 pb-10">
            {dailyEvents.map((ev, i) => (
              <div
                key={i}
                className="relative pl-8 group cursor-pointer"
              >
                <div
                  className={`absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full ${ev.color} border z-10`}
                ></div>

                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-yellow-400/50 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-yellow-400">
                        {ev.time}
                      </span>
                      <div className="h-px w-8 bg-zinc-800"></div>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-zinc-600" />
                  </div>

                  <h4 className="text-sm font-medium text-white">{ev.title}</h4>
                  <p className="text-xs text-zinc-500">{ev.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WEEKLY VIEW */}
      {view === "weekly" && (
        <div id="view-weekly" className="schedule-view animate-enter hidden-section">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, idx) => (
              <div
                key={idx}
                className={`text-center text-xs font-medium ${
                  d === "Wed"
                    ? "text-white bg-zinc-800 rounded py-1"
                    : "text-zinc-500"
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 h-96">
            {Object.values(weeklyEvents).map((dayEvents, col) => (
              <div key={col} className="space-y-2 relative">
                {col === 2 ? (
                  <div className="bg-zinc-900/30 rounded-lg space-y-2 p-1 border border-zinc-800 h-full">
                    {dayEvents.map((ev, i) => (
                      <div
                        key={i}
                        className={`${ev.height} ${ev.color} rounded-md p-2 cursor-pointer`}
                      >
                        {ev.today && (
                          <div className="text-[10px] font-bold">Today</div>
                        )}
                        <div className="text-[10px] mt-1 leading-tight">
                          {ev.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {dayEvents.map((ev, i) => (
                      <div
                        key={i}
                        className={`${ev.height} ${ev.color} rounded-lg p-2 cursor-pointer hover:bg-zinc-800`}
                      >
                        {ev.dot && (
                          <div
                            className={`w-1.5 h-1.5 ${ev.dot} rounded-full mb-1`}
                          ></div>
                        )}
                        <div className="text-[10px] text-zinc-400">
                          {ev.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
