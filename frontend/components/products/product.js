import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchProduct } from './product_slice';
import {useParams} from 'react-router-dom';
import Review from './review';

function Product() {
    const dispatch = useDispatch();

    let {productId} = useParams();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch]);

    // similar to mapStateToProps
    const {product, sizes, colors, reviews} = useSelector(state => {

        let productIdx = state.entities.products.products.findIndex(product => product.id === Number(productId));
        let product = state.entities.products.products[productIdx]
        return {
            product: product,
            sizes: state.entities.products.sizes,
            colors: state.entities.products.colors,
            reviews: state.entities.products.reviews
    }});

    if (product === undefined) {
        return (<div></div>)
    }
  
    let colorNames = new Set();
    product.sizes.map(sizeId => {
        if (sizes[sizeId] !== undefined)
        sizes[sizeId].colors.map(colorId => colorNames.add(colors[colorId].color))
    });
// debugger
    return (

        <div className="single-product-details">
            <h1>Check out this awesome product:</h1>
            <div className="spd">
                <h1>{product.description}</h1>
                <h2>${product.price}.00</h2>
                Size:
                <span className="size">
                {
                    product.sizes.map(sizeId => {
                    if (sizes[sizeId] !== undefined) {
                        return (
                            <button key={sizeId}>{sizes[sizeId].size}</button>
                        )}})
                }
                </span>
                Color:
                <span className="color">
                {
                    Array.from(colorNames).map((name, idx) => <button key={idx} className={name}>{name}</button>)
                }
                </span>
            </div>
            Reviews:
            <div className="reviews">
                {
                    product.reviews.map((reviewId, idx) => <Review review={reviews[reviewId]} key={idx}/>)
                }
            </div>
        </div>
    )

}

export default Product;