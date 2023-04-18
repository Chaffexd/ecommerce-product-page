import React, { useState } from 'react';

import './App.css'
import NavBar from './components/NavBar'
import Product from './components/Product'
import CartProvider from './context/CartProvider';

function App() {
  
  return (
    <CartProvider>
      <div className="App">
        <header>
          <NavBar  />
        </header>
        <main>
          <Product 
          />
        </main>
      </div>
    </CartProvider>
  )
};

export default App;
