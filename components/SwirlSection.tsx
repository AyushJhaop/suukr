"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SwirlSection() {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    const words = [
        [
            { text: "SWIRL", type: "hollow", img: "/images/mango_froyo.png" },
            { text: "○", type: "separator" },
            { text: "FUN", type: "hollow", img: "/images/strawberry_froyo.png" },
        ],
        [
            { text: "○", type: "separator" },
            { text: "SWEET", type: "solid", img: "/images/vanilla_froyo.png" },
            { text: "○", type: "separator" },
            { text: "SWIRL", type: "hollow", img: "/images/mango_froyo.png" },
            { text: "○", type: "separator" },
        ],
        [
            { text: "FUN", type: "hollow", img: "/images/strawberry_froyo.png" },
            { text: "○", type: "separator" },
            { text: "SWIRL", type: "hollow", img: "/images/mango_froyo.png" },
            { text: "○", type: "separator" },
            { text: "FUN", type: "hollow", img: "/images/vanilla_froyo.png" },
        ]
    ];

    return (
        <section
            className="relative w-full py-24 md:py-48 bg-[#FEF2F2] flex items-center justify-center overflow-hidden z-10"
            onMouseLeave={() => setHoveredImage(null)}
        >
            {/* Background SVG Curve */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <svg viewBox="0 0 1440 1000" preserveAspectRatio="none" className="w-full h-full">
                    {/* Consistent hourglass curve to match the rest of the site */}
                    <path d="M 0,0 Q 720,300 1440,0 L 1440,1000 Q 720,700 0,1000 Z" className="fill-[#FFDEDE]" />
                </svg>
            </div>

            {/* Text Grid */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-10 w-full max-w-[100vw] overflow-hidden py-10 md:py-20 lg:py-24">
                {words.map((row, rIdx) => (
                    <div key={rIdx} className="flex flex-row items-center justify-center gap-6 md:gap-12 w-max whitespace-nowrap px-4">
                        {row.map((item, iIdx) => (
                            <span
                                key={iIdx}
                                onMouseEnter={() => item.img && setHoveredImage(item.img)}
                                onMouseLeave={() => setHoveredImage(null)}
                                className={`
                                    font-heading font-black text-[3rem] md:text-6xl lg:text-[7rem] cursor-crosshair transition-transform hover:scale-[1.03] duration-150 relative z-30
                                    ${item.type === "separator" ? "text-[#721011] text-3xl md:text-5xl font-medium tracking-widest pointer-events-none" : "hover:text-deepRed/80"}
                                    ${item.type === "solid" ? "text-[#721011]" : ""}
                                `}
                                style={item.type === "hollow" ? { WebkitTextStroke: "2px #721011", color: "transparent" } : {}}
                            >
                                {item.text}
                            </span>
                        ))}
                    </div>
                ))}
            </div>

            {/* Hover Oval Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                <AnimatePresence>
                    {hoveredImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            className="w-[280px] h-[340px] md:w-[350px] md:h-[420px] rounded-full overflow-hidden shadow-2xl relative"
                        >
                            <Image
                                src={hoveredImage}
                                fill
                                className="object-cover scale-110"
                                alt="Hovered Flavor"
                                priority
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </section>
    );
}
