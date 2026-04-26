"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { label: "Menu", action: "route", href: "/menu" },
        { label: "Best Sellers", action: "scroll", id: "best-sellers" },
        { label: "E-Gift", action: "link", href: "https://suukr.myshopify.com/" },
        { label: "Contact Us", action: "scroll", id: "contact-us" },
    ];

    const handleNavClick = (item: any) => {
        setIsMenuOpen(false);
        if (item.action === "route") {
            router.push(item.href);
        } else if (item.action === "link") {
            window.open(item.href, "_blank");
        } else if (item.action === "scroll") {
            if (pathname !== "/") {
                router.push(`/#${item.id}`);
            } else {
                const element = document.getElementById(item.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <>
            <nav className="absolute top-0 left-0 w-full z-40">
                {/* Navbar content without background */}
                <div className="relative bg-transparent">
                    <div className="flex items-center justify-between px-4 sm:px-6 md:px-16 py-4 sm:py-6">
                        {/* Logo */}
                        <div className="text-[#D5AF34] font-heading font-bold font-semibold text-2xl sm:text-3xl tracking-widest">
                            SUÜKR
                        </div>

                        {/* Desktop Links */}
                        <nav className="hidden lg:flex gap-8 items-center">
                            {navItems.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleNavClick(item)}
                                    className="text-[#721011] font-body font-bold text-sm tracking-wide relative group transition-all duration-300 cursor-pointer"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#721011] transition-all duration-300 group-hover:w-1/2" />
                                    <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[#721011] transition-all duration-300 group-hover:w-1/2" />
                                </button>
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

                    {/* Decorative bottom curve removed for clean transparent design */}
                </div>
            </nav>

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
                                        {navItems.map((item, idx) => (
                                            <li key={idx}>
                                                <button
                                                    onClick={() => handleNavClick(item)}
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
