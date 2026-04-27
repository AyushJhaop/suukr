"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuSections = [
    {
        title: "Cold Brew & Coffee",
        description: "Slow-steeped. Smooth & Bold.",
        images: [
            "/images/SUUKR_vanilla cold foam cold brew_2880x2304.jpg",
            "/images/SUUKR_tiramisu cold foam cold brew_2880x2304.jpg"
        ],
        items: [
            { name: "Vanilla Cold Foam Cold Brew", desc: "Signature cold brew topped with sweet vanilla cream" },
            { name: "Tiramisu Cold Brew", desc: "Rich cocoa and marscapone foam" },
            { name: "Nitro Cold Brew", desc: "Silky, creamy, cascading nitro cold brew" },
            { name: "Latte / Cappuccino", desc: "Classic espresso based perfectly extracted" }
        ]
    },
    {
        title: "Signature Shakes",
        description: "Made with gelato, topped with whipped cream",
        images: [
            "/images/SUUKR_blue cookie monster shake_2880x2304.jpg",
            "/images/SUUKR_pistachio silk shake_2880x2304.jpg",
            "/images/SUUKR_maltease shake_2880x2304.jpg",
            "/images/SUUKR_vanilla shake_2880x2304.jpg"
        ],
        items: [
            { name: "Cookie Monster", desc: "Oreo cookies, blue spirulina & sprinkles" },
            { name: "Pistachio Silk", desc: "Pistachio butter, pistachio crunch" },
            { name: "Mal-tease", desc: "Maltesers, malty chocolate" },
            { name: "Vanilla Shake", desc: "Classic rich vanilla gelato shake" }
        ]
    },
    {
        title: "Belgian Waffles",
        description: "Crispy outside, fluffy inside, egg-less",
        images: [
            "/images/SUUKR_straberry with cream waffle_2880x2304.jpg",
            "/images/SUUKR_pistachio crunch waffle_2880x2304.jpg",
            "/images/SUUKR_biscoff white chocolate waffle_2880x2304.jpg",
            "/images/SUUKR_tripple chocolate waffle_2880x2304.jpg"
        ],
        items: [
            { name: "Strawberry Cream", desc: "Fresh strawberries and whipped cream" },
            { name: "Pistachio Crunch", desc: "Pistachio sauce and crushed nuts" },
            { name: "Biscoff & White Choc", desc: "Lotus biscoff and premium white chocolate" },
            { name: "Triple Chocolate", desc: "Dark, milk, and white chocolate overload" }
        ]
    },
    {
        title: "Knafeh",
        description: "Sweet • Cheesy • Golden Crunch",
        images: [
            "/images/SUUKR_kanafeh classic_2880x2304.jpg",
            "/images/SUUKR_kanafeh pistachio_2880x2304.jpg",
            "/images/SUUKR_kanafeh chocolate_2880x2304.jpg"
        ],
        items: [
            { name: "Classic Knafeh", desc: "Traditional sweet cheese knafeh with syrup" },
            { name: "Pistachio Knafeh", desc: "Topped with excessive pistachio sauce and nuts" },
            { name: "Chocolate Knafeh", desc: "Filled and topped with rich warm chocolate" },
            { name: "Biscoff Knafeh", desc: "Topped with lotus biscoff spread and crumbs" }
        ]
    },
    {
        title: "Speciality Drinks",
        description: "Handcrafted unique flavors",
        images: [
            "/images/SUUKR_straberry rose matcha_2880x2304.jpg",
            "/images/SUUKR_italian hot chocolate_2880x2304.jpg"
        ],
        items: [
            { name: "Strawberry Rose Matcha", desc: "Premium matcha, milk, strawberry-rose compote, vanilla cold foam" },
            { name: "Italian Hot Chocolate", desc: "Thick creamy dark hot chocolate" }
        ]
    }
];

// Variants for staggered reveal
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 15 } }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
};

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-[#F5EEE6] flex flex-col font-body">
            <Navbar />

            {/* Hero Section of Menu */}
            <div className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <p className="text-xs sm:text-sm tracking-[0.3em] text-[#721011]/60 font-semibold mb-4 sm:mb-6 uppercase">Sweet. Refined.</p>
                    <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl text-[#721011] font-bold tracking-widest mb-6 sm:mb-8">SUÜKR</h1>
                    <div className="inline-block border-y border-[#721011] border-dashed py-3 sm:py-4 px-4 sm:px-12">
                        <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] text-[#721011] font-bold uppercase">
                            Visual Menu
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                {menuSections.map((section, idx) => (
                    <motion.section
                        key={idx}
                        className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20 mb-24 lg:mb-32`}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {/* Images Collage */}
                        <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[600px] flex justify-center items-center">
                            {section.images.map((img, i) => {
                                // Slightly staggered z-index and positions for a scattered collage look
                                const isFirst = i === 0;
                                const rotate = i % 2 === 0 ? (i * 3) : -(i * 4);
                                const xOffset = i === 1 ? '10%' : i === 2 ? '-15%' : i === 3 ? '15%' : '0%';
                                const yOffset = i === 1 ? '-10%' : i === 2 ? '15%' : i === 3 ? '10%' : '0%';

                                return (
                                    <motion.div
                                        key={i}
                                        variants={imageVariants}
                                        className={`absolute shadow-xl rounded-2xl overflow-hidden border-4 border-whiteOff
                                            ${isFirst ? 'w-[75%] h-[80%] z-20' : 'w-[50%] h-[55%] z-10'}
                                        `}
                                        style={{
                                            rotate: `${rotate}deg`,
                                            left: xOffset !== '0%' ? `calc(25% + ${xOffset})` : 'auto',
                                            top: yOffset !== '0%' ? `calc(25% + ${yOffset})` : 'auto',
                                        }}
                                        whileHover={{ zIndex: 30, scale: 1.05, rotate: 0 }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${section.title} image`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Text Items */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <motion.h2 variants={itemVariants} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#721011] uppercase tracking-widest mb-2">
                                {section.title}
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-sm sm:text-base italic tracking-widest text-[#721011]/60 mb-10 uppercase">
                                {section.description}
                            </motion.p>

                            <div className="space-y-8">
                                {section.items.map((item, iIdx) => (
                                    <motion.div key={iIdx} variants={itemVariants} className="relative group">
                                        <div className="flex items-end justify-between border-b border-[#721011]/20 pb-2 mb-2">
                                            <h3 className="font-bold text-[#721011] tracking-widest uppercase text-base sm:text-lg">
                                                {item.name}
                                            </h3>
                                        </div>
                                        <p className="text-[11px] sm:text-xs tracking-widest text-[#721011]/70 uppercase leading-relaxed max-w-[85%] group-hover:text-[#721011] transition-colors">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* Bottom Floating Bar */}
            <div className="w-full bg-[#EBE2D4] py-4 mt-auto text-center border-t border-[#721011]/20 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" className="w-4 h-4"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" /></svg>
                    <span className="text-xs tracking-widest text-[#721011] uppercase font-bold">Vegan options available</span>
                </div>
            </div>

            <Footer />
        </main>
    );
}
