"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, cubicBezier } from "framer-motion";

const TOTAL_FRAMES = 240;

export default function IbuiltthisScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let isCancelled = false;
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
            let loaded = 0;

            // Load images in concurrent batches for smooth, fast 0-100 progress
            const BATCH_SIZE = 12;
            for (let i = 1; i <= TOTAL_FRAMES; i += BATCH_SIZE) {
                if (isCancelled) break;
                const batchPromises = [];

                for (let j = i; j < i + BATCH_SIZE && j <= TOTAL_FRAMES; j++) {
                    const p = new Promise<void>((resolve) => {
                        const img = new window.Image();
                        const paddedIndex = j.toString().padStart(3, "0");
                        img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;

                        img.onload = () => {
                            if (!isCancelled) {
                                loadedImages[j - 1] = img;
                                loaded++;
                                setLoadedCount(loaded);
                            }
                            resolve();
                        };
                        img.onerror = () => {
                            if (!isCancelled) {
                                loaded++;
                                setLoadedCount(loaded);
                            }
                            resolve();
                        };
                    });
                    batchPromises.push(p);
                }

                await Promise.all(batchPromises);
            }

            if (!isCancelled) {
                setImages(loadedImages.filter(Boolean));
                // Small smooth transition out
                setTimeout(() => setIsReady(true), 300);
            }
        };

        loadImages();
        return () => { isCancelled = true; };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    // Render to canvas
    useEffect(() => {
        if (!isReady || images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            const currentFrame = Math.round(frameIndex.get());
            const img = images[currentFrame] || images[0];

            if (img && img.complete) {
                const windowRatio = window.innerWidth / window.innerHeight;
                const imgRatio = img.naturalWidth / img.naturalHeight;

                const isMobile = window.innerWidth < 768;

                // Update dimensions
                if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }

                ctx.fillStyle = "#050505";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                let drawWidth: number;
                let drawHeight: number;
                let offsetX: number;
                let offsetY: number;

                if (isMobile) {
                    // Mobile Cover
                    if (windowRatio > imgRatio) {
                        drawWidth = canvas.width;
                        drawHeight = canvas.width / imgRatio;
                    } else {
                        drawHeight = canvas.height;
                        drawWidth = canvas.height * imgRatio;
                    }
                } else {
                    // Desktop Cover/Contain hybrid
                    if (windowRatio > imgRatio) {
                        drawWidth = canvas.width;
                        drawHeight = canvas.width / imgRatio;
                    } else {
                        drawHeight = canvas.height;
                        drawWidth = canvas.height * imgRatio;
                    }
                }

                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = (canvas.height - drawHeight) / 2;

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isReady, images, frameIndex]);

    // Narrative Timeline Transforms
    const easeOut = cubicBezier(0.16, 1, 0.3, 1);

    // 0% - 20% Hero
    const heroOpacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0], { ease: easeOut });
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -60], { ease: easeOut });
    const heroBlur = useTransform(scrollYProgress, [0, 0.15, 0.2], ["blur(0px)", "blur(0px)", "blur(10px)"]);

    // 25% - 50% Philosophy / Quote
    const compOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0], { ease: easeOut });
    const compY = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [40, 0, 0, -40], { ease: easeOut });
    const compBlur = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

    // 55% - 78% Ecosystem
    const ecoOpacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0], { ease: easeOut });
    const ecoY = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [40, 0, 0, -40], { ease: easeOut });
    const ecoBlur = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

    // 85% - 100% Final CTA
    const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1], { ease: easeOut });
    const ctaY = useTransform(scrollYProgress, [0.85, 0.9, 1], [40, 0, 0], { ease: easeOut });
    const ctaBlur = useTransform(scrollYProgress, [0.85, 0.9, 1], ["blur(10px)", "blur(0px)", "blur(0px)"]);
    const ctaScale = useTransform(scrollYProgress, [0.85, 0.9, 1], [0.95, 1, 1], { ease: easeOut });

    const percent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));

    return (
        <div ref={containerRef} className="relative h-[800vh] bg-[#050505]">
            {!isReady ? (
                <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white select-none px-6">
                    {/* Minimal percentage counter */}
                    <div className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-white mb-4">
                        {percent}<span className="text-primary font-normal text-2xl sm:text-3xl ml-0.5">%</span>
                    </div>

                    {/* Clean progress bar */}
                    <div className="w-52 sm:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(103,232,249,0.8)]"
                            style={{ width: `${percent}%` }}
                        />
                    </div>
                </div>
            ) : (
                <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
                    {/* Canvas Background */}
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover lg:object-contain" />

                    {/* Subtle overlay for text contrast */}
                    <div className="absolute inset-0 bg-[#050505]/20 md:bg-[#050505]/10 pointer-events-none" />

                    {/* Narrative Layers */}
                    <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center pointer-events-none">

                        {/* HERO */}
                        <motion.div
                            style={{ opacity: heroOpacity, y: heroY, filter: heroBlur }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                        >
                            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white/90 drop-shadow-2xl">
                                Sai <span className="text-primary drop-shadow-[0_0_35px_rgba(103,232,249,0.8)]">Amirthesh</span>
                            </h1>
                            {/* Subtle accent divider line */}
                            <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent my-4 sm:my-5 rounded-full shadow-[0_0_15px_rgba(103,232,249,0.6)]" />
                            <p className="text-lg sm:text-2xl md:text-3xl text-white/80 tracking-tight max-w-3xl font-light">
                                Backend Systems & Software Engineering
                            </p>
                            <p className="mt-2 text-xs sm:text-sm text-white/40 tracking-wide font-mono">
                                Vellore Institute of Technology · B.Tech CSE (AI & Robotics)
                            </p>
                        </motion.div>

                        {/* PHILOSOPHY / QUOTE */}
                        <motion.div
                            style={{ opacity: compOpacity, y: compY, filter: compBlur }}
                            className="absolute inset-0 flex flex-col items-start justify-center left-0 md:left-20 px-8 md:px-0 max-w-3xl"
                        >
                            <div className="border-l-4 border-primary pl-6 md:pl-8 py-2">
                                <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
                                    Engineering Mindset
                                </span>
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white/90 tracking-tighter drop-shadow-2xl leading-tight">
                                    Driven by curiosity.<br />
                                    <span className="text-white/60 font-light text-2xl sm:text-3xl md:text-4xl block mt-3">
                                        &ldquo;Understanding why it works, how it scales, and building it right.&rdquo;
                                    </span>
                                </h2>
                            </div>
                        </motion.div>

                        {/* TECH FOCUS */}
                        <motion.div
                            style={{ opacity: ecoOpacity, y: ecoY, filter: ecoBlur }}
                            className="absolute inset-0 flex flex-col items-end justify-center right-0 md:right-20 px-8 md:px-0 text-right max-w-3xl ml-auto"
                        >
                            <div className="border-r-4 border-primary pr-6 md:pr-8 py-2">
                                <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
                                    Technical Architecture
                                </span>
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white/90 tracking-tighter drop-shadow-2xl leading-tight">
                                    Java · Spring Boot<br />
                                    <span className="text-primary font-medium">Backend & AI Systems</span>
                                </h2>
                                <p className="text-white/60 mt-4 text-base sm:text-lg max-w-md ml-auto">
                                    Designing high-throughput microservices, API gateways, database optimization, and intelligent pipelines.
                                </p>
                            </div>
                        </motion.div>

                        {/* FINAL CTA */}
                        <motion.div
                            style={{ opacity: ctaOpacity, y: ctaY, filter: ctaBlur, scale: ctaScale }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                        >
                            <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                                Ready to Explore
                            </span>
                            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white/90 tracking-tighter drop-shadow-2xl max-w-4xl">
                                Building practical software that solves real problems.
                            </h2>
                            <p className="text-white/60 mt-4 text-base sm:text-xl max-w-2xl font-light">
                                Scroll down to explore my background, technical skills, production projects, and real-time activity metrics.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
                                <a
                                    href="#projects"
                                    className="px-8 py-3.5 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-all duration-200 shadow-[0_0_25px_rgba(103,232,249,0.4)] hover:shadow-[0_0_35px_rgba(103,232,249,0.6)]"
                                >
                                    Explore Projects
                                </a>
                                <a
                                    href="/Sai_Resume.pdf"
                                    download="Sai_Amirthesh_Resume.pdf"
                                    className="px-8 py-3.5 bg-white/5 text-white font-medium border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            )}
        </div>
    );
}
