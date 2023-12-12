import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../Assets/cart.png'
import Like from '../Assets/Like.png'

function Monitors() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/getProducts')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err))
    }, [])

    const categories = 'Monitors'
    
    const filter = products.filter((prod) => prod.category === categories)
    console.log(filter)

  return (
    <div className='flex justify-center items-center flex-wrap gap-6 py-12'>
        {filter.map((el, index) => {
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
    </div>
  )
}

export default Monitors
