import React, {useEffect, useMemo} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import SingleProduct from './single_product';
import {fetchProducts} from './product_slice';

function Products() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // similar to mapStateToProps
    const products = useSelector(state => state.entities.products.products)

// debugger
    return (

        <div className="products">
            <h1>Products</h1>
            <div className="product-list">
                {products.map(product => 
                <li key={product.id}><SingleProduct product={product}/></li>)}
            </div>
        </div>
    )

}

export default Products;