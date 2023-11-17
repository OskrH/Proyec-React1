import './navbar.module.css'
import Cartwidget from "../CartWidget/Cartwidget"
import { NavLink, Link } from 'react-router-dom'

const Navbar =() => {
    return (
        <nav className='Navbar' >
            <Link to='/'>
                <h1>Sylphie Games</h1>
            </Link>
            <div className='Categorias'>
                <NavLink to={'/category/Accion'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accion</NavLink>
                <NavLink to={'/category/Aventura'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Aventura</NavLink>
                <NavLink to={'/category/Rol y Estrategia'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Rol y Estrategia</NavLink>
                <NavLink to={'/category/Deportes y Carreras'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deportes y Carreras</NavLink>
            </div>
        </nav>
    )
}

export default Navbar