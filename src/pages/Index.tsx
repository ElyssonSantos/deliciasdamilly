import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header onCartClick={() => setOrderModalOpen(true)} onOrderClick={() => setOrderModalOpen(true)} />
        <main>
          <Hero onOrderClick={() => setOrderModalOpen(true)} />
          <ProductsGrid />
          <CTASection onOrderClick={() => setOrderModalOpen(true)} />
        </main>
        <Footer />
        <OrderModal open={orderModalOpen} onClose={() => setOrderModalOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
