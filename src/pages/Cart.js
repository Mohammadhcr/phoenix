import React, { useContext } from 'react';
import styles from '../components/Cart.module.scss';
import { ShoppingCartContext } from '../context/CartContext';
import CartItems from '../components/CartItems';

const Cart = (props) => {

    const {total, cart, cartTitle, cartItems, demo, checkout, emptyCart} = styles;
    
    const [cartList, setCartList] = useContext(ShoppingCartContext);

    const totalPrice = cartList.reduce((prevValue, currValue) => {
        return prevValue + currValue.price;
    }, 0)

    return (
        <div className={total}>
            {cartList.length ? 
                <> <div className={demo}>
                        <h3>Demo Version</h3>
                    </div>
                    <div className={cart}>
                        <div className={cartTitle}><h2>Your Cart:</h2></div>
                        <div className={cartItems}>
                            {cartList.map(item =>
                                <CartItems key={item.id} id={item.id} album={item.album} artist={item.artist} price={item.price} artwork={item.artwork} />
                            )}
                        </div>
                    </div>
                    <div className={checkout}>
                        <div>
                            <h3>Items in Cart: {cartList.length}</h3>
                            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                        </div>
                        <button><i className='bx bx-cart'></i> Checkout</button>
                    </div> </> :
                <div className={emptyCart}>
                    <h2>Your Cart is Empty!</h2>
                </div>
            }
        </div>
    );
};

export default Cart;