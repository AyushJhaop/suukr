"use client";

<<<<<<< HEAD
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Menu Data ─────────────────────────────────────────────── */
type MenuItem = {
    name: string;
    desc: string;
    image: string;
    category: string;
    tag?: string;
};

const menuItems: MenuItem[] = [

    // ── Coffee ──────────────────────────────────────────────
    { name: "Double Espresso",   desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Piccolo",           desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Macchiato",         desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Long Black",        desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Latte",             desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Flat White",        desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Cappuccino",        desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Mocha",             desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "White Mocha",       desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Chai Latte",        desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Affogato",          desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Babyccino",         desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Iced Long Black",   desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Iced Latte",        desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },
    { name: "Iced Coffee",       desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Coffee" },

    // ── Chocolate ───────────────────────────────────────────
    { name: "Hot Chocolate",     desc: "Rich, creamy hot chocolate made with 33% real cocoa for a smooth, comforting sip.",         image: "/images/menu/no-image.png",                            category: "Chocolate" },
    { name: "Italian Hot Choc",  desc: "Thick creamy dark hot chocolate topped with home made whipped cream.",                      image: "/images/menu/Italian Hot Chocolate.jpg",                            category: "Chocolate", tag: "Chef's Pick" },
    { name: "Iced Chocolate",    desc: "",                                                                                          image: "/images/menu/no-image.png",                            category: "Chocolate" },

    // ── Matcha ──────────────────────────────────────────────
    { name: "Matcha Latte",              desc: "",                                                                                  image: "/images/menu/no-image.png",                                         category: "Matcha" },
    { name: "Iced Matcha",               desc: "",                                                                                  image: "/images/menu/no-image.png",                                         category: "Matcha" },
    { name: "Iced Matcha Strawberry",    desc: "Premium matcha, strawberry purée, a touch of rose, topped with a thin layer of vanilla cold foam.", image: "/images/SUUKR_straberry rose matcha_2880x2304.jpg", category: "Matcha", tag: "Signature" },

    // ── Cold Brew ────────────────────────────────────────────
    { name: "Cold Brew",         desc: "Single‑origin specialty coffee steeped for 20 hours for a clean, crisp, smooth brew with a bold kick.",                                                                image: "/images/menu/Cold Brew.jpg",                                        category: "Cold Brew" },
    { name: "Nitro Cold Brew",   desc: "20‑hour steeped single‑origin coffee, infused with nitrogen for an ultra‑smooth, creamy, naturally sweet finish.",                                                     image: "/images/menu/Nitro Cold Brew.jpg",                                  category: "Cold Brew", tag: "Fan Fave" },
    { name: "Season Special",    desc: "A rotating specialty brew of the month, crafted from limited‑release beans and unique flavour profiles. Ask our team what's pouring today.",                           image: "/images/menu/no-image.png",                                         category: "Cold Brew", tag: "Limited" },
    { name: "Coconut Latte",     desc: "Cold brew blended with creamy coconut milk for a smooth, lightly sweet, and fully dairy‑free refreshing alternative.",                                                 image: "/images/menu/no-image.png",                                         category: "Cold Brew" },
    { name: "Almond & Maple",    desc: "Almond cold brew with a hint of maple for gentle sweetness and a smooth, nutty finish.",                                                                               image: "/images/menu/Almond Maple Cold Brew.jpg",                           category: "Cold Brew" },
    { name: "Oat & Vanilla",     desc: "",                                                                                          image: "/images/menu/Oat & Vanilla Cold Brew.jpg",                          category: "Cold Brew" },
    { name: "Bombon (Spanish)",  desc: "",                                                                                          image: "/images/menu/Spanish Latte.jpg",                                    category: "Cold Brew" },

    // ── Cloud ────────────────────────────────────────────────
    { name: "Mont Blanc",        desc: "",                                                                                          image: "/images/menu/Mont Blanc.jpg",                                       category: "Cloud" },
    { name: "Salted Caramel",    desc: "",                                                                                          image: "/images/menu/no-image.png",          category: "Cloud" },
    { name: "Tiramisu",          desc: "",                                                                                          image: "/images/menu/Tiramisu Cold Brew.jpg",                               category: "Cloud", tag: "Bestseller" },
    { name: "Vanilla Cream",     desc: "",                                                                                          image: "/images/menu/no-image.png",          category: "Cloud" },

    // ── Tea ──────────────────────────────────────────────────
    { name: "Peppermint Tea",    desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Tea" },
    { name: "Green Tea",         desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Tea" },
    { name: "Camomile Tea",      desc: "",                                                                                          image: "/images/menu/no-image.png",                                              category: "Tea" },

    // ── Smoothies ────────────────────────────────────────────
    { name: "Tropical Sky",      desc: "Pineapple, Mango, Banana, Passionfruit, Blue Spirulina, Coconut Milk",                     image: "/images/menu/Tropical Sky.jpg",                                     category: "Smoothies" },
    { name: "Berry Boost",       desc: "Strawberries, Mango, Raspberries, Goji Berries, Almond Milk",                              image: "/images/menu/Berry Boost.jpg",                                      category: "Smoothies" },
    { name: "Acai Berry",        desc: "Acai, Blueberries, Banana, Dates, Oat Milk",                                               image: "/images/menu/Purple Power.jpg",                                     category: "Smoothies" },

    // ── Protein ──────────────────────────────────────────────
    { name: "Blue Spirulina Protein", desc: "Blue Spirulina, Banana, Almond Milk, Vanilla Protein",                                image: "/images/menu/Blue Spirulina Protein Shake.jpg",                     category: "Protein" },
    { name: "Cocoa Energy",           desc: "Cold Brew Coffee, Cacao, Almond Milk, Vanilla Protein",                               image: "/images/menu/no-image.png",                                             category: "Protein" },
    { name: "Strawberry Shortcake",   desc: "Strawberries, Oat Milk, Vanilla Protein, Short Bread",                                image: "/images/menu/no-image.png",                                             category: "Protein" },

    // ── Signature Shakes ─────────────────────────────────────
    { name: "Cookie Monster",         desc: "A thick, sky‑blue cookies‑and‑cream shake with a fun, nostalgic vibe. Creamy, playful, and indulgent in every sip.",          image: "/images/menu/Cookie Monster.jpg",                                category: "Signature Shake", tag: "Bestseller" },
    { name: "Cold Brew Crunch",       desc: "A bold, smooth cold brew with a creamy, cookie‑like crunch and a hint of sweetness. Refreshing, textured, and indulgent.",    image: "/images/menu/no-image.png",                          category: "Signature Shake" },
    { name: "Mal-tese",               desc: "A creamy, malty chocolate blend with a distinct Malteser crunch.",                                                             image: "/images/SUUKR_maltease shake_2880x2304.jpg",                     category: "Signature Shake" },
    { name: "Pistachio Silk",         desc: "A rich, creamy pistachio blend made with pure pistachio and ice cream, finished with a smooth swirl of whipped cream.",        image: "/images/menu/Pistachio Silk.jpg",                                category: "Signature Shake" },
    { name: "Golden Gaytime",         desc: "A caramel‑rich shake with a nostalgic biscuit‑and‑toffee vibe.",                                                               image: "/images/menu/Golden Gaytime.jpg",                                category: "Signature Shake" },
    { name: "Strawberry Cheesecake",  desc: "A dessert‑style shake with a lush strawberry swirl and a smooth cheesecake richness, delivering a sweet, velvety treat.",     image: "/images/menu/no-image.png",                                      category: "Signature Shake" },

    // ── Classic Shakes ───────────────────────────────────────
    { name: "Biscoff",           desc: "A caramel‑spiced shake with a buttery cookie richness.",                                    image: "/images/menu/no-image.png",                                         category: "Classic Shake" },
    { name: "Nutella",           desc: "A thick, chocolate‑hazelnut dream that tastes like pure, creamy indulgence.",               image: "/images/menu/no-image.png",                                         category: "Classic Shake" },
    { name: "Chocolate Fudge",   desc: "A deep, velvety chocolate shake with a rich fudge swirl.",                                  image: "/images/menu/no-image.png",                                         category: "Classic Shake" },
    { name: "Mango",             desc: "A bright, tropical shake bursting with juicy mango sweetness and smooth, creamy freshness.", image: "/images/menu/no-image.png",                                         category: "Classic Shake" },
    { name: "Strawberry",        desc: "A classic, fruity shake with a sweet, juicy strawberry lift and a silky, refreshing finish.", image: "/images/menu/no-image.png",                      category: "Classic Shake" },
    { name: "Vanilla",           desc: "A smooth, creamy vanilla shake with a soft, nostalgic sweetness that never goes out of style.", image: "/images/menu/no-image.png",                    category: "Classic Shake" },
    { name: "Butterscotch",      desc: "A buttery, caramel‑rich shake with a golden sweetness that's comforting and crave‑worthy.", image: "/images/menu/no-image.png",                        category: "Classic Shake" },

    // ── Waffles ──────────────────────────────────────────────
    { name: "Biscoff & White Choc", desc: "Lotus biscoff and premium white chocolate on a golden, crispy eggless waffle.",          image: "/images/SUUKR_biscoff white chocolate waffle_2880x2304.jpg",       category: "Waffles", tag: "Fan Fave" },
    { name: "Nutella Overload",     desc: "Rich nutella and chocolate topping on a freshly baked eggless waffle.",                  image: "/images/menu/no-image.png",                                         category: "Waffles" },
    { name: "Pistachio Crunch",     desc: "Pistachio sauce and crushed nuts on a crispy eggless waffle.",                           image: "/images/SUUKR_pistachio crunch waffle_2880x2304.jpg",               category: "Waffles" },
    { name: "Strawberry Cream",     desc: "Fresh strawberries and whipped cream on a golden eggless waffle.",                       image: "/images/menu/Strawberry & Cream Waffle.jpg",                        category: "Waffles" },
    { name: "Triple Chocolate",     desc: "Dark, milk, and white chocolate overload on a freshly baked eggless waffle.",            image: "/images/SUUKR_tripple chocolate waffle_2880x2304.jpg",                                         category: "Waffles" },

    // ── Knafeh ───────────────────────────────────────────────
    { name: "Classic Knafeh",    desc: "Sweet, cheesy, and satisfying with a golden, crunchy baked finish.",                        image: "/images/SUUKR_kanafeh classic_2880x2304.jpg",                                         category: "Knafeh" },
    { name: "Nutella Knafeh",    desc: "Sweet cheesy knafeh topped with rich, creamy Nutella.",                                     image: "/images/SUUKR_kanafeh chocolate_2880x2304.jpg",                                         category: "Knafeh" },
    { name: "Biscoff Knafeh",    desc: "Golden knafeh topped with lotus biscoff spread and crumbs.",                                image: "/images/menu/no-image.png",                                         category: "Knafeh" },
    { name: "Pistachio Knafeh",  desc: "Topped with excessive pistachio sauce and nuts.",                                           image: "/images/menu/Knafeh - Pistachio.jpg",                               category: "Knafeh", tag: "New" },

    // ── Cakes ────────────────────────────────────────────────
    { name: "Basque Cheesecake",  desc: "A rich, ultra‑creamy burnt cheesecake with a molten centre and deep caramelised flavour. Pre‑order only.", image: "/images/menu/no-image.png", category: "Cakes", tag: "Pre-order" },
    { name: "Tiramisu Cake",      desc: "A creamy, coffee‑kissed dessert with soft mascarpone richness and a light cocoa finish, all without eggs. Pre‑order only.", image: "/images/menu/no-image.png", category: "Cakes", tag: "Pre-order" },
    { name: "Rose & Pistachio",   desc: "A fragrant, nutty delight with soft rose sweetness. Gluten‑free. Pre‑order only.",         image: "/images/menu/no-image.png",                                              category: "Cakes", tag: "Pre-order" },
    { name: "Matilda",            desc: "A rich, ultra‑chocolatey, fudgy cake with a melt‑in‑your‑mouth finish. Pre‑order only.",   image: "/images/menu/no-image.png",                                              category: "Cakes", tag: "Pre-order" },
];

const categories = [
    "All Menu", "Coffee", "Chocolate", "Matcha", "Cold Brew", "Cloud",
    "Tea", "Smoothies", "Protein", "Signature Shake", "Classic Shake",
    "Waffles", "Knafeh", "Cakes",
];

/* ── Card ──────────────────────────────────────────────────── */
function MenuCard({ item }: { item: MenuItem }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Tag badge */}
                {item.tag && (
                    <div className="absolute top-3 left-3 bg-[#D5AF34] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow">
                        {item.tag}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="px-4 py-3 flex flex-col gap-1">
                <h3 className="font-heading font-bold text-base leading-tight text-[#721011]">
                    {item.name}
                </h3>
                <p className="text-black/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
        </motion.div>
    );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All Menu");

    const filtered = (activeCategory === "All Menu"
        ? menuItems
        : menuItems.filter((i) => i.category === activeCategory)
    ).sort((a, b) => {
        const aHasImage = !a.image.includes("no-image");
        const bHasImage = !b.image.includes("no-image");
        if (aHasImage && !bHasImage) return -1;
        if (!aHasImage && bHasImage) return 1;
        return 0;
    });

    return (
        <main className="min-h-screen bg-[#FEF2F2] flex flex-col font-body">
            <Navbar />

            {/* ── Hero Header ── */}
            <div className="relative pt-28 sm:pt-36 pb-10 px-4 text-center overflow-hidden">
                {/* Blob shape behind header */}
                <div
                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] h-[340px] rounded-[50%] pointer-events-none z-0"
                    style={{ background: "radial-gradient(ellipse at center, #FFDEDE 60%, transparent 100%)" }}
                />
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[#D5AF34] font-body font-bold tracking-widest text-sm sm:text-base uppercase mb-3">
                        Our Menu
                    </span>
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#721011] mb-4">
                        Delicious Treats Await
                    </h1>
                    {/* Squiggle underline */}
                    <svg viewBox="0 0 320 24" fill="none" className="w-48 sm:w-72 mb-5">
                        <path d="M4 14 C40 4, 80 22, 120 12 C160 2, 200 20, 240 10 C270 4, 300 16, 316 10"
                            stroke="#D5AF34" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                    </svg>
                    <p className="text-black/45 font-body text-sm sm:text-base">
                        Handcrafted with love, served with a smile
                    </p>
                </div>
            </div>

            {/* ── Category Pills ── */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 mb-10 mt-2">
                {categories.map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2 rounded-full font-body font-semibold text-sm border-2 transition-all duration-200
                            ${activeCategory === cat
                                ? "bg-[#721011] text-white border-[#721011] shadow-md"
                                : "bg-transparent text-[#721011] border-[#721011]/40 hover:border-[#721011]"
                            }`}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            {/* ── Grid ── */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, idx) => (
                            <MenuCard key={`${item.category}-${item.name}-${idx}`} item={item} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filtered.length === 0 && (
                    <div className="text-center py-24 text-[#721011]/40 font-body text-lg">
                        Nothing here yet — check back soon!
                    </div>
                )}
=======
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
>>>>>>> 9c8d647526a5fad48ff9264ca6efba97c4cd8edc
            </div>

            <Footer />
        </main>
    );
}
