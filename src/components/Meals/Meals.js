import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import ErrorPage from './ErrorPage';
import { useState, useEffect } from 'react';
import { auth } from '../../firebase-config';

const Meals = () => {
    const [loginIsValid, setLoginIsValid] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLoginIsValid(true);
            } else {
                setLoginIsValid(false);
            }
        });
    }, [auth.currentUser]);

    return (
        <>
            {loginIsValid && <MealsSummary />}
            {loginIsValid && <AvailableMeals />}
            {!loginIsValid && <ErrorPage />}
        </>
    );
};

export default Meals;
