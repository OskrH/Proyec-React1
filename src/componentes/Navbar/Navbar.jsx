import './navbar.module.css'
import Cartwidget from "../CartWidget/Cartwidget"
export default function Navbar() {

    
    return (
        <nav>
            <h1>Eris Games</h1>
            <ul>
                <li>
                <a href="">Juegos PC</a>
                </li>
                <li>
                <a href="">Juegos PS5</a>
                </li>
                <li>
                <a href="">Juegos NINTENDO SWITCH</a>
                </li>
                <li>
                <a href="">Juegos XBOX</a>
                </li>
            </ul>
            <Cartwidget></Cartwidget>
        </nav>
    )
}

