import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import Flavours from "@/components/Flavours";
import GiftBanner from "@/components/GiftBanner";
import Categories from "@/components/Categories";
import MobileOrder from "@/components/MobileOrder";
import VisitUs from "@/components/VisitUs";
import SwirlSection from "@/components/SwirlSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FEF2F2]">
      <Hero />
      <ProductCarousel />
      <Flavours />
      <GiftBanner />
      <Categories />
      <MobileOrder />
      <VisitUs />
      <SwirlSection />
      <Footer />
    </main>
  );
}
