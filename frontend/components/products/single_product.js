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
        <p><Link to={`/products/${product.id}`}>{product.description}</Link></p>
        <p>{product.details}</p>
        <p>{product.price}</p>
    </div>
)
}

export default SingleProduct;