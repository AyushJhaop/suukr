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
                {[
                    { label: "Menu", id: "menu" },
                    { label: "Best Sellers", id: "best-sellers" },
                    { label: "E-Gift", id: "e-gift" },
                    { label: "Shop Merch", id: "shop-merch" },
                    { label: "Contact Us", id: "contact-us" },
                ].map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="text-[#721011] font-body font-bold text-sm tracking-wide relative group overflow-hidden transition-all duration-300 hover:tracking-widest">
                        {item.label}
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#721011] transition-all duration-300 group-hover:w-1/2" />
                        <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[#721011] transition-all duration-300 group-hover:w-1/2" />
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
