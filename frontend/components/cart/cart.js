import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import CartItem from './cart_item';
import { fetchCart } from './cart_slice';



function Cart() {
    
    let history = useHistory();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const { items, products, sizes, colors, skus } = useSelector(state => {

        return {
            items: state.entities.cart.items,
            products: state.entities.products.products,
            sizes: state.entities.products.sizes,
            colors: state.entities.products.colors,
            skus: state.entities.products.skus
        }
    });

    function handleClick(e) {
        e.preventDefault();
        history.push(`/`)
    }

    function handleProceed() {
        event.preventDefault();
        history.push(`/checkout`)
    }

    function total() {
        // debugger
        let sum = 0;
        Object.values(items).forEach(item => {
            sum += products[skus[item.skuId]?.productId]?.price * item.count;
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
                <h1>${total().toFixed(2)}</h1>
                <h2>Subtotal</h2>
            </div>
            </div>
            <div className="ci3">
                <button onClick={handleClick} className="shopping">Continue shopping</button>
                <button onClick={handleProceed} disabled={(numItems === 0)} className={(numItems === 0) ? 'dis' : 'checkout'}>Proceed to checkout</button>
            </div>
            <div className="cart-items">
                {
                Object.values(items).map(item => <CartItem 
                    key={item.id}
                    cartItemId={item.id} 
                    item={products[skus[item.skuId]?.productId]}
                    size={sizes[skus[item.skuId]?.sizeId]?.size}
                    count={item.count}
                    color={colors[skus[item.skuId]?.colorId]?.color}
                    />)
                }
            </div>
            <div className="total-table">
                <table>
                    <tbody>
                    <tr className="tr2">
                        <td>Subtotal</td>
                        <td>${total().toFixed(2)}</td>
                    </tr>
                    <tr className="tr1">
                        <td>Standart shipping</td>
                        <td>FREE</td>
                    </tr>
                    <tr className="tr1">
                        <td>Estimated taxes</td>
                        <td>10%</td>
                    </tr>
                    <tr className="tr2">
                        <td>Order total</td>
                        <td>${(total()*1.1).toFixed(2)}</td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={handleProceed} disabled={(numItems === 0)} className={(numItems === 0) ? 'dis' : 'checkout'}>Proceed to checkout</button>
            </div>
        </div>
    )

}

export default Cart;