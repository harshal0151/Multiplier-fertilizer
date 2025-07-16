// types/product.ts

// import { StaticImageData } from "next/image";

// export interface Product {
//   id: number;
//   image: string | StaticImageData; // ✅ Accept both types
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   featured: boolean;
// }

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  shortDescription: string;
  description: string;
  brand: string;
  category: string;
  rating: number;
  reviewCount: number;
  images: string[]; // Assuming images.kad250 and images.Kad250b are URLs or image paths
  featured: boolean;
  weight: string;
  features: string[];
  specifications: {
    "Product Name": string;
    "Type of fertilizer": string;
    "Suitable For": string;
    Form: string;
    Colour: string;
    Odor: string;
    Solubility: string;
    Contains: string;
    "Organic Matter %": string;
    Certifications: string[];
    "Country of Origin": string;
  };
  benefits: {
    title: string;
    description: string;
  }[];
  usage: {
    title: string;
    description: string;
  }[];
  storage: {
    shelfLife: string;
    instructions: string[];
  };
};


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
