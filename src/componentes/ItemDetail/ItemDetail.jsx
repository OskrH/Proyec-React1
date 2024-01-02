import './ItemDetail.module.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'


const ItemDetail = ({id, nombre, img, category, description, precio, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }


    return(
        <article className='carditem'>
            <header className='header'>
                <h2 className='itemheader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImg' />
            </picture>
            <section>
                <p className='info'>
                    Categorias: {category}
                </p>
                <p className='info'>
                    descripcion: {description}
                </p>
            </section>
            <p className='info'>
                    precio: {precio}
                </p>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className= 'Option'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail