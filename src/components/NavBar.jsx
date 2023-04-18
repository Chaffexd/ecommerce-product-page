import React, { useState, useContext } from 'react';
import CartContext from '../context/cart-context';

import classes from './NavBar.module.css';
import logo from '../../public/images/logo.svg';
import cart from '../../public/images/icon-cart.svg';
import customer from '../../public/images/image-avatar.png';
import Cart from './Cart';

const navItems = [
    {
        title: "Collections",
        id: 1
    },
    {
        title: "Men",
        id: 2
    },
    {
        title: "Women",
        id: 3
    },
    {
        title: "About",
        id: 4,
    },
    {
        title: "Contact",
        id: 5
    }
];

const NavBar = (props) => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const showCartHandler = () => {
        setCartIsShown(prevState => !prevState)
    };
 
    return (
        <>
            <div className={classes.navItems}>
                <img className={classes.logoImg} src={logo} alt="logo" />
                <ul>
                    {navItems.map(navItem => 
                        <li key={navItem.id}>
                            {navItem.title}
                        </li>    
                    )}
                </ul>
            </div>
            <div className={classes.profile}>
                <img className={classes.cart} src={cart} alt="shopping cart" onClick={showCartHandler} />
                <span className={classes.quantity}>{numberOfCartItems}</span>
                {cartIsShown && <Cart />}
                <img className={classes.avatar} src={customer} alt="customer photo" />
            </div>
        </>
    )
};

export default NavBar;