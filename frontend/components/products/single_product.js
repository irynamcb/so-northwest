import React from "react";
import {Link, useHistory} from "react-router-dom";


function SingleProduct(props) {

const product = props.product
let history = useHistory();

function handleClick(e) {
    e.preventDefault();
    history.push(`/products/${product.id}`)
}

if (props === undefined) {
    return (<div></div>)
}

return (
    <div className="single-product" onClick={handleClick}>
        <div className="image">
            <img src={product.photoUrl} />
        </div>
        <div className="image">
            <p>Multiple colors availiable</p>
            <h1><Link to={`/products/${product.id}`}>{product.description}</Link></h1>
            <h2>{product.details}</h2>
            <h3>${product.price}.00</h3>
        </div>
    </div>
)
}

export default SingleProduct;