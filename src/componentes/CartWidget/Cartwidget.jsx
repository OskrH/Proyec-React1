import './cart.module.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.svg'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/Cart' className='CartWidget' style={{ display: totalQuantity > 0}}>
      <img className='CartImg' src={cart} alt="cart-widget" />
      {0}
      </Link>
  )
}

export default CartWidget