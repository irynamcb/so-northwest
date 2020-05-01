import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Counter from '../counter/counter';
import {addToCart , removeFromCart} from './cart_slice';

function CartItem(props) {

    let dispatch = useDispatch();

    const {item, count, color, size, itemId} = props;

    const [itemCount, setItemCount] = useState(count);

    function onCountChange(val) {
        // itemCount - old value
        // val - new value

        if (itemCount < val) {
            dispatch(addToCart({ id: itemId, count: val - itemCount }))
        } else {
            dispatch(removeFromCart({ id: itemId, count: itemCount - val }))
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
                <button className="remove-item">Remove</button>
            </div>
            <div className="cart-details">
                <Counter val={itemCount} callback={onCountChange}/>
                {/* <h4>{count}</h4> */}
                <h5>${item.price.toFixed(2)}</h5>
                <h6>${(count * item.price).toFixed(2)}</h6>
            </div>
        </div>
    )
}

export default CartItem;