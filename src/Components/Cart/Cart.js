import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const productsInCart = cartCtx.cartItem.map((element) => (
        <CartItem
            key={element._id}
            name={element.name}
            description={element.description}
            price={element.price}
            quantity={element.quantity} />
    )
    );
    let tempPrice = 0;
   cartCtx.cartItem.forEach((element) => {
        tempPrice += Number(element.quantity) * Number(element.price);
    });

    return (
        <Modal>
            <button onClick={props.onClose}>X</button>
            {productsInCart}
            <div>
                <h4>Total</h4>
                <h4>{tempPrice}</h4>
            </div>

        </Modal>
    )
}
export default Cart;