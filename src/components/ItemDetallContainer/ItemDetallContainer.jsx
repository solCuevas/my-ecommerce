import React from 'react'
import useProduct from '../../hooks/useProduct.js'
import Loading from '../Loading/Loading.jsx';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';


const ItemDetallContainer = () => {
  const {productId}=useParams();
  const {product, loading} = useProduct(productId);


console.log(product)
  return (
    <div>
      {loading ? <Loading/> : <ItemDetail product = {product}/>
        }
      

    </div>
  )
}

export default ItemDetallContainer