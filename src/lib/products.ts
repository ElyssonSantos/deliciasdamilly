import { Product } from "@/types/product";

import tortachocolate from "@/assets/tortachocolate.jpg";
import fatiasdetorta from "@/assets/fatiasdetorta.jpg";

export const products: Product[] = [
  {
    id: "tortachocolate",
    name: "Torta de Chocolate",
    description: "Descrição....",
    price: 39.99,
    image: tortachocolate,
  },
   {
    id: "fatiasdetorta",
    name: "Fatia de torta",
    description: "Descrição....",
    price: 11.99,
    image: fatiasdetorta,
  },
];
