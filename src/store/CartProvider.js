import CartContext from './CartContext';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            const existingCartItem = state.items.find((item) => item.id === action.item.id);
            let updatedItems = null;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                };
                updatedItems = state.items.map((item) => {
                    if (item.id === updatedItem.id) {
                        return updatedItem;
                    }
                    return item;
                });
            } else {
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };
        case 'REMOVE_ITEM':
            let updatedItems2 = state.items;

            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount2 = state.totalAmount - existingItem.price;

            if (existingItem.amount > 1) {
                const updatedItem2 = {
                    ...existingItem,
                    amount: existingItem.amount - 1,
                };

                updatedItems2[existingCartItemIndex] = updatedItem2;
            } else {
                updatedItems2.splice(existingCartItemIndex, 1);
            }
            return {
                items: updatedItems2,
                totalAmount: updatedTotalAmount2,
            };
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const addItems = (item) => {
        cartDispatch({ type: 'ADD_ITEM', item: item });
    };

    const removeItem = (id) => {
        cartDispatch({ type: 'REMOVE_ITEM', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: addItems,
        removeItem: removeItem,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
