"use client";

import { motion } from "framer-motion";
import { Database, Cpu, GitMerge } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function MethodologyView() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="methodology-view" className="hidden-section min-h-screen pt-32 pb-20 relative bg-zinc-950 overflow-hidden">
      {/* Neural Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-zinc-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-zinc-500 rounded-full"></div>
        <svg className="absolute inset-0 w-full h-full stroke-zinc-800" style={{ strokeWidth: "1px" }}>
          <line x1="10%" y1="15%" x2="80%" y2="40%" />
          <line x1="80%" y1="40%" x2="30%" y2="80%" />
          <line x1="10%" y1="15%" x2="30%" y2="80%" />
        </svg>
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {/* Header */}
        <motion.h2
          className="text-4xl font-semibold text-white tracking-tight text-center mb-6"
          variants={item}
        >
          How <span className="text-yellow-400">bud-e</span> thinks
        </motion.h2>
        <motion.p
          className="text-center text-zinc-400 max-w-2xl mx-auto mb-20"
          variants={item}
        >
          We don&#39;t just fill slots. We optimize for memory decay, energy levels, and assignment weightage.
        </motion.p>

        {/* Timeline */}
        <div className="relative pl-4 md:pl-0">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-zinc-800 md:left-1/2 md:-translate-x-1/2"></div>
          <div className="space-y-24">
            {/* Step 1 */}
            <motion.div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group" variants={item}>
              <div className="hidden md:flex flex-1 justify-end text-right pr-12">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1. Ingestion & Weighting</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Constraints, exam dates, and personal difficulty ratings are ingested. A <span className="text-yellow-400">knowledge graph</span> is constructed to identify dependencies between modules.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-yellow-400 transition-colors group-hover:scale-110 duration-300">
                <Database className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors stroke-[1.5]" />
              </div>
              <div className="flex-1 pl-4 md:pl-12 w-full">
                <div className="md:hidden mb-4">
                  <h3 className="text-lg font-medium text-white mb-1">1. Ingestion & Weighting</h3>
                  <p className="text-zinc-500 text-sm">We build a knowledge graph of your syllabus.</p>
                </div>
                <Card className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-[10px] font-mono text-zinc-400 shadow-xl backdrop-blur-sm group-hover:border-yellow-400/30 transition-colors w-full">
                  <div className="flex justify-between border-b border-zinc-800 pb-2 mb-2">
                    <span>module_weight.json</span>
                  </div>
                  <pre className="whitespace-pre-wrap">
                    <span className="text-purple-400">const</span> graph = {'{'}
                    {"\n  "} <span className="text-blue-400">&quot;calc_3&quot;</span>: {'{'} weight: <span className="text-yellow-400">0.85</span>, decay: <span className="text-yellow-400">0.2</span> {'}'},
                    {"\n  "} <span className="text-blue-400">&quot;hist_101&quot;</span>: {'{'} weight: <span className="text-yellow-400">0.40</span>, decay: <span className="text-yellow-400">0.05</span> {'}'}
                    {"\n"} {'}'};
                  </pre>
                </Card>

              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group" variants={item}>
              <div className="flex-1 pr-4 md:pr-12 w-full md:text-right order-3 md:order-1">
                <div className="md:hidden mb-4">
                  <h3 className="text-lg font-medium text-white mb-1">2. Spaced Repetition Engine</h3>
                  <p className="text-zinc-500 text-sm">Optimal review intervals calculated dynamically.</p>
                </div>
                <Card className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-[10px] font-mono text-zinc-400 shadow-xl backdrop-blur-sm flex flex-col items-start group-hover:border-yellow-400/30 transition-colors w-full">
                  <div className="w-full flex justify-between items-center mb-3">
                    <span className="text-xs text-zinc-300">Retention Curve</span>
                    <span className="text-[8px] bg-yellow-400 text-black px-1.5 rounded">OPTIMAL</span>
                  </div>
                  <div className="relative w-full h-16 border-l border-b border-zinc-700">
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                      <path d="M0,0 Q50,60 150,60" fill="none" stroke="#facc15" strokeWidth={1.5} />
                      <circle cx={0} cy={0} r={2} fill="white" />
                      <circle cx={50} cy={35} r={2} fill="white" />
                      <circle cx={150} cy={60} r={2} fill="white" />
                    </svg>
                  </div>
                </Card>
              </div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-yellow-400 transition-colors group-hover:scale-110 duration-300 order-1 md:order-2">
                <Cpu className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors stroke-[1.5]" />
              </div>
              <div className="flex-1 pl-4 md:pl-12 hidden md:block order-2 md:order-3">
                <h3 className="text-lg font-medium text-white mb-2">2. Spaced Repetition Engine</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Our algorithm schedules reviews at optimal intervals using a modified SM-2 algorithm, ensuring retention peaks exactly at exam time.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center group" variants={item}>
              <div className="hidden md:flex flex-1 justify-end text-right pr-12">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3. Real-time Reshuffling</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Miss a session? bud-e acts as a GPS for your studies. It calculates a new route to an A+ instantly.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-yellow-400 transition-colors group-hover:scale-110 duration-300">
                <GitMerge className="w-6 h-6 text-white group-hover:text-yellow-400 transition-colors stroke-[1.5]" />
              </div>
              <div className="flex-1 pl-4 md:pl-12 w-full">
                <div className="md:hidden mb-4">
                  <h3 className="text-lg font-medium text-white mb-1">3. Real-time Reshuffling</h3>
                  <p className="text-zinc-500 text-sm">Automatic schedule adjustment upon missed blocks.</p>
                </div>
                <div className="h-10 w-full bg-zinc-900 rounded-md overflow-hidden flex border border-zinc-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center z-20 font-bold text-xs tracking-widest text-black mix-blend-screen">
                    RECALCULATING...
                  </div>
                  <div className="h-full bg-yellow-400 w-full animate-[slideUpFade_2s_infinite]"></div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="h-1.5 rounded-full bg-zinc-800"></div>
                  <div className="h-1.5 rounded-full bg-zinc-800"></div>
                  <div className="h-1.5 rounded-full bg-zinc-800"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
