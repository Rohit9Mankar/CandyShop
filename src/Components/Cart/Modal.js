import React from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';


const BackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
};
const CartModal = (props) => {

    return (

        <div className={classes.modal} >
            <div>{props.children}</div>
        </div>
    )
};

const modalElement=document.getElementById("cart-modal");
const Modal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,modalElement)}
            {ReactDOM.createPortal(<CartModal >{props.children}</CartModal>,modalElement)}
        </React.Fragment>
    )
};
export default Modal;