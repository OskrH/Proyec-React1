import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <CartProvider>
        <nav>
          <Navbar></Navbar>
        </nav>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/>}/>
        <Route path= '/cart' element= {<Cart/>} />
        <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
