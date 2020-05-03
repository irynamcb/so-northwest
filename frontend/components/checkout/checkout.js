import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import AddressForm from './address_form';


function Checkout(props) {

    let history = useHistory();

    function handleContinue() {
        event.preventDefault();
        history.push(`/checkout/order-summary`)
    }
    return (
        <div className="checkout-screen">
            <div className="address-form">
                <AddressForm />
            <div className="next">
                <h1>Next, review your oder and add payment</h1>
                <button className="continue" onClick={handleContinue}>Continue</button>
            </div>
            </div>
           
        </div>
    )
}

export default Checkout;