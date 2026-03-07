"use client";

import Aurora from "@/components/auth/Aurora";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGithubSignIn = async () => {
    setLoading(true);
    try {
      // try common method exposed by auth client (best-effort), fallback to simple redirect
      const anySignIn = signIn as any;
      if (anySignIn?.oauth) {
        await anySignIn.oauth({ provider: "github", fetchOptions: { onSuccess: () => router.push("/dashboard"), onError: (ctx: any) => { alert(ctx?.error?.message || "Sign in failed"); setLoading(false); } } });
      } else if (anySignIn?.github) {
        await anySignIn.github();
      } else {
        // fallback: redirect to an API route that starts the OAuth flow (implement server-side)
        window.location.href = "/api/auth/github";
      }
    } catch (err) {
      // generic fallback handling
      console.error(err);
      alert("GitHub sign in failed");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Aurora Background Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Aurora colorStops={["#3B82F6", "#2563EB", "#3B82F6"]} speed={0.5} />
        </div>

        {/* Decorative background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-50 mix-blend-screen z-0" />

        {/* Left side image */}
        <div className="absolute left-0 top-0 bottom-0 w-40 md:w-72 lg:w-96 overflow-hidden z-0 pointer-events-none">
          <img src="/back.jpeg" alt="decor" className="h-full w-full object-cover opacity-40" />
        </div>

        {/* Right side image */}
        <div className="absolute right-0 top-0 bottom-0 w-40 md:w-72 lg:w-96 overflow-hidden z-0 pointer-events-none">
          <img src="/back.jpeg" alt="decor" className="h-full w-full object-cover opacity-40" />
        </div>

        {/* Top Left Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white/80 hover:text-white text-sm backdrop-blur-md">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Centered Login Wrapper */}
        <div className="w-full max-w-md relative z-10 flex flex-col items-center pb-12">
          <div className="flex justify-center mb-6">
            <h1 className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">
              IBuilt<span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">This</span>
            </h1>
          </div>

          <div className="bg-black border border-white/10 shadow-2xl w-full p-8 rounded-2xl flex flex-col gap-6">
            <h2 className="text-white/90 text-center tracking-tight text-xl mb-2 font-bold">Sign in with GitHub</h2>

            <div className="w-full flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={handleGithubSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-black/80 hover:bg-black/70 border border-white/10 text-white h-12 rounded-sm font-medium transition-colors"
              >
                {loading ? "Signing in..." : "Continue with GitHub"}
              </button>

              <p className="text-white/60 text-sm text-center">You'll be redirected to GitHub to authorize access.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
