"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Camera, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex-1 w-full relative pt-24 pb-16 min-h-[85vh] flex flex-col justify-center">
      <div className="absolute inset-0 subtle-gradient opacity-50 z-0 pointer-events-none"></div>

      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, custom orders, or just want to say hello.
          </p>
          <h1>(CUSTOMIZATIONS ARE ALSO AVAILABLE )</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.a 
            href="mailto:hello.evas.crochet26@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Email Us</h3>
            <p className="text-sm text-gray-500">hello.evas.crochet26@gmail.com</p>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Call Us</h3>
            <p className="text-sm text-gray-500">(+91)94900 52096</p>
          </motion.div>

          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Instagram</h3>
            <p className="text-sm text-gray-500">@eva's_crochet</p>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Feedback</h3>
            <p className="text-sm text-gray-500">Please drop a feedback in any of our social media platforms</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
