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
    <article className="bg-card rounded-xl shadow-card hover-lift overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} - brigadeiro gourmet artesanal`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs text-muted-foreground">A partir de</p>
            <p className="text-xl font-bold text-foreground">
              R$ {product.price.toFixed(2)}
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAddToCart}
            aria-label={`Adicionar ${product.name} ao orçamento`}
          >
            <Plus className="h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
