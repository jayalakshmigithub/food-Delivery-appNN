// import React from 'react'
// import Header from './Header'

// import Footer from './Footer'

// const Layout = ({children}) => {
//   return (
//     <div className='min-h-screen flex flex-col'>
//         <Header/>
//         <main className='flex-1 p-4'>
//             {children}

//         </main>
//       <Footer/>
//     </div>
//   )
// }

// export default Layout



import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
// In src/components/Layout/Layout.jsx
import CartContext from "@/context/cartContext.js";

const Layout = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4">{children}</main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default Layout;

