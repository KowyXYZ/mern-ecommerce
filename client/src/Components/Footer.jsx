import React from 'react'

import {Link} from 'react-router-dom'
import logo from '../Assets/logo.png'

import fb from '../Assets/VectorFb.png'
import ig from '../Assets/Vector.png'
import cards from '../Assets/Group 103.png'

function Footer() {
  return (
    <div className='bg-[#000] py-12'>


      <div className=' container mx-auto flex flex-col gap-8 '>


        
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-[24px] font-black'>Sign Up To Our Newsletter.</p>
          <p className='font-light'>Be the first to hear about the latest offers.</p>
        </div>

        <div className='flex gap-4'>
          <input className='border-2 border-[#fff] bg-transparent placeholder-white py-2 px-6 rounded-xl' placeholder='Your Email' type="text"/>
          <button className='bg-[#0156FF] py-2 px-4 rounded-full'>Subscribe</button>
        </div>
      </div>










      <div className='flex gap-24'>
           <p> 
          <span className='text-gray'>
            Information
          </span><br/>
          About Us<br/>
          About Zip<br/>
          Privacy Policy<br/>
          Search<br/>
          Terms<br/>
          Orders and Returns<br/>
          Contact Us<br/>
          Advanced Search<br/>
          Newsletter Subscription
          </p>


          <p> 
          <span>
          PC Parts
          </span><br/>

          CPUS<br/>
          Add On Cards<br/>
          Hard Drives (Internal)<br/>
          Graphic Cards<br/>
          Keyboards / Mice<br/>
          Cases / Power Supplies / Cooling<br/>
          RAM (Memory)<br/>
          Software<br/>
          Speakers / Headsets<br/>
          Motherboards<br/>
          </p>


          <p> 


         <span>
         Desktop PCs
         </span><br/>

          Custom PCs<br/>
          Servers<br/>
          MSI All-In-One PCs<br/>
          HP/Compaq PCs<br/>
          ASUS PCs<br/>
          Tecs PCs<br/>
          </p>



          <p> 
         <span>Laptops</span><br/>

          Evryday Use Notebooks<br/>
          MSI Workstation Series<br/>
          MSI Prestige Series<br/>
          Tablets and Pads<br/>
          Netbooks<br/>
          Infinity Gaming Notebooks<br/>
          </p>



          <p> 
         <span>
         Address
         </span><br/>

        Address: 1234 Street Adress City Address, 1234<br/>
        Phones: (00) 1234 5678<br/>
        We are open: Monday-Thursday: 9:00 AM - 5:30 PM<br/>
        Friday: 9:00 AM - 6:00 PM<br/>
        Saturday: 11:00 AM - 5:00 PM<br/>
        E-mail: shop@email.com<br/>
          </p>
      </div>


      <div className='flex border-t-2 py-4 justify-between'>
        <div className='flex gap-2 items-center justify-center'>
          <img src={fb} alt="fb" />
          <img src={ig} alt="ig" />
        </div>


        <div>
          <img src={cards} alt="cc" />
        </div>


        <div>
          <p>Copyright © 2023</p>
        </div>
      </div>

      </div>

  


      
    </div>
  )
}

export default Footer
