import {createSlice} from '@reduxjs/toolkit';
import {fetchAllProducts, fetchSingleProduct} from '../../util/products_api_util';
import {createSingleReview, deleteSingleReview} from '../../util/reviews_api_util';

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
            state.products = Object.values(payload)
        },
        receiveProduct: (state, {payload}) => {
            let product = Object.values(payload.products)[0]
            let i = state.products.findIndex(p => p.id === product.id)
            if (i === -1) {
                state.products.push(product)
            } else  {
                state.products[i] = product
            }
            
            state.sizes = Object.assign({}, state.sizes, payload.sizes)
            state.colors = Object.assign({}, state.colors, payload.colors)
            state.reviews = Object.assign({}, state.reviews, payload.reviews)
        },
        receiveReview: (state, {payload}) => {
           
            state.reviews = Object.assign({}, state.reviews, payload.reviews)
            let review = Object.values(payload.reviews)[0]
            let i = state.products.findIndex(p => p.id === review.productId)
            if (i !== -1) {
                state.products[i].reviews.push(review.id)
            } 
        },
        removeReview: (state, {payload}) => {
            // debugger
            let review = Object.values(payload.reviews)[0]
            let i = state.products.findIndex(p => p.id === review.productId)
            if (i !== -1) {
                state.products[i].reviews.splice(review.id, 1)
            } 
            delete state.reviews[review.id]
        }
    }
})

export const {
    receiveAllProducts,
    receiveProduct,
    receiveReview,
    removeReview

} = productSlice.actions

export const productsSelector = state => state.entities.products
export default productSlice.reducer 

export function fetchProducts() {
    return async dispatch => {
        try {
            const response = await fetchAllProducts()
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
            dispatch(receiveProduct(response))
        } catch (error) {
            console.log(error)
        }
    }
}

export function createReview(review) {
    
    return async dispatch => {
        try {
            const response = await createSingleReview(review)
            dispatch(receiveReview(response))
        } catch (error) {
            console.log(error)
        }
    } 
}

export function deleteReview(reviewId) {

    return async dispatch => {
        try {
            const response = await deleteSingleReview(reviewId)
            dispatch(removeReview(response))
        } catch (error) {
            console.log(error)
        }
    }
}
