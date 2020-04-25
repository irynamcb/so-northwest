import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchProduct } from './product_slice';
import {useParams} from 'react-router-dom';

function Product() {
    const dispatch = useDispatch();

    let {productId} = useParams();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch]);

    // similar to mapStateToProps
    const {products, sizes, colors, reviews} = useSelector(state => {

        return {
            products: state.entities.products.products,
            sizes: state.entities.products.sizes,
            colors: state.entities.products.colors,
            reviews: state.entities.products.reviews
    }});

    let productIdx = products.findIndex(product => product.id === Number(productId));
    if (productIdx === -1) {
        return (<div></div>)
    }
    let product = products[productIdx];
    // debugger
    let colorNames = Array.from(new Set (product.sizes.map(sizeId => sizes[sizeId].colors.map(colorId => colors[colorId].color))));

    return (

        <div className="single-product-details">
            <h1>Check out this awesome product:</h1>
            <div className="spd">
                <h1>{product.description}</h1>
                <h2>${product.price}.00</h2>
                Size:
                <span className="size">
                {
                    product.sizes.map(sizeId => <button key={sizeId}>{sizes[sizeId].size}</button>)
                }
                </span>
                Color:
                <span className="color">
                {
                    colorNames.map((name, idx) => <button key={idx}>{name}</button>)
                }
                </span>
            </div>
        </div>
    )

}

export default Product;