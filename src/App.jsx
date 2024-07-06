import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import { CartProvider } from './components/context/CartContext'
import Contacto from './components/Contacto/Contacto'
import Checkout from './components/Checkout/Checkout'



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes> 
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 Pagina no encontrada</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
  )
}

export default App

