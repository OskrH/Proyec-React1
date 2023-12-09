import './itemlist.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { category } = useParams()

  useEffect(() => {
    const asyncFunc = category ? getProductsByCategory : getProducts

    asyncFunc(category)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [category])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
