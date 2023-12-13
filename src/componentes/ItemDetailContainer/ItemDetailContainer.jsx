import './ItemDetailsContainer.module.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc  } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemDetailContainer = () => {
    const {productos, setProductos} = useState(null)
    const { loading, setLoading} = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productosAdapted = { id: response.id, ...data }
            setProductos(productosAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer