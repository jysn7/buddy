"use client";

import { Coffee } from "lucide-react";

export default function TiltedDashboard() {
  return (
    <div className="w-full md:max-w-5xl mx-auto perspective-container mb-20 md:px-0">
      <div className="dashboard-tilt relative bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden group">

        {/* Top Bar */}
        <div className="h-10 border-b border-zinc-800 bg-zinc-900 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>

          <div className="flex-1 text-center text-[10px] text-zinc-600 font-mono">
            bud-e_dashboard.exe
          </div>
        </div>

        {/* Interface Body */}
        <div className="grid grid-cols-12 h-[300px] md:h-[500px] bg-zinc-950">

          {/* Sidebar */}
          <div className="col-span-3 md:col-span-2 border-r border-zinc-800 p-2 md:p-4 flex flex-col gap-4">
            <div className="h-8 w-8 bg-zinc-800 rounded-lg mb-4" />

            <div className="space-y-2 hidden md:block">
              <div className="h-2 w-16 bg-zinc-800 rounded-full" />
              <div className="h-2 w-12 bg-zinc-800 rounded-full" />
              <div className="h-2 w-20 bg-zinc-800 rounded-full" />
            </div>

            <div className="mt-auto space-y-2">
              <div className="p-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                <div className="h-1.5 w-8 bg-yellow-400 rounded-full mb-1" />
                <div className="h-1 w-full bg-yellow-400/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9 md:col-span-10 p-4 md:p-6">
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="text-[10px] text-yellow-400 font-medium mb-1">
                  CURRENT FOCUS
                </div>
                <div className="text-2xl text-white font-medium hidden sm:block">
                  Advanced Calculus III
                </div>
              </div>

              <div className="flex gap-2">
                <div className="md:px-3 px-1 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[8px] md:text-[10px]">
                  Day
                </div>
                <div className="md:px-3 px-1 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-white text-[8px] md:text-[10px]">
                  Week
                </div>
              </div>
            </div>

            {/* Schedule Grid */}
            <div className="grid grid-cols-5 gap-4 h-full">

              {/* MON */}
              <div className="space-y-3 pt-8">
                <div className="text-[10px] text-zinc-600 text-center hidden sm:block">
                  MON
                </div>

                <div className="h-24 rounded-lg bg-zinc-900 border border-zinc-800 p-3 relative hover:border-yellow-400/50 transition-colors cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-3 right-3" />

                  {/* Hide text on mobile */}
                  <div className="hidden sm:block">
                    <div className="h-2 w-12 bg-zinc-700 rounded-full mb-2" />
                    <div className="h-1.5 w-16 bg-zinc-800 rounded-full" />
                  </div>
                </div>

                <div className="h-32 rounded-lg bg-yellow-400/5 border border-yellow-400/20 p-3">
                  <div className="hidden sm:block">
                    <div className="h-2 w-14 bg-yellow-400/40 rounded-full mb-2" />
                    <div className="h-1.5 w-10 bg-yellow-400/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* TUE */}
              <div className="space-y-3 pt-4">
                <div className="text-[10px] text-zinc-600 text-center hidden sm:block">
                  TUE
                </div>

                <div className="h-16 rounded-lg bg-zinc-900 border border-zinc-800 p-3 opacity-50" />

                <div className="h-40 rounded-lg bg-zinc-900 border border-zinc-800 p-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-900/90 z-10" />
                  <div className="grid grid-cols-4 gap-1 opacity-20">
                    <div className="col-span-4 h-full bg-zinc-800 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* TODAY */}
              <div className="space-y-3">
                <div className="text-[10px] text-center text-yellow-400 hidden sm:block">
                  TODAY
                </div>

                <div className="h-[80%] rounded-xl bg-zinc-900 border border-zinc-700 p-1 flex flex-col gap-2 relative">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full z-20 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-yellow-400/20 z-0" />

                  <div className="bg-zinc-800/80 p-3 rounded-lg backdrop-blur-sm border-l-2 border-yellow-400 ml-4 mt-8 hidden sm:block">
                    <div className="text-[10px] text-white font-medium">
                      Deep Work
                    </div>
                    <div className="text-[8px] text-zinc-500">10:00 - 12:00</div>
                  </div>

                  <div className="bg-zinc-800/50 p-3 rounded-lg backdrop-blur-sm border-l-2 border-zinc-600 ml-4 hidden sm:block">
                    <div className="text-[10px] text-zinc-300">Review</div>
                    <div className="text-[8px] text-zinc-500">14:00 - 15:00</div>
                  </div>
                </div>
              </div>

              {/* THU */}
              <div className=" space-y-1  md:space-y-3 pt-4 md:pt-8">
                <div className="text-[10px] text-zinc-600 text-center hidden sm:block">
                  THU
                </div>

                <div className="h-20 rounded-lg bg-zinc-900 border border-zinc-800 p-3" />
                <div className="h-20 rounded-lg bg-zinc-900 border border-zinc-800 p-3 border-dashed" />
              </div>

              {/* FRI */}
              <div className="space-y-3 pt-6 md:pt-12">
                <div className="text-[10px] text-zinc-600 text-center hidden sm:block">
                  FRI
                </div>

                <div className="h-32 rounded-lg bg-zinc-900 border border-zinc-800 p-3 relative">
                  <Coffee className="md:w-6 md:h-6 h-4 w-4 text-zinc-600" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
