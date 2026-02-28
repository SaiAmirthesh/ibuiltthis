"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Layout, Zap } from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "Showcase in 4K",
            description: "Upload high-resolution videos, interactive canvas elements, and flawless image sequences to show exactly how your product feels.",
            icon: <Layout className="w-8 h-8 text-primary" />,
            colSpan: "md:col-span-2 md:row-span-2",
            bgClass: "bg-gradient-to-br from-primary/10 to-transparent",
        },
        {
            title: "Developer First",
            description: "Export clean Next.js, React, or Vanilla HTML/CSS snippets instantly. Built for the modern web stack.",
            icon: <Code className="w-8 h-8 text-white/80" />,
            colSpan: "md:col-span-1 md:row-span-1",
            bgClass: "bg-[#0a0a0a]",
        },
        {
            title: "Lightning Fast",
            description: "Global CDN delivery ensures your projects load instantly worldwide without compromise.",
            icon: <Zap className="w-8 h-8 text-white/80" />,
            colSpan: "md:col-span-1 md:row-span-1",
            bgClass: "bg-[#0a0a0a]",
        },
        {
            title: "Build your Audience",
            description: "Connect a custom domain, build email lists, and drop new releases directly to your loyal followers on the globe.",
            icon: <Globe className="w-8 h-8 text-white/80" />,
            colSpan: "md:col-span-2 md:row-span-1",
            bgClass: "bg-gradient-to-r from-[#0a0a0a] to-primary/5",
        },
    ];

    return (
        <section id="features" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4">
                        Everything you need.<br />
                        <span className="text-white/40 font-light">Nothing you don't.</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-xl font-light">
                        We removed the friction between building a great product and showing it to the world.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group relative p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden ${feature.colSpan} ${feature.bgClass}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="p-3 bg-white/5 rounded-2xl w-fit border border-white/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                                    {feature.icon}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight text-white/90 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
