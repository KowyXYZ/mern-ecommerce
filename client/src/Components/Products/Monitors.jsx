import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Monitors({products}) {

    const categories = 'Monitors'
    
    const filter = products.filter((prod) => prod.category === categories)
    console.log(filter)

  return (
    <div className='flex justify-center items-center flex-wrap gap-6'>
        {filter.map((el, index) => {
            return(
                <Link to={`/products/${el._id}`} key={index} className='flex justify-center items-center flex-col text-start gap-3'>
                    <p className='text-lime-500'>IN STOCK</p>
                    <img src={`data:image/jpeg;base64,${el.image}`} className='w-38 h-38'  alt="pc1" />
                    <p className='text-[16px] w-[200px]'>{el.name}</p>
                    <p>{el.price}$</p>
                </Link>
            )
        })}
    </div>
  )
}

export default Monitors
