import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

interface HeaderProps {
  onCartClick: () => void;
  onOrderClick: () => void;
}

const Header = ({ onCartClick, onOrderClick }: HeaderProps) => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Delicias da Milly Logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold text-muted-foreground">Delícias da Milly</span>
          <span className="sr-only">Delicias da Milly</span>
        </a>
        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            aria-label={`Ver orçamento (${totalItems} itens)`}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Button>
          <Button onClick={onOrderClick} aria-label="Solicitar orçamento">
            Orçamento
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;