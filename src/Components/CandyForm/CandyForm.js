import React, { useContext, useRef } from "react";
import CartContext from "../../store/CartContext";

const CandyForm = () => {
    const cartCtx=useContext(CartContext);

   const candyInputRef=useRef();
   const descripInputRef=useRef();
   const priceInputRef=useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();
        const candyName=candyInputRef.current.value;
        const candyDescrip=descripInputRef.current.value;
        const candyPrice=priceInputRef.current.value;

   const productToBeadded={
     name: candyName,
     description : candyDescrip,
     price : candyPrice,
     quantity:0
   };
   fetch('https://crudcrud.com/api/43e61d3032a6408a9a26e65bc9d3bc86/products',
       {
                    method: 'POST',
                    body: JSON.stringify(productToBeadded),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                .then((res)=>{
                    if(res.ok){
                        cartCtx.addItem(productToBeadded);
                        console.log(res.status)
                    }
                    else{
                        console.log("some error occured")
                    }
                })
       
    };

    return (
        <form onSubmit={submitFormHandler} style={{ display: "flex" }}>
            <div>
                <label>Candy name</label>
                <input id="shirtName" type="text" ref={candyInputRef}></input>
            </div>

            <div>
                <label>Description</label>
                <input id="shirtDescr" type="text" ref={descripInputRef}></input>
            </div>

            <div>
                <label>price</label>
                <input id="shirtPrice" type="number" ref={priceInputRef}></input>
            </div>

           


            <button type="submit">Add Product</button>
        </form>
    )
};
export default CandyForm;