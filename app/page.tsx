"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { LucideArrowRight, LucideZap } from "lucide-react";

export default function LandingPage() {

  // Mock functions for demonstration
  const showDashboard = () => {
    console.log("Navigate to dashboard");
  };

  return (
    <div id="landing-page" className="min-h-screen flex flex-col relative overflow-hidden bg-black">

      {/* Hero */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-medium text-yellow-300 mb-8 animate-enter delay-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
          </span>
          AI-Powered Study Scheduling
        </div>

        <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 max-w-4xl leading-[1.1] animate-enter delay-200">
          Master your exams with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
            intelligent planning.
          </span>
        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed animate-enter delay-300">
          Stop stressing about when to study. Input your modules and exams, and let Wise generate the perfect color-coded timetable optimized for retention.
        </p>

        <Button
          onClick={showDashboard}
          className="group relative px-8 py-4 bg-yellow-300 hover:bg-yellow-400 text-zinc-950 font-medium rounded-full transition-all hover:shadow-[0_0_40px_-10px_rgba(253,224,71,0.5)] flex items-center gap-2 text-base animate-enter delay-400"
        >
          Get Started for Free
          <LucideArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>

        {/* Hero Visual Preview */}
        <div className="mt-20 w-full max-w-5xl relative group cursor-default animate-enter delay-500">
          <div className="absolute -inset-1 bg-gradient-to-b from-zinc-700 to-transparent rounded-3xl opacity-20 blur-lg"></div>
          <Card className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-4 md:p-8 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center mb-8 opacity-50">
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="h-2 w-32 bg-zinc-700 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-zinc-800 h-48 rounded-2xl border border-zinc-700/50 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-yellow-300/20 border-t-yellow-300"></div>
              </div>
              <div className="bg-zinc-800 h-48 rounded-2xl border border-zinc-700/50 flex flex-col p-6 gap-3">
                <div className="h-4 w-1/2 bg-zinc-700 rounded"></div>
                <div className="h-4 w-3/4 bg-zinc-700 rounded"></div>
                <div className="mt-auto h-8 w-full bg-zinc-700 rounded"></div>
              </div>
              <div className="bg-zinc-800 h-48 rounded-2xl border border-zinc-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/10 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
