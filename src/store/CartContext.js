import React from "react";

const CartContext = React.createContext({
    menuItems: [],
    cartItem:[],
    addToCart:()=>{},
    addItem: () => {},
    total:0,
})
export default CartContext;