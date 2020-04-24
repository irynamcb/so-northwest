import {createSlice} from '@reduxjs/toolkit';
import {fetchAllProducts, fetchSingleProduct} from '../../util/products_api_util';

export const initialState = {
    hasErrors: false,
    products: [],
    sizes: {},
    reviews: {},
    colors: {}
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        receiveAllProducts: (state, {payload}) => {
            // debugger
            state.products = Object.values(payload)
        }
        receiveProduct: (state, {payload}) => {

        }
    }
})

export const {
    receiveAllProducts,
    receiveProduct
} = productSlice.actions

export const productsSelector = state => state.entities.products
export default productSlice.reducer 

export function fetchProducts() {
    return async dispatch => {
        try {
            const response = await fetchAllProducts()
            // debugger
            dispatch(receiveAllProducts(response))
        } catch (error) {
            console.log(error)
        }
    }
}

export function fetchProduct(productId) {
    return async dispatch => {
        try {
            const response = await fetchSingleProduct(productId)
            // debugger
            dispatch(receiveProduct(response))
        } catch (error) {
            console.log(error)
        }
    }
}