import { useEffect, useState, useContext } from 'react';
import { auth } from '../../firebase-config';
import classes from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/order');
            }
        });
    }, [auth.currentUser]);

    const [willLogin, setWillLogin] = useState(true);

    const handleForm = () => {
        setWillLogin((prevState) => !prevState);
    };

    return (
        <main className={classes.main}>
            {willLogin && <LoginForm handleForm={handleForm} />}
            {!willLogin && <RegisterForm handleForm={handleForm} />}
        </main>
    );
};

export default Login;
