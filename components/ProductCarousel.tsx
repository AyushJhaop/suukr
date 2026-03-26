"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Product = {
    id: number;
    name: string;
    image: string;
    discount?: string;
};

const products: Product[] = [
    { id: 1, name: "Cold Brew", image: "/images/coldbrew.jpg", discount: "Upto 10% off" },
    { id: 2, name: "Self Serve Frozen Yogurt", image: "/images/yogurt.jpg", discount: "Upto 10% off" },
    { id: 3, name: "Pistachio Milkshake", image: "/images/milkshake.jpg", discount: "Upto 10% off" },
];

export default function ProductCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
    }, []);

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [handleNext]);

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
    };

    const getCardStyle = (i: number) => {
        const total = products.length;
        let distance = ((i - activeIndex) % total + total) % total;

        // Convert distance to -2, -1, 0, 1, 2 for exactly 5 items
        if (distance > Math.floor(total / 2)) {
            distance -= total;
        }

        const isCenter = distance === 0;

        // Base gap for layout side by side
        const baseGap = typeof window !== 'undefined' && window.innerWidth < 768 ? 260 : 360;

        return {
            x: distance * baseGap,
            scale: isCenter ? 1.05 : 0.95,
            opacity: 1, // User strictly requested no blur and no hiding: fully visible.
            zIndex: 10 - Math.abs(distance),
        };
    };

    return (
        <section className="pb-24 pt-4 bg-whiteOff relative flex flex-col items-center w-full overflow-hidden">
            {/* Header section */}
            <div className="text-center mb-16 z-20 px-4 flex flex-col items-center">
                <span className="inline-block text-[#D5AF34] text-xl font-bold tracking-widest mb-2 font-inter">
                    Featured
                </span>
                <div className="relative inline-flex flex-col items-center">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl text-deepRed font-bold">
                        What We Make the Best
                    </h2>
                    {/* Small curvy thing below the title */}
                    <div className="mt-2 text-[#D5AF34]">
                        <svg width="280" height="24" viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px]">
                            <path d="M2.5 13.5C28.5 6.5 76 2.5 140 10.5C204 18.5 252.5 11.5 277 5.5" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                            <path d="M120 20C135 18 165 18 185 20" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <p className="mt-8 text-black/80 font-body text-lg">
                    Handcrafted daily with the finest ingredients
                </p>
            </div>

            {/* Slider container */}
            <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center mt-4">
                <AnimatePresence initial={false}>
                    {products.map((product, index) => {
                        const style = getCardStyle(index);
                        const isCenter = index === activeIndex;

                        return (
                            <motion.div
                                key={product.id}
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    zIndex: style.zIndex,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    mass: 1,
                                }}
                                onClick={() => handleCardClick(index)}
                                className={`absolute w-[240px] h-[360px] md:w-[320px] md:h-[480px] rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-cream
                                    ${isCenter ? "border-[4px] border-[#2096F3]" : "border-[4px] border-transparent hover:border-[#2096F3]/50"}
                                `}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={isCenter}
                                />

                                {/* Discount Badge */}
                                {product.discount && (
                                    <div className="absolute top-4 right-4 border border-deepRed rounded-md px-3 py-1 bg-whiteOff/90 backdrop-blur-sm z-10">
                                        <span className="text-black text-xs font-bold font-body">{product.discount}</span>
                                    </div>
                                )}

                                {/* Gradient overlay for text readability */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <h3 className="text-whiteOff font-heading text-xl md:text-2xl font-medium tracking-wide w-full text-center">
                                        {product.name}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Left and Right overlay gradients to hide the looping transition smoothly (optional but pleasing) */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-whiteOff to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-whiteOff to-transparent z-20"></div>
        </section>
    );
}
