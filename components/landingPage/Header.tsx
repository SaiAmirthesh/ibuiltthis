"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import TerminalCLI from "@/components/portfolio/TerminalCLI";

export default function Header() {
    const { scrollY } = useScroll();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cliOpen, setCliOpen] = useState(false);

    useEffect(() => {
        const handler = () => setCliOpen(true);
        window.addEventListener("open-cli", handler);
        return () => window.removeEventListener("open-cli", handler);
    }, []);

    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(5, 5, 5, 0.4)", "rgba(5, 5, 5, 0.85)"]
    );

    const headerBorder = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.1)"]
    );

    const headerBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(8px)", "blur(16px)"]
    );

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Activity", href: "#activity" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.header
                style={{
                    backgroundColor: headerBg,
                    borderColor: headerBorder,
                    borderWidth: "1px",
                    backdropFilter: headerBlur,
                    WebkitBackdropFilter: headerBlur,
                }}
                className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 flex items-center justify-between px-4 md:px-7 py-3 rounded-full transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
                {/* Brand & CLI Launcher Button */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={() => setCliOpen(true)}
                        className="flex items-center gap-2.5 group text-left focus:outline-none"
                        title="Click to launch interactive CLI terminal (⌘K / Ctrl+K)"
                    >
                        <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/25 border border-primary/25 group-hover:border-primary/60 transition-all duration-300 shadow-[0_0_12px_rgba(103,232,249,0.15)] group-hover:shadow-[0_0_20px_rgba(103,232,249,0.4)]">
                            <Terminal className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                            Sai<span className="text-primary drop-shadow-[0_0_15px_rgba(103,232,249,0.7)]">Amirthesh</span>
                        </span>
                    </button>

                    <button
                        onClick={() => setCliOpen(true)}
                        className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-md transition-colors shadow-[0_0_10px_rgba(103,232,249,0.1)]"
                        title="Launch Interactive Terminal"
                    >
                        <span>CLI</span>
                        <span className="text-white/40 text-[9px]">⌘K</span>
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-medium uppercase tracking-wider text-white/60 hover:text-primary transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <a
                        href="/Sai_Resume.pdf"
                        download="Sai_Amirthesh_Resume.pdf"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/40 hover:border-primary rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(103,232,249,0.1)] hover:shadow-[0_0_20px_rgba(103,232,249,0.3)]"
                    >
                        <Download className="w-3.5 h-3.5" />
                        <span>Resume</span>
                    </a>

                    {/* Mobile hamburger button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg focus:outline-none"
                        aria-label="Toggle Navigation"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile dropdown menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="lg:hidden fixed top-20 left-4 right-4 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4"
                >
                    <button
                        onClick={() => {
                            setMobileOpen(false);
                            setCliOpen(true);
                        }}
                        className="flex items-center justify-between p-2.5 bg-primary/10 border border-primary/30 rounded-xl text-xs font-mono text-primary"
                    >
                        <span className="flex items-center gap-2">
                            <Terminal className="w-4 h-4" />
                            Open Interactive Terminal (CLI)
                        </span>
                        <span>&gt;_</span>
                    </button>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-medium text-white/80 hover:text-primary transition-colors py-1"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2 border-t border-white/10 flex gap-3">
                        <a
                            href="/Sai_Resume.pdf"
                            download="Sai_Amirthesh_Resume.pdf"
                            className="flex-1 text-center py-2 text-xs font-medium text-primary bg-primary/10 border border-primary/40 rounded-xl"
                        >
                            Download Resume
                        </a>
                        <Link
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 text-center py-2 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-xl"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>
            )}

            {/* Interactive Terminal CLI Modal */}
            <TerminalCLI isOpen={cliOpen} onClose={() => setCliOpen(false)} />
        </>
    );
}
