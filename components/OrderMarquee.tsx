"use client";

import { motion } from "framer-motion";

export default function OrderMarquee() {
    // We duplicate the text multiple times to ensure smooth infinite scrolling
    const marqueeText = Array(10).fill("Order Now ◯");

    return (
        <section className="w-full bg-[#FEF2F2] py-4 sm:py-6 overflow-hidden border-y border-[#D5AF34]/20">
            <div className="relative flex whitespace-nowrap">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 15,
                    }}
                >
                    <div className="flex gap-8 px-4">
                        {marqueeText.map((text, i) => (
                            <span 
                                key={i} 
                                className="text-4xl sm:text-5xl md:text-6xl font-heading uppercase tracking-wider"
                                style={{
                                    color: "transparent",
                                    WebkitTextStroke: "2px #D5AF34",
                                }}
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
