"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    {
        title: "Desserts",
        image: "/images/waffles.jpg",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Waffle base */}
                <rect x="25" y="45" width="50" height="35" rx="4" />
                {/* Waffle grid pattern */}
                <line x1="35" y1="45" x2="35" y2="80" />
                <line x1="45" y1="45" x2="45" y2="80" />
                <line x1="55" y1="45" x2="55" y2="80" />
                <line x1="65" y1="45" x2="65" y2="80" />
                <line x1="25" y1="55" x2="75" y2="55" />
                <line x1="25" y1="65" x2="75" y2="65" />
                <line x1="25" y1="75" x2="75" y2="75" />
                {/* Cherry on top */}
                <circle cx="45" cy="35" r="4" fill="currentColor" />
                <circle cx="55" cy="35" r="4" fill="currentColor" />
                <path d="M 45 31 Q 50 25 55 31" fill="none" strokeWidth="2" />
            </svg>
        )
    },
    {
        title: "Self-Serve Frozen Yoghurt",
        image: "/images/vanilla_froyo.png",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Cup */}
                <path d="M 30 50 L 70 50 L 65 85 C 65 88 60 90 50 90 C 40 90 35 88 35 85 Z" />
                {/* Rim */}
                <ellipse cx="50" cy="50" rx="20" ry="3" />
                {/* Swirl - elegant spiral */}
                <path d="M 50 50 C 45 45 40 40 45 35 C 50 30 55 35 50 40 C 45 45 50 50 50 50" fill="none" strokeWidth="2.5" />
                <path d="M 50 40 C 55 35 60 30 55 25 C 50 20 45 25 50 30" fill="none" strokeWidth="2.5" />
                {/* Toppings dots */}
                <circle cx="42" cy="45" r="1.5" fill="currentColor" />
                <circle cx="58" cy="42" r="1.5" fill="currentColor" />
                <circle cx="48" cy="38" r="1.5" fill="currentColor" />
            </svg>
        )
    },
    {
        title: "Coffee",
        image: "/images/coldbrew.jpg",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Coffee cup */}
                <path d="M 25 40 L 25 70 C 25 75 30 80 35 80 L 55 80 C 60 80 65 75 65 70 L 65 40" />
                {/* Cup rim */}
                <path d="M 20 40 L 70 40" strokeWidth="4" />
                {/* Handle */}
                <path d="M 65 50 C 75 50 75 60 65 60" />
                {/* Steam lines - modern minimal */}
                <path d="M 35 30 C 35 25 35 25 35 20" strokeWidth="2" />
                <path d="M 45 32 C 45 27 45 27 45 22" strokeWidth="2" />
                <path d="M 55 30 C 55 25 55 25 55 20" strokeWidth="2" />
                {/* Coffee surface */}
                <ellipse cx="45" cy="45" rx="18" ry="3" fill="currentColor" opacity="0.3" />
            </svg>
        )
    },
    {
        title: "Shakes",
        image: "/images/milkshake.jpg",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                {/* Glass */}
                <path d="M 35 45 L 35 75 C 35 80 40 85 45 85 L 55 85 C 60 85 65 80 65 75 L 65 45" />
                {/* Shake content */}
                <path d="M 35 45 L 35 65 C 35 70 40 75 45 75 L 55 75 C 60 75 65 70 65 65 L 65 45" fill="currentColor" opacity="0.2" />
                {/* Whipped cream top */}
                <path d="M 35 45 C 40 35 60 35 65 45" fill="currentColor" opacity="0.3" />
                <path d="M 40 40 C 45 30 55 30 60 40" fill="none" strokeWidth="2" />
                {/* Straw */}
                <rect x="48" y="15" width="4" height="35" rx="2" />
                {/* Cherry */}
                <circle cx="50" cy="25" r="3" fill="currentColor" />
                <path d="M 50 22 Q 52 18 54 20" fill="none" strokeWidth="1.5" />
            </svg>
        )
    }
];

export default function Categories() {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

    return (
        <section id="shop-merch" className="relative w-full bg-[#FFDEDE] border-t border-deepRed/10 overflow-hidden">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className={`relative flex flex-col items-center justify-center py-16 px-6 cursor-pointer group
                        ${idx < 3 ? 'lg:border-r lg:border-deepRed/20' : ''} 
                        ${(idx === 0 || idx === 1) ? 'sm:border-b lg:border-b-0 sm:border-deepRed/20' : ''}
                        ${(idx % 2 === 0) ? 'sm:border-r sm:border-deepRed/20' : ''}
                        `}
                        onMouseEnter={() => setHoveredCategory(idx)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        {/* Background overlay on hover */}
                        <div className="absolute inset-0 bg-deepRed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10 text-deepRed transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                            {category.icon}
                        </div>
                        <h3 className="relative z-10 text-deepRed font-heading font-bold text-2xl md:text-3xl text-center leading-tight tracking-wide max-w-[220px] transition-colors duration-300 group-hover:text-deepRed/80">
                            {category.title === "Self-Serve Frozen Yoghurt" ? (
                                <>Self-Serve<br />Frozen Yoghurt</>
                            ) : category.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
