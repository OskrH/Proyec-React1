
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';


function App() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <hr />
      <ItemListContainer greeting={"Bienvenidos a tu mundo Gamming"}></ItemListContainer>
      <hr />
      <ItemCount initial={1} stock={8} onAdd={(quantity) => console.log('cantidad agregada', quantity)}></ItemCount>
    </div>
  )
}

export default App
