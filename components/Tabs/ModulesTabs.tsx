"use client";
import { LucideBookOpen } from "lucide-react";

export const ModulesTab = () => {
  return (
    <div className="hidden-section">
      <div className="w-full bg-zinc-900 border border-zinc-800 rounded-[24px] p-8 animate-enter">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-white font-medium text-xl flex items-center gap-2 mb-1">
              <LucideBookOpen className="w-5 h-5 text-yellow-300" />
              All Modules
            </h3>
            <p className="text-zinc-500 text-sm">Manage your subjects and exam dates.</p>
          </div>
          <button
            onClick={() => console.log("Add New via Dashboard")}
            className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            + Add New via Dashboard
          </button>
        </div>

        {/* Header */}
        <div className="grid grid-cols-12 text-xs font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-800 pb-4 mb-4">
          <div className="col-span-6 pl-4">Subject Name</div>
          <div className="col-span-4">Exam Date</div>
          <div className="col-span-2 text-right pr-4">Action</div>
        </div>

        <div id="fullModuleList" className="space-y-2">
          <div className="text-zinc-500 text-sm text-center py-12 italic">
            No modules found. Add some from the Dashboard!
          </div>
        </div>
      </div>
    </div>
  );
};
