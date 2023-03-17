import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import ProductItem from "./ProductItem";

const Products=()=>{
const cartCtx=useContext(CartContext);

const productsList=cartCtx.menuItems.map((item)=>(
    <ProductItem 
    style={{padding:"25px"}}
    name={item.name}
    description={item.description}
    price={item.price}/>
))

return(
    <React.Fragment>
        {productsList}
    </React.Fragment>
)
}
export default Products;