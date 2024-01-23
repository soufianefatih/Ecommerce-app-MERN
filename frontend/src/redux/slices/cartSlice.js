import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'


const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload
            let productItem = state.cartItems.find(product => product.id === item.id)
            if(productItem) {
                productItem.quantity += 1
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
                toast.success('Your product has been updated.')
            }else {
                state.cartItems = [item, ...state.cartItems]
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
                toast.success('Your product has been saved.')
            }
        }, 
    }
})

const cartReducer = cartSlice.reducer;
export const { addToCart} = cartSlice.actions;
export default cartReducer;