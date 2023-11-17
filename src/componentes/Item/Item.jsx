import './Item.module.css'

const Item = ({id, nombre, img, precio, stock}) => {

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
                    precio: clp{precio}
                </p>
                <p className='info'>
                    stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <link to={'/item/${id}'} className='Option'>ver detalles</link>
            </footer>
        </article>
    )
}

export default Item