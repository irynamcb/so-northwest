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
            <div className="main-picture">
                <h1>About</h1>
                <h1>Blinchiki is Russian style crepes, a family business. We are very popular among Farmers Markets customers of Kirkland, Bellevue, Seattle and many other cities of the Greater Seattle Metro Area. We make our crepes using grandma's old recipes, that are passed on from one generation to another, which makes our crepes special and unforgettable. We also use the local fresh organic products and the highest quality ingredients, including USDA, to make delicious crepes. Please visit us at the Farmers Markets and festivals!</h1>
            </div>
            <h1>BLINCHIKI</h1>
            <h1>RUSSIAN STYLE CREEPES</h1>
            <h2>Gluten-free options available. Checkout "Shop" tab for more information.</h2>
            <div className="product-list">
                {Object.values(products).map(product => 
                <li key={product.id}><SingleProduct product={product}/></li>)}
            </div>
        </div>
    )

}

export default Products;