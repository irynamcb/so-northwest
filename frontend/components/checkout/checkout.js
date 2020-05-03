import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import AddressForm from './address_form';


function Checkout(props) {

    let dispatch = useDispatch();


    return (
        <div className="checkout">
            <AddressForm />
        </div>
    )
}

export default Checkout;