import React from 'react'
import {Link} from 'react-router-dom'
import { auth, provider } from '../Firebase/firebase-config'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function Navbar() {

  
  return (
    <div className='w-full py-4'>
       <div className=' container mx-auto w-full flex justify-between items-center'>

            <Link to='/' className='flex gap-1 justify-center items-center'>
                <img src={logo} className='w-18 bg-transparent mix-blend-multiply' alt="logo" />
            </Link>


          <div className='text-[16px] flex justify-center items-center gap-8'>
            <Link to='/products/laptops'>Laptops</Link>
            <Link to='/products/Desktop'>Desktop PCs</Link>
            <Link to='/products/Phones'>Phones</Link>
            <Link to='/products/PcParts'>Pc Parts</Link>
            <Link to='/products/Monitors'>Monitors</Link>
            <Link to='/products'>All Products</Link>
            <Link className='border-2 border-[#0156FF] text-[#0156FF] rounded-full p-2 px-4'>About Us</Link>
          </div>


          
          <div className='text-[16px] flex justify-center items-center gap-8'>
            <Link to='/myAccount'>{cookies.get('displayName') ? cookies.get('displayName') : 'User'}</Link>
            <Link to='/cart' className='flex gap-2'><img className='invert w-7' src={cart} alt="cart" /></Link>
          </div>

      </div>
    </div>
   
  )
}

export default Navbar
