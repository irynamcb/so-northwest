import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link, useHistory } from "react-router-dom";



function Cart() {
    const dispatch = useDispatch();

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

        <div className="">
            <div className="">
               <h1>Shopping Cart</h1>
               <h2>0 items</h2>
            </div>
            <div className="">
                <h1>$0.00</h1>
                <h2>Subtotal</h2>
            </div>
            <button onClick={handleClick}>Continue shopping</button>
            <button>Proceed to checkout</button>
        </div>
    )

}

export default Cart;