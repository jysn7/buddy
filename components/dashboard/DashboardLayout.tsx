"use client";
import { useState } from "react";

import { TopBar } from "./TopBar";
import { OverviewTab } from "../Tabs/OverviewTab";
import { Sidebar } from "../sidebar/Sidebar";
import { ModulesTab } from "../Tabs/ModulesTabs";
import { ScheduleTab } from "../Tabs/ScheduleTabs";
import { SettingsTab } from "../Tabs/SettingsTab";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("overview");

  const generateTimetable = () => {
    console.log("Generate Guide clicked");
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-950">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <TopBar generateTimetable={generateTimetable} />
        <main className="flex-1 overflow-y-auto p-8 relative">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "modules" && <ModulesTab />}
          {activeTab === "schedule" && <ScheduleTab />}
          {activeTab === "settings" && <SettingsTab />}
        </main>
      </div>
    </div>
  );
}
