"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Layers } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"]
    );

    const headerBorder = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
    );

    const headerBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            style={{
                backgroundColor: headerBg,
                borderBottomColor: headerBorder,
                borderBottomWidth: "1px",
                backdropFilter: headerBlur,
                WebkitBackdropFilter: headerBlur,
            }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300"
        >
            <Link href="/" className="flex items-center gap-2 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Layers className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white/90">
                    iBuilt<span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">This</span>
                </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <Link
                    href="/login"
                    className="px-5 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/50 hover:border-primary rounded-full transition-all shadow-[0_0_15px_rgba(var(--primary),0.1)] hover:shadow-[0_0_25px_rgba(var(--primary),0.3)]"
                >
                    Get Started
                </Link>
            </div>
        </motion.header>
    );
}
