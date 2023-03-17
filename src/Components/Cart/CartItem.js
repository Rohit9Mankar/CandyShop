import React from "react";

const CartItem=(props)=>{
  
return (
    <div style={{display:"flex"}}>
        <div> {props.name} </div>
        <div> {props.description} </div>
        <div> {props.quantity} </div>
        <div> ${props.price} </div>
    </div>
)
}
export default CartItem;