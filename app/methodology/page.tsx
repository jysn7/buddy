"use client";

import { Database, Cpu, GitMerge } from "lucide-react";

export default function MethodologyView() {
  return (
    <div id="methodology-view" className="hidden-section min-h-screen pt-32 pb-20 relative bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 animate-enter">
        <h2 className="text-4xl font-medium text-white tracking-tight text-center mb-16">
          The Wise Methodology
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group">
              <div className="hidden md:flex flex-1 justify-end text-right pr-12">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1. Data Ingestion</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    We ingest your module constraints, exam dates, and personal difficulty ratings to build a baseline.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-yellow-400 transition-colors">
                <Database className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <div className="flex-1 pl-4 md:pl-12">
                <div className="md:hidden mb-2">
                  <h3 className="text-lg font-medium text-white mb-1">1. Data Ingestion</h3>
                </div>
                <p className="md:hidden text-zinc-500 text-sm mb-4">We ingest your constraints and exam dates.</p>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-400 shadow-xl">
                  <span className="text-purple-400">const</span> modules = [<br />
                      &nbsp;&nbsp;{`{ id: `}<span className="text-yellow-300">&#39;phys_101&#39;</span>, exam: <span className="text-yellow-300">&#39;2023-12-15&#39;</span> {`}`}<br />
                  ];
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group">
              <div className="flex-1 pr-4 md:pr-12 text-right md:text-left">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-400 shadow-xl flex gap-3 items-center justify-end md:justify-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Calculating forgetting curves...
                </div>
              </div>
              <div className="relative z-10 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-yellow-400 transition-colors">
                <Cpu className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <div className="flex-1 pl-4 md:pl-12">
                <h3 className="text-lg font-medium text-white mb-2">2. Spaced Repetition</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Our algorithm schedules reviews at optimal intervals, ensuring retention peaks exactly at exam time.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group">
              <div className="hidden md:flex flex-1 justify-end text-right pr-12">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3. Dynamic Rebalancing</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Miss a session? Wise automatically reshuffles your entire week overnight to keep you on track.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-yellow-400 transition-colors">
                <GitMerge className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
              <div className="flex-1 pl-4 md:pl-12">
                <div className="md:hidden mb-2">
                  <h3 className="text-lg font-medium text-white mb-1">3. Dynamic Rebalancing</h3>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                  <div className="w-1/4 bg-zinc-700"></div>
                  <div className="w-1/2 bg-yellow-400"></div>
                  <div className="w-1/4 bg-zinc-700"></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-zinc-500 font-mono">
                  <span>MON</span><span>TUE</span><span>WED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
