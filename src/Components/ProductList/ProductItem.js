import React, { useContext } from "react";
import CartContext from "../../store/CartContext";


const ProductItem = (props) => {
    const cartCtx=useContext(CartContext);

    const cartAdder = async (quant) => {

        const toBeAddedItem = {
            name: props.name,
            description: props.description,
            price: props.price,
            quantity: quant
        };

        const response=await fetch('https://crudcrud.com/api/43e61d3032a6408a9a26e65bc9d3bc86/cart');
        if(!response.ok){
            alert("something went wrong")
        }
        const data=await response.json();

        const index=data.findIndex((ele)=>ele.name===toBeAddedItem.name);
        
        

        if (index >= 0) {
            const indexItem=data[index];
            const newQuant=Number(indexItem.quantity);
            const newId = indexItem._id;
            const updatedItem = { ...toBeAddedItem, quantity: newQuant + quant };
            fetch(`https://crudcrud.com/api/43e61d3032a6408a9a26e65bc9d3bc86/cart/${newId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItem)

            }).then((res) => {
                if (!res.ok) {
                   alert("something went wrong");
                }
                else{
                    
                }console.log(res.status);
            })

        }
        else{
            fetch('https://crudcrud.com/api/43e61d3032a6408a9a26e65bc9d3bc86/cart', {
                method: 'POST',
                body: JSON.stringify(toBeAddedItem),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res)=>{
                if(res.ok){
                    console.log(res.status);
                }
                else{
                    alert("asomething went wrong");
                }
            })
        }
      cartCtx.addToCart();
    };

    const addOneHandler=(event)=>{
        event.preventDefault();
        cartAdder(1);
    };

    const addTwoHandler=(event)=>{
        event.preventDefault();
        cartAdder(2);
    };

    const addThreeHandler=(event)=>{
        event.preventDefault();
        cartAdder(3);
    };

    return (
        <div style={{display:"flex"}}>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.price}</div>
            <div>
                <button onClick={addOneHandler} >Buy 1 </button>
                <button onClick={addTwoHandler}>Buy 2 </button>
                <button onClick={addThreeHandler}>Buy 3</button>

            </div>
        </div>
    )
}

export default ProductItem;