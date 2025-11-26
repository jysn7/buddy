"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingView() {
  const { scrollY } = useScroll();

  // Transform scroll position to rotation angles
  const rotateTopRight = useTransform(scrollY, [0, 1000], [12, 360]); // Top-right square
  const rotateBottomLeft = useTransform(scrollY, [0, 1000], [-12, -360]); // Bottom-left square

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-zinc-950 overflow-hidden">
      {/* Abstract Cube Shapes */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none"></div>

      <motion.div
        className="geo-shape absolute top-20 right-20 w-32 h-32 border border-zinc-800 opacity-40"
        style={{ rotate: rotateTopRight }}
      />
      <motion.div
        className="geo-shape absolute bottom-20 left-20 w-48 h-48 border border-yellow-500/10"
        style={{ rotate: rotateBottomLeft }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-linear-to-r from-transparent via-yellow-400/5 to-transparent blur-3xl transform -rotate-45" />

      <motion.div
        className="max-w-6xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">
            Invest in your grades
          </h2>
          <p className="text-zinc-500">Cheaper than a textbook. Smarter than a tutor.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Free / Auditor */}
          <Card className="group bg-zinc-900/20 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-600 transition-all duration-300">
            <div className="mb-6">
              <span className="text-zinc-400 text-xs font-medium border border-zinc-800 px-2 py-1 rounded-full">
                Auditor
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-white tracking-tight">R0</span>
                <span className="text-zinc-600 text-sm">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3 text-xs text-zinc-400">
                <Check className="w-3 h-3 text-zinc-500 stroke-2" /> 4 Active modules
              </li>
              <li className="flex items-center gap-3 text-xs text-zinc-400">
                <Check className="w-3 h-3 text-zinc-500 stroke-2" /> Manual rescheduling
              </li>
              <li className="flex items-center gap-3 text-xs text-zinc-400">
                <Check className="w-3 h-3 text-zinc-500 stroke-2" /> Basic analytics
              </li>
            </ul>
            <Link 
              href="/auth/signup"
              className="w-full justify-center flex  cursor-pointer py-2.5 rounded-lg border border-zinc-700 bg-transparent text-white font-medium hover:bg-zinc-800 transition-colors text-xs">
              Start Free
            </Link>
          </Card>

          {/* Pro */}
          <Card className="group bg-zinc-900/80 border border-yellow-400/50 rounded-xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(250,204,21,0.1)] hover:scale-[1.02] transition-all duration-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-yellow-400 rounded-full text-[10px] font-bold text-black tracking-wide uppercase shadow-lg">
              Most Popular
            </div>
            <div className="mb-6">
              <span className="text-yellow-400 text-xs font-medium bg-yellow-400/10 px-2 py-1 rounded-full border border-yellow-400/20">
                 Dean&#39;s List
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-white tracking-tight">R99</span>
                <span className="text-zinc-500 text-sm">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1 text-zinc-300">
              <li className="flex items-center gap-3 text-xs"><Check className="w-3 h-3 text-yellow-400 stroke-2" /> Unlimited modules</li>
              <li className="flex items-center gap-3 text-xs"><Check className="w-3 h-3 text-yellow-400 stroke-2" /> Neural Auto-Reschedule</li>
              <li className="flex items-center gap-3 text-xs"><Check className="w-3 h-3 text-yellow-400 stroke-2" /> Exam Readiness Score</li>
              <li className="flex items-center gap-3 text-xs"><Check className="w-3 h-3 text-yellow-400 stroke-2" /> Export to iCal/GCal</li>
            </ul>
            <Button className="w-full py-2.5 cursor-pointer rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors text-xs">
              Buy Now
            </Button>
          </Card>

          {/* Campus / Institution */}
          <Card className="group bg-zinc-900/20 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-600 transition-all duration-300">
            <div className="mb-6">
              <span className="text-zinc-400 text-xs font-medium border border-zinc-800 px-2 py-1 rounded-full">
                Institution
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-white tracking-tight">Custom</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3 text-xs text-zinc-400">
                <Check className="w-3 h-3 text-zinc-500 stroke-2" /> LMS Integration (Canvas, Blackboard)
              </li>
              <li className="flex items-center gap-3 text-xs text-zinc-400">
                <Check className="w-3 h-3 text-zinc-500 stroke-2" /> Department Analytics
              </li>
              <li className="flex items-center gap-3 text-xs text-zinc-400">
                <Check className="w-3 h-3 text-zinc-500 stroke-2" /> SSO & dedicated support
              </li>
            </ul>
            <Button className="w-full py-2.5 rounded-lg border border-zinc-700 bg-transparent text-white font-medium hover:bg-zinc-800 transition-colors text-xs">
              Coming Soon
            </Button>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-zinc-900 pt-16">
          <h3 className="text-xl text-white font-medium mb-8">Frequent questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium text-white mb-2">Can I import my syllabus?</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Yes. bud-e parses PDF syllabi and .ics calendar files to automatically populate your exam dates and assignment deadlines.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-2">What if I procrastinate?</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                 We expect it. When you miss a block, simply mark it as &quot;missed&quot; or &quot;incomplete&quot;, and the neural engine recalculates your week instantly.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-2">Does it work for Med School?</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Absolutely. We have a dedicated mode for high-volume memorization that integrates with Anki decks.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-2">Is there a student discount?</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                 The &#39;Scholar&#39; plan is already discounted 60% compared to standard productivity tools. We want this accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
