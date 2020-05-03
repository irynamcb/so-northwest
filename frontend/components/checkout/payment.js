import React from "react";
import { useHistory } from "react-router-dom";
import PaymentForm from './payment_form';


function Payment() {

    let history = useHistory();

    function handleContinue() {
        event.preventDefault();
        // need to change later
        history.push(`/`)
    }
    return (
        <div className="payment-screen">
            <div className="payment-form">
                <PaymentForm />
                <div className="next">
                    <h1>Next, submit your order, you won't be charged yet</h1>
                    <button className="continue" onClick={handleContinue}>Continue</button>
                </div>
            </div>

        </div>
    )
}

export default Payment;