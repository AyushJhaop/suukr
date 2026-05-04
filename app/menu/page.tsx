"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuSections = [
    {
        title: "Brew Bar & Coffee",
        description: "Slow-steeped for 20 hours. Smooth & Bold.",
        images: [
            "/images/SUUKR_vanilla cold foam cold brew_2880x2304.jpg",
            "/images/SUUKR_tiramisu cold foam cold brew_2880x2304.jpg",
            "/images/coldbrew.jpg",
            "/images/DSC08200.jpg"
        ],
        items: [
            { name: "Signature Brew", desc: "Nitro Cold Brew, Cold Brew, Seasonal Brew" },
            { name: "Cold Brew Latte", desc: "Coconut, Almond Maple, Oat Vanilla" },
            { name: "Cloudy", desc: "Mont Blanc, Salted Caramel, Tiramisu, Vanilla Sweet Cream" },
            { name: "Coffee", desc: "Latte, Cappuccino, Flat White, Long Black, Espresso, Piccolo, Mocha, Chai" },
            { name: "Iced", desc: "Latte, Long Black, Coffee, Matcha, Chai, Frappe" }
        ]
    },
    {
        title: "Smoothies & Protein",
        description: "High-protein • Refreshing 🌱",
        images: [
            "/images/yogurt.jpg",
            "/images/milkshake.jpg",
            "/images/DSC08458.jpg",
            "/images/DSC08527.jpg"
        ],
        items: [
            { name: "Berry Boost", desc: "Strawberries, Mango, Raspberries, Goji Berries, Almond Milk" },
            { name: "Purple Power", desc: "Acai, Blueberries, Banana, Dates, Oat Milk" },
            { name: "Tropical Sky", desc: "Pineapple, Mango, Banana, Passionfruit, Blue Spirulina, Coconut Milk" },
            { name: "Blue Spirulina Protein", desc: "Blue Spirulina, Banana, Almond Milk, Vanilla Protein" },
            { name: "Cocoa Energy", desc: "Cold Brew Coffee, Cacao, Almond Milk, Vanilla Protein" },
            { name: "Strawberry Shortcake", desc: "Strawberries, Oat Milk, Vanilla Protein, Short Bread" }
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
            { name: "Golden Gaytime", desc: "Caramel, vanilla, biscuit crunch" }
        ]
    },
    {
        title: "Classic Shakes",
        description: "Made with gelato, topped with whipped cream",
        images: [
            "/images/milkshake.jpg",
            "/images/DSC08136.jpg",
            "/images/DSC08238.jpg"
        ],
        items: [
            { name: "Biscoff", desc: "" },
            { name: "Nutella", desc: "" },
            { name: "Caramel", desc: "" },
            { name: "Strawberry", desc: "" },
            { name: "Chocolate", desc: "" },
            { name: "Vanilla", desc: "" }
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
            { name: "Strawberry Rose Matcha 🌱", desc: "Premium matcha, milk, strawberry-rose compote, vanilla cold foam" },
            { name: "Italian Hot Chocolate 🌱", desc: "Thick creamy dark hot chocolate" }
        ]
    },
    {
        title: "Belgian Waffles",
        description: "Made to order • Egg-less • In-house mix",
        images: [
            "/images/SUUKR_straberry with cream waffle_2880x2304.jpg",
            "/images/SUUKR_pistachio crunch waffle_2880x2304.jpg",
            "/images/SUUKR_biscoff white chocolate waffle_2880x2304.jpg",
            "/images/SUUKR_tripple chocolate waffle_2880x2304.jpg"
        ],
        items: [
            { name: "Biscoff & White Choc", desc: "Lotus biscoff and premium white chocolate" },
            { name: "Nutella Overload", desc: "Rich nutella and chocolate topping" },
            { name: "Pistachio Crunch", desc: "Pistachio sauce and crushed nuts" },
            { name: "Strawberry Cream", desc: "Fresh strawberries and whipped cream" },
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
            { name: "Classic", desc: "Traditional sweet cheese knafeh with syrup" },
            { name: "Biscoff", desc: "Topped with lotus biscoff spread and crumbs" },
            { name: "Chocolate", desc: "Filled and topped with rich warm chocolate" },
            { name: "Pistachio", desc: "Topped with excessive pistachio sauce and nuts" }
        ]
    }
];

// Variants for staggered reveal
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }
};

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-[#F5EEE6] flex flex-col font-body overflow-hidden">
            <Navbar />

            {/* Hero Section of Menu */}
            <div className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 text-center">
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
                            Shakes • Cold Brew • Desserts
                        </p>
                    </div>
                </motion.div>

                {/* Animated Mocha Character */}
                <motion.div 
                    initial={{ opacity: 0, x: -50, rotate: -10 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="absolute left-4 sm:left-12 top-40 hidden lg:block z-20 pointer-events-none"
                >
                    <Image 
                        src="/images/mocha_character.png" 
                        alt="Mocha Character" 
                        width={220} 
                        height={220} 
                        className="object-contain"
                    />
                </motion.div>
            </div>

            {/* Most Loved Banner */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-5xl mx-auto px-4 mb-20 text-center text-[#721011]"
            >
                <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6">Most Loved</h2>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-10 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
                    <p>Nitro Cold Brew</p>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <p>Italian Hot Chocolate</p>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <p>Strawberry Cream Waffle</p>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <p>Pistachio Knafeh</p>
                </div>
            </motion.div>

            {/* Visual Menu Sections */}
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
                                        {item.desc && (
                                            <p className="text-[11px] sm:text-xs tracking-widest text-[#721011]/70 uppercase leading-relaxed max-w-[85%] group-hover:text-[#721011] transition-colors">
                                                {item.desc}
                                            </p>
                                        )}
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="#8BB763" strokeWidth="3" className="w-4 h-4"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" /></svg>
                    <span className="text-xs tracking-widest text-[#721011] uppercase font-bold">Vegan options available</span>
                </div>
            </div>

            <Footer />
        </main>
    );
}
