import React, { useState } from 'react';

import cart from '../../public/images/icon-cart.svg';
import classes from './Product.module.css';

const Product = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
        return;
    };


    return (
        <>
            <div className={classes.productImage}>Product Image</div>
            <div className={classes.productInfo}>
                <div>
                    <p className={classes.sneakerCompany}>SNEAKER COMPANY</p>
                    <h1 className={classes.sneakerTitle}>Fall Limited Edition Sneakers</h1>
                    <p className={classes.sneakerText}>These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything
                        the weather can offer.
                    </p>
                </div>
                <div>
                    <div className={classes.prices}>
                        <p className={classes.cost}>$125.00</p>
                        <span>50%</span>
                    </div>
                    <p className={classes.totalPrice}>$250.00</p>
                </div>
                <div className={classes.sneakerAmountContainer}>
                    <div className={classes.cartDiv}>
                        <button className={classes.button} onClick={handleDecrement}>-</button>
                        <span className={classes.quantity}>{quantity}</span>
                        <button className={classes.button} onClick={handleIncrement}>+</button>
                    </div>
                    <div className={classes.addToCartDiv}>
                        <button><img src={cart} />Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;