import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import CartItem from './cart_item';



function Cart() {
    const dispatch = useDispatch();
    let history = useHistory();

    const { items, userId, products, sizes } = useSelector(state => {
// debugger
        return {
            items: state.entities.cart.items,
            products: state.entities.products.products,
            sizes: state.entities.products.products.sizes,
            colors: state.entities.products.colors,
            userId: state.session.id
        }
    });
// debugger
    function handleClick(e) {
        e.preventDefault();
        history.push(`/`)
    }

    function findProduct(index) {
        return products.find(p => p.id === index)
    }

    function findPrice(index) {
        return products.find(p => p.id === index).price
    }

    function total() {
        let sum = 0;
        Object.values(items).forEach(item => {
            sum += findPrice(item.productId) * item.count;
        })
        return sum;
    }

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
                <h1>${total()}</h1>
                <h2>Subtotal</h2>
            </div>
            </div>
            <div className="ci3">
            <button onClick={handleClick} className="shopping">Continue shopping</button>
            <button className="checkout">Proceed to checkout</button>
            </div>
            <div className="cart-items">
                {
                Object.values(items).map(item => <CartItem 
                    key={item.id} 
                    item={findProduct(item.productId)}
                    count={item.count}
                    color={item.color}
                    />)
                }
            </div>
        </div>
    )

}

export default Cart;