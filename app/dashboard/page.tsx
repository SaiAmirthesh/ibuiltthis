import React, { Suspense } from "react";
import MetricCard from "@/components/dashboard/MetricCard";
import RecentProjects from "@/components/dashboard/RecentProjects";
import { currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";

export default async function DashboardOverview() {
    const user = await currentUser();
    const firstName = user?.firstName || "Creator";

    return (
        <div className="flex flex-col gap-8 pb-12">
            <Suspense>

                {/* Header / Intro */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/90 mb-2">
                            Welcome back, <span className="text-primary">{firstName}</span>.
                        </h1>
                        <p className="text-white/50 font-light text-lg">
                            Here&apos;s what&apos;s happening with your showcases today.
                        </p>
                    </div>

                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]">
                        <Plus className="w-5 h-5" />
                        New Project
                    </button>
                </div>

                {/* Metrics Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    <MetricCard
                        title="Total Views"
                        value="45.2k"
                        trend="+12.5%"
                        isPositive={true}
                        delay={0.0}
                    />
                    <MetricCard
                        title="Likes Received"
                        value="2,841"
                        trend="+5.2%"
                        isPositive={true}
                        delay={0.1}
                    />
                    <MetricCard
                        title="Active Projects"
                        value="12"
                        trend="0%"
                        isPositive={true}
                        delay={0.2}
                    />
                    <MetricCard
                        title="Bounce Rate"
                        value="42%"
                        trend="-2.4%"
                        isPositive={false}
                        delay={0.3}
                    />
                </div>

                {/* Main Content Area */}
                <RecentProjects />

            </Suspense>
        </div>
    );
}
