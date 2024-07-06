import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import './Checkout.css';
import { format } from 'date-fns';

const Checkout = () => {
   const { register, handleSubmit } = useForm();
   const { cart, clearCart, total } = useContext(CartContext);
   const [idCompra, setIdCompra] = useState('');
   const [detalleCompra, setDetalleCompra] = useState(null);
   const [totalCompra, setTotalCompra] = useState(0);
   const [datosCliente, setDatosCliente] = useState(null);
   const [fechaHoraCompra, setFechaHoraCompra] = useState('');
   

   const compra = (datos) => {

      const fechaHoraActual = new Date();
      const fechaHoraFormateada = format(fechaHoraActual, "dd/MM/yyyy HH:mm:ss");


      const orden = {
         cliente: {
            nombre: datos.nombre,
            apellido: datos.apellido,
            email: datos.email,
            telefono: datos.telefono
         },
         productos: cart,
         total: total,
         fechaHora: fechaHoraFormateada
      };

      const ordenesComp = collection(db, 'ordenDeCompra');

      addDoc(ordenesComp, orden)
         .then((doc) => {
            setIdCompra(doc.id);
            setDetalleCompra(cart);
            setTotalCompra(total);
            setDatosCliente(datos);
            setFechaHoraCompra(fechaHoraFormateada);
            clearCart();
         })
         .catch((error) => {
            console.error('Error al agregar la orden:', error);
         });
   };

   if (idCompra) {
      return (
         <div className="checkout-container">
            <h1>Detalle de tu Compra</h1>
            <h2>Gracias por su compra</h2>
            <p>Fecha y Hora de la Compra: {fechaHoraCompra}</p>
            <p>Tu identificador de pedido es: {idCompra}</p>
            <div className="order-details">
            <div className="customer-details">
                  <h2>Datos del Cliente:</h2>
                  <p>Nombre: {datosCliente.nombre}</p>
                  <p>Apellido: {datosCliente.apellido}</p>
                  <p>Teléfono: {datosCliente.telefono}</p>
               </div>
               <div></div>
               <h2>Productos:</h2>
               <ul>
                  {detalleCompra.map((product) => (
                     <li key={product.id}> 
                        {product.title}
                        <p></p>
                        Cantidad: {product.cantidad}
                     </li>
                  ))}
               </ul>
               <p></p>
               <h3>Total: {totalCompra}</h3>
            </div>
         </div>
      );
   }
   
   return (
      <div className="checkout-container">
         <h1>Orden De Compra</h1>
         <form onSubmit={handleSubmit(compra)}>
            <ul>
               <li>
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" name="nombre" placeholder="Nombre" {...register('nombre')} required />
               </li>
               <li>
                  <label htmlFor="apellido">Apellido:</label>
                  <input type="text" name="apellido" placeholder="Apellido" {...register('apellido')} required/>
               </li>
               <li>
                  <label htmlFor="telefono">Teléfono:</label>
                  <input type="tel" name="telefono" placeholder="Número de Contacto" {...register('telefono')} required/>
               </li>
               <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" placeholder="Email" {...register('email')} required/>
               </li>
               <li className="button">
                  <button type="submit">Comprar</button>
               </li>
            </ul>
         </form>
      </div>
   );
};

export default Checkout;

