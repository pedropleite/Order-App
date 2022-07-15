import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import Paths from './routes';
import CartProvider from './store/CartProvider';

function App() {
    const [showModal, setShowModal] = useState(true);

    const toggleModal = (props) => {
        setShowModal((previousState) => !previousState);
    };

    return (
        <CartProvider>
            {!showModal && <Cart toggleModal={toggleModal} />}
            <Header toggleModal={toggleModal} />
            <Paths />
        </CartProvider>
    );
}

export default App;
