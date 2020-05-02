import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { closeModal } from './modal_slice';


function Modal() {

    let dispatch = useDispatch;
    
    const { modal } = useSelector(state => {

        return {
            modal: state.modal
        }
    });

    if (!modal) {
        return null;
    }

    return (
        <div className="modal-background" onClick={() => dispatch(closeModal)}>X
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <h1>Added to cart</h1>
            </div>
        </div>
    );
}


export default Modal;