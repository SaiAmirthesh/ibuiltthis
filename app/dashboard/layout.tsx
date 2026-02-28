import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full bg-[#050505]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Global Dashboard subtle glowing background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

                <div className="flex-1 overflow-y-auto p-6 md:p-10 relative z-10 w-full max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
