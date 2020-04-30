import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    hasErrors: false,
    items: {},
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            // console.log(payload)
            // debugger
        if (payload.id in state.items) {
            state.items[payload.id].count += payload.count 
        }
        else {
            state.items[payload.id] = payload
        }
        },
        removeFromCart: (state, { payload }) => {
            
        }
    }
})
  
export const {
    addToCart,
    removeFromCart

} = cartSlice.actions

export const cartSelector = state => state.entities.cart;
export default cartSlice.reducer;
