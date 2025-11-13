import { Product } from "@/types/product";

import empadinhas from "@/assets/empadinhas.jpg";
import brigadeiros from "@/assets/brigadeiros.jpg";
import tartaletes from "@/assets/tartaletes.jpg";
import bolinhadequeijo from "@/assets/bolinhadequeijo.jpg";
import tartaletechocolate from "@/assets/tartaletechocolate.png";
import tartaletemista from "@/assets/tartaletemista.png";
import coxinhascongeladas from "@/assets/coxinhascongeladas.png";
import docinhodecoco from "@/assets/docinhodecoco.jpg";
import brigadeirochurros from "@/assets/brigadeirochurros.jpg";
import empadao from "@/assets/empadão.jpg";
import biscoitinhocomgoiabada from "@/assets/biscoitocomgoiabada.jpg";

export const products: Product[] = [
   {
    id: "brigadeiros",
    name: "Brigadeiros",
    description: "Preço em unidade.",
    price: 1.30,
    image: brigadeiros,
  },
    {
    id: "docinhodecoco",
    name: "Docinho de Coco",
    description: "Preço em unidade.",
    price: 1.30,
    image: docinhodecoco,
  },
  {
    id: "brigadeirochurros",
    name: "Brigadeiro de Churros",
    description: "Preço em unidade.",
    price: 1.30,
    image: brigadeirochurros,
  },
  {
    id: "tartaletes",
    name: "Tartalete de Leite Condensado",
    description: "Preço em unidade.",
    price: 1.0,
    image: tartaletes,
  },
    {
    id: "tartaletechocolate",
    name: "Tartalete de Chocolate",
    description: "Preço em unidade.",
    price: 1.0,
    image: tartaletechocolate,
  },
  {
    id: "tartaletemista",
    name: "Tartalete Dos Amores",
    description: "Preço em unidade.",
    price: 1.0,
    image: tartaletemista,
  },
   {
    id: "bolinhadequeijo",
    name: "Bolinho de Queijo",
    description: "Preço em unidade.",
    price: 1.20,
    image: bolinhadequeijo,
  },
  {
    id: "empadao",
    name: "Empadão de Frango",
    description: "Feito na marmita (220 ml)",
    price: 15,
    image: empadao,
  },
    {
    id: "empadinhas",
    name: "Empadinhas de Frango",
    description: "Preço em unidade.",
    price: 1.20,
    image: empadinhas,
  },
  {
    id: "biscoitinhocomgoiabada",
    name: "Biscoitinho com goiabada",
    description: "Kit com dois pratinhos",
    price: 7,
    image: biscoitinhocomgoiabada,
  },
  {
    id: "coxinhascongeladas",
    name: "Coxinhas Congeladas",
    description: "Preço em unidade.",
    price: 1.20,
    image: coxinhascongeladas,
  },
];
