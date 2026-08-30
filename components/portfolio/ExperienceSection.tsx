"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight, Server, ShieldCheck } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-28 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">
                        Experience & Internships.<br />
                        <span className="text-white/40 font-light">Real-world systems engineering.</span>
                    </h2>
                </motion.div>

                {/* Timeline Cards */}
                <div className="space-y-8">
                    {experienceData.map((exp, idx) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                                exp.status === "Incoming"
                                    ? "bg-gradient-to-r from-primary/10 via-[#0a0a0a] to-[#0a0a0a] border-primary/40 shadow-[0_0_30px_rgba(103,232,249,0.1)]"
                                    : "bg-[#0a0a0a] border-white/10 hover:border-white/20"
                            }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                            {exp.company}
                                        </h3>
                                        <span
                                            className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                                                exp.status === "Incoming"
                                                    ? "bg-primary/20 text-primary border-primary/50 shadow-[0_0_12px_rgba(103,232,249,0.4)]"
                                                    : "bg-white/5 text-white/70 border-white/10"
                                            }`}
                                        >
                                            {exp.status === "Incoming" ? "Upcoming Role" : "Completed"}
                                        </span>
                                    </div>
                                    <p className="text-primary font-medium text-base md:text-lg mt-1">
                                        {exp.role}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 w-fit">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-6">
                                {exp.description}
                            </p>

                            {/* Highlights */}
                            <div className="space-y-3 mb-8">
                                {exp.highlights.map((highlight, hIdx) => (
                                    <div key={hIdx} className="flex items-start gap-3 text-white/75 text-sm md:text-base font-light">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 font-mono"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
