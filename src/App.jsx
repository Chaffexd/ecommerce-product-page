import React, { useState } from 'react';

import './App.css'
import NavBar from './components/NavBar'
import Product from './components/Product'
import CartProvider from './context/CartProvider';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleIncrement = () => {
      setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
      if(quantity > 0) {
          setQuantity(quantity - 1);
      }
      return;
  };
  
  const addToCartHandler = () => {
      const item = {
          id: 1,
          name: 'Fall Limited Edition Sneakers',
          price: 125.00,
          quantity: quantity
      };
      setCartItems([...cartItems, item]);
  };

  console.log(cartItems);

  return (
    <CartProvider>
      <div className="App">
        <header>
          <NavBar cartItems={cartItems} quantity={quantity} />
        </header>
        <main>
          <Product 
            handleIncrement={handleIncrement} 
            handleDecrement={handleDecrement} 
            addToCartHandler={addToCartHandler}
            quantity={quantity}
          />
        </main>
      </div>
    </CartProvider>
  )
};

export default App;
