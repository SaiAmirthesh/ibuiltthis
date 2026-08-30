"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, ExternalLink, Download } from "lucide-react";
import { bioData } from "@/data/bio";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { skillCategoriesData } from "@/data/skills";

interface CommandOutput {
    command: string;
    output: React.ReactNode;
}

export default function TerminalCLI({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<CommandOutput[]>([
        {
            command: "welcome",
            output: (
                <div className="space-y-2 text-white/80">
                    <div className="text-primary font-bold text-xs sm:text-sm">
                        ┌────────────────────────────────────────────────────────┐<br />
                        │ &nbsp;Sai Amirthesh — Interactive Portfolio Shell v1.0 &nbsp;&nbsp;&nbsp;&nbsp;│<br />
                        │ &nbsp;Type &apos;<span className="text-cyan-300">help</span>&apos; to view all available commands. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br />
                        └────────────────────────────────────────────────────────┘
                    </div>
                    <p className="text-xs sm:text-sm text-white/60">
                        Try running <span className="text-primary font-mono font-semibold">about</span>,{" "}
                        <span className="text-primary font-mono font-semibold">projects</span>,{" "}
                        <span className="text-primary font-mono font-semibold">skills</span>,{" "}
                        <span className="text-primary font-mono font-semibold">experience</span>, or{" "}
                        <span className="text-primary font-mono font-semibold">resume</span>.
                    </p>
                </div>
            ),
        },
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const [isMaximized, setIsMaximized] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Lock page background scrolling when CLI modal is open
    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow;
            const originalHtmlOverflow = document.documentElement.style.overflow;

            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";

            setTimeout(() => inputRef.current?.focus(), 100);

            return () => {
                document.body.style.overflow = originalOverflow;
                document.documentElement.style.overflow = originalHtmlOverflow;
            };
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    // Listen for global keyboard shortcut (Ctrl+K or Cmd+K) and Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                if (isOpen) onClose();
                else window.dispatchEvent(new CustomEvent("open-cli"));
            }
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();
        const parts = trimmed.split(" ");
        const action = parts[0];
        const arg = parts.slice(1).join(" ");

        if (!trimmed) return;

        setCommandHistory((prev) => [...prev, cmd]);
        setHistoryIndex(-1);

        let output: React.ReactNode = null;

        switch (action) {
            case "help":
                output = (
                    <div className="space-y-2 text-xs md:text-sm">
                        <div className="text-primary font-bold mb-1">Available Commands:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 font-mono text-white/80">
                            <div><span className="text-cyan-400 font-bold">about</span> - Background & Education</div>
                            <div><span className="text-cyan-400 font-bold">projects</span> - Primary Architectures</div>
                            <div><span className="text-cyan-400 font-bold">skills</span> - Tech Ecosystem</div>
                            <div><span className="text-cyan-400 font-bold">experience</span> - Internships & Roles</div>
                            <div><span className="text-cyan-400 font-bold">resume</span> - Download Resume (PDF)</div>
                            <div><span className="text-cyan-400 font-bold">contact</span> - Email & Social links</div>
                            <div><span className="text-cyan-400 font-bold">github</span> - GitHub profile info</div>
                            <div><span className="text-cyan-400 font-bold">clear</span> - Clear terminal screen</div>
                            <div><span className="text-cyan-400 font-bold">exit</span> - Close terminal (or press ESC)</div>
                        </div>
                    </div>
                );
                break;

            case "about":
            case "bio":
                output = (
                    <div className="space-y-2 text-xs md:text-sm text-white/80">
                        <div className="text-primary font-bold text-base">{bioData.name}</div>
                        <p className="text-white/60">{bioData.role}</p>
                        <div className="text-white/70">
                            <span className="text-white font-medium">Education:</span> {bioData.education.institution} ({bioData.education.degree}) — CGPA: 9.44
                        </div>
                        <div className="text-white/70">
                            <span className="text-white font-medium">Next Role:</span> {bioData.status.nextRole}
                        </div>
                        <p className="text-white/60 leading-relaxed mt-2 font-sans">
                            &ldquo;I learn by building. Driven by curiosity to explore new technologies, understand backend architectures, and create reliable software that solves real problems.&rdquo;
                        </p>
                    </div>
                );
                break;

            case "projects":
            case "ls":
                output = (
                    <div className="space-y-3 text-xs md:text-sm text-white/80">
                        <div className="text-primary font-bold text-base">Primary Engineering Architectures:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {projectsData.map((p, idx) => (
                                <div key={p.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-cyan-300">{idx + 1}. {p.name}</span>
                                        <span className="text-[11px] font-mono text-white/40">{p.categories.join(" · ")}</span>
                                    </div>
                                    <p className="text-white/60 text-xs">{p.tagline}</p>
                                    <div className="text-[11px] text-white/40 font-mono">
                                        Stack: {p.technologies.join(", ")}
                                    </div>
                                    {p.githubUrl && (
                                        <a
                                            href={p.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline mt-1"
                                        >
                                            View Repo <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
                break;

            case "skills":
                output = (
                    <div className="space-y-3 text-xs md:text-sm text-white/80">
                        <div className="text-primary font-bold text-base">Technical Stack & Domains:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {skillCategoriesData.map((cat) => (
                                <div key={cat.category} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                                    <div className="text-cyan-300 font-bold font-mono text-xs">[{cat.category}]</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cat.skills.map((s) => (
                                            <span key={s.name} className="px-2 py-0.5 rounded bg-white/5 text-white/80 border border-white/10 text-[11px]">
                                                {s.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
                break;

            case "experience":
            case "exp":
                output = (
                    <div className="space-y-3 text-xs md:text-sm text-white/80">
                        <div className="text-primary font-bold text-base">Professional Experience:</div>
                        {experienceData.map((e) => (
                            <div key={e.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-bold">{e.company} — {e.role}</span>
                                    <span className="text-primary text-xs font-mono">{e.period}</span>
                                </div>
                                <p className="text-white/60 text-xs leading-relaxed">{e.description}</p>
                                <div className="text-[11px] text-white/40 font-mono">
                                    Tech: {e.technologies.join(", ")}
                                </div>
                            </div>
                        ))}
                    </div>
                );
                break;

            case "resume":
                output = (
                    <div className="space-y-2 text-xs md:text-sm">
                        <div className="text-cyan-400 font-bold">✓ Opening resume download...</div>
                        <p className="text-white/60">If download doesn&apos;t start automatically, click below:</p>
                        <a
                            href="/Sai_Resume.pdf"
                            download="Sai_Amirthesh_Resume.pdf"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-black font-semibold rounded-lg text-xs"
                        >
                            <Download className="w-3.5 h-3.5" /> Download Sai_Resume.pdf
                        </a>
                    </div>
                );
                // Trigger auto download
                const link = document.createElement("a");
                link.href = "/Sai_Resume.pdf";
                link.download = "Sai_Amirthesh_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case "contact":
            case "email":
                output = (
                    <div className="space-y-2 text-xs md:text-sm text-white/80">
                        <div className="text-primary font-bold text-base">Get In Touch:</div>
                        <div className="font-mono space-y-1 text-xs sm:text-sm">
                            <div>Email: <a href={`mailto:${bioData.links.email}`} className="text-cyan-300 hover:underline">{bioData.links.email}</a></div>
                            <div>GitHub: <a href={bioData.links.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{bioData.links.github}</a></div>
                            <div>LinkedIn: <a href={bioData.links.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{bioData.links.linkedin}</a></div>
                            <div>LeetCode: <a href={bioData.links.leetcode} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{bioData.links.leetcode}</a></div>
                        </div>
                    </div>
                );
                break;

            case "github":
                output = (
                    <div className="space-y-2 text-xs md:text-sm text-white/80">
                        <div className="text-primary font-bold text-base">GitHub Profile (@SaiAmirthesh):</div>
                        <div className="font-mono text-white/70 space-y-0.5">
                            <div>• Contributions: 428+ in the last year</div>
                            <div>• Public Repositories: 27</div>
                            <div>• Focus: Backend architectures, Spring Boot, distributed microservices</div>
                        </div>
                        <a href={bioData.links.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline text-xs inline-flex items-center gap-1">
                            {bioData.links.github} <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                );
                break;

            case "clear":
            case "cls":
                setHistory([]);
                setInput("");
                return;

            case "exit":
            case "quit":
                onClose();
                setInput("");
                return;

            case "whoami":
                output = <span className="text-white/80 font-mono">guest@sai-amirthesh-portfolio</span>;
                break;

            case "sudo":
                output = <span className="text-rose-400 font-mono">Permission denied: You do not need sudo to explore this portfolio 😄</span>;
                break;

            case "date":
                output = <span className="text-white/80 font-mono">{new Date().toString()}</span>;
                break;

            default:
                output = (
                    <div className="text-xs text-rose-400 font-mono">
                        Command not recognized: &quot;{action}&quot;. Type <span className="text-primary font-bold">help</span> to view available commands.
                    </div>
                );
                break;
        }

        setHistory((prev) => [...prev, { command: cmd, output }]);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
                setHistoryIndex(nextIndex);
                setInput(commandHistory[commandHistory.length - 1 - nextIndex] || "");
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const nextIndex = historyIndex - 1;
                setHistoryIndex(nextIndex);
                setInput(commandHistory[commandHistory.length - 1 - nextIndex] || "");
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const commands = ["help", "about", "projects", "skills", "experience", "resume", "contact", "github", "clear", "exit"];
            const match = commands.find((c) => c.startsWith(input.toLowerCase().trim()));
            if (match) setInput(match);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl overscroll-contain"
                    onWheel={(e) => e.stopPropagation()}
                >
                    {/* Backdrop click to close */}
                    <div className="absolute inset-0" onClick={onClose} />

                    {/* Window - Expanded Dimensions */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 20 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className={`relative z-10 bg-[#0a0a0a]/98 border border-primary/40 rounded-3xl shadow-[0_0_80px_rgba(103,232,249,0.3)] flex flex-col overflow-hidden backdrop-blur-2xl transition-all duration-300 overscroll-contain ${
                            isMaximized
                                ? "w-full h-full max-w-none max-h-none rounded-none"
                                : "w-full max-w-4xl lg:max-w-5xl h-[650px] md:h-[720px] max-h-[90vh]"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Title bar */}
                        <div className="px-5 py-3.5 bg-[#121212] border-b border-white/10 flex items-center justify-between select-none">
                            <div className="flex items-center gap-2.5">
                                <button
                                    onClick={onClose}
                                    className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
                                    title="Close (ESC)"
                                    aria-label="Close terminal"
                                />
                                <button
                                    onClick={() => setHistory([])}
                                    className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors"
                                    title="Clear history"
                                    aria-label="Clear terminal"
                                />
                                <button
                                    onClick={() => setIsMaximized(!isMaximized)}
                                    className="w-3.5 h-3.5 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors"
                                    title={isMaximized ? "Restore window" : "Maximize window"}
                                    aria-label="Toggle maximize terminal"
                                />
                                <div className="ml-3 flex items-center gap-2 text-xs font-mono text-white/70">
                                    <Terminal className="w-3.5 h-3.5 text-primary" />
                                    <span>sai@portfolio: ~ (zsh)</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-white/40">
                                <span className="hidden sm:inline font-mono text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                    Press <kbd className="text-primary font-bold">ESC</kbd> to return to site
                                </span>
                                <button
                                    onClick={onClose}
                                    className="p-1 hover:text-white rounded-lg transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Terminal Body - Isolated Scroll Area */}
                        <div
                            onClick={() => inputRef.current?.focus()}
                            className="flex-1 p-6 md:p-8 overflow-y-auto font-mono text-xs sm:text-sm space-y-4 scrollbar-thin scrollbar-thumb-white/15 cursor-text overscroll-contain"
                        >
                            {history.map((item, idx) => (
                                <div key={idx} className="space-y-1.5">
                                    {item.command && (
                                        <div className="flex items-center gap-2 text-primary font-bold">
                                            <span className="text-cyan-400">sai@portfolio</span>
                                            <span className="text-white/40">:</span>
                                            <span className="text-cyan-300">~</span>
                                            <span className="text-white/60">$</span>
                                            <span className="text-white font-normal">{item.command}</span>
                                        </div>
                                    )}
                                    <div className="pl-0 sm:pl-2">{item.output}</div>
                                </div>
                            ))}

                            {/* Prompt Line */}
                            <div className="flex items-center gap-2 text-primary font-bold pt-2">
                                <span className="text-cyan-400">sai@portfolio</span>
                                <span className="text-white/40">:</span>
                                <span className="text-cyan-300">~</span>
                                <span className="text-white/60">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent text-white font-normal focus:outline-none caret-primary"
                                    autoFocus
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
