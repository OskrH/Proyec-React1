import './navbar.module.css'
import Cartwidget from "../CartWidget/Cartwidget"
import { NavLink, Link } from 'react-router-dom'

const Navbar =() => {
    return (
        <nav className='Navbar' >
            <Link to='/'>
                <h1><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.229 4.14l-.006 3.33h-10.6a.4.4 0 0 0 0 .798l2.76-.016a7.87 7.87 0 0 1-.001 15.738L2.748 24l.005-3.375h10.635a4.505 4.505 0 1 0-.002-9.01l-2.771-.03a3.723 3.723 0 1 1-.004-7.446h10.618zM2.763 19.843l-.004-3.331h10.609c.21 0 .383-.175.383-.387a.385.385 0 0 0-.384-.385h-2.744c-4.345 0-7.867-3.525-7.867-7.871S6.278 0 10.623 0l10.6.003l.006 3.35l-10.604.003c-2.49 0-4.5 2.019-4.5 4.507a4.51 4.51 0 0 0 4.515 4.504l2.775.03a3.722 3.722 0 0 1 0 7.443H2.765l-.002.003z"/></svg>ylphie Games</h1>
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