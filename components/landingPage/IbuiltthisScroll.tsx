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

    // Load images
    useEffect(() => {
        let isCancelled = false;
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loaded = 0;

            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;

                await new Promise<void>((resolve) => {
                    img.onload = () => {
                        if (!isCancelled) {
                            loadedImages.push(img);
                            loaded++;
                            setLoadedCount(loaded);
                        }
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        if (loadedImages.length > 0) {
                            loadedImages.push(loadedImages[loadedImages.length - 1]);
                        } else {
                            loadedImages.push(img); // push empty/broken
                        }
                        if (!isCancelled) {
                            loaded++;
                            setLoadedCount(loaded);
                        }
                        resolve();
                    };
                });
            }

            if (!isCancelled) {
                setImages(loadedImages);
                setIsReady(true);
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

                let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

                if (isMobile) {
                    // Contain
                    if (windowRatio < imgRatio) {
                        drawWidth = canvas.width;
                        drawHeight = canvas.width / imgRatio;
                        offsetY = (canvas.height - drawHeight) / 2;
                    } else {
                        drawHeight = canvas.height;
                        drawWidth = canvas.height * imgRatio;
                        offsetX = (canvas.width - drawWidth) / 2;
                    }
                } else {
                    // Cover
                    if (windowRatio > imgRatio) {
                        drawWidth = canvas.width;
                        drawHeight = canvas.width / imgRatio;
                        offsetY = (canvas.height - drawHeight) / 2;
                    } else {
                        drawHeight = canvas.height;
                        drawWidth = canvas.height * imgRatio;
                        offsetX = (canvas.width - drawWidth) / 2;
                    }
                }

                ctx.fillStyle = "#050505";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isReady, images, frameIndex]);

    const easeOut = cubicBezier(0.16, 1, 0.3, 1);

    // 0% - 20% Hero
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0], { ease: easeOut });
    const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -50], { ease: easeOut });
    const heroBlur = useTransform(scrollYProgress, [0, 0.15, 0.22], ["blur(0px)", "blur(0px)", "blur(10px)"]);

    // 25% - 48% Break into components
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

    return (
        <div ref={containerRef} className="relative h-[800vh] bg-[#050505]">
            {!isReady ? (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
                    <div className="text-sm font-medium tracking-widest text-white/60 mb-4 uppercase">Initializing Experience</div>
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300 ease-out md:shadow-[0_0_15px_rgba(103,232,249,0.5)]"
                            style={{ width: `${(loadedCount / TOTAL_FRAMES) * 100}%` }}
                        />
                    </div>
                </div>
            ) : (
                <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
                    {/* Canvas Background */}
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover lg:object-contain" />

                    {/* Dark subtle overlay for text readability */}
                    <div className="absolute inset-0 bg-[#050505]/40 md:bg-[#050505]/20 pointer-events-none" />

                    {/* Narrative Layers */}
                    <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center pointer-events-none">

                        {/* HERO */}
                        <motion.div
                            style={{ opacity: heroOpacity, y: heroY, filter: heroBlur }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90 drop-shadow-2xl">
                                iBuilt<span className="text-primary drop-shadow-[0_0_30px_rgba(var(--primary),0.8)]">This</span>
                            </h1>
                            <p className="mt-6 text-xl md:text-3xl text-white/60 tracking-tight max-w-2xl font-light">
                                Showcase Your Creations to the World.
                            </p>
                        </motion.div>

                        {/* COMPONENTS */}
                        <motion.div
                            style={{ opacity: compOpacity, y: compY, filter: compBlur }}
                            className="absolute inset-0 flex flex-col items-start justify-center left-0 md:left-24 px-8 md:px-0"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold text-white/90 tracking-tighter border-l-4 border-primary pl-8 py-2 drop-shadow-2xl">
                                Built by developers.<br />
                                <span className="text-white/60 font-light">Designed for creators.</span>
                            </h2>
                        </motion.div>

                        {/* ECOSYSTEM */}
                        <motion.div
                            style={{ opacity: ecoOpacity, y: ecoY, filter: ecoBlur }}
                            className="absolute inset-0 flex flex-col items-end justify-center right-0 md:right-24 px-8 md:px-0 text-right"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold text-white/90 tracking-tighter drop-shadow-2xl">
                                Discover. Connect.<br />
                                <span className="text-primary drop-shadow-[0_0_20px_rgba(var(--primary),0.6)]">Get Inspired.</span>
                            </h2>
                        </motion.div>

                        {/* FINAL CTA */}
                        <motion.div
                            style={{ opacity: ctaOpacity, y: ctaY, filter: ctaBlur, scale: ctaScale }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto"
                        >
                            <h2 className="text-6xl md:text-8xl font-bold text-white/90 tracking-tighter drop-shadow-2xl mb-12">
                                Power your next build.
                            </h2>
                            <button className="px-10 py-5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 hover:border-primary rounded-full font-semibold tracking-tight transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.1)] hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] backdrop-blur-md flex items-center gap-3 group text-lg md:text-xl">
                                Start Showcasing
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
}
