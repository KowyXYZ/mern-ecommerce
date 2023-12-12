import React, { useEffect, useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../Firebase/firebase-config.js'
import { signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'
import CreateProduct from './CreateProduct.jsx'

const cookies = new Cookies()

function Guest() {

    const [IsAuth, setIsAuth] = useState(cookies.get('auth-token'))

    const [admin, setAdmin] = useState(cookies.get('adminKey'))

    const signInWithGoogle = async() => {
        const result = await signInWithPopup(auth, provider)
        try {
            cookies.set('auth-token', result?.user?.refreshToken)
            cookies.set('displayName', result?.user?.displayName)
            setIsAuth(true)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const adminId = 'DVFBiFIUidRI6C9TB7QL0mNKeac2'
        
    const SignOut = async() => {
        setIsAuth(false)
        await signOut(auth)
        cookies.remove('auth-token')
        cookies.remove('displayName')
        cookies.remove('adminKey')
        setAdmin(false)
        window.location.reload()
    }

    if(auth?.currentUser?.uid === adminId) {
        cookies.set('adminKey', true)
        
    } else {
        cookies.set('adminKey', false)
    }


  return (
     <div className='py-12'> 
        {IsAuth ?

        <div className='flex justify-center items-center flex-col'>
            {admin ? 
            
            <div className='flex justify-center items-center flex-col'>
                <CreateProduct/>
                <button onClick={SignOut} className='bg-purple-600 px-6 py-2 rounded-2xl mt-12'>Sign Out</button>
            </div> 
            
            : 
            <div className='flex flex-col justify-center items-center'>

                 <div>
                     <p>Your Favourites List: </p>
                 </div>

                 <button onClick={SignOut} className='bg-purple-600 px-6 py-2 rounded-2xl mt-12'>Sign Out</button>
            </div>
            }
            
        </div> 
        
        
        
        : 
    
        <div className='flex justify-center items-center container mx-auto flex-col py-12 gap-4'>
            <p className='text-[34px] font-black'>Welcome to the Kowy's E-Commerce App</p>
            <p>Login with google to continue</p>
            <button className='flex justify-center items-center border-2 p-2 gap-2 rounded-3xl' onClick={signInWithGoogle}>Sign In With Google</button>
            <p className='mt-12 '>E-Commerce application made by Kowy , check out my other projects on my <a className='underline opacity-100 text-purple-500' href="https://github.com/KowyXYZ">GitHub</a></p>
        </div>}
     </div> 
  )
}

export default Guest
