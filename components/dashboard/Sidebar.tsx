"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, FolderKanban, BarChart3, Settings, Layers, Menu, X, LogOut } from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const navLinks = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/getstarted");
                },
            },
        });
    };

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-[#111111] border border-white/10 rounded-lg text-white/70 hover:text-white"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: isOpen ? 0 : 0 }}
                className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-[#0a0a0a]/80 backdrop-blur-xl border-r border-white/5 flex flex-col justify-between py-6 px-4 z-50 transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div>
                    {/* Brand */}
                    <div className="mb-10 px-2 flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg border border-white/5">
                            <Layers className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white/90">
                            iBuilt<span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]">This</span>
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${isActive
                                        ? "bg-white/10 text-white font-medium"
                                        : "text-white/50 hover:bg-white/5 hover:text-white/90"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="absolute left-0 w-1 h-full bg-primary rounded-r-full"
                                        />
                                    )}
                                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "group-hover:text-primary/70 transition-colors"}`} />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom User Area */}
                <div className="border-t border-white/10 pt-4 px-3 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white/90 truncate max-w-[140px]">
                            {isPending ? "Loading..." : session?.user?.name || "User"}
                        </span>
                        <span className="text-xs text-white/40 truncate max-w-[140px]">
                            {isPending ? "" : session?.user?.email || ""}
                        </span>
                    </div>
                    <button onClick={handleSignOut} className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:bg-red-500/10 transition-colors group">
                        <LogOut className="w-4 h-4 text-white/70 group-hover:text-red-500 transition-colors" />
                    </button>
                </div>
            </motion.aside>
        </>
    );
}
