import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cart from '../../Assets/cart.png'
import Like from '../../Assets/Like.png'
import { addToCart } from '../../Store/sliceCart';
import { useDispatch } from 'react-redux';

function SingleProduct() {
  

    const {id} = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:5000/getProducts/${id}`)
      .then(result => setProduct(result.data))
      .catch(err => console.log(err))
    }, [])
    

    const dispatch = useDispatch()

  const cartHandler = (item) => {
    dispatch(addToCart(item))
  }


  return (
    <div className='py-12 flex justify-center items-center flex-col text-center gap-3'>
      <p className='text-[20px]'>{product.category}</p>
      <p className='text-[32px] font-black'>{product.name}</p>
      <img className='w-44' src={`data:image/jpeg;base64,${product.image}`} alt="product" />
      <p className='text-[24px]'>Price: {product.price}$</p>
      <p className='w-[300px] sm:w-[500px] text-gray-500'>Description:{product.description}</p>
      <div className='flex justify-center items-center flex-col gap-2'>
                  <button onClick={() => cartHandler(product)} className='flex items-center justify-center gap-2 border-2 w-full p-2'>Add To Cart <img className='w-6 invert' src={cart} alt="cart" /></button>
                  <p className='flex items-center justify-center gap-2 border-2 w-full p-2'>Add To Fav <img className='w-6 invert' src={Like} alt="cart" /></p>
              </div>
    </div>
  )
}



export default SingleProduct
