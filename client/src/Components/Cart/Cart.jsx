import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart, clearCart, decreaseFromCart, removeFromCart, totalAmount } from '../../Store/sliceCart'


function Cart() {

    const cart = useSelector((state) => state.cart)
    const {cartTotalAmount} = useSelector((state) => state.cart)
    const {cartTotalQuantity} = useSelector((state) => state.cart)

    const handleRemoveFromCart = (el) => {
        dispatch(removeFromCart(el))
    }

    const handleDecCart = (el) => {
        dispatch(decreaseFromCart(el))
    }
    const dispatch = useDispatch()


    useEffect(() => {
    
    }, [dispatch(totalAmount())])
  

  return (
    <div className='w-full py-8'>

        {cart.cartItems.length === 0 ? 
        
        <div className='flex-col flex py-24 justify-center items-center'>
            <p className='text-[34px] text-[#fff] font-semibold'>Your shopping cart is empty!!!</p>
            <Link to='/' className='text-[20px] underline'>Click here to go shopping</Link>
        </div>

        :
        
        <div className='space-y-4 container mx-auto flex-col flex justify-center items-center'>
            {/* <div className='flex items-center justify-around gap-56'>
                <p className='font-semibold text-[18px]'>Product</p>
                <p className='font-semibold text-[18px]'>Price</p>
                <p className='font-semibold text-[18px]'>Quantity</p>
                <p className='font-semibold text-[18px]'>Total</p>
            </div> */}

            <div className='flex items-center flex-col justify-center gap-8 '>
                {cart.cartItems?.map((el, index) => {
                    return (
                        <div className='flex justify-center items-center gap-56 border-2 p-6 rounded-3xl'>
                            <div className='flex justify-center gap-4 items-center'>
                                <img className='rounded-3xl w-56 object-cover h-56' src={`data:image/jpeg;base64,${el.image}`} alt="thumbnailimage" />
                                    <div>
                                        <p className='font-semibold w-[100px] text-[22px]'>{el.title}</p>
                                        <button onClick={() => handleRemoveFromCart(el)} className='text-[gray]'>Remove</button>
                                    </div>
                            </div>

                            <div>
                                <p className=' text-[18px]'>Price: <span className='font-semibold'>${el.price}</span></p>
                            </div>

                            <div className='flex border-2 py-1 px-5 text-[18px] rounded-xl justify-center items-center gap-4'>
                                <button onClick={() => dispatch(addToCart(el))} className='w-[10px]'>+</button>
                                <p className='font-semibold text-[18px]'>{el.cartQuantity}</p>
                                <button onClick={() => handleDecCart(el)} className='w-[10px]'>-</button>
                            </div>

                            <div>
                                <p className='w-[80px] text-[18px]'>Total: <span className='font-semibold'>${el.price * el.cartQuantity}</span></p>
                            </div>
                            
                        </div>
                    )
                })}
            </div>

            <div className='flex  items-start justify-between gap-[900px]'>
                <button onClick={() => dispatch(clearCart())} className='text-[gray] text-[20px] border-2 py-2 px-4 rounded-lg'>Clear cart</button>
                <div className='space-y-2 flex flex-col'>
                    
                    <p className='text-[18px]'>Subtotal: <span className='font-semibold'>${cartTotalAmount}</span></p>
                    <p className='text-[18px]'>Total items in cart: <span className='font-semibold'>{cartTotalQuantity}</span></p>
                    <p className='text-[gray]'>Taxes and shipping calculated at checkout</p>
                    <button className='bg-[#0156FF] py-2 px-4 rounded-3xl'>Check out</button>
                </div>
            </div>
        </div>}


      
    </div>
  )
}


export default Cart