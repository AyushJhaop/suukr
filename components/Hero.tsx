"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            <Navbar />
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    {/* Missing file intentionally, fallback to gradient if video doesn't load */}
                    <source src="/videos/Build_luxury_dessert_202603242225.mp4" type="video/mp4" />
                </video>
                {/* Overlay gradient (cream/beige tint) */}
                <div className="absolute inset-0 bg-[#F7F1E5]/60 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
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
                    className="font-body text-base sm:text-lg md:text-2xl text-black/80 font-medium mb-8 sm:mb-10 tracking-wide max-w-2xl"
                >
                    Frozen Yogurt • Shakes • Waffles • Cold Brew
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-deepRed text-whiteOff font-body font-semibold text-sm sm:text-base rounded-full shadow-lg transition-colors hover:bg-deepRed/90 min-h-[44px]"
                    >
                        Order Now
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FFDEDE] border-none text-black font-body font-semibold text-sm sm:text-base rounded-full backdrop-blur-sm transition-colors hover:bg-[#FFDEDE]/80 min-h-[44px]"
                    >
                        View Menu
                    </motion.button>
                </motion.div>
            </div>

            {/* Wavy Partition */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 transform translate-y-[2px]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[100px] md:h-[150px] lg:h-[200px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C75.29,32.39,158.46,65.8,241.6,69.54,268.49,70.73,295.39,64.24,321.39,56.44Z" fill="#FEF2F2" />
                </svg>
            </div>
        </section>
    );
}
