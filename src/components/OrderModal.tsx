import { useState } from "react";
import { X, Minus, Plus, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { generateWhatsAppLink, OrderFormData } from "@/lib/whatsapp";
import { toast } from "sonner";

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
}

const OrderModal = ({ open, onClose }: OrderModalProps) => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    phone: "",
    email: "",
    location: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Por favor, preencha nome e telefone.");
      return;
    }

    if (items.length === 0) {
      toast.error("Adicione itens ao orçamento antes de enviar.");
      return;
    }

    const whatsappUrl = generateWhatsAppLink(items, formData);
    window.open(whatsappUrl, "_blank");
    toast.success("Abrindo WhatsApp...");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" aria-describedby="order-modal-description">
        <DialogHeader>
          <DialogTitle>Solicitar Orçamento</DialogTitle>
          <p id="order-modal-description" className="text-sm text-muted-foreground">
            Preencha os dados abaixo e envie seu pedido via WhatsApp
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {items.length > 0 ? (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Itens do Orçamento</h3>
              <div className="space-y-3">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 bg-secondary p-3 rounded-lg"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        R$ {product.price.toFixed(2)} cada
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label={`Diminuir quantidade de ${product.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label={`Aumentar quantidade de ${product.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(product.id)}
                        aria-label={`Remover ${product.name} do orçamento`}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-lg font-semibold text-foreground">Total Estimado</span>
                <span className="text-2xl font-bold text-primary">R$ {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Adicione itens ao orçamento para continuar
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>


            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Seu Bairro *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Escreva seu Bairro"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Data do Evento *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem Adicional</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Observações sobre seu pedido..."
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                variant="hero"
                className="flex-1"
                disabled={items.length === 0}
                aria-label="Enviar orçamento para WhatsApp"
              >
                <Send className="h-4 w-4" />
                Enviar para WhatsApp
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Fechar
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
