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
        const xMap: Record<string, number> = { "-2": -680, "-1": -350, "0": 0, "1": 350, "2": 680 };
        const scaleMap: Record<string, number> = { "-2": 0.78, "-1": 0.9, "0": 1.05, "1": 0.9, "2": 0.78 };
        const opacityMap: Record<string, number> = { "-2": 0.45, "-1": 0.85, "0": 1, "1": 0.85, "2": 0.45 };
        const zMap: Record<string, number> = { "-2": 1, "-1": 2, "0": 5, "1": 2, "2": 1 };
        const key = String(d);

        return {
            x: xMap[key] ?? 0,
            scale: scaleMap[key] ?? 0.7,
            opacity: opacityMap[key] ?? 0,
            zIndex: zMap[key] ?? 0,
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
            <div className="text-center mb-16 z-20 px-4 flex flex-col items-center">
                <span className="inline-block text-gold text-xl font-bold tracking-widest mb-2 font-inter">
                    Featured
                </span>
                <div className="relative inline-flex flex-col items-center">
                    <h2 className="font-heading text-4xl md:text-5xl text-deepRed font-bold">
                        What We Make the Best
                    </h2>
                    <div className="mt-2 text-gold">
                        <svg width="280" height="24" viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-70">
                            <path d="M2.5 13.5C28.5 6.5 76 2.5 140 10.5C204 18.5 252.5 11.5 277 5.5" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                            <path d="M120 20C135 18 165 18 185 20" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <p className="mt-6 text-black/60 font-body text-lg">
                    Handcrafted daily with the finest ingredients
                </p>
            </div>

            {/* Carousel */}
            <div className="relative w-full h-120 md:h-150 flex items-center justify-center">
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
                            className="absolute w-63 h-95 md:w-83 md:h-123 rounded-4xl overflow-hidden cursor-pointer shadow-xl"
                            style={{ willChange: "transform, opacity" }}
                        >
                            {/* Photo */}
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="300px"
                                priority={cfg.isCenter}
                            />

                            {/* Tag badge */}
                            {product.tag && (
                                <div className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1">
                                    <span className="text-white text-xs font-semibold tracking-wide">{product.tag}</span>
                                </div>
                            )}

                            {/* Glass morphism description overlay */}
                            <div className="absolute inset-x-0 bottom-0 z-10 m-3 rounded-2xl overflow-hidden">
                                <div className="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-3">
                                    <h3 className="text-white font-heading text-lg md:text-xl font-semibold leading-tight">
                                        {product.name}
                                    </h3>
                                    <p className="text-white/80 font-body text-xs mt-1 leading-snug">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Prev / Next arrows — positioned on the sides of the center card */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous"
                    className="absolute left-1/2 -translate-x-[153px] md:-translate-x-[500px] z-40 bg-white backdrop-blur-sm text-deepRed rounded-full p-2.5 shadow-md transition cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 duration-200"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next"
                    className="absolute left-1/2 translate-x-[115px] md:translate-x-[460px] z-40 bg-white backdrop-blur-sm text-deepRed rounded-full p-2.5 shadow-md transition cursor-pointer hover:scale-110 hover:shadow-xl active:scale-95 duration-200
"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6 z-20">
                {products.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            i === activeIndex
                                ? "w-6 h-2.5 bg-deepRed"
                                : "w-2.5 h-2.5 bg-deepRed/30"
                        }`}
                    />
                ))}
            </div>

            {/* Edge fade overlays */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-40 bg-linear-to-r from-whiteOff to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-40 bg-linear-to-l from-whiteOff to-transparent z-20" />
        </section>
    );
}
