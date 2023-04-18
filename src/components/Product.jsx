import React, { useContext, useState } from 'react';
import CartContext from '../context/cart-context';

import cart from '../../public/images/icon-cart.svg';
import classes from './Product.module.css';

const PRODUCT = [
    {
        id: "p1",
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250,
        salePrice: 125
    }
];

const Product = (props) => {
    const cartContext = useContext(CartContext);
    console.log(cartContext);

    const [amount, setAmount] = useState(1);

    const handleIncrement = () => {
        setAmount(amount + 1)
    };

    const handleDecrement = () => {
        if(amount <= 1) {
            return;
        } else {
            setAmount(amount - 1)
        }
    };

    const addToCartHandler = (product, amount) => {
        cartContext.addItem({
            id: product.id,
            name: product.name,
            amount: amount,
            price: product.salePrice
        });
        cartContext.isAdding = true;
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        
        const enteredQuantity = amount;
        console.log(enteredQuantity);


        addToCartHandler(PRODUCT[0], enteredQuantity);
    };

    return (
        <>
            <div className={classes.productImage}>Product Image</div>
            <div className={classes.productInfo}>
                <p className={classes.sneakerCompany}>SNEAKER COMPANY</p>
                <ul>
                {PRODUCT.map(products => 
                    <li key={products.id} className={classes.productLi}>
                        <div>
                            <h1 className={classes.sneakerTitle}>{products.name}</h1>
                            <p className={classes.sneakerText}>{products.description}</p>
                        </div>
                        <div>
                        <div className={classes.prices}>
                            <p className={classes.cost}>${products.salePrice.toFixed(2)}</p>
                            <span>50%</span>
                        </div>
                        <p className={classes.totalPrice}>${products.price.toFixed(2)}</p>
                    </div>
                    </li>
                )}
                </ul>
                <div className={classes.sneakerAmountContainer}>
                    <form onSubmit={formSubmissionHandler}>
                        <div>
                            <button className={classes.button} onClick={handleDecrement}>-</button>
                            <span className={classes.quantity}>{amount}</span>
                            <button className={classes.button} onClick={handleIncrement}>+</button>
                        </div>
                        <button src={cart} type="submit">Add to cart</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Product;