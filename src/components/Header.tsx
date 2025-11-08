import { ShoppingCart, ChefHat } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

interface HeaderProps {
  onCartClick: () => void;
  onOrderClick: () => void;
}

const Header = ({ onCartClick, onOrderClick }: HeaderProps) => {
  const { totalItems } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur shadow-subtle">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <ChefHat className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Delicias da Milly</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("produtos")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Ir para Cardápio"
          >
            Cardápio
          </button>
          <button
            onClick={onOrderClick}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Solicitar Orçamento"
          >
            Orçamento
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            aria-label="Ir para Contato"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="relative"
            aria-label={`Carrinho de compras com ${totalItems} itens`}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
