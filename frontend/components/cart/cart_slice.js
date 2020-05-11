import { createSlice, createAction } from '@reduxjs/toolkit';
import { fetchCartItems } from '../../util/cart_api_util';
// import {productSlice} from '../products/product_slice';


export const initialState = {
    hasErrors: false,
    items: {}
}

const receiveAllProducts = createAction('receiveAllProducts')

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {

        if (payload.id in state.items) {
            state.items[payload.id].count += payload.count 
        } else {
            state.items[payload.id] = payload
        }},
        removeFromCart: (state, { payload }) => {

            state.items[payload.id].count -= payload.count
            if (state.items[payload.id].count <= 0) {
                delete state.items[payload.id] 
            }
        },
        receiveCart: (state, {payload}) => {

            state.items = payload.cart

        },
    },
        extraReducers: {
            [receiveAllProducts ]: (state, action) => {
            debugger
                return state.items = action.cart
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