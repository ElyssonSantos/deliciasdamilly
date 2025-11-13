import { CartItem } from "@/types/product";

const WHATSAPP_NUMBER = "5579998068464"; //

export interface OrderFormData {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  date?: string;
  message?: string;
}

export const generateWhatsAppLink = (items: CartItem[], formData: OrderFormData): string => {
  const itemsList = items
    .map(({ product, quantity }) => {
      const subtotal = (product.price * quantity).toFixed(2);
      return `- ${quantity}x ${product.name} — R$ ${product.price.toFixed(2)} = R$ ${subtotal}`;
    })
    .join("%0A");

  const total = items
    .reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)
    .toFixed(2);

  const message = `Olá! Quero solicitar um orçamento da Delicias da Milly feito pelo site.%0A%0ANome: ${encodeURIComponent(
    formData.name
  )}%0ATelefone: ${encodeURIComponent(formData.phone)}${
    formData.email ? `%0AEmail: ${encodeURIComponent(formData.email)}` : ""
  }${formData.location ? `%0ALocal do Evento: ${encodeURIComponent(formData.location)}` : ""}${
    formData.date ? `%0APara o dia: ${encodeURIComponent(formData.date)}` : ""
  }%0A%0AItens:%0A${itemsList}%0A%0ATotal estimado: R$ ${total}${
    formData.message ? `%0A%0AObservações: ${encodeURIComponent(formData.message)}` : ""
  }`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const generateProductWhatsAppLink = (productName: string, quantity: number = 1): string => {
  const message = `Olá, quero ${quantity} ${
    quantity === 1 ? "unidade" : "unidades"
  } de ${productName}. Qual o valor e prazo de entrega?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
