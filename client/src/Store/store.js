import { configureStore } from '@reduxjs/toolkit'
import sliceCart from './sliceCart'

const store = configureStore({
    reducer: {
        cart: sliceCart
    }
})

export default store