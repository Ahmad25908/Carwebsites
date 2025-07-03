// 'use client'
// import { Car } from '@/types';
// import { createContext, useContext, useState, ReactNode } from 'react';

// type CartItem = Car & { quantity: number };

// type CartContextType = {
//   cartItems: CartItem[];
//   addToCart: (car: Car, quantity?: number) => void;
//   removeFromCart: (id: string) => void;
//   totalPrice: number;
//   updateQuantity: (id: string, newQuantity: number) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (car: Car, quantity: number = 1) => {
//     setCartItems(prev => {
//       const existing = prev.find(item => item._id === car._id);
//       if (existing) {
//         return prev.map(item =>
//           item._id === car._id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prev, { ...car, quantity }];
//       }
//     });
//   };
  

//   const removeFromCart = (id: string) => {
//     setCartItems(prev => prev.filter(item => item._id !== id));
//   };

//   const updateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity < 1) return;
//     setCartItems(prev =>
//       prev.map(item =>
//         item._id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//     if (typeof window !== "undefined") {
//       console.log(`Updated quantity for ${id} to ${newQuantity}`);
//     }
//   };

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
// export const useCartCount = () => {
//   const { cartItems } = useCart();
//   return cartItems.reduce((sum, item) => sum + item.quantity, 0);
// };


// 'use client';

// import { Car } from '@/types';
// import { createContext, useContext, useState, ReactNode } from 'react';

// type CartItem = Car & { quantity: number };

// type CartContextType = {
//   cartItems: CartItem[];
//   addToCart: (car: Car, quantity?: number) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, newQuantity: number) => void;
//   clearCart: () => void;
//   totalPrice: number;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (car: Car, quantity: number = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item._id === car._id);
//       if (existing) {
//         return prev.map((item) =>
//           item._id === car._id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prev, { ...car, quantity }];
//       }
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== id));
//   };

//   const updateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity < 1) return;
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         totalPrice,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export const useCartCount = () => {
//   const { cartItems } = useCart();
//   return cartItems.reduce((sum, item) => sum + item.quantity, 0);
// };



'use client';

import { Car } from '@/types';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type CartItem = Car & { quantity: number };

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (car: Car, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Load cart from localStorage once (on component mount)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('luxcart-items');
      if (storedCart) {
        try {
          setCartItems(JSON.parse(storedCart));
        } catch {
          setCartItems([]);
        }
      }
    }
  }, []);

  // ✅ Save cart to localStorage on change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('luxcart-items', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (car: Car, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === car._id);
      if (existing) {
        return prev.map((item) =>
          item._id === car._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...car, quantity }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const useCartCount = () => {
  const { cartItems } = useCart();
  return cartItems.reduce((sum, item) => sum + item.quantity, 0);
};
