"use client";

export default function AboutView() {
  return (
    <div id="about-view" className="hidden-section min-h-screen pt-32 pb-20 relative bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 animate-enter">
        <h2 className="text-4xl font-medium text-white tracking-tight mb-8">Built for the obsessive</h2>

        <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
          <p>
            Wise started in a university library at 3 AM. We realized that students weren&#39;t struggling with the content, they were struggling with the{" "}
            <span className="text-white font-medium">strategy</span>.
          </p>
          <p>
            Most timetables are static. They don&#39;t account for burnout, sudden deadlines, or the fact that you might learn Physics faster than History. We needed a system that breathed.
          </p>
          <p>
            We built Wise to be the brain behind the books. An adaptive system that treats your time as a finite resource, optimizing every hour for maximum retention using proven cognitive science.
          </p>
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-16">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8 text-center">
            Trusted by students at
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">MIT</div>
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">STANFORD</div>
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">CAMBRIDGE</div>
            <div className="h-12 flex items-center justify-center font-bold text-zinc-600">ETH ZÜRICH</div>
          </div>
        </div>
      </div>
    </div>
  );
}
