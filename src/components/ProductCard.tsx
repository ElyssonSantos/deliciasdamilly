import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} adicionado ao orçamento!`);
  };

  return (
    <article className="bg-card rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group border border-border/50 relative">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={product.image}
          alt={`${product.name} - brigadeiro gourmet artesanal`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-0 right-0 px-4 z-20 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button
            variant="default"
            size="sm"
            onClick={handleAddToCart}
            className="w-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white shadow-lg"
            aria-label={`Adicionar ${product.name} ao orçamento`}
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar ao Orçamento
          </Button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2 font-medium">{product.description}</p>
          </div>
        </div>
        <div className="pt-2 border-t border-border/50 flex items-end justify-between">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Preço base</p>
          <p className="text-2xl font-bold text-foreground">
            <span className="text-sm font-medium text-muted-foreground mr-1">R$</span>
            {product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
