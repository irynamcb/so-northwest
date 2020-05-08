import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from './modal_slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import useOutsideClick from '../counter/outside_click';


function Modal() {

    let ref = useRef();
    let dispatch = useDispatch();
    const icon = <FontAwesomeIcon icon={faCheckCircle} size="1x" pull="left" inverse transform="shrink-4" style={{color: 'green'}}/>
    const close = <FontAwesomeIcon icon={faTimesCircle} size="2x" pull="right" inverse transform="shrink-4" style={{ color: 'green' }}/>
    
    const { modal } = useSelector(state => {
        return {
            modal: state.modal.modal
        }
    });
    
    useOutsideClick(ref, () => {
        if (modal) {
        dispatch(closeModal());
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
        case 'outOfStock':
            text = "Item is out of stock!";
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" ref={ref}>
            <div onClick={() => dispatch(closeModal())}>{close}</div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <h1>{icon} {text}</h1>
                
            </div>
        </div>
    );
}


export default Modal;