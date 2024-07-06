import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartItem = ({ title, cantidad, price, id }) => {
   const { removeItem } = useContext(CartContext);

   const subTotal = () => {
      return cantidad * price;
   }

   const onDelete = () => {
      removeItem(id); 
   }

   return (
      <div className="cart-item">
         <div>
            <h3>{title}</h3>
            <p>Cantidad: {cantidad}</p>
            <p>Precio por unidad: ${price}</p>
            <p>Subtotal: ${subTotal()}</p>
         </div>
         <button onClick={onDelete}>Eliminar</button>
      </div>
   );
};

export default CartItem;
