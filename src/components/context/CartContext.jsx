import React, { useState, createContext } from 'react';

const CartContext = createContext({
   cart: [],
   addItem: () => {},
   removeItem: () => {},
   clearCart: () => {},
   cartCantidad: () => {}
});

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addItem = (item, cantidad) => {
      if (!isInCart(item.id)) {
         setCart(prev => [...prev, { ...item, cantidad }]);
      } else {
         console.error('El artículo ya está agregado');
      }
   };

   const removeItem = (itemId) => {
      const cartUpdated = cart.filter(prod => prod.id !== itemId);
      setCart(cartUpdated);
   };

   const clearCart = () => {
      setCart([]);
   };

   const isInCart = (itemId) => {
      return cart.some(prod => prod.id === itemId);
   };

   const cartCantidad = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0); 
   };

   const total = cart.reduce((acc, prod) => acc + (prod.cantidad * prod.price), 0);
   const cantidadTotal = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

   return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartCantidad, total, cantidadTotal }}>
         {children}
      </CartContext.Provider>
   );
};

export default CartContext;



