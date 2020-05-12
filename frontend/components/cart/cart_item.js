import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Counter from '../counter/counter';
import {addToCart , removeFromCart, remove} from './cart_slice';

function CartItem(props) {

    let dispatch = useDispatch();

    const { item, count, color, size, cartItemId } = props;

    const [itemCount, setItemCount] = useState(count);

    function onCountChange(val) {
        // itemCount - old value
        // val - new value

        if (itemCount < val) {
            dispatch(addToCart({ id: cartItemId, count: val - itemCount }))
        } else {
            dispatch(removeFromCart({ id: cartItemId, count: itemCount - val }))
        }
        setItemCount(val)
    }
// debugger
    return (
        <div className="cart-item">
            <div className="cart-image">
                <img src={item.photoUrl} />
            </div>
            <div className="cart-info">
                <h1><Link to={`/products/${item.id}`}>{item.description}</Link></h1>
                <h2><Link to={`/products/${item.id}`}>{item.details}</Link></h2>
                <h2>{color.toUpperCase()}</h2>
                <h2>{size.toUpperCase()}</h2>
                <button className="remove-item" onClick={() => dispatch(remove({ id: cartItemId}))}>Remove</button>
            </div>
            <div className="cart-details">
                <Counter val={itemCount} callback={onCountChange}/>
                <h5>${item.price.toFixed(2)}</h5>
                <h5>${(itemCount * item.price).toFixed(2)}</h5>
            </div>
        </div>
    )
}

export default CartItem;