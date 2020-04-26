import {createSlice} from '@reduxjs/toolkit';
import {fetchAllProducts, fetchSingleProduct} from '../../util/products_api_util';
import {createReview, deleteReview} from '../../util/reviews_api_util';

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
        },
        receiveProduct: (state, {payload}) => {
            // debugger
            let product = Object.values(payload.products)[0]
            let i = state.products.findIndex(p => p.id === product.id)
            if (i === -1) {
                // debugger
                state.products.push(product)
            } else  {
                state.products[i] = product
            }
            // debugger
            state.sizes = Object.assign({}, state.sizes, payload.sizes)
            state.colors = Object.assign({}, state.colors, payload.colors)
            state.reviews = Object.assign({}, state.reviews, payload.reviews)
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