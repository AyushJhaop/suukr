"use client";

import { motion } from "framer-motion";

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

    return (
        <footer className="relative w-full bg-[#721011] overflow-hidden z-20 flex flex-col items-center pt-20 pb-10 mt-20">

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
                className="relative z-10 flex items-end justify-center mb-20"
            >
                {logo.split("").map((letter, i) => (
                    <motion.span
                        key={i}
                        variants={letterVariants}
                        whileHover={{ y: -12, scale: 1.1, transition: { type: "spring", stiffness: 400 } }}
                        className="font-heading font-bold leading-none select-none cursor-default"
                        style={{
                            fontSize: "clamp(4rem, 12vw, 10rem)",
                            color: "#D5AF34",
                            display: "inline-block",
                            lineHeight: 1,
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>

            {/* Bottom section: two columns */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-8 flex flex-col sm:flex-row items-start justify-between gap-16">

                {/* Left: Get In Touch */}
                <div className="flex flex-col items-start w-full sm:w-auto">
                    <p className="text-[#FEF2F2] font-heading font-bold text-lg tracking-widest uppercase mb-2 opacity-90">
                        Get In Touch
                    </p>
                    <div className="w-full h-[1.5px] bg-[#FEF2F2]/40 mb-6" />
                    <div className="flex items-center w-full max-w-[340px] bg-[#5a0d0d] border border-[#FEF2F2]/20 rounded-xl overflow-hidden">
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 bg-transparent text-[#FEF2F2] px-5 py-4 outline-none placeholder:text-[#FEF2F2]/50 font-body text-base"
                        />
                        <button className="bg-[#D5AF34] hover:bg-[#c49e24] active:scale-95 transition-all px-5 py-4 text-[#721011] flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right: Follow Us */}
                <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
                    <p className="text-[#FEF2F2] font-heading font-bold text-lg tracking-widest uppercase mb-2 opacity-90">
                        Follow us
                    </p>
                    <div className="w-full h-[1.5px] bg-[#FEF2F2]/40 mb-6" />
                    <div className="flex gap-4">
                        {[
                            // Facebook
                            <svg key="fb" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                            // Instagram
                            <svg key="ig" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
                            // TikTok-ish X
                            <svg key="x" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        ].map((icon, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ y: -6, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                className="w-11 h-11 bg-[#FEF2F2]/15 hover:bg-[#D5AF34] border border-[#FEF2F2]/25 rounded-full flex items-center justify-center text-[#FEF2F2] hover:text-[#721011] transition-colors shadow-md"
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="relative z-10 w-[90%] max-w-5xl mx-auto h-px bg-[#FEF2F2]/20 mt-16 mb-8" />

            {/* Copyright */}
            <p className="relative z-10 font-body text-[#FEF2F2]/60 text-sm tracking-wide">
                © 2026 Suükr. All rights reserved.
            </p>

        </footer>
    );
}
