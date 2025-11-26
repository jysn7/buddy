"use client";
export const FocusMode = () => (
  <div className="bg-zinc-800 rounded-4xl p-0 h-72 relative overflow-hidden group md:col-span-2 lg:col-span-1 border border-zinc-700/30">
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Focus"/>
    <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent"></div>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
      <button className="w-full bg-yellow-300 text-zinc-950 font-semibold text-sm py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
        Enter Focus Mode 🎧
      </button>
    </div>
  </div>
);
