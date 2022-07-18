import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

const CartContext = (props) => {

    const [cartList, setCartList] = useState([]);

    return (
        <ShoppingCartContext.Provider value={[cartList, setCartList]}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
};

export default CartContext;