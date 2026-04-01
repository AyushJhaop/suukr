"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    tag?: string;
};

const products: Product[] = [
    {
        id: 1,
        name: "Cold Brew",
        description: "Slow-steeped for 18 hours, smooth & bold",
        image: "/images/coldbrew.jpg",
        tag: "Fan Favourite",
    },
    {
        id: 2,
        name: "Frozen Yogurt",
        description: "Self-serve, live cultures, endlessly customisable",
        image: "/images/yogurt.jpg",
        tag: "Signature",
    },
    {
        id: 3,
        name: "Pistachio Milkshake",
        description: "Rich, creamy & made fresh to order",
        image: "/images/milkshake.jpg",
        tag: "Bestseller",
    },
    {
        id: 4,
        name: "Belgian Waffles",
        description: "Crispy outside, fluffy inside, topped your way",
        image: "/images/waffles.jpg",
        tag: "New",
    },
    {
        id: 5,
        name: "Chocolate Indulgence",
        description: "Dark chocolate ganache with a velvety finish",
        image: "/images/choco.jpg",
        tag: "Chef's Pick",
    },
];

export default function ProductCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = products.length;

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % total);
    }, [total]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    }, [total]);


    // Returns position config for each card relative to active
    const getConfig = (i: number) => {
        let d = ((i - activeIndex) % total + total) % total;
        if (d > Math.floor(total / 2)) d -= total;
        // Only render -2, -1, 0, 1, 2
        const abs = Math.abs(d);
        if (abs > 2) return null;

        const isCenter = d === 0;
        
        // Responsive positioning - smaller offsets for mobile
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
        const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
        
        let xOffset, scale, opacity;
        
        if (isMobile) {
            const xMap: Record<string, number> = { "-2": -300, "-1": -150, "0": 0, "1": 150, "2": 300 };
            const scaleMap: Record<string, number> = { "-2": 0.7, "-1": 0.85, "0": 1, "1": 0.85, "2": 0.7 };
            const opacityMap: Record<string, number> = { "-2": 0.3, "-1": 0.7, "0": 1, "1": 0.7, "2": 0.3 };
            xOffset = xMap[String(d)] ?? 0;
            scale = scaleMap[String(d)] ?? 0.7;
            opacity = opacityMap[String(d)] ?? 0;
        } else if (isTablet) {
            const xMap: Record<string, number> = { "-2": -500, "-1": -250, "0": 0, "1": 250, "2": 500 };
            const scaleMap: Record<string, number> = { "-2": 0.75, "-1": 0.9, "0": 1.02, "1": 0.9, "2": 0.75 };
            const opacityMap: Record<string, number> = { "-2": 0.4, "-1": 0.8, "0": 1, "1": 0.8, "2": 0.4 };
            xOffset = xMap[String(d)] ?? 0;
            scale = scaleMap[String(d)] ?? 0.7;
            opacity = opacityMap[String(d)] ?? 0;
        } else {
            const xMap: Record<string, number> = { "-2": -680, "-1": -350, "0": 0, "1": 350, "2": 680 };
            const scaleMap: Record<string, number> = { "-2": 0.78, "-1": 0.9, "0": 1.05, "1": 0.9, "2": 0.78 };
            const opacityMap: Record<string, number> = { "-2": 0.45, "-1": 0.85, "0": 1, "1": 0.85, "2": 0.45 };
            xOffset = xMap[String(d)] ?? 0;
            scale = scaleMap[String(d)] ?? 0.7;
            opacity = opacityMap[String(d)] ?? 0;
        }
        
        const zMap: Record<string, number> = { "-2": 1, "-1": 2, "0": 5, "1": 2, "2": 1 };

        return {
            x: xOffset,
            scale,
            opacity,
            zIndex: zMap[String(d)] ?? 0,
            isCenter,
        };
    };

    return (
        <section
            id="best-sellers"
            className="pb-24 pt-4 bg-whiteOff relative flex flex-col items-center w-full overflow-hidden"
        >
            {/* Watermark */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-deepRed/5 font-heading font-bold text-[10rem] md:text-[14rem] tracking-widest select-none pointer-events-none z-0 whitespace-nowrap">
                SUÜKR
            </div>

            {/* Header */}
            <div className="text-center mb-12 sm:mb-16 z-20 px-4 flex flex-col items-center">
                <span className="inline-block text-gold text-lg sm:text-xl font-bold tracking-widest mb-2 font-inter">
                    Featured
                </span>
                <div className="relative inline-flex flex-col items-center">
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-deepRed font-bold text-center">
                        What We Make the Best
                    </h2>
                    <div className="mt-2 text-gold">
                        <svg width="280" height="24" viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] sm:max-w-[280px]">
                            <path d="M2.5 13.5C28.5 6.5 76 2.5 140 10.5C204 18.5 252.5 11.5 277 5.5" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                            <path d="M120 20C135 18 165 18 185 20" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <p className="mt-4 sm:mt-6 text-black/60 font-body text-base sm:text-lg text-center max-w-md">
                    Handcrafted daily with the finest ingredients
                </p>
            </div>

            {/* Carousel */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center">
                {products.map((product, index) => {
                    const cfg = getConfig(index);
                    if (!cfg) return null;

                    return (
                        <motion.div
                            key={product.id}
                            animate={{
                                x: cfg.x,
                                scale: cfg.scale,
                                opacity: cfg.opacity,
                                zIndex: cfg.zIndex,
                            }}
                            transition={{ type: "spring", stiffness: 220, damping: 28 }}
                            onClick={() => setActiveIndex(index)}
                            className={`absolute w-[200px] h-[280px] sm:w-[250px] sm:h-[350px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px] rounded-3xl sm:rounded-4xl overflow-hidden cursor-pointer transition-shadow duration-300
                                ${cfg.isCenter ? "shadow-2xl ring-2 ring-white/40" : "shadow-lg"}
                            `}
                            style={{ willChange: "transform, opacity" }}
                        >
                            {/* Photo */}
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
                                priority={cfg.isCenter}
                            />

                            {/* Subtle dark gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-[1]" />

                            {/* Tag badge */}
                            {product.tag && (
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-1.5 overflow-hidden rounded-full shadow-lg">
                                    {/* Glass base */}
                                    <div className="absolute inset-0 bg-white/8 backdrop-blur-2xl border border-white/25 rounded-full" />
                                    {/* Top shine */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                                    {/* Shimmer gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-full" />
                                    
                                    <div className="relative px-2 sm:px-3 py-1 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-sm animate-pulse" />
                                        <span className="text-white text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase drop-shadow-sm">{product.tag}</span>
                                    </div>
                                </div>
                            )}

                            {/* Glass morphism description overlay */}
                            <div className="absolute inset-x-0 bottom-0 z-10 p-2 sm:p-3">
                                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border-2 border-white/30">
                                    {/* Glass base */}
                                    <div className="absolute inset-0 bg-white/8 backdrop-blur-2xl rounded-xl sm:rounded-2xl" />
                                    {/* Gradient border overlay */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-xl sm:rounded-2xl -z-10" />
                                    {/* Top shine */}
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                                    {/* Shimmer gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-xl sm:rounded-2xl" />
                                    
                                    <div className="relative px-3 sm:px-4 py-2.5 sm:py-3.5">
                                        <h3 className="text-white font-heading text-base sm:text-lg md:text-xl font-semibold leading-tight drop-shadow-sm">
                                            {product.name}
                                        </h3>
                                        <p className="text-white/80 font-body text-xs sm:text-sm mt-1 leading-snug tracking-wide drop-shadow-sm">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Prev / Next arrows — positioned on the sides of the center card */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous"
                    className="absolute left-1/2 -translate-x-[120px] sm:-translate-x-[150px] md:-translate-x-[200px] lg:-translate-x-[250px] z-40 bg-white backdrop-blur-sm text-deepRed rounded-full p-2 sm:p-2.5 shadow-md transition cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 duration-200 min-w-[44px] min-h-[44px]"
                >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next"
                    className="absolute left-1/2 translate-x-[75px] sm:translate-x-[105px] md:translate-x-[155px] lg:translate-x-[205px] z-40 bg-white backdrop-blur-sm text-deepRed rounded-full p-2 sm:p-2.5 shadow-md transition cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 duration-200 min-w-[44px] min-h-[44px]"
                >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-8 z-20 items-center">
                {products.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            i === activeIndex
                                ? "w-7 h-2 bg-deepRed shadow-sm"
                                : "w-2 h-2 bg-deepRed/20 hover:bg-deepRed/50"
                        }`}
                    />
                ))}
            </div>

            {/* Edge fade overlays */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 sm:w-8 md:w-20 lg:w-40 bg-gradient-to-r from-whiteOff to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-4 sm:w-8 md:w-20 lg:w-40 bg-gradient-to-l from-whiteOff to-transparent z-20" />
        </section>
    );
}
