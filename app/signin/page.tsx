"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/supabaseGoogleAuth";
import { signIn } from "@/lib/supabaseAuth";
import { useState } from "react";
import { toast } from "sonner";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signed in successfully!");
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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 to-green-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-green-700 mb-2">Sign In</h1>
        <Button variant="outline" className="w-full flex gap-2 justify-center" onClick={handleGoogle} disabled={loading}>
          <span className="text-green-700 font-semibold">Sign in with Google</span>
        </Button>
        <div className="flex items-center gap-2 text-zinc-400 text-xs">
          <span className="flex-1 h-px bg-zinc-200" />or<span className="flex-1 h-px bg-zinc-200" />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-green-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg" onClick={handleSignIn} disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
          <div className="text-center text-sm mt-2">
            Don&#39;t have an account? <a href="/signup" className="text-green-700 font-semibold hover:underline">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
