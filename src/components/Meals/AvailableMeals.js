import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import api from '../../services/api';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        api.get('/meals.json')
            .then((response) => {
                const fetchedMeals = [];
                for (const key in response.data) {
                    fetchedMeals.push({
                        ...response.data[key],
                        id: key,
                    });
                    setMeals((prev) => fetchedMeals);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {console.log(meals)}
                    {meals.map((meal) => (
                        <MealItem
                            key={Math.random().toString(36)}
                            id={Math.random().toString(36)}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}
                        />
                    ))}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
