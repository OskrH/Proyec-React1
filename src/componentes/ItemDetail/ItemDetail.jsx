import './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, img, categoria, description, precio, sotck }) => {
    return (
        <article className='carditem'>
            <header className='header'>
                <h2 className='itemheader'>
                    {nombre}
                </h2>
            </header>
            <div className='details'>
            <picture>
                <img src={img} alt={nombre} className='ItemImg'/>
            </picture>
            <section>
                <p className='info'>
                    categoria: {categoria}
                </p>
                <p className='info'>
                    descrpcion: {description}
                </p>
            </section>
            </div>
            <p className='info'>
                    precio: {precio}
                </p>
            <footer className='ItemFooters'>
            <ItemCount initial={0} stock={5} onAdd={(quantity) => console.log('cantidad agregada', quantity)}></ItemCount>
            </footer>
        </article>
    )
}

export default ItemDetail