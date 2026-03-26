"use client";

import { useMemo } from "react";

export default function GiftBanner() {
    const clipPath = useMemo(() => {
        const rows = 12; // Number of jagged teeth on each side
        const teethDepth = 24; // Pixel depth of teeth
        const points = [];

        // Top edge
        points.push(`${teethDepth}px 0%`);
        points.push(`calc(100% - ${teethDepth}px) 0%`);

        // Right jagged edge
        const step = 100 / rows;
        for (let i = 0; i < rows; i++) {
            points.push(`100% ${i * step + step / 2}%`);
            points.push(`calc(100% - ${teethDepth}px) ${(i + 1) * step}%`);
        }

        // Bottom edge
        points.push(`${teethDepth}px 100%`);

        // Left jagged edge (going bottom to top)
        for (let i = rows - 1; i >= 0; i--) {
            points.push(`0% ${i * step + step / 2}%`);
            points.push(`${teethDepth}px ${i * step}%`);
        }

        return `polygon(${points.join(', ')})`;
    }, []);

    return (
        <section className="py-24 w-full bg-whiteOff flex items-center justify-center relative z-20">
            {/* The Ticket Banner */}
            <div
                className="relative w-[95%] max-w-6xl h-[280px] md:h-[350px] shadow-2xl flex flex-row items-center justify-center md:justify-around px-8 md:px-32 overflow-hidden"
                style={{ clipPath }}
            >
                {/* Background Color & Pattern */}
                <div className="absolute inset-0 bg-[#721011] z-0"></div>
                <div
                    className="absolute inset-0 z-0 bg-[url('/images/dessert_pattern.png')] bg-cover bg-center opacity-40 mix-blend-lighten"
                ></div>

                {/* Content Container */}
                <div className="relative z-10 w-full flex flex-row items-center justify-between">

                    {/* Left Text */}
                    <div className="text-whiteOff font-heading font-bold text-4xl md:text-6xl leading-snug md:leading-tight text-center md:text-center w-full md:w-1/2 mb-0">
                        Give The Gift<br />Of<br />Suükr
                    </div>

                    {/* Right Circle Button */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <button className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] bg-[#D5AF34] rounded-full flex flex-col items-center justify-center text-whiteOff font-heading font-bold text-3xl md:text-4xl transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg">
                            Tap Here
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
