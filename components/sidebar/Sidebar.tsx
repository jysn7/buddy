"use client";
import Image from "next/image";
import {
  Infinity as LucideInfinity,
  Edit2 as LucideEdit2,
  LayoutGrid as LucideLayoutGrid,
  BookOpen as LucideBookOpen,
  CalendarDays as LucideCalendarDays,
  Settings2 as LucideSettings2,
  Moon as LucideMoon,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800/50 flex flex-col justify-between p-6 hidden md:flex animate-enter">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 text-white">
          <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
            <LucideInfinity className="w-4 h-4 text-zinc-900" />
          </div>
          <span className="font-medium tracking-tight text-lg">Wise</span>
        </div>

        {/* User Profile */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-3 group cursor-pointer">
            {/* <Image
              src=""
              alt="User"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-4 border-zinc-800 bg-zinc-800 group-hover:border-yellow-300 transition-colors"
            /> */}
            <div className="absolute bottom-0 right-0 bg-zinc-800 text-white p-1.5 rounded-full border border-zinc-700">
              <LucideEdit2 className="w-3 h-3" />
            </div>
          </div>
          <h3 className="text-white font-medium text-base">Alex Student</h3>
          <p className="text-zinc-500 text-sm">Pro Plan</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === "overview"
                ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            <LucideLayoutGrid className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Dashboard
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === "modules"
                ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
            }`}
            onClick={() => setActiveTab("modules")}
          >
            <LucideBookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Modules
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === "schedule"
                ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
            }`}
            onClick={() => setActiveTab("schedule")}
          >
            <LucideCalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Schedule
          </button>
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              activeTab === "settings"
                ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <LucideSettings2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Settings
          </button>
        </nav>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between bg-zinc-950 rounded-full p-1 border border-zinc-800">
        <span className="text-[10px] text-zinc-500 pl-3">Light</span>
        <div className="flex items-center gap-2">
          <button className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
            <LucideMoon className="w-3 h-3 text-zinc-900 fill-zinc-900" />
          </button>
          <span className="text-[10px] text-zinc-300 pr-3">Dark</span>
        </div>
      </div>
    </aside>
  );
};
