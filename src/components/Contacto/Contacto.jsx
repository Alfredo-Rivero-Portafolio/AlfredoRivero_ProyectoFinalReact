import React from 'react'
import './Contacto.css'
import { useForm } from 'react-hook-form';

const Contacto = () => {

   const { register, handleSubmit } = useForm();

   const datos = (db) => {
      console.log(db);
   }

   return (
      <div>
         <h1>Contacto</h1>
         <form onSubmit={handleSubmit(datos)}>
            <ul>
               <li>
                  <label form='name'>Nombre:</label>
                  <input type="text" name='nombre' placeholder='Nombre'
                     {...register('nombre')} />
               </li>
               <li>
                  <label form='name'>Apellido:</label>
                  <input type="text" name='apellido' placeholder='Apellido' {...register('apellido')} />
               </li>
               <li>
                  <label form='email'>Email:</label>
                  <input type="email" name='email' placeholder='Email' {...register('email')} />
               </li>
               <li>
                  <label form='number'>Telefono:</label>
                  <input type="phone" name='telefono' placeholder='Numero de Contacto' {...register('telefono')} />
               </li>
               <li>
                  <label form='mensaje'>Mensaje</label>
                  <textarea type="text" name='mensaje' placeholder='Mensaje' {...register('mensaje')} />
               </li>
               <li class="button">
                  <button type="submit">Enviar</button>
               </li>
            </ul>
         </form>
      </div>
   )
}

export default Contacto
