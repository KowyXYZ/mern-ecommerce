import React from 'react'
import Account from '../../Assets/Account.png'
import supp from '../../Assets/Support.png'
import Savings from '../../Assets/Saving.png'

function Support() {
  return (
    <div className='flex justify-center items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-3 text-center'>
            <img src={Account} alt="account" />
            <p className='font-bold text-[18px]'>Product Support</p>
            <p className='w-[300px] font-light'>Up to 3 years on-site warranty available for your peace of mind.</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-3 text-center'>
            <img src={supp} alt="account" />
            <p className='font-bold text-[18px]'>Personal Account</p>
            <p className='w-[300px] font-light'>With big discounts, free delivery and a dedicated support specialist.</p>
        </div>

        <div className='flex flex-col justify-center items-center gap-3 text-center'>
            <img src={Savings} alt="account" />
            <p className='font-bold text-[18px]'>Amazing Savings</p>
            <p className='w-[300px] font-light'>Up to 70% off new Products, you can be sure of the best price.</p>
        </div>
    </div>
  )
}

export default Support
