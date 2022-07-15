import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCTX = useContext(CartContext);

    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

    const addHandler = (item) => {
        cartCTX.addItems({ ...item, amount: 1 });
    };

    const removeHandler = (id) => {
        cartCTX.removeItem(id);
    };

    return (
        <Modal toggleModal={props.toggleModal}>
            {
                <ul className={classes['cart-items']}>
                    {cartCTX.items.map((item) => (
                        <CartItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                            onRemove={() => {
                                removeHandler(item.id);
                            }}
                            onAdd={() => {
                                addHandler(item);
                            }}
                        >
                            {item.name}
                        </CartItem>
                    ))}
                </ul>
            }
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.toggleModal}>
                    Close
                </button>
                {cartCTX.items.length > 0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
