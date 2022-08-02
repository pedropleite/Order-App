import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <>
            <div className={classes.backdrop} onClick={props.toggleModal}></div>
            <div className={classes.modal}>
                <div className={classes.content}>{props.children}</div>
            </div>
        </>,
        document.querySelector('#overlays')
    );
};

export default Modal;
