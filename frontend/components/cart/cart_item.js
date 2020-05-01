import React from "react";
import { Link, useHistory } from "react-router-dom";


function CartItem(props) {

    const {item, count, color, size} = props;


    // if (props === undefined) {
    //     return (<div></div>)
    // }

    return (
        <div className="cart-item">
            <div className="cart-image">
                <img src={item.photoUrl} />
            </div>
            <div className="cart-info">
                <h1><Link to={`/products/${item.id}`}>{item.description}</Link></h1>
                <h2><Link to={`/products/${item.id}`}>{item.details}</Link></h2>
                <h2>{color.toUpperCase()}</h2>
                <h2>{size}</h2>
                <button className="remove-item">Remove</button>
            </div>
            <div className="cart-details">
                <h4>{count}</h4>
                <h5>${item.price.toFixed(2)}</h5>
            </div>
        </div>
    )
}

export default CartItem;