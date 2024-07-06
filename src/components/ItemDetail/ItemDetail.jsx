import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const ItemDetail = ({ id, title, description, price, pictureUrl, stock, category }) => {

   const [cantidadAdded, setCantidadAdded] = useState(0);

   const {addItem} = useContext(CartContext);

   const handleOnAdd = (cantidad) => {
      setCantidadAdded(cantidad)

      const item = { id, title, price };

      addItem(item, cantidad);
   };

   return (
      <div className='container'>
         <article className='producto'>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} />
            <section>
               <p>Categoría: {category}</p>
               <p>{description}</p>
               <p>Disponible en Stock: {stock}</p>
               <p>Precio: ${price}</p>
            </section>
            <footer>
               {cantidadAdded > 0 ? (
                  <Link to='/cart'>Finalizar Compra</Link>
               ) : (
                  <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
               )}
            </footer>
         </article>
      </div>
   );
};

export default ItemDetail;

