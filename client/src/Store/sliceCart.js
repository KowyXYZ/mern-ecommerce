import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const sliceCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            
            if (itemIndex >= 0 ) {
                state.cartItems[itemIndex].cartQuantity += 1

                if(state.cartItems[itemIndex].cartQuantity === 11) {
                    state.cartItems[itemIndex].cartQuantity = 10
                }
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = nextCartItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        decreaseFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1 
            } else if(state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = nextCartItems
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        totalAmount: (state, action) => {
            let {total, quantity} = state.cartItems.reduce((cartTotal, item) => {
                const {price, cartQuantity} = item
                const itemTotal = price * cartQuantity
                
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity


                return cartTotal
            },
                {total : 0,
                    quantity: 0
                }
            )
            state.cartTotalAmount = total
            state.cartTotalQuantity = quantity
        }
    }
})

export const { addToCart, removeFromCart, decreaseFromCart, clearCart, totalAmount} = sliceCart.actions
export default sliceCart.reducer