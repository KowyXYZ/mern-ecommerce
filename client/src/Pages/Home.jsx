import React, { useEffect, useState } from 'react'
import CreateProduct from '../Components/User/CreateProduct'
import Products from '../Components/Home/Products'
import banner from '../Assets/banner.png'
import axios from 'axios'
import ProductCard from '../Components/Products/ProductCard'
import banner1 from '../Assets/banner1.png'
import banner2 from '../Assets/banner2.png'
import banner3 from '../Assets/desktop.png'
import banner4 from '../Assets/monitors.png'

import ad from '../Assets/ad.png'
import CustomBuilds from '../Components/Products/CustomBuilds'
import Laptops from '../Components/Products/Laptops'
import Desktop from '../Components/Products/Desktop'
import Monitors from '../Components/Products/Monitors'
import Sponsors from '../Components/Home/Sponsors'
import Support from '../Components/Home/Support'

function Home() {



  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/getProducts')
    .then(result => setProducts(result.data))
    .catch(err => console.log(err))
  }, [])


  return (
    <div className='flex container mx-auto  text-center  flex-col'>
      <img className='w-full h-full object-contain' src={banner} alt="banner" />

      <div className='my-8 '>
        <div className='flex justify-between items-center'>
           <p className='text-[18px]'>All Products</p>
           <p className='underline text-blue-500'>Check All Products...</p>
        </div>
        
        <div className='flex flex-wrap gap-8 justify-start items-center mt-5'>
          {products.slice(0, 6).map((product, index) => {
            return(
              <ProductCard key={index} product={product}/>
            )
          })}

       
        </div>
      </div>  

      <div className='py-12'>
        <img className='rounded-full w-full' src={ad} alt="ad" />  
      </div>

     
      <div className='mt-10 flex gap-4'>
        <img className='rounded-2xl' src={banner4} alt="banner2" />
        <Monitors products={products}/>
      </div>

      <div className='mt-10 flex gap-4'>
        <img className='rounded-2xl' src={banner2} alt="banner2" />
        <Laptops products={products}/>
      </div>

      <div className='mt-10'>
        <Sponsors/>
      </div>


      <div className='mt-10 flex gap-4'>
        <img className='rounded-2xl' src={banner3} alt="banner2" />
        <Desktop products={products}/>
      </div>

    
      <div className='flex gap-4 mt-10 '>
        <img className='rounded-2xl' src={banner1} alt="banner1" />
        <CustomBuilds products={products}/>
      </div>
   
      <div className='my-24'>
          <Support/>
      </div>

    </div>
  )
}

export default Home
