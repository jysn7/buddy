"use client";
import { Card } from "@/components/ui/card";
import { LucideCheckCircle } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    "AI-powered study scheduling",
    "Color-coded timetables for easy tracking",
    "Custom daily availability and session lengths",
    "Progress tracking with completion percentages",
    "Export timetable to CSV or Google Calendar",
    "Mobile responsive and lightweight",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-12">
      <h1 className="text-5xl font-medium text-white tracking-tight max-w-4xl leading-[1.1] mb-6">
        Features Designed for Students
      </h1>
      <p className="text-lg text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
        Wise makes exam preparation effortless. Manage your study sessions with clarity, flexibility, and AI-powered recommendations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {features.map((feature, i) => (
          <Card key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-start gap-3 hover:shadow-lg transition-shadow">
            <LucideCheckCircle className="w-6 h-6 text-yellow-300 mt-1" />
            <span className="text-white font-medium">{feature}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
