"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Database, Brain, Wrench, BookOpen, Check } from "lucide-react";
import { skillCategoriesData } from "@/data/skills";

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState<number>(0);

    const categoryIcons = [
        <Terminal key="lang" className="w-4 h-4" />,
        <Cpu key="back" className="w-4 h-4" />,
        <Database key="db" className="w-4 h-4" />,
        <Brain key="ai" className="w-4 h-4" />,
        <Wrench key="tools" className="w-4 h-4" />,
        <BookOpen key="fund" className="w-4 h-4" />
    ];

    return (
        <section id="skills" className="py-28 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-t border-white/5">
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
                        Skills & Domain Expertise.<br />
                        <span className="text-white/40 font-light">From core backend systems to applied AI.</span>
                    </h2>
                </motion.div>

                {/* Category Navigation Pills */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                    {skillCategoriesData.map((cat, idx) => (
                        <button
                            key={cat.category}
                            onClick={() => setActiveCategory(idx)}
                            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-full transition-all duration-200 ${
                                activeCategory === idx
                                    ? "bg-primary text-black font-semibold shadow-[0_0_20px_rgba(103,232,249,0.4)]"
                                    : "bg-[#0a0a0a] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                            }`}
                        >
                            {categoryIcons[idx % categoryIcons.length]}
                            <span>{cat.category}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {skillCategoriesData[activeCategory].skills.map((skill, sIdx) => (
                        <div
                            key={skill.name}
                            className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden backdrop-blur-md"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                    {skill.name}
                                </h3>
                                <Check className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                                {skill.context}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
