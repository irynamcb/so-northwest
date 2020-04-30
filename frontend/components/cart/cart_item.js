import React from "react";
import { Link, useHistory } from "react-router-dom";


function CartItem(props) {

    const {item} = props;
    let history = useHistory();


    // if (props === undefined) {
    //     return (<div></div>)
    // }

    return (
        <div className="">
            {/* <div className="">
                <img src={item.photoUrl} />
            </div>
            <h1><Link to={`/products/${item.id}`}>{item.description}</Link></h1>
            <h2><Link to={`/products/${item.id}`}>{item.details}</Link></h2>
            <h3>{item.color}<h3>
            <h3>{item.size}</h3>
            <h4>{item.quantity}</h4>
            <h5>${item.price}.00</h5>
            <button>Remove</button>*/}
            {item.color}
            {item.count}
        </div>
    )
}

export default CartItem;