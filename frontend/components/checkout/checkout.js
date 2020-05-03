import React from "react";
import { useHistory } from "react-router-dom";
import AddressForm from './address_form';


function Checkout() {

    let history = useHistory();

    function handleContinue(event) {
        event.preventDefault();
        if (event.currentTarget.form.reportValidity()) {
            history.push(`/checkout/order-summary`)
        }
    }
    
    return (
        <div className="checkout-screen">
            <form>
            <div className="address-form">
                <AddressForm />
            </div>     
            <div className="next">
                <h1>Next, review your oder and add payment</h1>
                <button className="continue" onClick={handleContinue}>Continue</button>
            </div>
            </form>
        </div>
    )
}

export default Checkout;