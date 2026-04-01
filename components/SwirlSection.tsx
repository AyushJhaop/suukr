"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function SwirlSection() {
    const [currentAutoImage, setCurrentAutoImage] = useState<string>("/images/mango_froyo.png");
    const sectionRef = useRef<HTMLElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Array of froyo images to cycle through
    const froyoImages = [
        "/images/mango_froyo.png",
        "/images/strawberry_froyo.png",
        "/images/vanilla_froyo.png"
    ];

    // Auto-switch images every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAutoImage(prev => {
                const currentIndex = froyoImages.indexOf(prev);
                const nextIndex = (currentIndex + 1) % froyoImages.length;
                return froyoImages[nextIndex];
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const words = [
        [
            { text: "SWIRL", type: "solid" },
            { text: "○", type: "separator" },
            { text: "FUN", type: "hollow" },
            { text: "○", type: "separator" },
        ],
        [
            { text: "○", type: "separator" },
            { text: "SWEET", type: "solid" },
            { text: "○", type: "separator" },
            { text: "SWIRL", type: "hollow" },
            { text: "○", type: "separator" },
        ],
        [
            { text: "FUN", type: "solid" },
            { text: "○", type: "separator" },
            { text: "SWIRL", type: "hollow" },
            { text: "○", type: "separator" },
        ]
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 md:py-48 bg-[#FEF2F2] flex items-center justify-center overflow-hidden z-10"
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
                {words.map((row, rIdx) => {
                    // Determine animation direction: odd rows (0,2) go right to left, even row (1) goes left to right
                    const isRightToLeft = rIdx % 2 === 0;
                    
                    // Create scroll-based transforms for each row
                    const xTransform = useTransform(
                        scrollYProgress,
                        [0, 1],
                        isRightToLeft ? [0, -800] : [0, 800]
                    );
                    
                    return (
                        <div key={rIdx} className="relative w-full overflow-hidden">
                            <motion.div 
                                className="flex flex-row items-center justify-center gap-6 md:gap-12 w-max whitespace-nowrap px-4"
                                style={{ x: xTransform }}
                            >
                                {/* Duplicate the content multiple times for seamless scrolling */}
                                {Array.from({ length: 6 }).map((_, dupIdx) => (
                                    <div key={dupIdx} className="flex flex-row items-center gap-6 md:gap-12">
                                        {row.map((item, iIdx) => (
                                            <span
                                                key={`${dupIdx}-${iIdx}`}
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
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Auto-switching Oval Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                <div className="w-[250px] h-[320px] md:w-[300px] md:h-[350px] rounded-full overflow-hidden shadow-2xl relative">
                    <AnimatePresence>
                        <motion.div
                            key={currentAutoImage}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={currentAutoImage}
                                fill
                                className="object-cover scale-110"
                                alt="Froyo Flavor"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </section>
    );
}
