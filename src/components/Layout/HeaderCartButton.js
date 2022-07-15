import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton = (props) => {
    const [btnClass, setBtnClass] = useState(false);
    const cartCTX = useContext(CartContext);

    const numberOfCartItems = cartCTX.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    useEffect(() => {
        setBtnClass((previousState) => {
            return !previousState;
        });

        const timer = setTimeout(() => {
            setBtnClass((previousState) => {
                return !previousState;
            });
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [numberOfCartItems]);

    return (
        <>
            <button className={`${classes.button} ${btnClass && classes.bump}`} onClick={props.toggleModal}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
            <div className={classes.containerLogout}>
                <span>{props.currentUser}</span>
                <button className={`${classes.button} ${btnClass && classes.bump}`} onClick={props.logout}>
                    Logout
                </button>
            </div>
        </>
    );
};

export default HeaderCartButton;
