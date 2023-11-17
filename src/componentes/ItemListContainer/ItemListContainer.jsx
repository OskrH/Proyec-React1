import './itemlist.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategoria } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { categoriaId } = useParams()

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductsByCategoria : getProducts

    asyncFunc(categoriaId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [categoriaId])

    return (
      <div>
        <h1>{greeting}</h1>
        <ItemList products={products}></ItemList>
      </div>
    )
}

export default ItemListContainer
