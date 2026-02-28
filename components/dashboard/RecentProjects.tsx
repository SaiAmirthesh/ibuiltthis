"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MoreVertical } from "lucide-react";
import Link from "next/link";

export default function RecentProjects() {
    const projects = [
        { name: "Aceternity UI Clone", views: 1240, status: "Live", date: "2 hrs ago" },
        { name: "Scrollytelling Engine", views: 890, status: "Draft", date: "1 day ago" },
        { name: "AI Web Builder", views: 3421, status: "Live", date: "3 days ago" },
        { name: "E-Commerce Microservice", views: 156, status: "Live", date: "1 week ago" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full bg-[#111111]/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden mt-8"
        >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white/90 tracking-tight">Recent Projects</h3>
                <Link href="/dashboard/projects" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    View All
                </Link>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/5 text-sm font-medium text-white/40 uppercase tracking-wider">
                            <th className="px-6 py-4">Project Name</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Views</th>
                            <th className="px-6 py-4 hidden md:table-cell">Last Updated</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, i) => (
                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-white/90 flex items-center gap-2">
                                        {project.name}
                                        {project.status === "Live" && (
                                            <ExternalLink className="w-3.5 h-3.5 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${project.status === "Live"
                                            ? "bg-primary/10 text-primary border-primary/20"
                                            : "bg-white/5 text-white/50 border-white/10"
                                        }`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-white/70 font-mono text-sm">
                                    {project.views.toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-white/40 text-sm hidden md:table-cell">
                                    {project.date}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}
