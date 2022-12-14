import classes from './RegisterForm.module.css';
import useInput from '../../hooks/useInput';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const emailVality = (value) => /\S+@\S+\.\S+/.test(value);
const passwordVality = (value) => value.length >= 6 && value.trim() !== '';

const RegisterForm = (props) => {
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(emailVality);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(passwordVality);

    let formIsValid = false;
    if (emailIsValid && passwordIsValid) {
        formIsValid = true;
    }

    const SubmitForm = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(() => {
                console.log('created user');
            })
            .catch((error) => console.log(error));

        resetEmail();
        resetPassword();
    };

    const emailClasses = emailHasError ? classes.invalid : '';
    const passwordClasses = passwordHasError ? classes.invalid : '';

    return (
        <form className={classes.container}>
            <span>REGISTER</span>
            <div className={classes.containerLogin}>
                <div>
                    <input
                        type="email"
                        placeholder={'E-mail'}
                        id="email"
                        value={emailValue}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        className={`${classes.inputForm} ${emailClasses}`}
                    />
                    {emailHasError && <p className={classes.errorText}>Please enter a valid email.</p>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder={'Password'}
                        id="password"
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                        onBlur={passwordBlurHandler}
                        className={`${classes.inputForm} ${passwordClasses}`}
                    />
                    {passwordHasError && <p className={classes.errorText}>Please enter a valid password.</p>}
                </div>
            </div>
            <div className={classes.containerButton}>
                <button onClick={() => props.handleForm()}>Login</button>
                <button disabled={!formIsValid} onClick={SubmitForm}>
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
