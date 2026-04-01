"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Menu", id: "menu" },
        { label: "Best Sellers", id: "best-sellers" },
        { label: "E-Gift", id: "e-gift" },
        { label: "Shop Merch", id: "shop-merch" },
        { label: "Contact Us", id: "contact-us" },
    ];

    const handleNavClick = (id: string) => {
        setIsMenuOpen(false);
        // Smooth scroll to section
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-16 py-4 sm:py-6 z-40 bg-transparent">
                {/* Logo */}
                <div className="text-[#D5AF34] font-heading font-bold font-semibold text-2xl sm:text-3xl tracking-widest">
                    SUÜKR
                </div>

                {/* Desktop Links */}
                <nav className="hidden lg:flex gap-8 items-center">
                    {navItems.map((item) => (
                        <a 
                            key={item.id} 
                            href={`#${item.id}`} 
                            className="text-[#721011] font-body font-bold text-sm tracking-wide relative group overflow-hidden transition-all duration-300 hover:tracking-widest"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#721011] transition-all duration-300 group-hover:w-1/2" />
                            <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[#721011] transition-all duration-300 group-hover:w-1/2" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button & Desktop CTA */}
                <div className="flex items-center gap-3">
                    {/* Desktop CTA */}
                    <button className="hidden sm:block px-4 sm:px-6 py-2 bg-[#D5AF34] text-whiteOff font-body font-bold text-sm sm:text-base rounded-full shadow-md hover:bg-[#c49e24] transition-colors">
                        Order Now
                    </button>
                    
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-[#721011] hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                    <div className="text-[#D5AF34] font-heading font-bold text-2xl tracking-widest">
                                        SUÜKR
                                    </div>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 text-[#721011] hover:bg-gray-100 rounded-full transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 px-6 py-8">
                                    <ul className="space-y-6">
                                        {navItems.map((item) => (
                                            <li key={item.id}>
                                                <button
                                                    onClick={() => handleNavClick(item.id)}
                                                    className="w-full text-left text-[#721011] font-body font-bold text-lg tracking-wide py-3 border-b border-transparent hover:border-[#721011]/20 transition-all duration-300"
                                                >
                                                    {item.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Mobile CTA */}
                                <div className="p-6 border-t border-gray-100">
                                    <button 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full px-6 py-4 bg-[#D5AF34] text-whiteOff font-body font-bold text-lg rounded-full shadow-md hover:bg-[#c49e24] transition-colors"
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
