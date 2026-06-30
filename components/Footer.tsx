import Link from "next/link";
import { Camera, Mail, MessageCircle, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full relative mt-auto pt-24 overflow-hidden">
      {/* Soft gradient background blending in */}
      <div className="absolute inset-0 premium-gradient opacity-90 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Eva's Crochet</h3>
            <p className="text-sm opacity-80 max-w-xs leading-relaxed">
              Timeless, handmade pieces crafted with care. Comfort and luxury in every stitch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:text-brand-900 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-brand-900 transition-colors">Shop Collection</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-900 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-3 text-sm opacity-80">
              <a href="mailto:hello.evas.crochet26@gmail.com" className="flex items-center gap-2 hover:text-brand-900 transition-colors">
                <Mail className="w-4 h-4" /> hello.evas.crochet26@gmail.com
              </a>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> (+91)94900 52096
              </p>
              <a
                href="https://www.instagram.com/crochet_by_evaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-900 transition-colors pt-2"
              >
                <FaInstagram className="w-5 h-5" /> @crochet_by_evaa (Instagram)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-300/30 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Eva's Crochet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
