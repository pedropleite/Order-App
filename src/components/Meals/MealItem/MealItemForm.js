import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';
import { useRef } from 'react';

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            alert('Please enter a valid amount (1-5)');
        } else {
            console.log('kkkk');
            props.onAddToCart(enteredAmountNumber);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{ id: 'amount_' + props.id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;
