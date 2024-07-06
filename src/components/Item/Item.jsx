
import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({ id, title, description, price, pictureUrl, stock, category }) => {
   return (  
      <div className='container'>
         
         <article className='producto'>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} />
            <section>
               <p>Categoría: {category}</p>
               <p>{description}</p>
               <p>Disponible en Stock: {stock} </p>
            </section>
            <footer>
               <p>Precio: ${price}</p>
               <Link to={`/item/${id}`}>Ver Detalle</Link>
            </footer>
            </article>
            
      </div>
   )
} 
export default Item

