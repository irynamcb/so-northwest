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

    const { items, products, sizes } = useSelector(state => {

        return {
            items: state.entities.cart.items,
            products: state.entities.products.products,
            sizes: state.entities.products.sizes,
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

    function findProduct(index) {
        return products.find(p => p.id === index)
    }

    function findPrice(index) {
        return findProduct(index).price
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
                    itemId={item.id} 
                    item={findProduct(item.productId)}
                    size={sizes[item.sizeId].size}
                    count={item.count}
                    color={item.color}
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