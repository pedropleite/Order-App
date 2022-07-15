import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import MealsImage from '../../assets/meals.jpg';
import { auth } from '../../firebase-config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const [loginIsValid, setLoginIsValid] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLoginIsValid(true);
                setCurrentUser(auth.currentUser.email);
            } else {
                setLoginIsValid(false);
            }
        });
    }, [auth.currentUser]);

    const logout = () => {
        auth.signOut();
        navigate('/');
    };

    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>

                {loginIsValid && <HeaderCartButton logout={logout} currentUser={currentUser} toggleModal={props.toggleModal} />}
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} />
            </div>
        </>
    );
};

export default Header;
