
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-black to-gray-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 🔰 Logo */}
          <div className="flex items-center">
          <div className="mr-3 transform transition-transform duration-500 hover:scale-125 hover:rotate-6">
            <svg
              className="w-12 h-12 text-yellow-400 hover:text-yellow-500 transition duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 12l6-6 6 6M12 6v12"
                stroke="gold"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-3xl font-extrabold text-white tracking-wide hover:text-yellow-500 transition duration-300">
            LuxCars
          </span>
        </div>
          
          {/* 🧭 Desktop Links */}
          <div className="hidden md:flex space-x-8 text-white font-semibold">
            <Link href="/car" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/models" className="hover:text-yellow-400 transition">Models</Link>
            <Link href="/dealers" className="hover:text-yellow-400 transition">Dealerships</Link>
            <Link href="/contacts" className="hover:text-yellow-400 transition">Contact</Link>
            {/* <Link href="/cart" className="relative group">
              <ShoppingCart className="w-6 h-6 text-white group-hover:text-yellow-400 transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link> */}
            <Link
  href="/cart"
  className="relative group"
  aria-label="View Cart"
>
  <ShoppingCart
    className="w-6 h-6 text-white group-hover:text-yellow-400 transition"
    aria-hidden="true"
  />
  {totalItems > 0 && (
    <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
      {totalItems}
    </span>
  )}
</Link>

          </div>

          {/* ☰ Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white space-y-4 px-4 py-4">
          <Link href="/car" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/models" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Models</Link>
          <Link href="/dealers" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Dealerships</Link>
          <Link href="/contacts" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/cart" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            🛒 Cart ({totalItems})
          </Link>
        </div>
      )}
    </nav>
  );
}
