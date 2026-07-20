import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/types/product";
import { products as initialProducts } from "@/lib/products";

interface ProductContextType {
  productsList: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Product) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [productsList, setProductsList] = useState<Product[]>(() => {
    const saved = localStorage.getItem("delicias_products");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialProducts;
      }
    }
    return initialProducts;
  });

  useEffect(() => {
    localStorage.setItem("delicias_products", JSON.stringify(productsList));
  }, [productsList]);

  const addProduct = (product: Product) => {
    setProductsList((prev) => [...prev, product]);
  };

  const updateProduct = (id: string, updatedProduct: Product) => {
    setProductsList((prev) => prev.map(p => p.id === id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProductsList((prev) => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ productsList, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
