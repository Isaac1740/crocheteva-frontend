"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Checkout() {
  const { subtotal, items, clearCart } = useCart();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // 🔥 LOAD RAZORPAY SCRIPT
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    document.body.appendChild(script);
  }, []);

  // 🚚 SHIPPING
  const shipping = items.reduce((acc, item) => {

  const name = item.name.toLowerCase();

  if (name.includes("bandana")) {
    return acc + (80 * item.quantity);
  }

  return acc + (60 * item.quantity);

}, 0);

  const finalTotal = subtotal + shipping;

  // 💳 RAZORPAY PAYMENT
  const handlePlaceOrder = async () => {
    try {

      const session_id = "abc123";

      // 💰 CREATE RAZORPAY ORDER
      const orderRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/create-razorpay-order`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            amount: finalTotal,
          }),
        }
      );

      const orderData = await orderRes.json();

      // 💳 RAZORPAY OPTIONS
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: orderData.amount,

        currency: "INR",

        name: "Eva Crochet",

        description: "Handmade Crochet Products",

        order_id: orderData.order_id,

        // 🔥 PAYMENT SUCCESS
        handler: async function (response: any) {

          // ✅ VERIFY PAYMENT WITH BACKEND
          const verifyRes = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/verify-payment`,
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,

                razorpay_payment_id: response.razorpay_payment_id,

                razorpay_signature: response.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyRes.json();

          // ❌ STOP IF VERIFICATION FAILS
          if (!verifyData.success) {

            alert("Payment verification failed");

            return;
          }

          // 🧹 CLEAR OLD CART
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clear-cart/${session_id}`, {
            method: "DELETE",
          });

          // 🧶 SEND ITEMS TO BACKEND
          for (let item of items) {

            console.log("ITEM ID:", item.id);

            const product_id = Number(item.id);

console.log("PRODUCT ID:", product_id);

            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                session_id,
                product_id,
                quantity: item.quantity,
                color: item.color,
              }),
            });
          }

          // 📦 PLACE ORDER
          const formData = new FormData();

          formData.append("session_id", session_id);
          formData.append("full_name", name);
          formData.append("email", email);
          formData.append("phone", phone);
          formData.append("address", address);

          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/place-order`, {
            method: "POST",
            body: formData,
          });

          clearCart();

          setIsSubmitted(true);
        },

        // 👤 PREFILL
        prefill: {
          name,
          email,
          contact: phone,
        },

        // 🎨 THEME
        theme: {
          color: "#111827",
        },
      };

      // 🔥 OPEN RAZORPAY
      const razorpay = new (window as any).Razorpay(options);

      razorpay.open();

    } catch (err) {

      console.error(err);

      alert("Payment failed");
    }
  };

  // ✅ SUCCESS SCREEN
  if (isSubmitted) {
    return (
      <div className="flex-1 w-full pt-24 pb-16 flex items-center justify-center min-h-[70vh]">

        <motion.div className="glass-card rounded-3xl p-12 text-center">

          <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />

          <h2 className="text-2xl font-semibold">
            Payment Successful 🎉
          </h2>

          <p className="text-gray-600 mt-2">
            Thank you for shopping with Eva Crochet 💖
          </p>

        </motion.div>

      </div>
    );
  }

  return (
    <div className="flex-1 w-full pt-24 pb-16">

      <div className="max-w-7xl mx-auto px-4">

        <Link href="/cart" className="text-sm text-gray-500">

          <ArrowLeft className="inline w-4 h-4 mr-2" />

          Back to Cart

        </Link>

        <h1 className="text-4xl font-serif mt-4 mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-3 space-y-6">

            {/* CONTACT */}
            <div className="glass-card p-6 rounded-2xl">

              <h2 className="text-xl font-semibold mb-4">
                Contact & Shipping Details
              </h2>

              <input
                placeholder="Full Name"
                className="w-full mb-3 p-3 border rounded-xl"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Email"
                className="w-full mb-3 p-3 border rounded-xl"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Phone Number"
                className="w-full mb-3 p-3 border rounded-xl"
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                placeholder="Enter Full Address with PIN code"
                className="w-full p-3 border rounded-xl"
                onChange={(e) => setAddress(e.target.value)}
              />

            </div>

            {/* 💳 PAYMENT */}
            <div className="glass-card p-6 rounded-2xl text-center">

              <h2 className="text-xl font-semibold mb-4">
                Secure Payment
              </h2>

              <p className="text-gray-600 mb-6">
                Pay securely using UPI, Cards, Netbanking or Wallets
              </p>

              <button
                onClick={handlePlaceOrder}
                disabled={items.length === 0}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
              >
                Pay Now
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2">

            <div className="glass-card p-6 rounded-2xl sticky top-32">

              <h2 className="text-xl font-semibold mb-4">
                Order Summary
              </h2>

              {items.map((item) => (
                <div
                  key={`${item.id}-${item.color}`}
                  className="flex justify-between mb-2"
                >
                  <span>
                    {item.name} ({item.color}) x {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

              <div className="border-t pt-4 space-y-2">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹{finalTotal}</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}