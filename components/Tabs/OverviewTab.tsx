"use client";
import { useState } from "react";
import { LucideX } from "lucide-react";

import { WeeklyGoal } from "./modules/WeeklyGoal";
import { AddModule } from "./modules/AddModule";
import { Readiness } from "./modules/Readiness";
import { Progress } from "./modules/Progress";
import { FocusMode } from "./modules/FocusMode";
import { SessionDuration } from "./modules/SessionDuration";

export const OverviewTab = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const modules = [
    { component: <WeeklyGoal />, name: "Weekly Goal" },
    { component: <AddModule />, name: "Add Module" },
    { component: <Readiness />, name: "Readiness" },
    { component: <Progress />, name: "Progress" },
    { component: <FocusMode />, name: "Focus Mode" },
    { component: <SessionDuration />, name: "Session Duration" },
  ];

  const closeModal = () => setActiveModule(null);

  return (
    <div className="block">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {modules.map((mod, i) => (
          <div key={i} onClick={() => setActiveModule(mod.name)} className="cursor-pointer">
            {mod.component}
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-zinc-400 hover:text-yellow-300 z-10"
              onClick={closeModal}
            >
              <LucideX className="w-6 h-6" />
            </button>
            <div className="pointer-events-auto">
              {modules
                .filter((mod) => mod.name === activeModule)
                .map((mod, i) => (
                  <div key={i} className="animate-enter delay-100">
                    {mod.component}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
