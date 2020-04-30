import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    hasErrors: false,
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            
        },
        removeFromCart: (state, { payload }) => {
            
        }
    }
})
  
export const {
    addToCart,
    removeFromCart

} = cartSlice.actions

export const cartSelector = state => state.entities.cart.products;
export default cartSlice.reducer;
