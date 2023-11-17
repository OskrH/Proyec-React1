import './navbar.module.css'
import Cartwidget from "../CartWidget/Cartwidget"
import { NavLink, Link } from 'react-router-dom'

const Navbar =() => {
    return (
        <nav className='Navbar' >
            <Link to='/'>
                <h3>S Games</h3>
            </Link>
            <div className='Categorias'>
                <NavLink to={'/categoria/Accion'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accion</NavLink>
                <NavLink to={'/categoria/Aventura'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Aventura</NavLink>
                <NavLink to={'/categoria/Rol y Estrategia'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Rol y Estrategia</NavLink>
                <NavLink to={'/categoria/Deportes y Carreras'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deportes y Carreras</NavLink>
            </div>
        </nav>
    )
}

export default Navbar