import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../Assets/cart.png'
import Like from '../Assets/Like.png'
import { addToCart } from '../Store/sliceCart';
import { useDispatch } from 'react-redux';


function Laptops() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/getProducts')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err))
    }, [])

    const categories = 'Laptops'
    
    const filter = products.filter((prod) => prod.category === categories)

    const dispatch = useDispatch()

    const cartHandler = (item) => {
      dispatch(addToCart(item))
    }

  return (
    <div className='flex justify-center items-center flex-wrap gap-6 py-12'>
        {filter.map((el, index) => {
            return(
              <div  key={index} className='border-2 p-2 flex justify-center items-center flex-col text-center gap-3'>
                <Link to={`/products/${el._id}`}>
                <img src={`data:image/jpeg;base64,${el.image}`} className='w-44 h-44 object-contain'  alt="pc1" />
                </Link>
           
              <p className='text-[16px] w-[200px]'>{el.name}</p>
              <p>{el.price}$</p>
              <div className='flex justify-center items-center flex-col gap-2 w-full'>
                  <button onClick={() => cartHandler(el)} className='flex items-center justify-center gap-2 border-2 w-full p-2'>Add To Cart <img className='w-6 invert' src={cart} alt="cart" /></button>
                  <p className='flex items-center justify-center gap-2 border-2 w-full p-2'>Add To Fav <img className='w-6 invert' src={Like} alt="cart" /></p>
              </div>
          </div>
            )
        })}
    </div>
  )
}

export default Laptops
