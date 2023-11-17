
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <Navbar></Navbar>
        </nav>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={ <ItemDetailsContainer/>}/>
        <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
