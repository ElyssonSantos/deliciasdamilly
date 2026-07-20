import { useState } from "react";
import Header from "@/components/Header"; // Novo Header de navegação
import Hero from "@/components/Hero"; // Hero de Natal
import ProductsGrid from "@/components/ProductsGrid";
import CTASection from "@/components/CTASection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import FallingSnow from "@/components/FallingSnow";
import TopBanner from "@/components/TopBanner";
import AdminAuthModal from "@/components/AdminAuthModal";
import { useAdmin } from "@/contexts/AdminContext";

const Index = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const { isChristmasTheme } = useAdmin();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <TopBanner />
      {isChristmasTheme && <FallingSnow />}
      <Header onCartClick={() => setOrderModalOpen(true)} onOrderClick={() => setOrderModalOpen(true)} />
      <main>
        <Hero onOrderClick={() => setOrderModalOpen(true)} />
        <ProductsGrid />
        <CTASection onOrderClick={() => setOrderModalOpen(true)} />
        <Reviews />
      </main>
      <Footer />
      <OrderModal open={orderModalOpen} onClose={() => setOrderModalOpen(false)} />
      <AdminAuthModal />
    </div>
  );
};

export default Index;