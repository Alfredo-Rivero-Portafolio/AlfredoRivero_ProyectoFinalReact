import './ItemCount.css'
import React, { useState } from "react";


const ItemCount = ({ stock, inicial, onAdd }) => {
   const [cantidad, setCantidad] = useState(inicial);

   const sumarCantidad = () => {

      cantidad < stock && setCantidad(cantidad + 1);
   };

   const restarCantidad = () => {
      cantidad > 1 && setCantidad(cantidad - 1);
   };   

   return (
      <div className='btn-count'>
         <div>
            <button className='btn-cont' onClick={restarCantidad}>-</button>
            <p>{cantidad}</p>
            <button className='btn-cont' onClick={sumarCantidad}>+</button>
         </div>
         <div>
            <button className='btn-agregar' onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar</button>
         </div>
      </div>
   );
};

export default ItemCount;
