"use client";

import { useState } from "react";

import { TopBar } from "./TopBar";
import { OverviewTab } from "../Tabs/OverviewTab";
import { Sidebar } from "../sidebar/Sidebar";
import { ModulesTab } from "../Tabs/ModulesTabs";

import { SettingsTab } from "../Tabs/SettingsTab";
// ...existing code...
import { withAuthClient } from "@/lib/withAuth";
import { ScheduleTab } from "../Tabs/ScheduleTabs";

function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  // ...existing code...

  const generateTimetable = () => {
    console.log("Generate Guide clicked");
  };

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const res = await fetch("/api/profile/get");
  //       if (!res.ok) throw new Error("Failed to fetch profile");
  //       const data = await res.json();
  //       setProfile(data.profile);
  //     } catch (err) {
  //       console.error("Failed to fetch profile", err);
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  // if (!profile) {
  //   return (
  //     <div className="flex items-center justify-center h-screen w-full bg-zinc-950">
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="w-12 h-12 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
  //         <p className="text-yellow-300 text-lg font-medium">Loading your dashboard...</p>
  //       </div>
  //     </div>
  //   );
  // }

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

export default withAuthClient(DashboardLayout);
