"use client";

export default function ContactView() {
  return (
    <div id="contact-view" className="hidden-section min-h-screen pt-32 pb-20 relative bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 animate-enter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-medium text-white tracking-tight mb-6">Get in touch</h2>
            <p className="text-zinc-400 mb-8 font-light">
                      Have a question about the algorithm? Need a team license? Or just want to say hi? We&#39;re here.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-300/50 transition-colors">
                  <i data-lucide="mail" className="w-4 h-4 text-zinc-300 stroke-[1.5]"></i>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="text-sm text-zinc-500">hello@wisestudy.ai</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-yellow-300/50 transition-colors">
                  <i data-lucide="message-square" className="w-4 h-4 text-zinc-300 stroke-[1.5]"></i>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Support</div>
                  <div className="text-sm text-zinc-500">Live Chat (Mon-Fri)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white
                      focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50
                      transition-all placeholder:text-zinc-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white
                      focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50
                      transition-all placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="jane@university.edu"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white
                    focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50
                    transition-all placeholder:text-zinc-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-white
                    focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50
                    transition-all placeholder:text-zinc-700"
                />
              </div>

              <button
                type="button"
                className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium py-2.5 rounded-lg
                  transition-all mt-2 text-sm shadow-lg shadow-white/5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
