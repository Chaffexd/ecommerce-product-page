import React from 'react';
import classes from './Cart.module.css';

const Cart = () => {
    const cartItems = 
    <ul>{[{id: "c1", name: "Sneaker", amount: 2, price: 125}].map(item => 
        <li>{item.name}</li>
    )}</ul>;

    return (
        <div className={classes.background}>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>22.22</span>
            </div>
        </div>
    );
};

export default Cart;