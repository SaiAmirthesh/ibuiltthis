"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Palette, Box } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Connect Repo",
            description: "Link your GitHub or GitLab repository, or deploy via our CLI. We instantly detect your framework and build settings.",
            icon: <Terminal className="w-6 h-6 text-primary" />,
        },
        {
            number: "02",
            title: "Design Showcase",
            description: "Use our interactive studio to extract the best visual parts of your app. Add 3D layers, custom domains, and styling.",
            icon: <Palette className="w-6 h-6 text-primary" />,
        },
        {
            number: "03",
            title: "Ship to World",
            description: "Hit publish and instantly join thousands of other creators on the ibuiltthis homepage. Start collecting feedback and views.",
            icon: <Box className="w-6 h-6 text-primary" />,
        },
    ];

    return (
        <section id="how-it-works" className="py-24 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4">
                            From local repository<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">to global stage.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-white/60 font-light max-w-md">
                        Three simple steps to transform your raw code into an interactive, high-fidelity project showcase.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

                    {/* Connecting Line pattern (desktop only) */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
                    />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Node */}
                            <div className="w-20 h-20 rounded-full bg-[#0a0a0a] border border-white/10 group-hover:border-primary/50 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(var(--primary),0.2)] mx-auto md:mx-0">
                                {step.icon}
                                <div className="absolute -top-3 -right-3 text-sm font-bold text-white/20 group-hover:text-primary/40 transition-colors duration-500">
                                    {step.number}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-white/90 mb-4 group-hover:text-primary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed font-light">
                                    {step.description}
                                </p>
                            </div>

                            {/* Mobile Separator */}
                            {index !== steps.length - 1 && (
                                <div className="md:hidden flex justify-center mt-12 text-white/10">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
