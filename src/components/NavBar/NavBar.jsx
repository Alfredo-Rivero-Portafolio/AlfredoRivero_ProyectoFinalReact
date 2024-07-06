import React from 'react';
import './NavBar.css';
import logo from '../../assets/img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {

   return (
      <div className="NavBar">
         <div className="nav-logo">
            <Link to={'/'}><img className='logo' src={logo} alt='logo'></img></Link>
         </div>

         <Link to={'/'}><h2 className="nav-titulo">Mundo Virtual</h2></Link>

         <div className="nav-items">
            <button><Link to='/'>Inicio</Link></button>
            <button><Link to='/category/celulares'>Celulares</Link></button>
            <button><Link to='/category/juegos'>Juegos</Link></button>
            <button><Link to={'../Contacto'}>Contacto</Link> </button>
            <Link><CartWidget /></Link>

         </div>
      </div>
   );
};

export default NavBar;

