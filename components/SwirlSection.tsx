"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const baseFlavours = [
    {
        name: "Summer Mango",
        desc: "Perfect for summer",
        image: "/images/mango_froyo.png"
    },
    {
        name: "Classic Vanilla",
        desc: "Light and heavenly",
        image: "/images/vanilla_froyo.png"
    },
    {
        name: "Fresh Strawberry",
        desc: "Seasonal sweet",
        image: "/images/strawberry_froyo.png"
    }
];

// Duplicate for smooth infinite carousel effect
const flavours = [...baseFlavours, ...baseFlavours].map((f, i) => ({ ...f, id: i }));

export default function SwirlSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-switch images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % flavours.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const getCardProps = (index: number) => {
        const diff = (index - activeIndex + flavours.length) % flavours.length;
        
        let x = "0vw";
        let scale = 1;
        let opacity = 1;
        let zIndex = 10;

        if (diff === 0) {
            x = "0vw";
            scale = 1;
            opacity = 1;
            zIndex = 20;
        } else if (diff === 1) {
            x = "32vw"; // Right visible
            scale = 0.75;
            opacity = 1;
            zIndex = 10;
        } else if (diff === flavours.length - 1) {
            x = "-32vw"; // Left visible
            scale = 0.75;
            opacity = 1;
            zIndex = 10;
        } else {
            // Hidden cards (behind the scenes)
            x = diff > flavours.length / 2 ? "-64vw" : "64vw";
            scale = 0.5;
            opacity = 0;
            zIndex = 0;
        }

        return { x, scale, opacity, zIndex };
    };

    return (
        <section className="relative w-full h-[650px] md:h-[850px] bg-[#FFDEDE] flex items-center justify-center overflow-hidden z-10">
            {/* Top White Curve */}
            <div className="absolute top-0 left-0 w-full z-[1] pointer-events-none transform -translate-y-1">
                <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[100px] md:h-[180px]">
                    <path fill="#ffffff" d="M0,0 L1440,0 L1440,0 Q720,400 0,0 Z"></path>
                </svg>
            </div>

            {/* Bottom White Curve */}
            <div className="absolute bottom-0 left-0 w-full z-[1] pointer-events-none transform translate-y-1">
                <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-[100px] md:h-[180px] rotate-180">
                    <path fill="#ffffff" d="M0,0 L1440,0 L1440,0 Q720,400 0,0 Z"></path>
                </svg>
            </div>

            {/* Heading - absolutely positioned so it doesn't shift the carousel */}
            <div className="absolute top-[80px] md:top-[120px] left-0 w-full text-center z-20 flex flex-col items-center">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] text-[#721011] font-bold uppercase tracking-widest drop-shadow-sm">
                    OUR FLAVOURS
                </h2>
                {/* Scribble line under heading */}
                <div className="mt-2 text-[#D5AF34]">
                    <svg width="220" height="24" viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[180px] sm:w-[220px]">
                        <path d="M2.5 13.5C28.5 6.5 76 2.5 140 10.5C204 18.5 252.5 11.5 277 5.5" stroke="#D5AF34" strokeWidth="4" strokeLinecap="round" />
                        <path d="M120 20C135 18 165 18 185 20" stroke="#D5AF34" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            {/* Carousel Container - perfectly centered in the section */}
            <div className="relative w-full h-full flex items-center justify-center z-20">
                {flavours.map((flavour, index) => {
                    const props = getCardProps(index);
                    return (
                        <motion.div
                            key={flavour.id}
                            animate={{
                                x: props.x,
                                scale: props.scale,
                                opacity: props.opacity,
                                zIndex: props.zIndex,
                            }}
                            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                            className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-white rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center border border-gray-100"
                        >
                            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] mb-2 md:mb-4 scale-105 hover:scale-110 transition-transform duration-500">
                                <Image
                                    src={flavour.image}
                                    fill
                                    alt={flavour.name}
                                    className="object-contain"
                                    sizes="(max-width: 640px) 130px, (max-width: 768px) 160px, 220px"
                                    priority={index === 0 || index === 1 || index === 5}
                                />
                            </div>
                            <h3 className="text-[#721011] font-heading text-xl sm:text-2xl md:text-[28px] font-bold mb-0.5 md:mb-1 text-center px-4">
                                {flavour.name}
                            </h3>
                            <p className="text-[#D5AF34] font-body text-xs sm:text-sm md:text-base font-medium text-center">
                                {flavour.desc}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
