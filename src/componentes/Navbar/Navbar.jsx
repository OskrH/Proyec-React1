import './navbar.module.css'
import Cartwidget from "../CartWidget/Cartwidget"
export default function Navbar() {

    
    return (
        <nav>
            <h1>Sylphie Games</h1>
            <ul>
                <li>
                <a href="">Accion</a>
                </li>
                <li>
                <a href="">Aventura</a>
                </li>
                <li>
                <a href="">Rol y Estrategia</a>
                </li>
                <li>
                <a href="">Deportes y Carreras</a>
                </li>
            </ul>
            <Cartwidget></Cartwidget>
        </nav>
    )
}

