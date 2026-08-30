"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Terminal, Check, Copy, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { bioData } from "@/data/bio";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(bioData.links.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="contact" className="bg-[#050505] pt-28 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-primary/10 blur-[160px] pointer-events-none rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pb-16 mb-12 gap-12">
                    {/* Left CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs uppercase tracking-widest font-semibold mb-4">
                            <Mail className="w-3.5 h-3.5" />
                            Get In Touch
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-4 drop-shadow-xl">
                            Let&apos;s connect & build.
                        </h2>
                        <p className="text-base md:text-lg text-white/60 font-light mb-8 leading-relaxed">
                            Interested in discussing software engineering, backend architectures, distributed systems, or collaboration opportunities? Feel free to reach out.
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href={`mailto:${bioData.links.email}`}
                                className="px-6 py-3.5 bg-primary text-black hover:bg-primary/90 font-semibold text-sm rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(103,232,249,0.3)] hover:shadow-[0_0_30px_rgba(103,232,249,0.5)] flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4" />
                                Send an Email
                            </a>

                            <button
                                onClick={copyEmail}
                                className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-2"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 text-cyan-400" />
                                        <span className="text-cyan-400">Email Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4 text-white/70" />
                                        <span>Copy Email</span>
                                    </>
                                )}
                            </button>

                            <a
                                href="/Sai_Resume.pdf"
                                download="Sai_Amirthesh_Resume.pdf"
                                className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-2"
                            >
                                <Download className="w-4 h-4 text-primary" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Branding & Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col items-start lg:items-end gap-6"
                    >
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 border border-primary/20 transition-all duration-300">
                                <Terminal className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white/90">
                                Sai<span className="text-primary drop-shadow-[0_0_15px_rgba(103,232,249,0.7)]">Amirthesh</span>
                            </span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <a
                                href={bioData.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 hover:bg-primary/20 text-white/70 hover:text-primary rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-200"
                                aria-label="GitHub Profile"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={bioData.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 hover:bg-sky-500/20 text-white/70 hover:text-sky-400 rounded-xl border border-white/10 hover:border-sky-500/40 transition-all duration-200"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href={bioData.links.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 hover:bg-amber-500/20 text-white/70 hover:text-amber-400 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all duration-200"
                                aria-label="LeetCode Profile"
                            >
                                <Code2 className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light"
                >
                    <p>© {new Date().getFullYear()} Sai Amirthesh. Designed & Engineered with precision.</p>
                    <div className="flex items-center gap-6">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                        <a href="/Sai_Resume.pdf" download="Sai_Amirthesh_Resume.pdf" className="hover:text-primary transition-colors">Resume</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
