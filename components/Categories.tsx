"use client";

import React from "react";

const categories = [
    {
        title: "Desserts",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                {/* Bottom pancake */}
                <ellipse cx="50" cy="75" rx="35" ry="12" />
                <path d="M15 65 A35 12 0 0 0 85 65" />
                {/* Middle pancake */}
                <ellipse cx="50" cy="55" rx="35" ry="12" />
                <path d="M15 45 A35 12 0 0 0 85 45" />
                {/* Top pancake */}
                <ellipse cx="50" cy="35" rx="35" ry="12" />
                {/* Syrup Drop */}
                <path d="M 35 35 C 35 40, 45 42, 47 50 C 47 65, 62 65, 62 48 C 62 42, 70 40, 70 35 Z" fill="currentColor" stroke="none" />
                {/* Syrup overlay line adjustment */}
                <path d="M 35 35 C 35 40, 45 42, 47 50 C 47 65, 62 65, 62 48 C 62 42, 70 40, 70 35" fill="none" stroke="currentColor" strokeWidth="5" />
            </svg>
        )
    },
    {
        title: "Self-Serve Frozen Yoghurt",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                {/* Cup Bottom */}
                <path d="M 20 55 L 80 55 L 70 85 C 70 90, 65 92, 50 92 C 35 92, 30 90, 30 85 Z" />
                {/* Cup Rim */}
                <path d="M 12 55 L 88 55" />
                {/* Swirl Base */}
                <path d="M 22 55 C 22 45, 30 40, 35 40" />
                <path d="M 78 55 C 78 45, 70 40, 65 40" />
                {/* Swirl Middle */}
                <path d="M 28 40 C 28 30, 40 28, 43 28" />
                <path d="M 72 40 C 72 30, 60 28, 57 28" />
                {/* Swirl Top */}
                <path d="M 38 28 C 38 18, 45 10, 50 5 C 55 15, 62 18, 62 28" />
                {/* Swirl Overlaps */}
                <path d="M 35 40 C 45 45, 65 45, 78 55" />
                <path d="M 43 28 C 50 32, 60 32, 72 40" />
            </svg>
        )
    },
    {
        title: "Coffee",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="currentColor">
                {/* Left bean */}
                <g transform="translate(35, 70) rotate(-40)">
                    <ellipse cx="0" cy="0" rx="18" ry="28" />
                    <path d="M -6 -22 C 8 -10, -8 10, 6 22" stroke="#FFDEDE" strokeWidth="4" fill="none" strokeLinecap="round" />
                </g>
                {/* Right bean */}
                <g transform="translate(75, 60) rotate(35)">
                    <ellipse cx="0" cy="0" rx="18" ry="28" />
                    <path d="M -6 -22 C 8 -10, -8 10, 6 22" stroke="#FFDEDE" strokeWidth="4" fill="none" strokeLinecap="round" />
                </g>
                {/* Top bean (overlaps) */}
                <g transform="translate(55, 35) rotate(10)">
                    <ellipse cx="0" cy="0" rx="18" ry="28" />
                    <path d="M -6 -22 C 8 -10, -8 10, 6 22" stroke="#FFDEDE" strokeWidth="4" fill="none" strokeLinecap="round" />
                </g>
            </svg>
        )
    },
    {
        title: "Shakes",
        icon: (
            <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 mb-8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                {/* Cup Bottom */}
                <path d="M 30 50 L 38 90 C 38 93, 40 95, 50 95 C 60 95, 62 93, 62 90 L 70 50" />
                {/* Cup Collar */}
                <path d="M 22 50 L 78 50 L 74 40 L 26 40 Z" />
                {/* Dome Top */}
                <path d="M 26 40 C 26 15, 74 15, 74 40" />
                {/* Straw */}
                <path d="M 50 20 L 50 5" />
                {/* Decorative horizontal line on cup */}
                <path d="M 33 70 L 67 70" />
            </svg>
        )
    }
];

export default function Categories() {
    return (
        <section id="shop-merch" className="w-full bg-[#FFDEDE] border-t border-deepRed/10">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col items-center justify-center py-16 px-6 
                        ${idx < 3 ? 'lg:border-r lg:border-deepRed/20' : ''} 
                        ${(idx === 0 || idx === 1) ? 'sm:border-b lg:border-b-0 sm:border-deepRed/20' : ''}
                        ${(idx % 2 === 0) ? 'sm:border-r sm:border-deepRed/20' : ''}
                        `}
                    >
                        <div className="text-deepRed transform transition-transform hover:scale-105 duration-300">
                            {category.icon}
                        </div>
                        <h3 className="text-deepRed font-heading font-bold text-2xl md:text-3xl text-center leading-tight tracking-wide max-w-[220px]">
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
