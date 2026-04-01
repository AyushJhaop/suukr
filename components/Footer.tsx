"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } }
};

const letterVariants: any = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

export default function Footer() {
    const logo = "SUÜKR";
    const [formData, setFormData] = useState({
        firstName: '',
        mobile: '',
        email: '',
        birthDate: '',
        postcode: '',
        agreeToTerms: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <footer className="relative w-full bg-[#721011] overflow-hidden z-20 pt-16 sm:pt-20 pb-8 sm:pb-10 mt-16 sm:mt-20">

            {/* Dessert pattern background - subtler */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/dessert_pattern.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.08
                }}
            />

            {/* Big animated logo */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 flex items-end justify-center mb-16 sm:mb-20"
            >
                {logo.split("").map((letter, i) => (
                    <motion.span
                        key={i}
                        variants={letterVariants}
                        whileHover={{ y: -12, scale: 1.1, transition: { type: "spring", stiffness: 400 } }}
                        className="font-heading font-bold leading-none select-none cursor-default"
                        style={{
                            fontSize: "clamp(3rem, 8vw, 10rem)",
                            color: "#D5AF34",
                            display: "inline-block",
                            lineHeight: 1,
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>

            {/* Main Content: Two Column Layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-start justify-between gap-12 sm:gap-16">

                {/* Left Side: Newsletter Form */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-6 sm:mb-8">
                        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#D5AF34] mb-3 sm:mb-4 leading-tight">
                            Your Inbox, More Sprinkles !
                        </h2>
                        <p className="text-[#FEF2F2] text-base sm:text-lg font-medium leading-relaxed">
                            We only email when it’s delicious. Promise. 
                            
                        <br></br>
                        Sign up for exclusive drops and birthday "treat yourself" moments.
                        </p>
                    </div>

                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        {/* First Row: First Name & Mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name*"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#5a0d0d] border-2 border-[#FEF2F2]/20 rounded-full text-[#FEF2F2] placeholder:text-[#FEF2F2]/60 font-medium text-sm sm:text-base focus:outline-none focus:border-[#D5AF34] transition-colors min-h-[44px]"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#5a0d0d] border-2 border-[#FEF2F2]/20 rounded-full text-[#FEF2F2] placeholder:text-[#FEF2F2]/60 font-medium text-sm sm:text-base focus:outline-none focus:border-[#D5AF34] transition-colors min-h-[44px]"
                                />
                            </div>
                        </div>

                        {/* Second Row: Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#5a0d0d] border-2 border-[#FEF2F2]/20 rounded-full text-[#FEF2F2] placeholder:text-[#FEF2F2]/60 font-medium text-sm sm:text-base focus:outline-none focus:border-[#D5AF34] transition-colors min-h-[44px]"
                                required
                            />
                        </div>

                        {/* Third Row: Birth Date & Postcode */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="relative">
                                <select
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#5a0d0d] border-2 border-[#FEF2F2]/20 rounded-full text-[#FEF2F2] font-medium text-sm sm:text-base focus:outline-none focus:border-[#D5AF34] transition-colors appearance-none cursor-pointer min-h-[44px]"
                                >
                                    <option value="" className="text-gray-800">dd/mm/yyyy</option>
                                    <option value="01/01/1990" className="text-gray-800">01/01/1990</option>
                                    <option value="01/01/1995" className="text-gray-800">01/01/1995</option>
                                    <option value="01/01/2000" className="text-gray-800">01/01/2000</option>
                                </select>
                                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FEF2F2]/60">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="postcode"
                                    placeholder="Postcode*"
                                    value={formData.postcode}
                                    onChange={handleInputChange}
                                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#5a0d0d] border-2 border-[#FEF2F2]/20 rounded-full text-[#FEF2F2] placeholder:text-[#FEF2F2]/60 font-medium text-sm sm:text-base focus:outline-none focus:border-[#D5AF34] transition-colors min-h-[44px]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Terms & Submit Row */}
                        <div className="bg-[#4A1A1A] rounded-full p-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                            <div className="flex items-start sm:items-center px-2 sm:px-4 py-2 flex-1">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-[#FEF2F2]/40 bg-transparent checked:bg-[#D5AF34] checked:border-[#D5AF34] mr-3 sm:mr-4 cursor-pointer mt-0.5 sm:mt-0 flex-shrink-0"
                                    required
                                />
                                <label htmlFor="terms" className="text-[#FEF2F2] font-medium text-xs sm:text-sm cursor-pointer flex-1 leading-relaxed">
                                    We only send the icy-goods, get ready to freeze your brain. T&Cs apply
                                </label>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#D5AF34] text-[#721011] font-heading font-bold text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition-colors hover:bg-[#c49e24] w-full sm:w-auto justify-center min-h-[44px]"
                            >
                                Submit
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                                    <path d="M22 2L11 13"></path>
                                    <polygon points="22,2 15,22 11,13 2,9"></polygon>
                                </svg>
                            </motion.button>
                        </div>
                    </form>

                    {/* Legal Text */}
                    <div className="text-[#FEF2F2]/80 text-xs sm:text-sm font-medium leading-relaxed">
                        <p>
                            This site is protected by reCAPTCHA and the Google{' '}
                            <a href="#" className="underline hover:no-underline font-bold text-[#D5AF34]">Privacy Policy</a>{' '}
                            and{' '}
                            <a href="#" className="underline hover:no-underline font-bold text-[#D5AF34]">Terms of Service</a>{' '}
                            apply.
                        </p>
                    </div>
                </div>

                {/* Right Side: Previous Content */}
                <div className="w-full lg:w-1/2 flex flex-col sm:flex-row lg:flex-col items-start justify-between gap-12 sm:gap-16">

                    {/* Follow Us */}
                    <div className="flex flex-col items-start sm:items-end lg:items-start w-full sm:w-1/2 lg:w-full">
                        <p className="text-[#FEF2F2] font-heading font-bold text-base sm:text-lg tracking-widest uppercase mb-2 opacity-90">
                            Follow us
                        </p>
                        <div className="w-full h-[1.5px] bg-[#FEF2F2]/40 mb-4 sm:mb-6" />
                        <div className="flex gap-3 sm:gap-4">
                            {[
                                // Facebook
                                <svg key="fb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                                // Instagram
                                <svg key="ig" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
                                // TikTok-ish X
                                <svg key="x" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            ].map((icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ y: -6, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    className="w-10 h-10 sm:w-11 sm:h-11 bg-[#FEF2F2]/15 hover:bg-[#D5AF34] border border-[#FEF2F2]/25 rounded-full flex items-center justify-center text-[#FEF2F2] hover:text-[#721011] transition-colors shadow-md min-w-[44px] min-h-[44px]"
                                >
                                    {icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="relative z-10 w-[90%] max-w-7xl mx-auto h-px bg-[#FEF2F2]/20 mt-12 sm:mt-16 mb-6 sm:mb-8" />

            {/* Copyright */}
            <p className="relative z-10 font-body text-[#FEF2F2]/60 text-xs sm:text-sm tracking-wide text-center px-4">
                © 2026 Suükr. All rights reserved.
            </p>

        </footer>
    );
}
