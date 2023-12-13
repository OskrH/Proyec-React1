
const CartItem = ({ nombre, quantity, precio}) => {

    return(
        <article className='carditem'>
            <header className='header'>
                <h2 className='itemheader'>
                    {nombre}
                </h2>
                <p>
                    {quantity} unidades
                </p>
                <p>
                    {precio} clp
                </p>
            </header>
        </article>
    )
}

export default CartItem