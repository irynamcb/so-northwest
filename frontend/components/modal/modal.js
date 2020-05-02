import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { closeModal } from './modal_slice';


function Modal() {

    let dispatch = useDispatch;
    
    const { modal } = useSelector(state => {

        return {
            modal: state.modal.modal
        }
    });

    if (!modal) {
        return null;
    }

    let text;
    switch (modal) {
        case 'addToCart':
            text = "Added to cart";
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" >
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <h1>{text}</h1>
            </div>
        </div>
    );
}


export default Modal;