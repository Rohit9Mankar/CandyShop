import { useState } from 'react';
import CartProvider from './store/CartProvider';
import './App.css';
import CandyForm from './Components/CandyForm/CandyForm';
import Products from './Components/ProductList/Products';
import Heading from './Components/Heading/Heading';
import Cart from './Components/Cart/Cart';

function App() {
const [cartVisibility,setCartVisibility]=useState(false);

const cartOpenHandler=(event)=>{
  event.preventDefault();
  setCartVisibility(true);
};

const cartCloseHandler=(event)=>{
  event.preventDefault();
  setCartVisibility(false);
}


  return (
    <CartProvider>
      <div className="App">
        {cartVisibility && <Cart onClose={cartCloseHandler} />}
        <Heading onOpen={cartOpenHandler}/>
        <CandyForm />
        <Products/>
      </div>
    </CartProvider>

  );
}

export default App;
