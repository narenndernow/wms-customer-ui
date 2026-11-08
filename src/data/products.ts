
import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    sku: "LAP001",
    name: "Dell Laptop",
    category: "Electronics",
    price: 899.99,
    quantity: 15,
    imageUrl: "https://placehold.co/400x300?text=Dell+Laptop",
  },
  {
    id: 2,
    sku: "PHN001",
    name: "Samsung Smartphone",
    category: "Electronics",
    price: 699.99,
    quantity: 20,
    imageUrl: "https://placehold.co/400x300?text=Smartphone",
  },
  {
    id: 3,
    sku: "HDP001",
    name: "Wireless Headphones",
    category: "Accessories",
    price: 79.99,
    quantity: 30,
    imageUrl: "https://placehold.co/400x300?text=Headphones",
  },
  {
    id: 4,
    sku: "KEY001",
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 129.99,
    quantity: 12,
    imageUrl: "https://placehold.co/400x300?text=Keyboard",
  },
];
