"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="flex-1 w-full relative pt-24 pb-16">
      <div className="absolute inset-0 subtle-gradient opacity-50 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-serif text-gray-900">Your Cart</h1>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 glass-card rounded-2xl"
          >
            <p className="text-gray-500 mb-6">Your cart is currently empty.</p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium tracking-wide hover:bg-brand-600 transition-colors shadow-md"
            >
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl overflow-hidden divide-y divide-gray-100">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.color}`}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                    >
                      <div className="relative w-24 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-brand-50">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow flex flex-col sm:flex-row justify-between w-full">
                        <div className="space-y-1 text-center sm:text-left">
                          <h3 className="text-lg font-serif text-gray-900">{item.name}</h3>
                          <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-500">
                            Color: 
                            <span 
                              className="w-4 h-4 rounded-full border border-gray-200 inline-block"
                              style={{ backgroundColor: item.color }}
                            />
                          </div>
                          <p className="text-brand-700 font-medium">₹{item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex flex-col items-center sm:items-end justify-between mt-4 sm:mt-0">
                          <div className="flex items-center border border-gray-200 rounded-full px-3 py-1 bg-white">
                            <button
                              onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                              className="p-1 text-gray-400 hover:text-gray-900 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                              className="p-1 text-gray-400 hover:text-gray-900 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id, item.color)}
                            className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-sm mt-4 sm:mt-0 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" /> Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-2xl p-8 sticky top-32"
              >
                <h2 className="text-2xl font-serif text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-sm mb-6 border-b border-gray-100 pb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-gray-500">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-8">
                  <span className="text-gray-900 font-medium">Total</span>
                  <span className="text-2xl font-serif text-gray-900">₹{subtotal.toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-4 px-6 bg-gray-900 text-white rounded-xl text-sm font-medium tracking-wide hover:bg-brand-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
