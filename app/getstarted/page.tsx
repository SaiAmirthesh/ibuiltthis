"use client";

import { SignIn } from "@clerk/nextjs";
import Aurora from "@/components/auth/Aurora";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignInPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Aurora Background Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Aurora colorStops={['#3B82F6', '#2563EB', '#3B82F6']} speed={0.5} />
        </div>

        {/* Background aesthetics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-50 mix-blend-screen z-0" />

        {/* Top Right Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white/80 hover:text-white text-sm backdrop-blur-md">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Centered Login Form Wrapper */}
        <div className="w-full max-w-md relative z-10 flex flex-col items-center pb-12">
          <div className="flex justify-center mb-6">
            <h1 className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">
              IBuilt<span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">This</span>
            </h1>
          </div>

          <SignIn
            routing="hash"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary hover:bg-primary/90 text-white shadow-none',
                card: 'bg-black border border-white/10 shadow-2xl w-full p-8 rounded-2xl flex flex-col gap-6',
                headerTitle: 'hidden',
                headerSubtitle: 'text-white/60 text-center tracking-tight text-xl mb-4',
                socialButtonsBlockButton: 'h-12 bg-[#222222] border-white/5 text-white hover:bg-[#2a2a2a] rounded-sm transition-all',
                socialButtonsBlockButtonText: 'text-white/90 font-medium text-sm',
                dividerLine: 'bg-white/10',
                dividerText: 'text-white/40',
                formFieldLabel: 'text-white/80',
                formFieldInput: 'bg-[#111111] border-white/5 text-white placeholder:text-white/40 focus:border-primary/50 h-12 rounded-sm',
                footerActionText: 'text-white/60',
                footerActionLink: 'text-primary hover:text-primary/80 font-medium',
                identityPreviewText: 'text-white',
                identityPreviewEditButtonIcon: 'text-primary',
                formFieldInputShowPasswordButton: 'text-white/60 hover:text-white',
                rootBox: 'w-full',
                socialButtonsProviderIcon__github: 'filter invert',
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
