import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link, useHistory } from "react-router-dom";



function Cart() {
    const dispatch = useDispatch();
    let history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        history.push(`/`)
    }

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    // similar to mapStateToProps
    // const products = useSelector(state => state.entities.products.products)

    // debugger
    return (

        <div className="cart">
            <div className="crt">
            <div className="ci1">
               <h1>Shopping Cart</h1>
               <h2>0 items</h2>
            </div>
            <div className="ci2">
                <h1>$0.00</h1>
                <h2>Subtotal</h2>
            </div>
            </div>
            <div className="ci3">
            <button onClick={handleClick} className="shopping">Continue shopping</button>
            <button className="checkout">Proceed to checkout</button>
            </div>
        </div>
    )

}

export default Cart;