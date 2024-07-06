

import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client'

const ItemListContainer = ({ greeting }) => {

   const [products, setProducts] = useState([]);
   const [cargando, setCargando] = useState(true);
   const categoryId = useParams().categoryId;



   useEffect(() => {

      const productsDb = collection(db, "products");

      const filtProducts = categoryId ? query(productsDb, where('category', '==', categoryId)) : productsDb;



      getDocs(filtProducts)
         .then((res) => {
            setProducts(res.docs.map((docs) => {
               return { ...docs.data(), id: docs.id }
            })
            )
            setCargando(false);
         })
   }, [categoryId]);


   return (
      <div className="item-list">
         <h1>{greeting}</h1>
         {cargando ? (
            <p>Cargando productos...</p>
         ) : (
            <ItemList products={products} />
         )}
      </div>
   )
}


export default ItemListContainer