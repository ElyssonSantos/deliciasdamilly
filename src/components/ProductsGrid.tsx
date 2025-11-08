import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <section id="produtos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos Sabores São Especiais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada produto é uma pequena obra de arte, preparado artesanalmente com ingredientes
            selecionados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
