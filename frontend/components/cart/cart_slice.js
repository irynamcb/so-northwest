import { createSlice, createAction } from '@reduxjs/toolkit';
import { fetchCartItems, addCartItem, deleteCartItem, updateCartItem } from '../../util/cart_api_util';


export const initialState = {
    hasErrors: false,
    items: {}
}

const receiveAllProducts = createAction('products/receiveAllProducts')

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {

            state.items[payload.id] = payload
        },
        updateCart: (state, {payload}) => {
            state.items[payload.id] = payload
        },
        removeFromCart: (state, { payload }) => {

            delete state.items[payload.id] 
            
        },
        receiveCart: (state, {payload}) => {
// debugger
            state.items = payload.cart

        },
    },
        extraReducers: {
            [receiveAllProducts]: (state, action) => {
            // debugger
                if (action.payload.cart === undefined) {
                    state.items = {}
                } else  {
                    state.items = action.payload.cart
                }
            },
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

export function update(cartItem) {
    return async dispatch => {
        try {
            const response = await updateCartItem(cartItem)

            dispatch(updateCart(response))
        } catch (error) {
            console.log(error)
        }
    }
}