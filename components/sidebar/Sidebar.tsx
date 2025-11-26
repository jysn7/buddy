"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Infinity as LucideInfinity,
  Edit2 as LucideEdit2,
  LayoutGrid as LucideLayoutGrid,
  BookOpen as LucideBookOpen,
  CalendarDays as LucideCalendarDays,
  Settings2 as LucideSettings2,
  Moon as LucideMoon,
  Menu as LucideMenu,
  X as LucideX,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="w-64 bottom-0 top-0 relative bg-zinc-900 border-r border-zinc-800/50 md:flex flex-col p-6 hidden animate-enter h-screen">
        <div className="flex flex-col h-full">
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
              <Image
                src="/pic.jpg"
                alt="User"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full border-4 border-zinc-800 bg-zinc-800 group-hover:border-yellow-300 transition-colors"
              />
              <div className="absolute bottom-0 right-0 bg-zinc-800 text-white p-1.5 rounded-full border border-zinc-700">
                <LucideEdit2 className="w-3 h-3" />
              </div>
            </div>
            <h3 className="text-white font-medium text-base">Jayson</h3>
            <p className="text-zinc-500 text-sm">Student Plan</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 flex-1 overflow-y-auto pb-4">
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <LucideLayoutGrid className="w-5 h-5" />
              Dashboard
            </button>

            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "modules"
                  ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
              }`}
              onClick={() => setActiveTab("modules")}
            >
              <LucideBookOpen className="w-5 h-5" />
              Modules
            </button>

            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "schedule"
                  ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
              }`}
              onClick={() => setActiveTab("schedule")}
            >
              <LucideCalendarDays className="w-5 h-5" />
              Schedule
            </button>

            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "settings"
                  ? "bg-zinc-800 text-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)] border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-800"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <LucideSettings2 className="w-5 h-5" />
              Settings
            </button>
          </nav>
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between bg-zinc-950 rounded-full p-1 border border-zinc-800 mt-4">
          <span className="text-[10px] text-zinc-500 pl-3">Light</span>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
              <LucideMoon className="w-3 h-3 text-zinc-900 fill-zinc-900" />
            </button>
            <span className="text-[10px] text-zinc-300 pr-3">Dark</span>
          </div>
        </div>
      </aside>

      {/* ----------------------------------------------------------- */}
      {/* MOBILE SIDEBAR (UNCHANGED LAYOUT — SLIDE IN VERSION) */}
      {/* ----------------------------------------------------------- */}

      {/* Mobile toggle button (you can move this anywhere) */}
      <button
        onClick={toggle}
        className="md:hidden fixed top-4 left-4 z-75 text-white bg-zinc-900 p-2 rounded-lg border border-zinc-700 shadow-lg"
      >
        <LucideMenu className="w-5 h-5" />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-70 transform transition-transform duration-300 md:hidden bg-zinc-900 border-r border-zinc-800 w-64
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close */}
          <button onClick={toggle} className="text-zinc-400 hover:text-white absolute top-5 right-5">
            <LucideX className="w-5 h-5" />
          </button>

          {/* Same content EXACTLY as desktop */}
          <div className="flex items-center gap-2 mb-10 mt-2 text-white">
            <div className="w-6 h-6 bg-yellow-300 rounded flex items-center justify-center">
              <LucideInfinity className="w-4 h-4 text-zinc-900" />
            </div>
            <span className="font-medium tracking-tight text-lg">Wise</span>
          </div>

          {/* User Profile */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-3 group cursor-pointer">
              <Image
                src="/pic.jpg"
                alt="User"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full border-4 border-zinc-800 bg-zinc-800 group-hover:border-yellow-300 transition-colors"
              />
              <div className="absolute bottom-0 right-0 bg-zinc-800 text-white p-1.5 rounded-full border border-zinc-700">
                <LucideEdit2 className="w-3 h-3" />
              </div>
            </div>
            <h3 className="text-white font-medium text-base">Jayson</h3>
            <p className="text-zinc-500 text-sm">Student Plan</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 flex-1 overflow-y-auto">
            <button
              onClick={() => {
                setActiveTab("overview");
                toggle();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-zinc-800 text-white border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <LucideLayoutGrid className="w-5 h-5" />
              Dashboard
            </button>

            <button
              onClick={() => {
                setActiveTab("modules");
                toggle();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "modules"
                  ? "bg-zinc-800 text-white border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <LucideBookOpen className="w-5 h-5" />
              Modules
            </button>

            <button
              onClick={() => {
                setActiveTab("schedule");
                toggle();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "schedule"
                  ? "bg-zinc-800 text-white border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <LucideCalendarDays className="w-5 h-5" />
              Schedule
            </button>

            <button
              onClick={() => {
                setActiveTab("settings");
                toggle();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                activeTab === "settings"
                  ? "bg-zinc-800 text-white border border-zinc-700/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <LucideSettings2 className="w-5 h-5" />
              Settings
            </button>
          </nav>

          {/* Dark Mode */}
          <div className="flex items-center justify-between bg-zinc-950 rounded-full p-1 border border-zinc-800 mt-6">
            <span className="text-[10px] text-zinc-500 pl-3">Light</span>
            <div className="flex items-center gap-2">
              <button className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
                <LucideMoon className="w-3 h-3 text-zinc-900 fill-zinc-900" />
              </button>
              <span className="text-[10px] text-zinc-300 pr-3">Dark</span>
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={toggle}
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
};
