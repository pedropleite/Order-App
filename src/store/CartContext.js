import React from 'react';

export default React.createContext({
    items: [],
    totalAmount: 0,
    addItems: (item) => {},
    removeItem: (id) => {},
    handleLogin: () => {},
});
