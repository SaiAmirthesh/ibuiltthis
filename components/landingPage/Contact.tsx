"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Layers, Instagram } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <footer id="contact" className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-16 mb-12 gap-12">

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-xl">
                            Ready to ship?
                        </h2>
                        <p className="text-xl text-white/50 font-light mb-8">
                            Join thousands of developers currently showcasing their side-projects and enterprise apps on ibuiltthis.
                        </p>
                        <div className="flex items-center gap-4">
                            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]">
                                Get Started Free
                            </button>
                        </div>
                    </motion.div>

                    {/* Logo / Socials */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col items-start md:items-end gap-6"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Layers className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold tracking-tight text-white/90">
                                iBuilt<span className="text-primary">This</span>
                            </span>
                        </Link>
                        <div className="flex items-center gap-4 text-white/40">
                            <Link href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-primary/10">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-primary/10">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light"
                >
                    <p>© {new Date().getFullYear()} ibuiltthis. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
