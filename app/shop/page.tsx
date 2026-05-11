"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

// Mock Data
const PRODUCTS = [
  {
    id: "1",
    name: "Heart Keychain",
    price: 70.0,
    images: [
      "/products/keychain1.jpeg",
      "/products/keychain2.jpeg",
      "/products/keychain3.jpeg",
      "/products/keychain4.jpeg",
      "/products/keychain5.jpeg",
      "/products/keychain6.jpeg",
      "/products/keychain7.jpeg",
      "/products/keychain8.jpeg",
      "/products/keychain9.jpeg",
    ],
    colors: [
  { name: "Light Pink", value: "#FFB6C1" }, // light pink (keychain1)
  { name: "Dark Blue", value: "#1E3A8A" }, // dark blue (keychain2)
  { name: "Red", value: "#DC2626" }, // red (keychain3)
  { name: "Yellow", value: "#FACC15" }, // yellow (keychain4)
  { name: "Orange", value: "#FB923C" }, // orange (keychain5)
  { name: "Dark Green", value: "#166534" }, // dark green (keychain6)
  { name: "White", value: "#FFFFFF" }, // white (keychain7)
  { name: "Dark Pink", value: "#EC4899" }, // dark pink (keychain8)
  { name: "Dark Orange", value: "#EA580C" }, // dark orange (keychain9)
],
  },
  {
    id: "5",
    name: "Bandana",
    price: 110.0,
    images: [
      
      "/products/samplebandana.jpeg",
      "/products/bandana1.jpeg",
      "/products/bandana2.jpeg",
      "/products/bandana3.jpeg",
      "/products/bandana4.jpeg",
      "/products/bandana5.jpeg",
      "/products/bandana6.jpeg",
      "/products/bandana7.jpeg",
      "/products/bandana8.jpeg",
      "/products/bandana9.jpeg",
     
    ],
      
 // replace with local image
    colors: [
  
  { name: "Gray", value: "#9CA3AF" }, // gray (sample)
  { name: "Dark Pink", value: "#EC4899" }, // dark pink
  { name: "Light Pink", value: "#FFB6C1" }, // light pink
  { name: "Dark Green", value: "#166534" }, // dark green
  { name: "Navy Blue", value: "#1E3A8A" }, // navy blue
  { name: "Maroon", value: "#800000" }, // maroon
  { name: "Yellow", value: "#FACC15" }, // yellow
  { name: "Orange", value: "#FB923C" }, // orange
  { name: "White", value: "#FFFFFF" }, // white
  { name: "Red", value: "#DC2626" }, // red
]
  },
  {
    id: "2",
    name: "Flower Keychain",
    price: 70.0,
    images: [
      "/products/flowerkeychain1.jpeg",
      "/products/flowerkeychain2.jpeg",
      "/products/flowerkeychain3.jpeg",
      "/products/flowerkeychain4.jpeg",
      "/products/flowerkeychain5.jpeg",
      "/products/flowerkeychain6.jpeg",
      "/products/flowerkeychain7.jpeg",
      "/products/flowerkeychain8.jpeg",
      "/products/flowerkeychain9.jpeg",
    ],
    colors: [
  { name: "Dark Blue", value: "#1E3A8A" }, // dark blue
  { name: "Yellow", value: "#FACC15" }, // yellow
  { name: "Red", value: "#DC2626" }, // red
  { name: "Light Pink", value: "#FFB6C1" }, // light pink
  { name: "Dark Green", value: "#166534" }, // dark green
  { name: "Orange", value: "#FB923C" }, // orange
  { name: "Dark Pink", value: "#EC4899" }, // dark pink
  { name: "Brown", value: "#8B4513" }, // brown
  { name: "White", value: "#FFFFFF" }, // white
]
  },
  {
    id: "4",
    name: "Cross Bookmarks",
    price: 70.0,
    images: [
      "/products/samplebookmark.jpeg",
      "/products/bookmark1.jpeg",
      "/products/bookmark2.jpeg",
      "/products/bookmark3.jpeg",
      "/products/bookmark4.jpeg",
      "/products/bookmark5.jpeg",
      "/products/bookmark6.jpeg",
      "/products/bookmark7.jpeg",
      "/products/bookmark8.jpeg",
      "/products/bookmark9.jpeg"
    ],

    colors: [
  { name: "Gray", value: "#9CA3AF" }, // gray (sample)
  { name: "White", value: "#FFFFFF" }, // white
  { name: "Dark Blue", value: "#1E3A8A" }, // dark blue
  { name: "Red", value: "#DC2626" }, // red
  { name: "Light Pink", value: "#FFB6C1" }, // light pink
  { name: "Dark Green", value: "#166534" }, // dark green
  { name: "Dark Pink", value: "#EC4899" }, // dark pink
  { name: "Brown", value: "#8B4513" }, // brown
  { name: "Yellow", value: "#FACC15" }, // yellow
  { name: "Dark Red", value: "#7F1D1D" }, // dark red
],
  },
  {
    id: "3",
    name: "Bow Keychain",
    price: 70.0,
    images: [
      "/products/samplebowkeychain.jpeg",
      "/products/bowkeychain1.jpeg", 
      "/products/bowkeychain2.jpeg", 
      "/products/bowkeychain3.jpeg",
      "/products/bowkeychain4.jpeg",
      "/products/bowkeychain5.jpeg",
      "/products/bowkeychain6.jpeg",
      "/products/bowkeychain7.jpeg",
      "/products/bowkeychain8.jpeg",
      "/products/bowkeychain9.jpeg"
    ],
    colors: [
      { name: "Gray", value: "#9CA3AF" }, // gray (sample)
      { name: "Orange", value: "#FB923C" }, // orange
      { name: "Yellow", value: "#FACC15" }, // yellow
      { name: "Light Pink", value: "#FFB6C1" }, // light pink
      { name: "Dark Blue", value: "#1E3A8A" }, // dark blue
      { name: "Brown", value: "#8B4513" }, // brown
      { name: "Red", value: "#DC2626" }, // red
      { name: "Dark Green", value: "#166534" }, // dark green
      { name: "Dark Pink", value: "#EC4899" }, // dark pink
      { name: "White", value: "#FFFFFF" }, // white
    ],

  },
  
];

// Animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Shop() {
  return (
    <div className="flex-1 w-full relative pt-24 pb-16">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 subtle-gradient opacity-50 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of handcrafted crochet pieces.
            Each item is made with love and designed to last.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}