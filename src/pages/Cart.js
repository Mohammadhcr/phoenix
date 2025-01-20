import React, { useContext } from 'react';

import styles from '../styles/Cart.module.scss';
import CartItems from '../components/CartItems';
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {total, cart, cartTitle, cartItems, checkout, emptyCart, checkoutBTN, clearBTN, BTNs, stateInfo} = styles;

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={total}>
            {state.itemsCounter ? 
                <> 
                    <div className={cart}>
                        <div className={cartTitle}><h2>Your Cart:</h2></div>
                        <div className={cartItems}>
                            {state.selectedItems.map(item =>
                                <CartItems key={item.id} id={item.id} album={item.album} artist={item.artist} price={item.price} artwork={item.artwork} />
                            )}
                        </div>
                    </div>
                    <div className={checkout}>
                        <div className={stateInfo}>
                            <h3>Items in Cart: {state.itemsCounter}</h3>
                            <h3>Total Price: ${state.total}</h3>
                        </div>
                        <div className={BTNs}>
                            <button className={clearBTN} onClick={() => dispatch({type: "CLEAR"})}><i className='bx bx-trash'></i> Clear</button>
                            <Link to='/checkout'><button className={checkoutBTN} onClick={() => dispatch({type: "CHECKOUT"})}><i className='bx bx-cart'></i> Checkout</button> </Link>
                        </div>
                    </div> </> :
                <div className={emptyCart}>
                    <h2>
                        <i className='bx bx-shopping-bag'></i>
                        <span>Your Cart is Empty!</span>
                    </h2>
                </div>
            }
        </div>
    );
};

export default Cart;