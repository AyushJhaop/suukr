import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import Flavours from "@/components/Flavours";
import GiftBanner from "@/components/GiftBanner";
import Categories from "@/components/Categories";
import VisitUs from "@/components/VisitUs";
import SwirlSection from "@/components/SwirlSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEF2F2]">
      <Hero />
      <div className="py-8 sm:py-12"><ProductCarousel /></div>
      <div className="py-8 sm:py-12"><Flavours /></div>
      <div className="py-8 sm:py-12"><GiftBanner /></div>
      <div className="py-8 sm:py-12"><Categories /></div>
      <div className="py-8 sm:py-12"><VisitUs /></div>
      <div className="py-8 sm:py-12"><SwirlSection /></div>
      <Footer />
    </main>
  );
}
