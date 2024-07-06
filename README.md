# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ProyectoFinal_React_AlfredoRivero

# Introducción al proyecto

Este proyecto es una aplicación de e-commerce basada en React llamada "Mundo Virtual". Permite a los usuarios navegar a través de varias categorías de productos, ver los detalles del producto, agregar artículos al carrito y proceder al pago.

Las características clave incluyen enrutamiento dinámico, administración de estado con React Context API para el carrito de compras e integración con Firebase para administración de datos y procesamiento de pedidos en tiempo real.

# Estructura del proyecto

La estructura del proyecto incluye los siguientes componentes clave:

NavBar: proporciona enlaces de navegación y un widget de carrito.

ItemListContainer: muestra una lista de productos según la categoría.

ItemDetailContainer: muestra información detallada sobre un producto seleccionado.

Cart: administra el carrito de compras, muestra los artículos del carrito y permite el pago.

Contacto: Formulario de información de contacto del usuario.

Checkout: Formulario para finalizar la compra, mostrando los detalles del pedido.

CartContext: gestiona el estado del carrito de compras utilizando la API Context de React. Proporciona funciones para agregar artículos, eliminar artículos, borrar el carrito y calcular totales.

# Proyecto Basado:

React JS

JavaScript

HTML

CSS

# Integración de Firebase:

Firebase: se utiliza para servicios backend, como almacenar datos de productos y gestionar pedidos (firebase/client.js).

# Dependencias:

Las dependencias adicionales utilizadas en este proyecto (más allá de la configuración básica de React) incluyen:

react-router-dom.

date-fns.

firebase.

react-icons.

react-number-format.

# Decisiones de proyecto:

Gestión de estado: utiliza la API de Context de React (CartContext) para la gestión del estado global del carrito de compras para mantener la coherencia entre los componentes.

Enrutamiento: implementa enrutamiento dinámico (react-router-dom) para navegar entre diferentes vistas (listados de productos, detalles del producto, carrito, pago).

Firebase: Elegido por sus capacidades de base de datos en tiempo real (Firestore) para gestionar datos de productos y gestionar pedidos de manera eficiente.

# Mejoras futuras:

Las mejoras futuras podrían incluir:

Autenticación: implementar la autenticación de usuario para un pago seguro y experiencias personalizadas.

Funciones mejoradas del producto: agregar reseñas, calificaciones y recomendaciones de productos.

Optimización del rendimiento: optimización de la representación de componentes y la obtención de datos para interacciones más rápidas del usuario.

# Video Proyecto:

<video controls src="video de proyecto react.mp4" title="Title"></video>
