"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/supabaseAuth"; // your supabaseAuth signOut function
import { toast } from "sonner";

export const SettingsTab = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    const { error } = await signOut();
    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed out successfully!");
      router.push("/auth/signin"); // redirect to login page
    }
  };

  return (
    <div className="hidden-section animate-enter">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mx-auto">
        <h3 className="text-white font-medium text-xl mb-6">Settings</h3>
        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="flex justify-between items-center pb-6 border-b border-zinc-800">
            <div>
              <div className="text-sm text-white font-medium">Email Notifications</div>
              <div className="text-xs text-zinc-500">Receive weekly study summaries</div>
            </div>
            <div className="w-10 h-5 bg-yellow-300 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-3 h-3 bg-zinc-900 rounded-full"></div>
            </div>
          </div>

          {/* Dark Mode */}
          <div className="flex justify-between items-center pb-6 border-b border-zinc-800">
            <div>
              <div className="text-sm text-white font-medium">Dark Mode</div>
              <div className="text-xs text-zinc-500">Always on</div>
            </div>
            <div className="w-10 h-5 bg-yellow-300 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-3 h-3 bg-zinc-900 rounded-full"></div>
            </div>
          </div>

          {/* Sign Out */}
          <button
            className="text-sm text-red-400 hover:text-red-300"
            onClick={handleSignOut}
            disabled={loading}
          >
            {loading ? "Signing out..." : "Sign out"}
          </button>
        </div>
      </div>
    </div>
  );
};
