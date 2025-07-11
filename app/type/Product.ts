// types/product.ts

import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  image: string | StaticImageData; // ✅ Accept both types
  title: string;
  price: number;
  description: string;
  category: string;
  featured: boolean;
}
export interface CartItem extends Product {
  quantity: number;
}

export interface ProductContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}
