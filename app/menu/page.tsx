"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-[#F5EEE6] flex flex-col font-body">
            {/* Using a darker overlay or slightly adjusting Navbar since background is cream, 
               but wait, Navbar uses text-[#721011] so it will look great on cream. */}
            <div className="bg-[#F5EEE6] pb-24">
                <Navbar />

                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <p className="text-xs sm:text-sm tracking-[0.3em] text-[#721011]/60 font-semibold mb-4 sm:mb-6 uppercase">Sweet. Refined.</p>
                        <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl text-[#721011] font-bold tracking-widest mb-6 sm:mb-8">SUÜKR</h1>
                        <div className="inline-block border-y border-[#721011] border-dashed py-3 sm:py-4 px-4 sm:px-12">
                            <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] text-[#721011] font-bold uppercase">
                                Shakes • Cold Brew • Desserts
                            </p>
                        </div>
                    </div>

                    {/* Most Loved Box */}
                    <div className="bg-[#EBE2D4] bg-opacity-70 rounded-none border-y border-[#721011]/10 border-dashed p-6 sm:p-10 text-center mx-auto max-w-3xl mb-16 shadow-sm">
                        <h2 className="font-heading text-2xl sm:text-3xl tracking-widest font-bold text-[#721011] mb-6">MOST LOVED</h2>
                        <ul className="space-y-3 font-semibold tracking-widest text-[#721011] uppercase text-sm sm:text-base">
                            <li>Nitro Cold Brew</li>
                            <li>Italian Hot Chocolate</li>
                            <li>Strawberry Cream Waffle</li>
                            <li>Pistachio Knafeh</li>
                        </ul>
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16">

                        {/* Left Column */}
                        <div className="flex flex-col gap-12 sm:gap-16">

                            {/* Brew Bar */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-1">Brew Bar</h2>
                                <p className="text-[11px] sm:text-xs italic tracking-widest text-[#721011]/60 mb-6 uppercase">Slow-steeped for 20 hours</p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-3">Signature Brew</h3>
                                        <div className="grid grid-cols-2 gap-2 text-xs tracking-widest text-[#721011]/80 uppercase">
                                            <div className="flex flex-col gap-2">
                                                <span>Nitro Cold Brew</span>
                                                <span>Cold Brew</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span>Seasonal Brew</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-3">Cold Brew Latte</h3>
                                        <div className="grid grid-cols-2 gap-2 text-xs tracking-widest text-[#721011]/80 uppercase">
                                            <div className="flex flex-col gap-2">
                                                <span>Coconut</span>
                                                <span>Almond Maple</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span>Oat Vanilla</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-3">Cloudy</h3>
                                        <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs tracking-widest text-[#721011]/80 uppercase">
                                            <div className="flex flex-col gap-2">
                                                <span>Mont Blanc</span>
                                                <span>Salted Caramel</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span>Tiramisu</span>
                                                <span>Vanilla Sweet Cream</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Coffee */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-6">Coffee</h2>
                                <div className="grid grid-cols-2 gap-2 text-xs tracking-widest text-[#721011]/80 uppercase mb-6">
                                    <div className="flex flex-col gap-2">
                                        <span>Latte</span>
                                        <span>Cappuccino</span>
                                        <span>Flat White</span>
                                        <span>Long Black</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Double Espresso</span>
                                        <span>Piccolo</span>
                                        <span>Mocha</span>
                                        <span>Chai Latte</span>
                                    </div>
                                </div>
                                <p className="text-xs tracking-widest text-[#721011]/90 font-bold uppercase border-t border-[#721011] border-dashed pt-4 mb-6">
                                    Iced: Latte • Long Black • Coffee • Matcha • Chai • Frappe
                                </p>
                                <p className="mt-2 text-[11px] sm:text-xs italic tracking-widest text-[#721011]/60 text-center uppercase">
                                    Perfect by the second sip.<br />If not, we'll remake it!
                                </p>
                            </section>

                            {/* Smoothies */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-6 flex items-center gap-2">
                                    Smoothies
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" /></svg>
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Berry Boost</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">STRAWBERRIES, MANGO, RASPBERRIES, GOJI BERRIES, ALMOND MILK</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Purple Power</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">ACAI, BLUEBERRIES, BANANA, DATES, OAT MILK</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Tropical Sky</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">PINEAPPLE, MANGO, BANANA, PASSIONFRUIT, BLUE SPIRULINA, COCONUT MILK</p>
                                    </div>
                                </div>
                            </section>

                            {/* Protein Shakes */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-1">Protein Shakes</h2>
                                <p className="text-[11px] sm:text-xs italic tracking-widest text-[#721011]/60 mb-6 uppercase">High-protein • Post-gym</p>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Blue Spirulina Protein</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">BLUE SPIRULINA, BANANA, ALMOND MILK, VANILLA PROTEIN</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Cocoa Energy</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">COLD BREW COFFEE, CACAO, ALMOND MILK, VANILLA PROTEIN</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Strawberry Shortcake</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">STRAWBERRIES, OAT MILK, VANILLA PROTEIN, SHORT BREAD</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-12 sm:gap-16">

                            {/* Signature Shakes */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-1">Signature Shakes</h2>
                                <p className="text-[11px] sm:text-xs italic tracking-widest text-[#721011]/60 mb-6 uppercase">Made with gelato & topped with whipped cream</p>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Cookie Monster</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">OREO COOKIES, BLUE SPIRULINA & SPRINKLES</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Pistachio Silk</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">PISTACHIO BUTTER, PISTACHIO CRUNCH</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Mal-tease</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">MALTESERS, MALTY CHOCOLATE</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Golden Gaytime</h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">CARAMEL, VANILLA, BISCUIT CRUNCH</p>
                                    </div>
                                </div>
                            </section>

                            {/* Classic Shakes */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-1">Classic Shakes</h2>
                                <p className="text-[11px] sm:text-xs italic tracking-widest text-[#721011]/60 mb-6 uppercase">Made with gelato & topped with whipped cream</p>
                                <div className="grid grid-cols-2 gap-2 text-xs tracking-widest text-[#721011]/80 uppercase">
                                    <div className="flex flex-col gap-2">
                                        <span>Biscoff</span>
                                        <span>Caramel</span>
                                        <span>Chocolate</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Nutella</span>
                                        <span>Strawberry</span>
                                        <span>Vanilla</span>
                                    </div>
                                </div>
                            </section>

                            {/* Speciality Drinks */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-6">Speciality Drinks</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1 flex items-center gap-2">
                                            Strawberry Rose Matcha
                                            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" className="w-4 h-4"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" /></svg>
                                        </h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">PREMIUM MATCHA, MILK, STRAWBERRY-ROSE COMPOTE, VANILLA COLD FOAM</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1 flex items-center gap-2">
                                            Italian Hot Chocolate
                                            <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" className="w-4 h-4"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" /></svg>
                                        </h3>
                                        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#721011]/70 uppercase leading-relaxed">THICK CREAMY DARK HOT CHOCOLATE</p>
                                    </div>
                                </div>
                            </section>

                            {/* Desserts */}
                            <section>
                                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#721011] uppercase tracking-widest mb-6">Desserts</h2>

                                <div className="mb-8">
                                    <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Waffles</h3>
                                    <p className="text-[11px] sm:text-xs italic tracking-widest text-[#721011]/60 mb-4 uppercase">Made to order - Egg-less - In-house mix</p>
                                    <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs tracking-widest text-[#721011]/80 uppercase">
                                        <div className="flex flex-col gap-2">
                                            <span>Biscoff & White Choc</span>
                                            <span>Nutella Overload</span>
                                            <span>Pistachio Crunch</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span>Strawberry Cream</span>
                                            <span>Triple Chocolate</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#721011] tracking-widest uppercase text-sm mb-1">Knafeh</h3>
                                    <p className="text-[11px] sm:text-xs italic tracking-widest text-[#721011]/60 mb-4 uppercase">Sweet • Cheesy • Golden crunch</p>
                                    <div className="grid grid-cols-2 gap-2 text-xs tracking-widest text-[#721011]/80 uppercase">
                                        <div className="flex flex-col gap-2">
                                            <span>Classic</span>
                                            <span>Chocolate</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span>Biscoff</span>
                                            <span>Pistachio</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                    </div>

                    {/* Bottom Extras */}
                    <div className="mt-20 pt-10 border-t border-[#721011] border-dashed flex flex-col md:flex-row items-end justify-between gap-10">
                        {/* Mascot Placeholder */}
                        <div className="relative w-32 h-40 hidden md:block">
                            <div className="w-full h-full bg-[#EBE2D4] rounded-2xl flex items-center justify-center text-[#721011]/40 border-2 border-[#721011] border-dashed">
                                Cup Mascot
                            </div>
                        </div>

                        {/* QR Code pseudo-block */}
                        <div className="flex flex-col items-center">
                            <p className="text-[#D5AF34] font-semibold tracking-widest mb-2 uppercase text-sm">Full Menu →</p>
                            <div className="w-24 h-24 bg-[#721011] flex items-center justify-center p-2 mb-2">
                                {/* Simulating QR Code with tiny white squares grid */}
                                <div className="w-full h-full bg-white grid grid-cols-5 grid-rows-5 gap-0.5 p-1">
                                    {[...Array(25)].map((_, i) => (
                                        <div key={i} className={`${[0, 1, 2, 5, 6, 10, 12, 14, 18, 20, 21, 24].includes(i) ? 'bg-[#721011]' : 'bg-transparent'}`} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-[#721011] font-bold tracking-widest uppercase text-xs">@SUUKR.AU</p>
                        </div>

                        {/* Seasonal Specials */}
                        <div className="text-center border border-[#721011] p-4 sm:p-6 rounded-t-full border-b-0 min-w-[250px]">
                            <h3 className="font-heading text-2xl font-bold text-[#721011] uppercase tracking-widest mb-2">Seasonal Specials</h3>
                            <p className="text-xs tracking-widest text-[#721011]/80 uppercase font-semibold">Ask our team about<br />our specials!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="w-full bg-[#EBE2D4] py-3 text-center border-t border-[#721011]/20 flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" className="w-4 h-4"><path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" /></svg>
                <span className="text-xs tracking-widest text-[#721011] uppercase font-bold">Vegan options available</span>
            </div>

            <Footer />
        </main>
    );
}
