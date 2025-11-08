import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

interface CTASectionProps {
  onOrderClick: () => void;
}

const CTASection = ({ onOrderClick }: CTASectionProps) => {
  const { totalItems } = useCart();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Solicite seu Orçamento Personalizado
            </h2>
          </div>

          <div className="bg-card rounded-xl shadow-card p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Eventos e Encomendas</p>
                  <p className="text-sm text-muted-foreground">Mínimo 100 unidades</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Receba via WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Orçamento 100% personalizado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Pagamento</p>
                  <p className="text-sm text-muted-foreground">50% no pedido e 50% na entrega</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">Descontos</p>
                  <p className="text-sm text-muted-foreground">
                    Condições especiais para pagamento à vista
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center">
              {totalItems === 0 ? (
                <p className="text-muted-foreground mb-4">
                  Adicione brigadeiros ao seu orçamento para continuar
                </p>
              ) : (
                <p className="text-foreground font-medium mb-4">
                  {totalItems} {totalItems === 1 ? "item adicionado" : "itens adicionados"} ao
                  orçamento
                </p>
              )}
              <Button
                variant="hero"
                size="lg"
                onClick={onOrderClick}
                disabled={totalItems === 0}
                className="w-full md:w-auto"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
