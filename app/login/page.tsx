import React from "react";
import SignupFormDemo from "@/components/loginPage/signup-form-demo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Aurora from "@/components/loginPage/Aurora";

export default function LoginPage() {
    return (
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
            <div className="w-full max-w-md relative z-10">
                <SignupFormDemo />
            </div>

        </div>
    );
}
