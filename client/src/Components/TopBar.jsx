import React from 'react'

function TopBar() {
  return (
    <div className='w-full bg-[#000] py-2'>
        
        <div className='container mx-auto flex justify-between items-center '>
            <p className='text-[#A2A6B0]'>Mon-Thu: <span className='text-[#fff]'>9:00 AM - 5:30 PM</span></p>            
            <p className='text-[#fff]'>Visit our showroom in 1234 Street Adress City Address, 1234  <span className='underline'>Contact Us</span></p>
            <p className='text-[#fff]'>Call Us: (00) 1234 5678</p>
       
           
        </div>
    </div>
  )
}

export default TopBar
