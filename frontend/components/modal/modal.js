import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { closeModal } from './modal_slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';


function Modal() {

    let dispatch = useDispatch();
    const icon = <FontAwesomeIcon icon={faCheckCircle} size="1x" pull="left" inverse transform="shrink-4" style={{color: 'green'}}/>
    const close = <FontAwesomeIcon icon={faTimesCircle} size="2x" pull="right" inverse transform="shrink-4" style={{ color: 'green' }}/>
    
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
            <div onClick={() => dispatch(closeModal())}>{close}</div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <h1>{icon} {text}</h1>
                
            </div>
        </div>
    );
}


export default Modal;