import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client';


const ItemDetailContainer = () => {
   const [item, setItem] = useState(null);
   const id = useParams().id;

   useEffect(() => {
      const productDoc = doc(db, 'products', id);
      getDoc(productDoc)
         .then((res) => {
         setItem({...res.data(), id: res.id});
      })
   }, [id])

   return (
      <div className='detail'>
         {item && <ItemDetail {...item} />}
      </div>
   );
};

export default ItemDetailContainer;

