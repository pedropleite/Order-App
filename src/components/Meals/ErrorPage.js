import classes from './ErrorPage.module.css';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.container}>
            <div className={classes.containerModal}>
                <span>Please go back to the login page and do so in order to request.</span>
                <button onClick={() => navigate('/')}>Back to Login Page</button>
            </div>
        </div>
    );
};

export default ErrorPage;
