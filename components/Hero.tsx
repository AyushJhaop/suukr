"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Hero() {
    const router = useRouter();
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            <Navbar />
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/SUUKR_hero_2880x2304.jpg"
                    alt="Suukr Hero"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Light overlay for better dark text readability on the navbar */}
                <div className="absolute inset-0 bg-white/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 pb-28 sm:pb-0 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-deepRed font-semibold mb-4 sm:mb-6 tracking-tight leading-tight"
                >
                    Sweet Moments.<br />Always
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-body text-base sm:text-lg md:text-2xl text-[#D5AF34] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] font-semibold mb-8 sm:mb-10 tracking-wide max-w-2xl"
                >
                    Frozen Yogurt • Shakes • Waffles • Cold Brew
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md justify-center items-center"
                >


                    <motion.button
                        onClick={() => router.push('/menu')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FFDEDE] border-none text-black font-body font-semibold text-sm sm:text-base rounded-full backdrop-blur-sm transition-all shadow-md hover:shadow-lg hover:bg-[#ffcdcd] min-h-[44px]"
                    >
                        View Menu
                    </motion.button>
                </motion.div>
            </div>

            {/* Wavy Partition */}
            <motion.div
                className="absolute bottom-[-1px] left-0 w-full overflow-visible z-30 origin-bottom"
                animate={prefersReducedMotion ? {} : {
                    scaleY: [1, 1.4, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[200px]">
                    <path d="M0,40 C320,80 420,0 720,40 C1020,80 1120,0 1440,40 V120 H0 Z" fill="#FEF2F2" />
                </svg>
            </motion.div>
        </section>
    );
}
