"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex-1 w-full relative flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center min-h-[85vh] overflow-hidden pt-20">
        <div className="absolute inset-0 subtle-gradient z-0"></div>
        
        {/* Abstract shapes for premium feel */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight tracking-tight mb-6"
          >
            Timeless pieces, <br />
            <span className="italic text-brand-700">made by hand</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Crafted with care, designed for comfort. Discover our collection of premium, handcrafted crochet essentials that bring warmth to your everyday life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-medium tracking-wide hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
