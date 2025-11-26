"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingView() {
  return (
    <div id="pricing-view" className="hidden-section min-h-screen pt-32 pb-20 relative bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 animate-enter">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-white tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-400">Invest in your GPA for less than the cost of a coffee.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:bg-zinc-900 transition-colors">
            <div className="mb-6">
              <span className="text-zinc-400 text-sm font-medium bg-zinc-800 px-2 py-1 rounded">Starter</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white tracking-tight">$0</span>
                <span className="text-zinc-500 text-sm">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500 stroke-[1.5]" /> Up to 2 modules
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500 stroke-[1.5]" /> Basic calendar view
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500 stroke-[1.5]" /> Mobile app access
              </li>
            </ul>
            <Button className="w-full py-2.5 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors text-sm">
              Get Started
            </Button>
          </div>

          {/* Scholar */}
          <div className="bg-zinc-900 border border-yellow-300/30 rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_-15px_rgba(253,224,71,0.1)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-yellow-300 rounded-full text-[10px] font-bold text-zinc-900 tracking-wide uppercase border border-yellow-400">
              Most Popular
            </div>
            <div className="mb-6">
              <span className="text-yellow-300 text-sm font-medium bg-yellow-300/10 px-2 py-1 rounded border border-yellow-300/20">Scholar</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white tracking-tight">$8</span>
                <span className="text-zinc-500 text-sm">/mo</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-yellow-300 stroke-[1.5]" /> Unlimited modules
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-yellow-300 stroke-[1.5]" /> AI Auto-Reschedule
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-yellow-300 stroke-[1.5]" /> Exam Readiness Score
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-yellow-300 stroke-[1.5]" /> Focus Mode Analytics
              </li>
            </ul>
            <Button className="w-full py-2.5 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors text-sm">
              Start Free Trial
            </Button>
          </div>

          {/* Campus */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:bg-zinc-900 transition-colors">
            <div className="mb-6">
              <span className="text-zinc-400 text-sm font-medium bg-zinc-800 px-2 py-1 rounded">Campus</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white tracking-tight">Custom</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500 stroke-[1.5]" /> University SSO
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500 stroke-[1.5]" /> Admin Dashboard
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <Check className="w-4 h-4 text-zinc-500 stroke-[1.5]" /> Cohort Analytics
              </li>
            </ul>
            <Button className="w-full py-2.5 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors text-sm">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
