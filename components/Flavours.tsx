"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type FlavorState = {
    id: number;
    name: string;
    description: string;
    ctaText: string;
    accentColor: string;
    image: string;
    vibe: 'light' | 'vibrant' | 'rich';
};

const flavorStates: FlavorState[] = [
    {
        id: 0,
        name: "Summer Strawberry",
        description: "A gentle blush of sun-ripened berries swirled into velvet cream. It's the taste of a quiet June afternoon—light, airy, and effortlessly sweet.",
        ctaText: "Savor the Blush — Order Now",
        accentColor: "#FDE2E4",
        image: "/images/strawberry_froyo.png",
        vibe: 'light'
    },
    {
        id: 1,
        name: "Alphonso Gold",
        description: "Intense, sun-drenched nectar captured in a frozen dance. A vibrant burst of tropical soul that lingers like a warm coastal breeze on your palate.",
        ctaText: "Capture the Sun — Order Now",
        accentColor: "#D5AF34",
        image: "/images/mango_froyo.png",
        vibe: 'vibrant'
    },
    {
        id: 2,
        name: "Madagascar Velvet",
        description: "Beyond simple; it is the fundamental art of flavor. Rich, aromatic bean flecks folded into a dense, luxurious cloud of pure indulgence.",
        ctaText: "Taste the Purity — Order Now",
        accentColor: "#EAD7BB",
        image: "/images/vanilla_froyo.png",
        vibe: 'rich'
    }
];

export default function Flavours() {
    const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
    const activeFlavor = flavorStates[activeFlavorIndex];

    const handleOrderClick = () => {
        // Add your order functionality here
        console.log(`Ordering ${activeFlavor.name}`);
        // You can redirect to order page, open modal, etc.
    };

    return (
        <section 
            id="flavors" 
            className="relative py-12 sm:py-16 px-4 lg:px-8 w-full overflow-hidden bg-whiteOff"
        >
            {/* Main Card Container */}
            <div 
                className="relative max-w-6xl mx-auto overflow-hidden shadow-2xl transition-all duration-500 ease-in-out rounded-2xl sm:rounded-3xl"
                style={{ backgroundColor: activeFlavor.accentColor }}
            >
                {/* Diagonal Background Split - Hidden on mobile, simplified on tablet */}
                <motion.div 
                    className="absolute inset-0 bg-white z-0 hidden lg:block"
                    style={{
                        clipPath: "polygon(0 0, 87% 0, 47% 100%, 0 100%)"
                    }}
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Mobile/Tablet Background */}
                <div className="absolute inset-0 bg-white/90 z-0 lg:hidden" />

                <div className="relative z-10 min-h-[500px] sm:min-h-[600px] lg:h-[600px] flex flex-col lg:flex-row">
                    {/* Content Area */}
                    <div className="w-full lg:w-3/5 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-16 text-center lg:text-left lg:transform lg:translateX-[7%]">
                        {/* Vertical Label - Hidden on mobile */}
                        <div className="mb-4 lg:mb-6 hidden lg:block">
                            <motion.div 
                                className="text-xs font-body tracking-[0.3em] text-gray-600 uppercase transform -rotate-90 origin-left w-fit"
                                initial={false}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                            >
                                FLAVORS
                            </motion.div>
                        </div>

                        {/* Mobile Label */}
                        <div className="mb-4 lg:hidden">
                            <span className="text-xs font-body tracking-[0.3em] text-gray-600 uppercase">
                                FLAVORS
                            </span>
                        </div>

                        {/* Main Content */}
                        <div className="max-w-md mx-auto lg:mx-0 space-y-4 sm:space-y-6">
                            {/* Dynamic Heading */}
                            <motion.h1 
                                key={activeFlavor.name}
                                className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-deepRed leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {activeFlavor.name}
                            </motion.h1>

                            {/* Dynamic Description */}
                            <motion.p 
                                key={activeFlavor.description}
                                className="font-body text-sm sm:text-base text-gray-700 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                            >
                                {activeFlavor.description}
                            </motion.p>

                            {/* CTA Button */}
                            <motion.button 
                                key={activeFlavor.ctaText}
                                onClick={handleOrderClick}
                                className="relative font-body text-sm sm:text-base font-medium px-6 py-3 cursor-pointer border-2 overflow-hidden min-h-[44px] w-full sm:w-auto"
                                style={{
                                    borderColor: '#721011',
                                    color: '#721011'
                                }}
                                initial={{ 
                                    opacity: 1, 
                                    y: 20,
                                    backgroundColor: 'transparent'
                                }}
                                whileHover={{ 
                                    scale: 1.02,
                                    backgroundColor: '#721011',
                                    color: '#ffffff',
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                                whileTap={{ 
                                    scale: 0.98,
                                    transition: { duration: 0.1 }
                                }}
                                transition={{ duration: 0, ease: "easeInOut", delay: 0  }}
                            >
                                <span className="relative z-9">{activeFlavor.ctaText}</span>
                            </motion.button>
                        </div>

                        {/* Selection Bar */}
                        <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-5 mt-8 lg:mt-12 lg:absolute lg:bottom-10 lg:left-6 lg:right-auto" style={{ zIndex: 10 }}>
                            {flavorStates.map((flavor, index) => (
                                <motion.button
                                    key={flavor.id}
                                    onClick={() => setActiveFlavorIndex(index)}
                                    className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden cursor-pointer min-w-[44px] min-h-[44px]"
                                    style={{
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: index === activeFlavorIndex ? '#721011' : '#d1d5db'
                                    }}
                                    initial={{ scale: index === activeFlavorIndex ? 1.05 : 1 }}
                                    animate={{ 
                                        scale: index === activeFlavorIndex ? 1.05 : 1,
                                        borderColor: index === activeFlavorIndex ? '#721011' : '#d1d5db'
                                    }}
                                    whileHover={{ 
                                        scale: 1.1,
                                        borderColor: '#721011',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ 
                                        scale: 0.95,
                                        transition: { duration: 0.1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <Image
                                        src={flavor.image}
                                        alt={flavor.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 64px"
                                        unoptimized
                                    />
                                    {index === activeFlavorIndex && (
                                        <motion.div 
                                            className="absolute inset-0"
                                            style={{ backgroundColor: 'rgba(114, 16, 17, 0.1)' }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="w-full lg:w-2/5 relative flex items-center justify-center overflow-hidden order-first lg:order-last h-[300px] sm:h-[400px] lg:h-full lg:transform lg:translateX-[-78.3%]">
                        <motion.div 
                            key={activeFlavor.image}
                            className="relative w-full h-full lg:w-[300%] lg:h-[300%] lg:min-w-[850px] lg:min-h-[850px] lg:transform lg:translateX-[-60%]"
                            style={{ zIndex: 1 }}
                            initial={{ opacity: 0, scale: 0.8, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Image
                                src={activeFlavor.image}
                                alt={activeFlavor.name}
                                fill
                                className="object-contain drop-shadow-3xl"
                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                                priority
                                unoptimized
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Social Footer (Bottom Right) */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 lg:right-12 flex items-center space-x-4">
                    
                    {/* Scroll Indicator */}
                    <div className="flex space-x-1">
                        {flavorStates.map((_, index) => (
                            <div 
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === activeFlavorIndex ? 'bg-deepRed' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
