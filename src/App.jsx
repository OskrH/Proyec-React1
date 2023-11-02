
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <hr />
      <ItemListContainer greeting={"Bienvenidos a tu mundo Gamming"}></ItemListContainer>
    </div>
  )
}

export default App
