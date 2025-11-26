"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";
import { signInWithGoogle } from "@/lib/supabaseGoogleAuth";
import { signUp } from "@/lib/supabaseAuth";
import { toast } from "sonner";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    setLoading(true);

    const { error } = await signUp(email, password, firstName, lastName);

    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Check your email to confirm.");
      // redirect or reload
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();
    setLoading(false);
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-yellow-900/10 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] mask-[linear-gradient(to_bottom,white,transparent)]" />
      </div>

      {/* Card Area */}
      <div className="relative z-10 w-full max-w-lg p-6 animate-enter">
        {/* Logo */}
        <div
          className="flex justify-center mb-8 cursor-pointer"
          onClick={() => console.log("Show landing")}
        >
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-zinc-900 shadow-lg shadow-white/10">
            <Zap className="w-6 h-6 text-zinc-900" />
          </div>
        </div>

        <Card className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Top gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600" />

          {/* Header */}
          <div className="text-center mb-2">
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Create an account
            </h2>
            <p className="text-sm text-zinc-500 mt-2">
              Start organizing your studies in seconds
            </p>
          </div>
          {/* Social Buttons */}
          <div className="space-y-4">
            <Button 
             onClick={handleGoogle}
             className="w-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white text-sm font-medium py-5 cursor-pointer rounded-lg transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900 px-2 text-zinc-500">Or continue with</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  First name
                </label>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-5 text-sm text-white focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Last name
                </label>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-5 text-sm text-white focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Email address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-5 text-sm text-white focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-5 text-sm text-white focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/50 transition-all"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-medium py-5 rounded-lg transition-all shadow-lg shadow-white/10 mt-2"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center text-xs text-zinc-500 ">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-white hover:underline decoration-yellow-300 underline-offset-4"
            >
              Log in
            </Link>
          </p>
        </Card>
        {/* Footer links */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-zinc-500">
          <a href="#" className="hover:text-zinc-300">Terms</a>
          <a href="#" className="hover:text-zinc-300">Privacy</a>
          <a href="#" className="hover:text-zinc-300">Contact</a>
        </div>
      </div>
    </div>
  );
}
