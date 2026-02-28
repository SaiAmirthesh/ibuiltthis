"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
  const [loginStep, setLoginStep] = useState<'INITIAL' | 'EMAIL' | 'PASSWORD'>('INITIAL');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginStep === 'EMAIL') {
      setLoginStep('PASSWORD');
    } else if (loginStep === 'PASSWORD') {
      console.log("Form submitted");
    }
  };

  const handleContinueEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoginStep('EMAIL');
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-transparent p-4 md:p-8">
      <div className="flex justify-center mb-6">
        <h1 className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">
          IBuilt<span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">This</span>
        </h1>
      </div>
      <h2 className="text-xl font-medium text-white/80 tracking-tight text-center mb-8">
        Sign in to your account
      </h2>

      <div className="flex flex-row space-x-4 mb-8">
        <button
          className="group/btn relative flex h-12 w-full items-center justify-center space-x-3 rounded-sm bg-[#222222] border border-white/5 px-4 font-medium text-white/90 hover:bg-[#2a2a2a] transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          type="button"
        >
          <IconBrandGithub className="h-5 w-5 text-white/90 rounded-sm" />
          <span className="text-sm">
            GitHub
          </span>
          <BottomGradient />
        </button>
        <button
          className="group/btn relative flex h-12 w-full items-center justify-center space-x-3 rounded-sm bg-[#222222] border border-white/5 px-4 font-medium text-white/90 hover:bg-[#2a2a2a] transition-all shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          type="button"
        >
          <IconBrandGoogle className="h-5 w-5 text-white/90" />
          <span className="text-sm">
            Google
          </span>
          <BottomGradient />
        </button>
      </div>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {loginStep === 'INITIAL' && (
          <button
            onClick={handleContinueEmail}
            className="relative block h-12 w-full rounded-sm bg-white font-medium text-black hover:bg-neutral-200 transition-all"
            type="button"
          >
            Continue with Email
          </button>
        )}

        {loginStep !== 'INITIAL' && (
          <LabelInputContainer>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              required
              readOnly={loginStep === 'PASSWORD'}
              className={cn(
                "bg-[#111111] border-white/5 text-white placeholder:text-white/40 focus-visible:ring-primary/50 h-12 rounded-sm",
                loginStep === 'PASSWORD' && "opacity-50 cursor-not-allowed text-white/50"
              )}
            />
          </LabelInputContainer>
        )}

        {loginStep === 'EMAIL' && (
          <button
            className="relative block h-12 w-full rounded-sm bg-white font-medium text-black hover:bg-neutral-200 transition-all mt-2"
            type="submit"
          >
            Continue
          </button>
        )}

        {loginStep === 'PASSWORD' && (
          <>
            <LabelInputContainer className="mt-2">
              <Input
                id="password"
                placeholder="Password"
                type="password"
                required
                className="bg-[#111111] border-white/5 text-white placeholder:text-white/40 focus-visible:ring-primary/50 h-12 rounded-sm"
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-12 w-full rounded-sm bg-primary font-medium text-white shadow-[0px_1px_0px_0px_rgba(255,255,255,0.2)_inset] hover:bg-primary/90 transition-all mt-4"
              type="submit"
            >
              Sign in
              <BottomGradient />
            </button>
          </>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
