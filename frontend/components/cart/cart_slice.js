import { createSlice, createAction } from '@reduxjs/toolkit';
import { fetchCartItems, addCartItem, deleteCartItem } from '../../util/cart_api_util';
import {productSlice} from '../products/product_slice';


export const initialState = {
    hasErrors: false,
    items: {}
}

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
        updateCart: (state, {payload}) => {
            state.items[payload.id] = payload
        },
        removeFromCart: (state, { payload }) => {

            delete state.items[payload.id] 
            
        },
        receiveCart: (state, {payload}) => {

            state.items = payload.cart

        },
    },
        extraReducers: {
            [productSlice.actions.receiveAllProducts]: (state, action) => {
            // debugger
                state.items = action.payload.cart
            }
        }
})


  
export const {
    addToCart,
    removeFromCart,
    receiveCart,
    updateCart

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

export function add(cartItem) {
    return async dispatch => {
        try {
            const response = await addCartItem(cartItem)

            dispatch(addToCart(response))
        } catch (error) {
            console.log(error)
        }
    }
}

export function remove(cartItemId) {
    return async dispatch => {
        try {
            const response = await deleteCartItem(cartItemId)

            dispatch(removeFromCart(response))
        } catch (error) {
            console.log(error)
        }
    }
}