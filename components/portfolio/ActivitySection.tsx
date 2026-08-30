"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Flame, Radio, Code2, CheckCircle2, ArrowUpRight } from "lucide-react";
import { fetchGithubContributions, fetchGithubStats, ContributionDay, GithubStats } from "@/services/githubService";
import { fetchLeetCodeProfile, LeetCodeProfileData } from "@/services/leetcodeService";
import { bioData } from "@/data/bio";

export default function ActivitySection() {
    const [githubStats, setGithubStats] = useState<GithubStats | null>(null);
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const [totalContributions, setTotalContributions] = useState<number>(428);
    const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

    useEffect(() => {
        let isMounted = true;
        async function loadData() {
            try {
                const [ghContribs, ghStats, lcStats] = await Promise.all([
                    fetchGithubContributions("SaiAmirthesh"),
                    fetchGithubStats("SaiAmirthesh"),
                    fetchLeetCodeProfile("SaiAmirthesh")
                ]);

                if (isMounted) {
                    if (ghContribs && ghContribs.contributions.length > 0) {
                        setContributions(ghContribs.contributions);
                        setTotalContributions(ghContribs.total);
                    }
                    setGithubStats(ghStats);
                    setLeetcodeStats(lcStats);
                }
            } catch (err) {
                console.error("Failed to load activity data:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadData();
        return () => { isMounted = false; };
    }, []);

    // Group real contributions into weeks (columns of 7 days each)
    const weeks = useMemo(() => {
        if (!contributions || contributions.length === 0) return [];
        const result: ContributionDay[][] = [];
        for (let i = 0; i < contributions.length; i += 7) {
            result.push(contributions.slice(i, i + 7));
        }
        return result;
    }, [contributions]);

    const levelColor = (level: number) => {
        switch (level) {
            case 4:
                return "bg-[#67e8f9] shadow-[0_0_8px_rgba(103,232,249,0.8)]"; // Max intensity (Bright Cyan)
            case 3:
                return "bg-[#06b6d4]"; // Cyan-500
            case 2:
                return "bg-[#0891b2]"; // Cyan-600
            case 1:
                return "bg-[#164e63]"; // Cyan-900
            default:
                return "bg-white/[0.04]"; // 0 commits
        }
    };

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <section id="activity" className="py-28 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">
                        GitHub Heatmap & LeetCode.<br />
                        <span className="text-white/40 font-light">Real-time open source and algorithmic metrics.</span>
                    </h2>
                </motion.div>

                {/* 1. REAL GITHUB HEATMAP (FULL-WIDTH HERO CARD) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-9 mb-8 backdrop-blur-md relative overflow-hidden shadow-2xl"
                >
                    {/* Header Row with Total Counts */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-3.5">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20 shadow-[0_0_15px_rgba(103,232,249,0.2)]">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    GitHub Contribution Heatmap
                                    <span className="text-xs font-normal text-primary">(@SaiAmirthesh)</span>
                                </h3>
                                <p className="text-xs text-white/50 mt-0.5">
                                    Live activity synced directly from GitHub profile
                                </p>
                            </div>
                        </div>

                        {/* Top Stats Counters */}
                        <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-2xl">
                            <div>
                                <span className="text-[11px] text-white/40 block uppercase">Contributions</span>
                                <span className="text-base font-bold text-primary">
                                    {totalContributions}+
                                </span>
                            </div>
                            <div className="w-[1px] h-7 bg-white/10" />
                            <div>
                                <span className="text-[11px] text-white/40 block uppercase">Repositories</span>
                                <span className="text-base font-bold text-white">
                                    {githubStats?.publicRepos || 27}
                                </span>
                            </div>
                            <div className="w-[1px] h-7 bg-white/10" />
                            <div>
                                <span className="text-[11px] text-white/40 block uppercase">Followers</span>
                                <span className="text-base font-bold text-white">
                                    {githubStats?.followers || 15}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Month Labels & 52-Week Grid */}
                    <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/10">
                        <div className="min-w-[720px]">
                            <div className="flex justify-between text-[11px] text-white/40 font-mono mb-2 px-1">
                                {months.map((m) => (
                                    <span key={m}>{m}</span>
                                ))}
                            </div>

                            {/* 52-Week Contribution Grid */}
                            <div className="flex gap-[3.5px]">
                                {weeks.map((week, wIdx) => (
                                    <div key={wIdx} className="flex flex-col gap-[3.5px]">
                                        {week.map((day, dIdx) => (
                                            <div
                                                key={dIdx}
                                                onMouseEnter={() => setHoveredDay(day)}
                                                onMouseLeave={() => setHoveredDay(null)}
                                                className={`w-3.5 h-3.5 rounded-[2.5px] transition-all duration-150 cursor-pointer ${levelColor(
                                                    day.level
                                                )} hover:scale-125 hover:ring-2 hover:ring-primary`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Heatmap Footer with Scale & Tooltip Info */}
                    <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
                        <div className="flex items-center gap-2">
                            {hoveredDay ? (
                                <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                                    {hoveredDay.count} contribution{hoveredDay.count === 1 ? "" : "s"} on {hoveredDay.date}
                                </span>
                            ) : (
                                <span className="text-white/40">
                                    Hover over any cell on the grid to inspect exact contribution counts
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-[11px] text-white/40">
                                <span>Less</span>
                                <span className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.04]" />
                                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#164e63]" />
                                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0891b2]" />
                                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#06b6d4]" />
                                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#67e8f9]" />
                                <span>More</span>
                            </div>

                            <a
                                href={bioData.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-primary transition-colors text-xs font-medium"
                            >
                                <span>GitHub Profile</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* 2. LEETCODE & LINKEDIN 2-COLUMN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LeetCode Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#0a0a0a] border border-white/10 hover:border-amber-500/40 rounded-3xl p-7 md:p-8 backdrop-blur-md transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">LeetCode</h4>
                                    <p className="text-xs text-white/50">Problem Solving & Algorithms</p>
                                </div>
                            </div>
                            <a
                                href={bioData.links.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/30 transition-all"
                            >
                                <span>Profile</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        {/* Top Metrics Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
                                <span className="text-[11px] text-white/40 block uppercase">Problems Solved</span>
                                <span className="text-2xl font-bold text-white mt-1 block">
                                    {leetcodeStats?.totalSolved || "140"}+
                                </span>
                            </div>
                            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
                                <span className="text-[11px] text-white/40 block uppercase">Contest Rating</span>
                                <span className="text-2xl font-bold text-amber-400 mt-1 block">
                                    {leetcodeStats?.contestRating || "1724"}
                                </span>
                            </div>
                            <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-2xl">
                                <span className="text-[11px] text-white/40 block uppercase">Percentile</span>
                                <span className="text-2xl font-bold text-cyan-400 mt-1 block">
                                    Top 14%
                                </span>
                            </div>
                        </div>

                        {/* Difficulty Breakdown */}
                        <div className="space-y-3 mb-6 bg-white/[0.02] border border-white/5 p-4 rounded-2xl text-xs">
                            <div className="flex items-center justify-between text-white/70">
                                <span className="text-sky-400 font-medium">Easy ({leetcodeStats?.easySolved || 52})</span>
                                <span className="text-amber-400 font-medium">Medium ({leetcodeStats?.mediumSolved || 76})</span>
                                <span className="text-rose-400 font-medium">Hard ({leetcodeStats?.hardSolved || 12})</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex gap-1">
                                <div className="h-full bg-sky-400 rounded-full" style={{ width: "37%" }} />
                                <div className="h-full bg-amber-400 rounded-full" style={{ width: "54%" }} />
                                <div className="h-full bg-rose-400 rounded-full" style={{ width: "9%" }} />
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="flex flex-wrap gap-2">
                            {["Dynamic Programming", "Graphs & Trees", "Backtracking", "Two Pointers", "Binary Search"].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 font-mono"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* LinkedIn & Professional Connect Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#0c1e33] border border-sky-500/30 rounded-3xl p-7 md:p-8 backdrop-blur-md flex flex-col justify-between shadow-2xl relative overflow-hidden"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-sky-500/10 text-sky-400 rounded-2xl border border-sky-500/30 shadow-[0_0_15px_rgba(14,165,233,0.25)]">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Professional Network</h4>
                                        <p className="text-xs text-white/50">LinkedIn & Industry Connections</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                                    Open to Connect
                                </span>
                            </div>

                            <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-6">
                                Connecting with software engineers, system architects, and technical recruiters. Feel free to reach out regarding internships, full-stack architectures, and distributed systems engineering.
                            </p>

                            <div className="space-y-3 mb-8 text-xs md:text-sm text-white/75 font-light">
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                                    <span>Incoming Software Engineering Intern @ Cisco (2026)</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                                    <span>Completed Software Development Internship @ Hubino</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                                    <span>B.Tech CSE (AI & Robotics) @ VIT · CGPA 9.44</span>
                                </div>
                            </div>
                        </div>

                        <a
                            href={bioData.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm rounded-2xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                        >
                            <span>Connect with Sai Amirthesh on LinkedIn</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
