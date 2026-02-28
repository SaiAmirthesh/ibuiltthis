"use client";

import React from "react";
import { motion } from "framer-motion";

interface MetricCardProps {
    title: string;
    value: string;
    trend: string;
    isPositive: boolean;
    delay?: number;
}

export default function MetricCard({ title, value, trend, isPositive, delay = 0 }: MetricCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative p-6 rounded-2xl bg-[#111111]/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-colors overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col gap-4">
                <span className="text-sm font-medium text-white/50 tracking-wide uppercase">
                    {title}
                </span>

                <div className="flex items-end justify-between">
                    <span className="text-4xl font-bold tracking-tighter text-white/90">
                        {value}
                    </span>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full bg-opacity-10 backdrop-blur-md ${isPositive ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" : "text-rose-400 bg-rose-500/10 border border-rose-500/20"
                        }`}>
                        {trend}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
