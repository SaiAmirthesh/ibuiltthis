"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, MapPin, Download, ExternalLink, Award, Sparkles } from "lucide-react";
import { bioData } from "@/data/bio";

export default function AboutSection() {
    return (
        <section id="about" className="py-28 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

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
                        I learn by building.<br />
                        <span className="text-white/40 font-light">Always exploring, always engineering.</span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Bio Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-md"
                    >
                        <div className="space-y-5 text-white/70 text-base md:text-lg leading-relaxed font-light">
                            <p>
                                I am a <strong className="text-white font-medium">Computer Science student</strong> at{" "}
                                <span className="text-primary font-medium">Vellore Institute of Technology (VIT)</span> specializing in{" "}
                                <span className="text-white">AI & Robotics</span>, focused on{" "}
                                <span className="text-primary font-medium">backend systems</span> and software engineering.
                            </p>
                            <p>
                                My core philosophy is simple: <strong className="text-white font-medium">I learn by building</strong>. Rather than only learning technologies theoretically, I build practical applications to understand how systems work from the inside out — from designing scalable APIs and databases to authentication and cloud infrastructure.
                            </p>
                            <p>
                                I am driven by curiosity and <strong className="text-white font-medium">love exploring new technologies</strong> across backend frameworks, distributed systems, and applied AI, constantly experimenting to build reliable software that solves real problems.
                            </p>
                        </div>

                        {/* Resume & Link Action Bar */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                            <a
                                href="/Sai_Resume.pdf"
                                download="Sai_Amirthesh_Resume.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black hover:bg-primary/90 font-semibold text-sm rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(103,232,249,0.3)] hover:shadow-[0_0_30px_rgba(103,232,249,0.5)]"
                            >
                                <Download className="w-4 h-4" />
                                Download Full Resume (PDF)
                            </a>
                            <a
                                href={bioData.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-full transition-colors"
                            >
                                <span>LinkedIn</span>
                                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                            </a>
                            <a
                                href={bioData.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-full transition-colors"
                            >
                                <span>GitHub</span>
                                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Quick Cards / Status */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 grid grid-cols-1 gap-4"
                    >
                        {/* Education Card */}
                        <div className="bg-[#0a0a0a] border border-white/10 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-xl border border-primary/20">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-wider text-primary font-semibold">Education</span>
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30">
                                            <Award className="w-3 h-3" /> CGPA: 9.44
                                        </span>
                                    </div>
                                    <h3 className="text-base font-semibold text-white mt-1">
                                        {bioData.education.institution}
                                    </h3>
                                    <p className="text-xs text-white/60 mt-0.5">
                                        {bioData.education.degree}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Next Role Card */}
                        <div className="bg-[#0a0a0a] border border-primary/30 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-6 relative overflow-hidden">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/20 text-primary rounded-xl border border-primary/30 shadow-[0_0_15px_rgba(103,232,249,0.3)]">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">Upcoming Opportunity</span>
                                    <h3 className="text-base font-semibold text-white mt-1">
                                        {bioData.status.nextRole}
                                    </h3>
                                    <p className="text-xs text-white/60 mt-0.5">
                                        Focusing on software engineering, distributed systems, and core infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Location & Status Card */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <div>
                                        <span className="text-xs text-white/40 block">Location</span>
                                        <span className="text-sm font-medium text-white/90">VIT · India</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Code className="w-5 h-5 text-primary" />
                                    <div>
                                        <span className="text-xs text-white/40 block">Stack</span>
                                        <span className="text-sm font-medium text-white/90">Java · Spring · AI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
