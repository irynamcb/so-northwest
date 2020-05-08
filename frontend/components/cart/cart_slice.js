import { createSlice, createAction } from '@reduxjs/toolkit';
import { fetchCartItems } from '../../util/cart_api_util';


export const initialState = {
    hasErrors: false,
    items: {}
}

const RECEIVE_CURRENT_USER = createAction('RECEIVE_CURRENT_USER')

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            // debugger
        if (payload.id in state.items) {
            state.items[payload.id].count += payload.count 
        } else {
            state.items[payload.id] = payload
        }},
        removeFromCart: (state, { payload }) => {
// debugger
            state.items[payload.id].count -= payload.count
            if (state.items[payload.id].count <= 0) {
                delete state.items[payload.id] 
            }
        },
        receiveCart: (state, {payload}) => {
            // debugger
            state.items = payload.cart

        },
        extraReducers: {
            [RECEIVE_CURRENT_USER]: (state, action) => {
                state.items = action.userCart
            }
        }
    }
})


  
export const {
    addToCart,
    removeFromCart,
    receiveCart

} = cartSlice.actions

export const cartSelector = state => state.entities.cart;
export default cartSlice.reducer;


export function fetchCart() {
    return async dispatch => {
        try {
            const response = await fetchCartItems()
      
            dispatch(receiveCart(response))
        } catch (error) {
            console.log(error)
        }
    }
}