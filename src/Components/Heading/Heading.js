import React from "react";


const Heading=(props)=>{
    
   
    return(
        <div style={{display:"flex",width:"100%"}}>
        <h2>Candy Shop</h2>
        <button style={{float:"right"}} onClick={props.onOpen}>Cart</button>
    </div>
    )
   
}

export default Heading;