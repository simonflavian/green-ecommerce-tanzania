export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Bamboo Water Bottle",
    price: 62000,
    image: "Bamboo Bottle",
    description: "Sustainable bamboo water bottle with stainless steel interior.",
    category: "Kitchen & Dining"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 82000,
    image: "Cotton Shirt",
    description: "100% organic cotton t-shirt made with eco-friendly dyes.",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Solar Power Bank",
    price: 114000,
    image: "Solar Charger",
    description: "Portable solar power bank for charging devices on the go.",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Reusable Food Wraps",
    price: 47000,
    image: "Food Wraps",
    description: "Beeswax food wraps to replace plastic wrap in your kitchen.",
    category: "Kitchen & Dining"
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 5,
    name: "Eco-Friendly Toothbrush",
    price: 32000,
    image: "Bamboo Toothbrush",
    description: "Biodegradable bamboo toothbrush with soft bristles.",
    category: "Personal Care"
  },
  {
    id: 6,
    name: "Recycled Notebook",
    price: 40000,
    image: "Eco Notebook",
    description: "100% recycled paper notebook with eco-friendly binding.",
    category: "Office & School"
  },
  {
    id: 7,
    name: "Glass Food Containers",
    price: 99000,
    image: "Glass Containers",
    description: "Set of 4 glass containers for sustainable food storage.",
    category: "Kitchen & Dining"
  },
  {
    id: 8,
    name: "Organic Soap Bar",
    price: 22000,
    image: "Natural Soap",
    description: "Handmade organic soap with natural ingredients.",
    category: "Personal Care"
  },
  {
    id: 9,
    name: "Hemp Backpack",
    price: 169000,
    image: "Hemp Bag",
    description: "Durable hemp backpack perfect for daily use and travel.",
    category: "Accessories"
  },
  {
    id: 10,
    name: "Bamboo Phone Case",
    price: 57000,
    image: "Phone Case",
    description: "Protective bamboo phone case for various phone models.",
    category: "Electronics"
  }
];

export const categories: string[] = [
  "Kitchen & Dining",
  "Clothing", 
  "Electronics",
  "Personal Care",
  "Office & School",
  "Accessories"
];