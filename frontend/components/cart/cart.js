import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link, useHistory } from "react-router-dom";



function Cart() {
    const dispatch = useDispatch();
    let history = useHistory();

    const { items, userId, products, sizes } = useSelector(state => {
debugger
        return {
            items: state.entities.cart.items,
            products: state.entities.products.products,
            sizes: state.entities.products.products.sizes,
            colors: state.entities.products.colors,
            userId: state.session.id
        }
    });

    function handleClick(e) {
        e.preventDefault();
        history.push(`/`)
    }
    // let prices = items.map(item => item.price);
    // let countTotal = prices.reduce((a, b) => a + b, 0);

    let numItems = Object.keys(items).length;
    let numItemstext;
    (numItems !== 1) ? numItemstext = "items" : numItemstext="item";

    return (

        <div className="cart">
            <div className="crt">
            <div className="ci1">
               <h1>Shopping Cart</h1>
               <h2>{numItems} {numItemstext}</h2>
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