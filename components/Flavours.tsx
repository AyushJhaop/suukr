"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Flavour = {
    id: number;
    name: string;
    desc: string;
    image: string;
};

const flavours: Flavour[] = [
    { id: 1, name: "Mango", desc: "Perfect for summer", image: "/images/mango_froyo.png" },
    { id: 2, name: "Classic Vanilla", desc: "Light and heavenly", image: "/images/vanilla_froyo.png" },
    { id: 3, name: "Strawberry", desc: "Seasonal favorite", image: "/images/strawberry_froyo.png" }
];

export default function Flavours() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % flavours.length);
    }, []);


    const getCardStyle = (i: number) => {
        const total = flavours.length;
        let distance = ((i - activeIndex) % total + total) % total;
        if (distance > Math.floor(total / 2)) {
            distance -= total;
        }

        const isCenter = distance === 0;
        const baseGap = typeof window !== 'undefined' && window.innerWidth < 768 ? 250 : 380;

        return {
            x: distance * baseGap,
            scale: isCenter ? 1 : 0.65,
            opacity: 1,
            zIndex: 10 - Math.abs(distance),
        };
    };

    return (
        <section id="menu" className="relative -mt-32 pt-24 pb-32 w-full overflow-hidden flex flex-col items-center bg-[#FFDEDE] z-10">
            {/* Background curvy hourglass decoration formed by top and bottom whiteOff curves */}
            <div className="absolute inset-0 z-0 pointer-events-none w-full h-full flex items-start justify-center overflow-hidden">
                <svg viewBox="0 0 1440 1000" preserveAspectRatio="none" className="absolute w-full h-full">
                    {/* Even thinner deep white curves */}
                    <path d="M 0,0 Q 720,410 1440,0 Z" className="fill-whiteOff" />
                    {/* Bottom White Curve */}
                    <path d="M 0,1000 Q 720,590 1440,1000 Z" className="fill-whiteOff" />
                </svg>
            </div>

            {/* Header section - shifted to sit between the sections */}
            <div className="text-center mb-10 z-30 px-4 flex flex-col items-center relative">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl text-deepRed font-bold uppercase tracking-wide">
                    Our Flavours
                </h2>
                {/* Small curvy thing below the title */}
                <div className="mt-2 text-[#D5AF34]">
                    <svg width="280" height="24" viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px]">
                        <path d="M2.5 13.5C28.5 6.5 76 2.5 140 10.5C204 18.5 252.5 11.5 277 5.5" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                        <path d="M120 20C135 18 165 18 185 20" stroke="#D5AF34" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            {/* Flavours Carousel */}
            <div className="relative w-full h-[450px] flex items-center justify-center mt-0 z-20">
                <AnimatePresence initial={false}>
                    {flavours.map((f, index) => {
                        const style = getCardStyle(index);
                        const isCenter = index === activeIndex;

                        return (
                            <motion.div
                                key={f.id}
                                animate={{
                                    x: style.x,
                                    scale: style.scale,
                                    zIndex: style.zIndex,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 30,
                                    mass: 1,
                                }}
                                onClick={() => setActiveIndex(index)}
                                className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-white border border-gray-200 drop-shadow-sm flex flex-col items-center justify-center p-6 cursor-pointer"
                            >
                                <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] mb-2 drop-shadow-md">
                                    <Image
                                        src={f.image}
                                        alt={f.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 150px, 180px"
                                        priority={isCenter}
                                        unoptimized
                                    />
                                </div>
                                <h3 className="text-deepRed font-heading text-2xl md:text-3xl font-bold mt-2">
                                    {f.name}
                                </h3>
                                <p className="text-[#D5AF34] font-body text-sm md:text-md mt-1 font-medium">
                                    {f.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </section >
    );
}
