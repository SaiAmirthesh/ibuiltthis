"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, Sparkles, Layers, Shield, Database, Cpu, ArrowRight } from "lucide-react";
import { projectsData, Project } from "@/data/projects";

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", "Full Stack", "Backend", "Cloud"];

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter(p => p.categories.includes(selectedCategory) || p.category === selectedCategory);

    return (
        <section id="projects" className="py-28 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Background lighting */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">
                            Primary Projects.<br />
                            <span className="text-white/40 font-light">Engineered for reliability & scale.</span>
                        </h2>
                    </motion.div>

                    
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-[#0a0a0a] border border-white/10 hover:border-primary/40 rounded-3xl p-8 md:p-9 flex flex-col justify-between transition-all duration-300 group relative overflow-hidden backdrop-blur-md shadow-xl hover:shadow-[0_0_30px_rgba(103,232,249,0.15)]"
                        >
                            {/* Hover gradient backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div>
                                {/* Header badge row */}
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.categories.map((c) => (
                                            <span
                                                key={c}
                                                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-white/5 hover:bg-primary/20 text-white/80 hover:text-primary rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-200"
                                            aria-label={`GitHub repo for ${project.name}`}
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {project.name}
                                </h3>

                                <p className="text-white/60 text-sm md:text-base font-light mt-2 mb-6 leading-relaxed">
                                    {project.tagline}
                                </p>

                                {/* Problem & Approach Highlights */}
                                {project.problem && project.approach && (
                                    <div className="space-y-3 mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs md:text-sm">
                                        <div>
                                            <span className="text-primary/90 font-semibold block mb-0.5">Problem:</span>
                                            <p className="text-white/60 font-light leading-relaxed">{project.problem}</p>
                                        </div>
                                        <div>
                                            <span className="text-primary/90 font-semibold block mb-0.5">Approach:</span>
                                            <p className="text-white/60 font-light leading-relaxed">{project.approach}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Key Features Bullet list */}
                                {project.features && (
                                    <ul className="space-y-1.5 mb-6 text-xs md:text-sm text-white/70 font-light">
                                        {project.features.slice(0, 3).map((f, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">▸</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Tech Stack Chips & Action Link */}
                            <div className="pt-4 border-t border-white/10">
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-white/70 border border-white/10 font-mono"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                                    >
                                        <span>View Repository</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
