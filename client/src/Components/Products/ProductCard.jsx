import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
    <Link to={`/products/${product._id}`} className='flex flex-col gap-2 p-2 rounded-3xl justify-center items-center '>
      <p>{product.category}</p>
      <img className='w-44 h-44 object-contain' src={`data:image/jpeg;base64,${product.image}`} alt="product" />
      <p>{product.name.slice(0, 26)}</p>
      <p>{product.price}$</p>
    </Link>
  )
}

export default ProductCard
