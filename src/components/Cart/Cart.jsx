import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css'
import Checkout from '../Checkout/Checkout';

const Cart = () => {
   const { cart, clearCart, cantidadTotal, total } = useContext(CartContext);

   if (cantidadTotal === 0) {
      return (
         <div className='cart-container'>
            <h2>No tienes productos en el carrito</h2>
            <Link to='/'>Productos</Link>
         </div>
      );
   }

   return (
      <div className='cart-container'>
         {cart.map(product => <CartItem key={product.id} {...product} />)}
         
         <h1>Total: ${total}</h1>
         <button onClick={() => clearCart()}>Vaciar Carrito</button>
         <Link to='/checkout' className='checkout-link'>Comprar</Link>
      </div>
   );
};

export default Cart;


