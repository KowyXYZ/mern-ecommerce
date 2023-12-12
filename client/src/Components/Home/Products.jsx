import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../../Assets/cart.png'
import Like from '../../Assets/Like.png'

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/getProducts')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err))
    }, [])

    
    

  return (
    <div className='w-full py-12'>
      <div className='container mx-auto flex justify-center items-center'>
        {products?.length === 0 ? <p>No products on the website...</p> :  <div className='flex gap-8 flex-wrap justify-center items-center'>
            {products.map((el, index) => {
                return(
                  <Link to={`/products/${el._id}`} key={index} className='border-2 p-2 flex justify-center items-center flex-col text-center gap-3'>
              <img src={`data:image/jpeg;base64,${el.image}`} className='w-44 h-44 object-contain'  alt="pc1" />
              <p className='text-[16px] w-[200px]'>{el.name}</p>
              <p>{el.price}$</p>
              <div className='flex justify-center items-center flex-col gap-2 w-full'>
                  <p className='flex items-center justify-center gap-2 border-2 w-full p-2'>Add To Cart <img className='w-6 invert' src={cart} alt="cart" /></p>
                  <p className='flex items-center justify-center gap-2 border-2 w-full p-2'>Add To Fav <img className='w-6 invert' src={Like} alt="cart" /></p>
              </div>
          </Link>

                    
                )
            })}
        </div>}
       
      </div>
    </div>
  )
}

export default Products
