import React from "react";

export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-6 z-40 bg-transparent">
            {/* Logo */}
            <div className="text-[#D5AF34] font-heading font-bold font-semibold text-3xl tracking-widest">
                SUÜKR
            </div>

            {/* Links */}
            <nav className="hidden md:flex gap-8 items-center">
                {["Menu", "Best Sellers", "E-Gift", "Shop Merch", "Contact Us"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[#721011] font-body font-bold text-sm tracking-wide">
                        {item}
                    </a>
                ))}
            </nav>

            {/* Call to Action */}
            <button className="px-6 py-2 bg-[#D5AF34] text-whiteOff font-body font-bold rounded-full shadow-md">
                Order Now
            </button>
        </div>
    );
}
