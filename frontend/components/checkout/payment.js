import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import PaymentForm from './payment_form';


function Payment(props) {

    let history = useHistory();

    function handleContinue() {
        event.preventDefault();
        history.push(`/`)
    }
    return (
        <div className="payment-screen">
            <div className="payment-form">
                <PaymentForm />
                <div className="next">
                    <h1>Next...</h1>
                    <button className="continue" onClick={handleContinue}>Continue</button>
                </div>
            </div>

        </div>
    )
}

export default Payment;