"use client";

import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/supabaseAuth";

export function withAuthClient<P extends object>(WrappedComponent: ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const checkSession = async () => {
        const { data: { session } } = await getSession();

        if (!session) {
          router.push("/auth/signin");
        } else {
          setLoading(false);
        }
      };

      checkSession();
    }, [router]);

    if (loading) {
      return (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-zinc-700 border-t-transparent"></div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
