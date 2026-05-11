"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

// ✅ NEW TYPE
interface ColorOption {
  name: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  images?: string[];
  colors: ColorOption[]; // ✅ FIXED
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : ["/products/keychain1.jpeg"];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.colors[selectedIndex].name, // ✅ store readable name
      quantity: 1,
      image: images[selectedIndex],
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      {/* IMAGE SECTION */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-50/50">

        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0.6, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={images[selectedIndex]}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* LEFT ARROW */}
        {images.length > 1 && (
          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full z-10"
          >
            ◀
          </button>
        )}

        {/* RIGHT ARROW */}
        {images.length > 1 && (
          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full z-10"
          >
            ▶
          </button>
        )}

        {/* DOTS */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === selectedIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div>
          <h3 className="text-lg font-serif text-gray-900">
            {product.name}
          </h3>
          <p className="text-gray-600 mt-1">
            ₹{product.price.toFixed(2)}
          </p>
        </div>

        {/* COLORS */}
        <div>
          <label className="text-xs text-gray-500 uppercase mb-2 block">
            Select Color
          </label>

          <div className="flex gap-2 flex-wrap">
            {product.colors.map((color, i) => (
              <button
                key={`${product.id}-${color.name}`} // ✅ FIXED KEY
                onClick={() => setSelectedIndex(i)}
                title={color.name} // nice UX
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedIndex === i
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color.value }} // ✅ correct
              />
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleAddToCart}
          className="w-full py-3 bg-gray-900 text-white rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}