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
    let products = useSelector(state => state.entities.products.products);
    let productIdx = products.findIndex(product => product.id === Number(productId));
    if (productIdx === -1) {
        return (<div></div>)
    }
    let product = products[productIdx];


    return (

        <div className="">
            <h1>Check out this awesome product:</h1>
            <div className="">
                <p>{product.description}</p>
                <p>{product.price}</p>
                {product.sizes}
                { product.sizes.map(size => <p key={size.id}>{size.size}</p>) }
            </div>
        </div>
    )

}

export default Product;