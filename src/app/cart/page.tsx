'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  const taxRate = 0.1;
  const tax = totalPrice * taxRate;
  const grandTotal = totalPrice + tax;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">🛒 Your Cart</h1>

      {orderPlaced ? (
        <div className="bg-green-700 p-4 rounded text-center font-semibold text-white mb-6">
          ✅ Your order has been placed successfully!
          <br />
          <Link
            href="/car"
            className="mt-3 inline-block underline text-yellow-300 hover:text-yellow-400"
          >
            Browse more cars
          </Link>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-400">
          No cars in your cart yet.{' '}
          <Link
            href="/car"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            Browse Cars
          </Link>
        </p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row gap-4 items-center bg-gray-800 p-4 rounded shadow-md"
              >
                <Image
                  src={item.mainImage || '/placeholder.jpg'}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded object-cover w-[100px] h-[100px]"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg font-bold text-yellow-300">{item.name}</h2>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 bg-gray-600 text-white rounded disabled:opacity-40"
                    >
                      −
                    </button>
                    <span className="text-white font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-600 text-white rounded hover:bg-gray-500"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-sm text-yellow-200 mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Footer */}
          <div className="mt-10 border-t border-yellow-600 pt-6">
            <h2 className="text-xl font-bold text-yellow-300 mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-yellow-400 text-base">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
              <Link
                href="/car"
                className="px-5 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 text-sm font-semibold"
              >
                ← Continue Shopping
              </Link>
              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-500 text-sm font-semibold shadow"
                >
                  🧹 Clear Cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="px-5 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 text-sm font-bold shadow"
                >
                  ✅ Place Order
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
