import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/CartContext';

const MealItem = (props) => {
    const cartCTX = useContext(CartContext);

    const price = `$${props.price}`;

    const onAddToCartHandler = (amount) => {
        const item = { id: props.id, name: props.name, amount: amount, price: props.price };
        cartCTX.addItem(item);
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={onAddToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
